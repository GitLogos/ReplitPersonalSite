import { Navigation } from "./src/components/Navigation";
import { Hero } from "./src/components/Hero";
import { Experience } from "./src/components/Experience";
import { Projects } from "./src/components/Projects";
import { Homelab } from "./src/components/Homelab";
import { Footer } from "./src/components/Footer";

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
