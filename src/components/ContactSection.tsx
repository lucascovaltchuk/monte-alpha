import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Instagram, Phone, Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    toast({ title: "Mensagem enviada!", description: "Em breve entraremos em contato. Deus abençoe!" });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  const inputClass =
    "w-full px-5 py-4 bg-foreground/60 border border-primary-foreground/15 rounded-xl font-body text-sm text-primary-foreground placeholder:text-primary-foreground/35 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 hover:border-primary-foreground/30";

  const contactItems = [
    {
      icon: MapPin,
      label: "Localização",
      value: "Alphaville, São Paulo - SP",
      href: null,
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "(43) 99847-1000",
      href: "tel:+5543998471000",
    },
    {
      icon: Mail,
      label: "E-mail",
      value: "contato@montealphaville.com.br",
      href: "mailto:contato@montealphaville.com.br",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@montealphaville",
      href: "https://www.instagram.com/montealphaville",
    },
  ];

  return (
    <section id="contato" className="py-28 bg-foreground relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-5 bg-primary pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-5 bg-accent pointer-events-none" />

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-3 flex items-center justify-center gap-3">
            <span className="w-6 h-px bg-primary inline-block" />
            Contato
            <span className="w-6 h-px bg-primary inline-block" />
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Fale <span className="italic text-primary">Conosco</span>
          </h2>
          <div className="section-divider" />
          <p className="font-body text-primary-foreground/60 max-w-xl mx-auto text-lg mt-4">
            Tem alguma dúvida ou precisa de oração? Entre em contato conosco.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="space-y-4 bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-8 backdrop-blur-sm"
          >
            <input type="text" placeholder="Seu nome" value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })} required className={inputClass} />
            <input type="email" placeholder="Seu e-mail" value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })} required className={inputClass} />
            <input type="tel" placeholder="Seu telefone" value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} />
            <textarea placeholder="Sua mensagem ou pedido de oração" rows={4} value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={`${inputClass} resize-none`} />
            <button
              type="submit"
              disabled={loading}
              className="w-full warm-gradient text-primary-foreground font-body font-semibold px-8 py-4 rounded-xl tracking-wide text-sm uppercase hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-primary/30 hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-60 shine"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Enviando...
                </span>
              ) : (
                <>
                  <Send size={15} />
                  Enviar Mensagem
                </>
              )}
            </button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="flex flex-col justify-center gap-5"
          >
            {contactItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="flex items-start gap-4 group bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-5 hover:border-primary/40 hover:bg-primary-foreground/8 transition-all duration-300"
              >
                <div className="w-12 h-12 warm-gradient rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <item.icon className="text-primary-foreground" size={19} />
                </div>
                <div>
                  <h4 className="font-display text-base font-semibold text-primary-foreground mb-0.5">{item.label}</h4>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="font-body text-primary text-sm hover:underline underline-offset-2 transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-body text-primary-foreground/55 text-sm">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
