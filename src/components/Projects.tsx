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
    title: "Cross-Selling AI Agent",
    description:
      "Context-aware AI sales agent that goes beyond simple associations. It analyzes the 'consumption occasion' (Time + Cart + History) to distinguish between scenarios like a 'Friday party' vs a 'Wednesday office snack', maximizing average ticket value while strictly adhering to business rules (e.g., alcohol time restrictions).",
    tags: ["Generative AI", "Retail Tech", "Agentic AI", "RAG"],
    stack: [
      "Python",
      "LangChain",
      "LangGraph",
      "Supabase (Vector DB)",
      "OpenAI GPT-4.1",
      "Streamlit",
    ],
    category: "Retail AI Agent",
    images: [
      "https://storage.googleapis.com/gc-bucket-hcardenas-01/Cross-Selling%20AI%20Agent/Arquitectura%20Cross%20Selling.png",
      "https://storage.googleapis.com/gc-bucket-hcardenas-01/Cross-Selling%20AI%20Agent/Explicacion%20Agent%20Cross%20Selling.mp4"
    ],
    features: [
      "Contextual Inference: Distinguishes between 'Party/Previa' (Friday PM) and 'Casual Consumption' (Workday AM)",
      "Dynamic Guardrails: Automatically enforces 'Dry Law' or time-based alcohol restrictions, suggesting alternatives like mixers or snacks",
      "Revenue Optimization: Potential ticket increase of +125% to +175% by suggesting relevant bundles (e.g., Beers + Pisco vs. Sodas + Snacks)",
      "Personalized Copywriting: Generates tone-appropriate messages for WhatsApp/App notifications",
    ],
    workflow: [
      "Analyzes input: Cart items (e.g., Coke + Chips) + Timestamp + Customer Profile",
      "Infers Occasion: Determines if it's a social gathering, personal craving, or restricted scenario",
      "Retrieves Products (RAG): Uses embeddings in Supabase to find semantic matches",
      "Validates Rules: Filters recommendations based on stock and legal time constraints",
      "Generates Response: Outputs the optimal product bundle and persuasive message",
    ],
  },
  {
    title: "Real-Time Healthcare Analytics Pipeline",
    description:
      "End-to-end real-time data engineering solution for healthcare sector, analyzing patient flow and bed occupancy across hospital departments. Implements a medallion architecture (Bronze-Silver-Gold) with streaming ingestion, PySpark transformations, and star schema modeling for BI analytics.",
    tags: ["Data Engineering", "Real-Time", "Azure Cloud", "Healthcare"],
    stack: [
      "Azure Event Hub",
      "Azure Databricks",
      "PySpark",
      "Azure Data Lake Storage (ADLS Gen2)",
      "Azure Synapse SQL Pool",
      "Power BI",
      "Python 3.11+",
    ],
    category: "Data Engineering",
    githubUrl: "https://github.com/Hcardenass/hospital-patient-flow-analytics",
    images: [
      "https://storage.googleapis.com/gc-bucket-hcardenas-01/Real-Time%20Healthcare%20Analytics%20Pipeline/Arquitectura.gif",
      "https://storage.googleapis.com/gc-bucket-hcardenas-01/Real-Time%20Healthcare%20Analytics%20Pipeline/Simulator.gif",
      "https://storage.googleapis.com/gc-bucket-hcardenas-01/Real-Time%20Healthcare%20Analytics%20Pipeline/Streaming-Bronze.gif",
      "https://storage.googleapis.com/gc-bucket-hcardenas-01/Real-Time%20Healthcare%20Analytics%20Pipeline/Streaming-Silver.gif",
      "https://storage.googleapis.com/gc-bucket-hcardenas-01/Real-Time%20Healthcare%20Analytics%20Pipeline/Ejecuci%C3%B3nCapaGold.gif",
      "https://storage.googleapis.com/gc-bucket-hcardenas-01/Real-Time%20Healthcare%20Analytics%20Pipeline/BI.png"
    ],
    features: [
      "Real-Time Ingestion: Streams patient data via Azure Event Hub with custom Python generator",
      "Medallion Architecture: Bronze (raw JSON) → Silver (cleaned/validated) → Gold (aggregated star schema)",
      "Star Schema Design: Optimized fact and dimension tables in Synapse SQL Pool for efficient querying",
      "Interactive Dashboard: Power BI integration with KPIs for bed occupancy, patient flow trends, and department-level metrics",
      "Scalable ETL: PySpark notebooks in Databricks for distributed data processing",
    ],
    workflow: [
      "Simulate patient flow data and stream to Azure Event Hub in real-time",
      "Databricks consumes stream and writes raw JSON to Bronze layer (ADLS)",
      "Silver layer: Clean, validate schema, handle nulls, and structure data",
      "Gold layer: Aggregate and transform into star schema (FactPatientFlow + Dimensions)",
      "Load star schema into Synapse SQL Pool for analytics",
      "Connect Power BI to Synapse for interactive dashboards with filters and KPIs",
    ],
  },
  {
    title: "Bridge Monitoring DLT Pipeline",
    description:
      "Production-grade streaming ETL pipeline using Databricks Delta Live Tables (DLT) to monitor IoT sensors on critical infrastructure. Simulates real-time temperature, vibration, and inclination sensors, processing three raw streams through a medallion architecture with watermarks, windowed aggregations, and stream-static joins.",
    tags: ["Data Engineering", "Streaming", "IoT", "Databricks"],
    stack: [
      "Databricks Delta Live Tables (DLT)",
      "PySpark",
      "Delta Lake",
      "Unity Catalog",
      "Python 3.11+",
      "Structured Streaming",
    ],
    category: "Data Engineering",
    githubUrl: "https://github.com/Hcardenass/monitoreo_puentes_dlt_pipeline",
    images: [
      "https://storage.googleapis.com/gc-bucket-hcardenas-01/Bridge%20Monitoring%20DLT%20Pipeline/Arquitectura.gif",
      "https://storage.googleapis.com/gc-bucket-hcardenas-01/Bridge%20Monitoring%20DLT%20Pipeline/DLT%20Databricks.mp4"
    ],
    features: [
      "Declarative DLT Pipelines: Uses @dlt.table decorators for Bronze, Silver, and Gold layers",
      "Multi-Stream Processing: Ingests 3 parallel IoT streams (temperature, vibration, inclination) with simulated delays",
      "Data Quality Enforcement: Applies @dlt.expect_or_drop checks in Silver layer for schema validation",
      "Windowed Aggregations: Calculates 10-minute tumbling window metrics (avg temperature, max vibration/inclination) with 2-minute watermarks",
      "Stream-Static & Stream-Stream Joins: Enriches sensor data with bridge metadata and joins aggregated metrics by time windows",
      "Incremental Processing: DLT automatically handles checkpointing and only processes new data",
    ],
    workflow: [
      "Generate synthetic IoT sensor data with random timestamp delays (00_data_generator.ipynb)",
      "Bronze Layer: Ingest 3 raw Delta streams as they arrive (01_bronze_processing.ipynb)",
      "Silver Layer: Enrich with static bridge metadata and apply data quality expectations (02_silver_processing.ipynb)",
      "Gold Layer: Apply watermarks, compute 10-min windowed aggregations, and join streams (03_gold_processing.ipynb)",
      "Query aggregated metrics via SQL for monitoring dashboards and alerting",
    ],
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
            A selection of AI, Data Engineering, and MLOps projects showcasing end-to-end solutions,
            from generative systems to real-time data pipelines.
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
