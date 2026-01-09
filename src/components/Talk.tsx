import { MessageSquare, Lightbulb, Rocket, Users } from "lucide-react";

const talkTopics = [
  {
    icon: Lightbulb,
    title: "Generative AI",
    description: "LLMs, agents, prompt engineering, and production AI systems",
  },
  {
    icon: Rocket,
    title: "MLOps Architecture",
    description: "CI/CD for ML, model monitoring, and scalable deployments",
  },
  {
    icon: MessageSquare,
    title: "SAP + AI",
    description: "Integrating AI capabilities within SAP ecosystems",
  },
];

const Talk = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="talk" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="font-mono text-primary text-sm mb-4">
              {"<talk>"}
            </div>
            <h2 className="section-title mb-6">
              Let's <span className="text-primary">Talk</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              I'm always excited to discuss new ideas, collaborate on challenging
              projects, or share knowledge about AI and enterprise solutions.
              Whether you have a question, a project in mind, or just want to
              connect—I'd love to hear from you.
            </p>

            <div className="space-y-4 mb-8">
              {talkTopics.map((topic) => (
                <div
                  key={topic.title}
                  className="flex items-center gap-4 group"
                >
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <topic.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono font-semibold">
                      {topic.title}
                    </span>
                    <span className="text-muted-foreground text-sm ml-2">
                      — {topic.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-mono font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300"
            >
              <MessageSquare className="w-5 h-5" />
              Start a Conversation
            </button>

            <div className="font-mono text-primary text-sm mt-8">
              {"</talk>"}
            </div>
          </div>

          {/* Right Content - Terminal Style */}
          <div className="bg-card border border-border rounded-xl p-6 font-mono text-sm">
            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 text-muted-foreground">terminal</span>
            </div>
            
            <div className="flex justify-center mb-6">
              <img 
                src="/photo.jpeg" 
                alt="Hector Cardenas" 
                className="w-32 h-32 rounded-full border-4 border-black object-cover"
                style={{ boxShadow: "var(--terminal-glow)" }}
              />
            </div>

            <div className="space-y-2">
              <p>
                <span className="text-primary">$</span> whoami
              </p>
              <p className="text-muted-foreground">
                Hector Cardenas - MLOps & AI Engineer
              </p>
              <p className="mt-4">
                <span className="text-primary">$</span> cat interests.txt
              </p>
              <p className="text-muted-foreground">
                ├── Generative AI & RAG
                <br />
                ├── MLOps & DevOps
                <br />
                ├── SAP ABAP & Cloud
                <br />
                └── Enterprise Solutions
              </p>
              <p className="mt-4">
                <span className="text-primary">$</span> echo $STATUS
              </p>
              <p className="text-primary">Open to new opportunities ✓</p>
              <p className="mt-4">
                <span className="text-primary">$</span>{" "}
                <span className="animate-blink">_</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Talk;
