import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Copy, Landmark, QrCode, HandHeart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const pixKey = "43998471000"; // Chave Pix (número de telefone)

const bankData = {
  banco: "Banco do Brasil",
  agencia: "0000-0",
  conta: "00000-0",
  titular: "Marcelo Hercule",
  cnpj: "00.000.000/0000-00",
};

const DizimosPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { toast } = useToast();

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast({ title: `${label} copiado!`, description: "Colado na sua área de transferência." });
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <WhatsAppButton />

      {/* Hero */}
      <section className="relative pt-36 pb-24 bg-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 70% 50%, hsl(var(--primary)) 0%, transparent 60%)" }}
        />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-body text-sm tracking-[0.25em] uppercase text-primary mb-4"
          >
            Contribua
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display text-5xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight"
          >
            Dízimos &amp; <span className="italic text-primary">Ofertas</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-body text-primary-foreground/70 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            "Trazei todos os dízimos à casa do tesouro, para que haja mantimento na minha casa."
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-body text-primary text-sm mt-2"
          >
            Malaquias 3:10
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div ref={ref} className="container mx-auto px-6 max-w-4xl">

          {/* Why give */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl warm-gradient flex items-center justify-center">
                <HandHeart className="text-primary-foreground" size={28} />
              </div>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Por que <span className="italic text-primary">contribuir?</span>
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              Sua contribuição sustenta a missão do Monte Alphaville: proclamar o Evangelho, 
              cuidar das pessoas e expandir o Reino de Deus na nossa comunidade e além.
            </p>
          </motion.div>

          {/* Cards de método */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">

            {/* PIX */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="bg-card border border-border rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl warm-gradient flex items-center justify-center">
                  <QrCode className="text-primary-foreground" size={20} />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">PIX</h3>
              </div>

              <p className="font-body text-muted-foreground text-sm mb-5">
                Copie a chave abaixo e faça sua oferta pelo aplicativo do seu banco:
              </p>

              <div className="bg-muted rounded-xl p-4 flex items-center justify-between gap-3 mb-4">
                <div>
                  <p className="font-body text-xs text-muted-foreground mb-1">Chave PIX (Celular)</p>
                  <p className="font-body font-semibold text-foreground">{pixKey}</p>
                </div>
                <button
                  onClick={() => handleCopy(pixKey, "Chave PIX")}
                  className="flex items-center gap-1.5 warm-gradient text-primary-foreground font-body text-xs font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity shrink-0"
                >
                  <Copy size={13} />
                  Copiar
                </button>
              </div>

              <p className="font-body text-xs text-muted-foreground">
                Titular: <span className="text-foreground font-medium">{bankData.titular}</span>
              </p>
            </motion.div>

            {/* Transferência Bancária */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-card border border-border rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl warm-gradient flex items-center justify-center">
                  <Landmark className="text-primary-foreground" size={20} />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">Transferência</h3>
              </div>

              <p className="font-body text-muted-foreground text-sm mb-5">
                Dados bancários para TED/DOC:
              </p>

              <div className="space-y-3">
                {[
                  { label: "Banco", value: bankData.banco },
                  { label: "Agência", value: bankData.agencia },
                  { label: "Conta", value: bankData.conta },
                  { label: "Titular", value: bankData.titular },
                  { label: "CNPJ", value: bankData.cnpj },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between bg-muted rounded-lg px-4 py-2.5">
                    <span className="font-body text-xs text-muted-foreground">{item.label}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-body text-sm font-medium text-foreground">{item.value}</span>
                      <button
                        onClick={() => handleCopy(item.value, item.label)}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Copy size={13} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Presencialmente */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="bg-foreground rounded-2xl p-8 text-center"
          >
            <div className="flex justify-center mb-4">
              <div className="w-11 h-11 rounded-xl warm-gradient flex items-center justify-center">
                <Heart className="text-primary-foreground" size={20} />
              </div>
            </div>
            <h3 className="font-display text-xl font-bold text-primary-foreground mb-3">
              Presencialmente
            </h3>
            <p className="font-body text-primary-foreground/70 max-w-lg mx-auto text-sm leading-relaxed">
              Você também pode trazer seu dízimo e oferta diretamente nos nossos cultos. 
              Coletas são realizadas durante os encontros semanais na Igreja Monte Alphaville, 
              em Alphaville, São Paulo - SP.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DizimosPage;
