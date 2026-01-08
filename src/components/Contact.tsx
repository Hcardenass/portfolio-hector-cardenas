import { useState } from "react";
import { Send, Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="font-mono text-primary text-sm mb-4">
            {"<contact>"}
          </div>
          <h2 className="section-title">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from
            you.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <h3 className="font-mono text-xl font-semibold mb-4">
                Let's build something with{" "}
                <span className="text-primary">AI</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're looking to integrate AI into your business,
                optimize your ML pipelines, or explore SAP analytics—let's
                connect and discuss how we can work together.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:hello@hectorcardenas.dev"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="p-2 rounded-lg bg-card border border-border group-hover:border-primary/50 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-mono text-sm">hello@hectorcardenas.dev</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="p-2 rounded-lg bg-card border border-border group-hover:border-primary/50 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span className="font-mono text-sm">LinkedIn</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="p-2 rounded-lg bg-card border border-border group-hover:border-primary/50 transition-colors">
                  <Github className="w-5 h-5" />
                </div>
                <span className="font-mono text-sm">GitHub</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block font-mono text-sm mb-2 text-muted-foreground"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-mono text-sm mb-2 text-muted-foreground"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-mono text-sm mb-2 text-muted-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="input-field resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-mono font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : isSubmitted ? (
                  "Message Sent! ✓"
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="text-center mt-16 font-mono text-primary text-sm">
          {"</contact>"}
        </div>
      </div>
    </section>
  );
};

export default Contact;
