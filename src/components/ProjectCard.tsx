import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  stack: string[];
  category: string;
}

const ProjectCard = ({ title, description, tags, stack, category }: ProjectCardProps) => {
  return (
    <div className="group bg-card border border-border rounded-xl p-6 card-glow hover:border-primary/50 transition-all duration-300">
      {/* Category badge */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full">
          {category}
        </span>
        <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="text-muted-foreground hover:text-primary transition-colors" aria-label="View code">
            <Github className="w-5 h-5" />
          </button>
          <button className="text-muted-foreground hover:text-primary transition-colors" aria-label="View project">
            <ExternalLink className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Title */}
      <h3 className="font-mono text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span key={tag} className="tag text-xs">
            {tag}
          </span>
        ))}
      </div>

      {/* Stack */}
      <div className="pt-4 border-t border-border">
        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono text-muted-foreground"
            >
              {tech}
              {stack.indexOf(tech) < stack.length - 1 && (
                <span className="text-primary ml-2">•</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
