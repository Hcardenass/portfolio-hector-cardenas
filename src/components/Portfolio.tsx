import { Brain, Cpu, Database, Layers } from "lucide-react";

const expertiseAreas = [
  {
    icon: Brain,
    title: "Generative AI",
    description: "Building intelligent agents, LLM applications, and conversational AI systems",
  },
  {
    icon: Cpu,
    title: "MLOps",
    description: "End-to-end ML pipelines, model deployment, monitoring, and CI/CD for AI",
  },
  {
    icon: Database,
    title: "RAG Systems",
    description: "Vector databases, embeddings, semantic search, and context-aware retrieval",
  },
  {
    icon: Layers,
    title: "Enterprise Solutions",
    description: "SAP integration, analytics platforms, and scalable business intelligence",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="font-mono text-primary text-sm mb-4">
            {"<portfolio>"}
          </div>
          <h2 className="section-title">
            What I <span className="text-primary">Build</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Specialized in AI-powered solutions, from generative systems to
            enterprise analytics. Building scalable, production-ready applications.
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {expertiseAreas.map((area, index) => (
            <div
              key={area.title}
              className="group bg-card border border-border rounded-xl p-8 card-glow hover:border-primary/50 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <area.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-mono text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        {(() => {
          const stats = [
            { value: "5+", label: "Years Experience" },
            { value: "3", label: "Projects Developed" },
            { value: "∞", label: "Lines of Code" },
          ];
          return (
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center p-6 rounded-xl bg-card border border-border animate-fade-in-up"
                  style={{ animationDelay: `${(index + 4) * 100}ms` }}
                >
                  <div className="font-mono text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          );
        })()}


        <div className="text-center mt-16 font-mono text-primary text-sm">
          {"</portfolio>"}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
