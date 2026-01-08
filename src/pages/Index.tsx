import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Projects from "@/components/Projects";
import SAPSection from "@/components/SAPSection";
import Talk from "@/components/Talk";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Projects />
        <SAPSection />
        <Talk />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
