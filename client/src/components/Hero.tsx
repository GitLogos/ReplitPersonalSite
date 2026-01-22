import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Terminal } from "lucide-react";
import { Button } from "./src/components/ui/button";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 max-w-7xl mx-auto relative">
      <div className="absolute top-6 right-6 md:top-10 md:right-10">
        {/* Theme toggle will be placed here by the parent layout or handled globally, 
            but strictly speaking the hero might just be the content. 
            I'll leave the positioning to the main page layout for the toggle. */}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div className="flex items-center space-x-2 text-primary font-mono text-sm tracking-widest uppercase">
          <Terminal className="w-4 h-4" />
          <span>System Online</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
          Hello, I'm <span className="text-primary">Sito</span>.
          <br />
          <span className="text-muted-foreground">Full Stack Engineer.</span>
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
          I build accessible, pixel-perfect, and performant web experiences. 
          Currently tinkering with distributed systems and expanding my homelab.
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <Button size="lg" className="rounded-full px-8 font-medium">
            View Projects
          </Button>
          <Button variant="outline" size="lg" className="rounded-full px-8" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </div>

        <div className="flex gap-4 pt-8 text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
