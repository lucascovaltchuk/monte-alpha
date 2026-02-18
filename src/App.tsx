import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SobrePage from "./pages/SobrePage";
import RefugioPage from "./pages/RefugioPage";
import ProgramacaoPage from "./pages/ProgramacaoPage";
import ContatoPage from "./pages/ContatoPage";
import DizimosPage from "./pages/DizimosPage";
import NotFound from "./pages/NotFound";
import PageLoader from "./components/PageLoader";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <PageLoader />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre" element={<SobrePage />} />
          <Route path="/refugio" element={<RefugioPage />} />
          <Route path="/programacao" element={<ProgramacaoPage />} />
          <Route path="/contato" element={<ContatoPage />} />
          <Route path="/dizimos" element={<DizimosPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
