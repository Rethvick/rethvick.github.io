import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const SERVICE_ID = "service_uwm0smc";
const TEMPLATE_ID = "template_mtis10u";
const PUBLIC_KEY = "m-RVf3a2RzJlr6Nja";

export const Contact = () => {
    const formRef = useRef<HTMLFormElement | null>(null);
    const [isSending, setIsSending] = useState(false);

    const contactInfo = [
        {
            icon: Mail,
            label: "Email",
            value: "rethvickofficial@gmail.com",
            href: "mailto:rethvickofficial@gmail.com",
        },
        {
            icon: Phone,
            label: "Phone",
            value: "(520) 204-8244",
            href: "tel:+15202048244",
        },
        {
            icon: MapPin,
            label: "Location",
            value: "New Haven, Connecticut",
            href: null,
        },
    ];

    const socialLinks = [
        {
            icon: Github,
            label: "GitHub",
            href: "https://github.com/rethvick",
        },
        {
            icon: Linkedin,
            label: "LinkedIn",
            href: "https://linkedin.com/in/rethvick",
        },
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        setIsSending(true);

        try {
            await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
            toast.success("Thank you! I'll get back to you soon.");
            formRef.current.reset();
        } catch (error) {
            console.error("EmailJS Error:", error);
            toast.error("Something went wrong. Please try again!");
        } finally {
            setIsSending(false);
        }
    };

    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 gradient-full opacity-5"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                            <div className="space-y-4">
                                {contactInfo.map((info, index) => (
                                    <div key={index} className="flex items-center gap-4 group">
                                        <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                            <info.icon className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground">{info.label}</p>
                                            {info.href ? (
                                                <a
                                                    href={info.href}
                                                    className="text-foreground hover:text-primary transition-colors font-medium"
                                                >
                                                    {info.value}
                                                </a>
                                            ) : (
                                                <p className="text-foreground font-medium">{info.value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
                            <div className="flex gap-4">
                                {socialLinks.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-4 glass rounded-xl hover:scale-110 transition-all duration-300 hover:glow-primary group"
                                    >
                                        <link.icon className="w-6 h-6 group-hover:text-primary transition-colors" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="glass rounded-2xl p-8">
                            <h3 className="text-xl font-bold mb-4">Quick Facts</h3>
                            <ul className="space-y-3 text-muted-foreground">
                                <li className="flex gap-2">
                                    <span className="text-primary">▹</span>
                                    Available for full-time opportunities
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-primary">▹</span>
                                    Open to remote and on-site positions
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-primary">▹</span>
                                    Interested in full-stack, ML, and AI roles
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-primary">▹</span>
                                    Response time: Usually within 24 hours
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="glass rounded-2xl p-8">
                        <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="space-y-6"
                        >
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">
                                    Your Name
                                </label>
                                <Input
                                    id="name"
                                    name="from_name"
                                    placeholder="John Doe"
                                    required
                                    className="bg-background/50 border-primary/20 focus:border-primary"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                    Your Email
                                </label>
                                <Input
                                    id="email"
                                    name="reply_to"
                                    type="email"
                                    placeholder="john@example.com"
                                    required
                                    className="bg-background/50 border-primary/20 focus:border-primary"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                                    Subject
                                </label>
                                <Input
                                    id="subject"
                                    name="subject"
                                    placeholder="Project Discussion"
                                    required
                                    className="bg-background/50 border-primary/20 focus:border-primary"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Your Message
                                </label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tell me about your project..."
                                    rows={5}
                                    required
                                    className="bg-background/50 border-primary/20 focus:border-primary resize-none"
                                />
                            </div>

                            <Button
                                type="submit"
                                size="lg"
                                disabled={isSending}
                                className="w-full gradient-primary hover:opacity-90 transition-opacity"
                            >
                                <Send className="w-4 h-4 mr-2" />
                                {isSending ? "Sending..." : "Send Message"}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
