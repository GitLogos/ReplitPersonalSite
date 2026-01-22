import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Cloud Dashboard",
    description: "A comprehensive dashboard for monitoring cloud infrastructure metrics in real-time.",
    tags: ["React", "TypeScript", "Recharts", "AWS"],
    links: { demo: "#", code: "#" }
  },
  {
    title: "E-Commerce API",
    description: "Scalable REST API for a multi-vendor marketplace with payment processing integration.",
    tags: ["Node.js", "Express", "PostgreSQL", "Redis"],
    links: { demo: "#", code: "#" }
  },
  {
    title: "Task Master",
    description: "Collaborative project management tool with real-time updates and drag-and-drop kanban boards.",
    tags: ["Next.js", "Socket.io", "Tailwind"],
    links: { demo: "#", code: "#" }
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-20 max-w-7xl mx-auto bg-muted/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
          <span className="text-primary font-mono text-xl">02.</span> Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors duration-300 group h-full flex flex-col">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <div className="text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-10 h-10"
                    >
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                  <div className="flex gap-4 text-muted-foreground">
                    <a href={project.links.code} className="hover:text-primary transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href={project.links.demo} className="hover:text-primary transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="font-mono text-xs font-normal">
                    {tag}
                  </Badge>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
