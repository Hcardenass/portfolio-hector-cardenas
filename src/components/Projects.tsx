import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Generative AI Agent for Enterprise Analytics",
    description:
      "Intelligent agent with RAG capabilities, SQL generation, and natural language explanations for complex business data analysis.",
    tags: ["Generative AI", "RAG", "NLP"],
    stack: ["Python", "LangChain", "OpenAI", "PostgreSQL", "FastAPI"],
    category: "AI Agent",
  },
  {
    title: "MLOps Pipeline for LLMs",
    description:
      "End-to-end CI/CD pipeline for large language models with automated training, versioning, monitoring, and deployment.",
    tags: ["MLOps", "LLMs", "DevOps"],
    stack: ["Kubernetes", "MLflow", "Airflow", "Docker", "AWS"],
    category: "MLOps",
  },
  {
    title: "Cross-Selling AI Agent",
    description:
      "Business-oriented AI system designed to increase average ticket through intelligent product recommendations and personalized offers.",
    tags: ["Generative AI", "Business AI"],
    stack: ["Python", "TensorFlow", "Redis", "React", "Node.js"],
    category: "AI Agent",
  },
  {
    title: "RAG System over Enterprise Data",
    description:
      "Production-ready retrieval-augmented generation system with vector database, semantic embeddings, and context control.",
    tags: ["RAG", "Vector DB", "Embeddings"],
    stack: ["Pinecone", "OpenAI", "Python", "FastAPI", "Redis"],
    category: "RAG System",
  },
  {
    title: "Real-time ML Monitoring Dashboard",
    description:
      "Comprehensive monitoring solution for ML models in production with drift detection, performance metrics, and alerting.",
    tags: ["MLOps", "Monitoring"],
    stack: ["Grafana", "Prometheus", "Python", "React", "TimescaleDB"],
    category: "MLOps",
  },
  {
    title: "Conversational AI for Customer Support",
    description:
      "Multi-turn conversational agent with memory, context awareness, and seamless human handoff capabilities.",
    tags: ["Generative AI", "NLP", "Chatbot"],
    stack: ["LangChain", "GPT-4", "Redis", "WebSocket", "React"],
    category: "AI Agent",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="font-mono text-primary text-sm mb-4">
            {"<projects>"}
          </div>
          <h2 className="section-title">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            A selection of AI and MLOps projects showcasing end-to-end solutions,
            from generative systems to production pipelines.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        <div className="text-center mt-16 font-mono text-primary text-sm">
          {"</projects>"}
        </div>
      </div>
    </section>
  );
};

export default Projects;
