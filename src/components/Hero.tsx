import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const [displayedName, setDisplayedName] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullName = "Hector Cardenas";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setDisplayedName(fullName.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  const scrollToPortfolio = () => {
    const element = document.querySelector("#portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative px-6"
    >
      {/* Terminal-like background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 text-primary/5 font-mono text-sm hidden lg:block">
          {`const engineer = {`}
          <br />
          {`  name: "Hector",`}
          <br />
          {`  role: "MLOps",`}
          <br />
          {`  passion: "AI"`}
          <br />
          {`};`}
        </div>
        <div className="absolute bottom-1/4 right-10 text-primary/5 font-mono text-sm hidden lg:block">
          {`// Building the future`}
          <br />
          {`import { AI } from 'future';`}
          <br />
          {`deploy(models);`}
        </div>
      </div>

      <div className="text-center z-10">
        {/* Terminal prompt */}
        <div className="mb-6 font-mono text-muted-foreground text-sm md:text-base">
          <span className="text-primary">{">"}</span> whoami
        </div>

        {/* Name with typing effect */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-mono mb-6">
          <span className="terminal-text">{displayedName}</span>
          <span
            className={`inline-block w-1 h-12 md:h-16 lg:h-20 bg-primary ml-2 ${
              showCursor ? "opacity-100" : "opacity-0"
            }`}
          />
        </h1>

        {/* Roles */}
        <div className="space-y-2 mb-8">
          <p className="text-xl md:text-2xl font-mono text-foreground">
            MLOps Engineer{" "}
            <span className="text-primary">&</span> AI Engineer
          </p>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Building scalable AI, Generative Systems & Enterprise Analytics
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["Generative AI", "MLOps", "RAG Systems", "SAP Analytics"].map(
            (tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            )
          )}
        </div>

        {/* CTA */}
        <button
          onClick={scrollToPortfolio}
          className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-mono font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 animate-pulse-glow"
        >
          <span>Explore My Work</span>
          <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
