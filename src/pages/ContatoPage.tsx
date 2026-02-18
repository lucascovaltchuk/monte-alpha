import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const ContatoPage = () => (
  <div className="min-h-screen">
    <Header />
    <div className="pt-20">
      <ContactSection />
    </div>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default ContatoPage;
