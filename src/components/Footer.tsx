import { Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Rethvick Sriram Yugendra Babu. All rights reserved.
          </p>
          
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            Built with <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" /> using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};
