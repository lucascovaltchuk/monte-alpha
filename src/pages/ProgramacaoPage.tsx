import Header from "@/components/Header";
import ScheduleSection from "@/components/ScheduleSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const ProgramacaoPage = () => (
  <div className="min-h-screen">
    <Header />
    <div className="pt-20">
      <ScheduleSection />
    </div>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default ProgramacaoPage;
