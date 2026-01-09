import { useState, useRef } from "react";
import { Send, Mail, Linkedin, Github } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
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

    // Check if env vars are set
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey || 
        serviceId === 'your_service_id_here' || 
        templateId === 'your_template_id_here' || 
        publicKey === 'your_public_key_here') {
      toast.error("EmailJS not configured. Please check .env file.");
      console.error("EmailJS environment variables are missing or default.");
      setIsSubmitting(false);
      return;
    }

    try {
      if (formRef.current) {
        await emailjs.sendForm(
          serviceId,
          templateId,
          formRef.current,
          publicKey
        );
        
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        toast.success("Message sent successfully!");
        
        setTimeout(() => setIsSubmitted(false), 3000);
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
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
                optimize your ML pipelines, or develop robust SAP solutions using ABAP, Datasphere, and SAC—let's
                connect and discuss how we can work together.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:adriancardenasc19@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="p-2 rounded-lg bg-card border border-border group-hover:border-primary/50 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-mono text-sm">adriancardenasc19@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/hector-cardenas-camacho-197101169/"
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
                href="https://github.com/Hcardenass"
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
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
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
