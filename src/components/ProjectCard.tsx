import { ExternalLink, Github, CheckCircle2, ZoomIn, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  stack: string[];
  category: string;
  features?: string[];
  workflow?: string[];
  images?: string[];
}

const ProjectCard = ({ 
  title, 
  description, 
  tags, 
  stack, 
  category,
  features,
  workflow,
  images
}: ProjectCardProps) => {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const isZoomedRef = useRef(false);

  // Sync ref with state to handle event closures correctly
  useEffect(() => {
    isZoomedRef.current = !!zoomedImage;
  }, [zoomedImage]);

  // Handle Escape key to close zoomed image
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isZoomedRef.current) {
        e.stopPropagation(); // Stop escape from closing dialog
        setZoomedImage(null);
      }
    };

    if (zoomedImage) {
      window.addEventListener("keydown", handleKeyDown, true); // Use capture to intercept before Dialog
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown, true);
    };
  }, [zoomedImage]);

  return (
    <>
      <div className="group bg-card border border-border rounded-xl p-6 card-glow hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
        {/* Category badge */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-full">
            {category}
          </span>
          <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="text-muted-foreground hover:text-primary transition-colors" aria-label="View code">
              <Github className="w-5 h-5" />
            </button>
            
            <Dialog 
              open={isDialogOpen} 
              onOpenChange={(open) => {
                // Prevent dialog from closing if zoomed image is open
                if (!open && isZoomedRef.current) return;
                setIsDialogOpen(open);
              }}
            >
              <DialogTrigger asChild>
                <button className="text-muted-foreground hover:text-primary transition-colors" aria-label="View details">
                  <ExternalLink className="w-5 h-5" />
                </button>
              </DialogTrigger>
              <DialogContent 
                className="max-w-3xl max-h-[90vh] p-0 overflow-hidden bg-card border-border"
                onPointerDownOutside={(e) => {
                  if (isZoomedRef.current) {
                    e.preventDefault();
                  }
                }}
                onEscapeKeyDown={(e) => {
                  if (isZoomedRef.current) {
                    e.preventDefault();
                  }
                }}
              >
                <ScrollArea className="h-full max-h-[90vh]">
                  <div className="p-6">
                    <DialogHeader className="mb-6">
                      <DialogTitle className="text-2xl font-mono text-primary mb-2">{title}</DialogTitle>
                      <DialogDescription className="text-base text-muted-foreground">
                        {description}
                      </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-8">
                      {images && images.length > 0 && (
                        <div className="w-full flex justify-center">
                          <Carousel className="w-full max-w-lg">
                            <CarouselContent>
                              {images.map((img, index) => (
                                <CarouselItem key={index}>
                                  <div className="p-1">
                                    <div className={`relative group overflow-hidden rounded-lg border border-border ${index === 0 ? "" : "h-[250px] flex items-center justify-center bg-muted/10"}`}>
                                      <img
                                        src={img}
                                        alt={`${title} screenshot ${index + 1}`}
                                        className={index === 0 ? "w-full h-auto" : "h-full w-full object-contain"}
                                      />
                                      <div 
                                        className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
                                        onClick={() => setZoomedImage(img)}
                                      >
                                        <ZoomIn className="w-8 h-8 text-white drop-shadow-md" />
                                      </div>
                                    </div>
                                  </div>
                                </CarouselItem>
                              ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                          </Carousel>
                        </div>
                      )}

                      {features && features.length > 0 && (
                        <div>
                          <h4 className="font-mono font-semibold mb-3 flex items-center gap-2">
                            <span className="text-primary">{">"}</span> Key Features
                          </h4>
                          <ul className="grid gap-2">
                            {features.map((feature, i) => (
                              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {workflow && workflow.length > 0 && (
                        <div>
                          <h4 className="font-mono font-semibold mb-3 flex items-center gap-2">
                            <span className="text-primary">{">"}</span> Agent Workflow
                          </h4>
                          <div className="bg-secondary/30 rounded-lg p-4 space-y-3">
                            {workflow.map((step, i) => (
                              <div key={i} className="flex items-start gap-3 text-sm">
                                <span className="font-mono text-primary/70 shrink-0">0{i + 1}.</span>
                                <span className="text-muted-foreground">{step}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div>
                        <h4 className="font-mono font-semibold mb-3 flex items-center gap-2">
                          <span className="text-primary">{">"}</span> Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {stack.map((tech) => (
                            <span
                              key={tech}
                              className="text-xs font-mono bg-primary/5 text-primary border border-primary/20 px-2 py-1 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollArea>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-mono text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-grow">
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
      </div>

      {/* Full Screen Image Zoom Modal */}
      {zoomedImage && createPortal(
        <div 
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={(e) => {
            e.stopPropagation();
            setZoomedImage(null);
          }}
        >
          <button 
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors bg-black/50 p-2 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              setZoomedImage(null);
            }}
          >
            <X className="w-6 h-6" />
          </button>
          <img 
            src={zoomedImage} 
            alt="Zoomed view" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl scale-100"
            onClick={(e) => e.stopPropagation()}
          />
        </div>,
        document.body
      )}
    </>
  );
};

export default ProjectCard;
