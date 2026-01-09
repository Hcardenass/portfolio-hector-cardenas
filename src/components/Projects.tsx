import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "SAP Enterprise GenAI Analytics Agent",
    description:
      "Scalable Generative AI agent built with LangChain & LangGraph, deployed on Azure Container Apps. Exposes a Python/FastAPI backend and a Next.js frontend containerized with Docker, secured with Azure ID.",
    tags: ["Generative AI", "Full Stack", "Azure Cloud"],
    stack: [
      "Python",
      "FastAPI",
      "Next.js",
      "React",
      "TypeScript",
      "Docker",
      "LangChain & LangGraph",
      "LangSmith",
      "SAP Datasphere",
      "Azure Container Apps",
      "Azure AI Foundry",
      "Azure Entra ID",
      "Azure Storage (Blob/Table)",
    ],
    category: "Enterprise AI",
    images: [
      "https://storage.googleapis.com/gc-bucket-hcardenas-01/SAP%20Enterprise%20GenAI%20Analytics%20Agent/Arquitectura.gif",
      "https://storage.googleapis.com/gc-bucket-hcardenas-01/SAP%20Enterprise%20GenAI%20Analytics%20Agent/Inicio.png",
      "https://storage.googleapis.com/gc-bucket-hcardenas-01/SAP%20Enterprise%20GenAI%20Analytics%20Agent/chat1.png",
      "https://storage.googleapis.com/gc-bucket-hcardenas-01/SAP%20Enterprise%20GenAI%20Analytics%20Agent/chat2.png",
      "https://storage.googleapis.com/gc-bucket-hcardenas-01/SAP%20Enterprise%20GenAI%20Analytics%20Agent/chat3.png"
    ],
    features: [
      "Text-to-SQL generation connecting to SAP Datasphere for real-time analytics",
      "Dynamic SQL generation for complex analytical queries",
      "Automated chart generation stored in Azure Blob Storage",
      "Audio explanations generated and saved to Azure Blob Storage",
      "Conversation memory and state management via Azure Table Storage",
      "Full observability and tracing with LangSmith",
    ],
    workflow: [
      "User asks a business question via the React/Next.js interface",
      "Agent orchestrates the workflow using LangGraph to plan the response",
      "Generates SQL to query SAP Datasphere and retrieve relevant business data",
      "Generates data visualizations (charts) and audio summaries, saving artifacts to Azure Blob Storage",
      "Returns a comprehensive response with embedded media to the user",
    ],
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
