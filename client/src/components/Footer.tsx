import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer id="contact" className="py-12 bg-muted/20 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-20 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Get In Touch</h2>
        <p className="text-muted-foreground max-w-lg mx-auto mb-8">
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <Button size="lg" className="rounded-full px-8 mb-12">
          <Mail className="mr-2 h-4 w-4" />
          Say Hello
        </Button>

        <div className="flex justify-center gap-6 mb-8 text-muted-foreground">
          <a href="#" className="hover:text-primary hover:-translate-y-1 transition-all duration-300">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-primary hover:-translate-y-1 transition-all duration-300">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-primary hover:-translate-y-1 transition-all duration-300">
            <Twitter className="w-6 h-6" />
          </a>
        </div>

        <p className="font-mono text-xs text-muted-foreground">
          Built with React, Tailwind & Replit.
        </p>
      </div>
    </footer>
  );
}
