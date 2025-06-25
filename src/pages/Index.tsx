
import Hero from "@/components/Hero";
import About from "@/components/About";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Workshop from "@/components/Workshop";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Benefits />
      <Workshop />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
