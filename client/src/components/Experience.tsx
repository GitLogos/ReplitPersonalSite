import { motion } from "framer-motion";

const experiences = [
  {
    company: "Tech Corp Inc.",
    role: "Senior Frontend Engineer",
    period: "2023 - Present",
    description: "Leading the migration to a modern React stack. Improved load times by 40% and established a new design system."
  },
  {
    company: "StartupX",
    role: "Full Stack Developer",
    period: "2021 - 2023",
    description: "Built the MVP from scratch using Next.js and Node.js. Scaled the platform to 10k active users."
  },
  {
    company: "Freelance",
    role: "Web Developer",
    period: "2019 - 2021",
    description: "Delivered custom websites and e-commerce solutions for various SMB clients."
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
          <span className="text-primary font-mono text-xl">01.</span> Experience
        </h2>

        <div className="relative border-l border-border ml-3 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="pl-8 md:pl-12 relative group">
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-border group-hover:bg-primary transition-colors" />
              
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                <span className="font-mono text-sm text-primary">{exp.period}</span>
              </div>
              
              <p className="text-lg text-muted-foreground mb-2">{exp.company}</p>
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
