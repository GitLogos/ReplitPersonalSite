import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Homelab } from "@/components/Homelab";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <Navigation />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Homelab />
      </main>
      <Footer />
    </div>
  );
}
