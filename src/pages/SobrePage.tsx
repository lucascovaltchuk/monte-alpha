import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const SobrePage = () => (
  <div className="min-h-screen">
    <Header />
    <div className="pt-20">
      <AboutSection />
    </div>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default SobrePage;
