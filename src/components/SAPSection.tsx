import { Database, BarChart3, Code2, Sparkles } from "lucide-react";

const sapServices = [
  {
    icon: Code2,
    title: "SAP ABAP Development",
    description:
      "Custom ABAP development, enhancements, reports, and interfaces for SAP ERP systems.",
  },
  {
    icon: Database,
    title: "SAP Datasphere",
    description:
      "Data modeling, SQL scripts, cloud integration, and unified data layer architecture.",
  },
  {
    icon: BarChart3,
    title: "SAP Analytics Cloud",
    description:
      "Advanced scripting, custom analytics applications, and planning functionalities.",
  },
  {
    icon: Sparkles,
    title: "AI + SAP Integration",
    description:
      "Intelligent agents, augmented analytics, and AI-powered automation within SAP ecosystem.",
  },
];

const SAPSection = () => {
  return (
    <section id="sap" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="font-mono text-primary text-sm mb-4">{"<sap>"}</div>
          <h2 className="section-title">
            SAP & <span className="text-primary">Enterprise Analytics</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Bridging the gap between enterprise SAP systems and modern AI
            capabilities for enhanced business intelligence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {sapServices.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card border border-border rounded-xl p-8 card-glow hover:border-primary/50 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <service.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-mono text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Banner */}
        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-xl p-8 md:p-12 text-center">
          <h3 className="font-mono text-2xl font-bold mb-4">
            Enterprise-Ready Solutions
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Combining deep SAP expertise with cutting-edge AI to deliver
            scalable, secure, and intelligent enterprise solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "SAP S/4HANA",
              "SAP BTP",
              "Datasphere",
              "SAC",
              "ABAP",
              "CDS Views",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-card border border-border rounded-lg font-mono text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="text-center mt-16 font-mono text-primary text-sm">
          {"</sap>"}
        </div>
      </div>
    </section>
  );
};

export default SAPSection;
