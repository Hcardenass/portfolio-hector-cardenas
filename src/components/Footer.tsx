import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">{">"}</span> © {currentYear} Hector
            Cardenas. All rights reserved.
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>and</span>
            <span className="font-mono text-primary">{"<code />"}</span>
          </div>

          <div className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">v1.0.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
