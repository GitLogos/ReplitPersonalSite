import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Server, Cpu, Network, Database } from "lucide-react";
import homelabData from "@/data/homelab.json";

// Type definition for our JSON data
type HomelabItem = {
  id: string;
  name: string;
  hardware: string;
  software: string;
  description: string;
};

// Map icons to potential names for a bit of visual flair (optional enhancement)
const getIcon = (name: string) => {
  const lower = name.toLowerCase();
  if (lower.includes("cluster") || lower.includes("server")) return <Server className="w-6 h-6" />;
  if (lower.includes("network") || lower.includes("gateway")) return <Network className="w-6 h-6" />;
  if (lower.includes("storage") || lower.includes("nas")) return <Database className="w-6 h-6" />;
  return <Cpu className="w-6 h-6" />;
};

export function Homelab() {
  const [data, setData] = useState<HomelabItem[]>([]);

  useEffect(() => {
    // In a real static build, importing directly is fine. 
    // If fetching from public: fetch('/homelab.json')...
    setData(homelabData);
  }, []);

  return (
    <section id="homelab" className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-4">
            <span className="text-primary font-mono text-xl">03.</span> Homelab Setup
          </h2>
          <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono bg-muted px-3 py-1 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            System Status: Operational
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="bg-card border-border hover:border-primary/50 transition-colors h-full">
                <CardHeader className="space-y-4">
                  <div className="p-3 w-fit rounded-lg bg-primary/10 text-primary">
                    {getIcon(item.name)}
                  </div>
                  <CardTitle className="text-lg font-bold">{item.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-sm leading-relaxed">
                    {item.description}
                  </CardDescription>
                  
                  <div className="space-y-2 pt-2 border-t border-border/50">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Hardware:</span>
                      <span className="font-medium text-foreground text-right">{item.hardware}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Software:</span>
                      <Badge variant="outline" className="font-mono text-xs text-primary border-primary/20">
                        {item.software}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
