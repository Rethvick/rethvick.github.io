import { useRef, useEffect, useMemo } from "react";
import * as THREE from "three";

interface ColorBendsProps {
  colors?: string[];
  speed?: number;
  noise?: number;
  rotation?: number;
  scale?: number;
  frequency?: number;
  warpStrength?: number;
  mouseInfluence?: number;
  parallax?: number;
  transparent?: boolean;
}

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  precision highp float;
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uMouse;
  uniform float uNoise;
  uniform float uRotation;
  uniform float uScale;
  uniform float uFrequency;
  uniform float uWarpStrength;
  uniform float uMouseInfluence;
  uniform float uParallax;
  uniform vec3 uColors[7];
  uniform float uSpeed;
  varying vec2 vUv;

  vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
    vec2 i = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
    m = m * m; m = m * m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vec2 uv = vUv;
    vec2 center = vec2(0.5);

    // Mouse parallax
    vec2 mouseOffset = (uMouse - center) * uParallax * 0.1;
    uv += mouseOffset;

    // Rotation
    float angle = uRotation * 3.14159 / 180.0;
    vec2 rotUv = uv - center;
    rotUv = mat2(cos(angle), -sin(angle), sin(angle), cos(angle)) * rotUv;
    rotUv = rotUv * uScale + center;

    // Warp
    float t = uTime * uSpeed;
    float warp = snoise(rotUv * uFrequency + t * 0.5) * uWarpStrength;
    float warp2 = snoise(rotUv * uFrequency * 1.5 - t * 0.3) * uWarpStrength * 0.5;

    // Color bands
    float pattern = rotUv.x + rotUv.y * 0.5 + warp + warp2;
    pattern += snoise(rotUv * uFrequency * 0.5 + t * 0.2) * uNoise;
    pattern += (uMouse.x - 0.5) * uMouseInfluence * 0.3;

    // Map to colors
    float idx = fract(pattern * 0.5 + 0.5) * 6.0;
    int i0 = int(floor(idx));
    int i1 = int(mod(float(i0 + 1), 7.0));
    float f = fract(idx);
    f = f * f * (3.0 - 2.0 * f); // smoothstep

    vec3 c0 = uColors[0]; vec3 c1 = uColors[1]; vec3 c2 = uColors[2];
    vec3 c3 = uColors[3]; vec3 c4 = uColors[4]; vec3 c5 = uColors[5]; vec3 c6 = uColors[6];

    vec3 colorA, colorB;
    if (i0 == 0) colorA = c0; else if (i0 == 1) colorA = c1; else if (i0 == 2) colorA = c2;
    else if (i0 == 3) colorA = c3; else if (i0 == 4) colorA = c4; else if (i0 == 5) colorA = c5; else colorA = c6;
    if (i1 == 0) colorB = c0; else if (i1 == 1) colorB = c1; else if (i1 == 2) colorB = c2;
    else if (i1 == 3) colorB = c3; else if (i1 == 4) colorB = c4; else if (i1 == 5) colorB = c5; else colorB = c6;

    vec3 color = mix(colorA, colorB, f);

    // Brightness boost
    color = pow(color, vec3(0.85));

    gl_FragColor = vec4(color, 1.0);
  }
`;

const ColorBends = ({
  colors = ["#ff3c00", "#ff8800", "#ffdd00", "#00ff88", "#00aaff", "#7c3aed", "#ff44aa"],
  speed = 0.2, noise = 0.05, rotation = 45, scale = 1, frequency = 1,
  warpStrength = 1, mouseInfluence = 1, parallax = 0.5, transparent = false,
}: ColorBendsProps) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  const parsedColors = useMemo(() =>
    colors.map((c) => new THREE.Color(c)), [colors]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ alpha: transparent, antialias: false });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const uniforms: Record<string, THREE.IUniform> = {
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(mount.clientWidth, mount.clientHeight) },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uColors: { value: parsedColors },
      uSpeed: { value: speed },
      uNoise: { value: noise },
      uRotation: { value: rotation },
      uScale: { value: scale },
      uFrequency: { value: frequency },
      uWarpStrength: { value: warpStrength },
      uMouseInfluence: { value: mouseInfluence },
      uParallax: { value: parallax },
    };

    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({ vertexShader, fragmentShader, uniforms });
    scene.add(new THREE.Mesh(geometry, material));

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX / window.innerWidth, y: 1 - e.clientY / window.innerHeight };
    };
    window.addEventListener("mousemove", handleMouse);

    const handleResize = () => {
      if (!mount) return;
      renderer.setSize(mount.clientWidth, mount.clientHeight);
      uniforms.uResolution.value.set(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    let animId: number;
    const clock = new THREE.Clock();
    const animate = () => {
      uniforms.uTime.value = clock.getElapsedTime();
      uniforms.uMouse.value.lerp(new THREE.Vector2(mouseRef.current.x, mouseRef.current.y), 0.05);
      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("resize", handleResize);
      mount.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [parsedColors, speed, noise, rotation, scale, frequency, warpStrength, mouseInfluence, parallax, transparent]);

  return <div ref={mountRef} style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }} />;
};

export default ColorBends;
