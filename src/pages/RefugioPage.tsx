import Header from "@/components/Header";
import RefugioSection from "@/components/RefugioSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const RefugioPage = () => (
  <div className="min-h-screen">
    <Header />
    <div className="pt-20">
      <RefugioSection />
    </div>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default RefugioPage;
