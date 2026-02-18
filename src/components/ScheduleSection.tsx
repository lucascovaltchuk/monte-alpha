import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, MapPin } from "lucide-react";

const schedule = [
  {
    day: "Segunda-feira",
    abbr: "SEG",
    events: [{ time: "18h00", name: "Culto", description: "Louvor, adoração e pregação da Palavra" }],
  },
  {
    day: "Quarta-feira",
    abbr: "QUA",
    events: [{ time: "18h00", name: "Culto", description: "Momento de buscar a Deus juntos" }],
  },
  {
    day: "Sexta-feira",
    abbr: "SEX",
    events: [{ time: "18h00", name: "Culto", description: "Presença de Deus e comunhão fraterna" }],
  },
  {
    day: "Sábado",
    abbr: "SÁB",
    events: [{ time: "16h00", name: "Culto", description: "Encontro especial de fim de semana" }],
  },
  {
    day: "Domingo",
    abbr: "DOM",
    events: [{ time: "12h00", name: "Culto de Celebração", description: "Adoração e Palavra para toda família" }],
  },
];

const ScheduleSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="programacao" className="py-28 bg-section-alt overflow-hidden">
      <div ref={ref} className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-3 flex items-center justify-center gap-3">
            <span className="w-6 h-px bg-primary inline-block" />
            Programação
            <span className="w-6 h-px bg-primary inline-block" />
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossos <span className="italic text-primary">Encontros</span>
          </h2>
          <div className="section-divider" />
          <p className="font-body text-muted-foreground max-w-xl mx-auto text-lg">
            Venha participar dos nossos cultos e reuniões. Você é sempre bem-vindo!
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-5xl mx-auto">
          {schedule.map((day, index) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="bg-background p-6 rounded-2xl border border-border group relative overflow-hidden cursor-default"
            >
              {/* Animated top bar on hover */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-0.5 warm-gradient"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                style={{ originX: 0 }}
              />

              {/* Glow on hover */}
              <div className="absolute inset-0 warm-gradient opacity-0 group-hover:opacity-[0.04] transition-opacity duration-400 rounded-2xl" />

              {/* Day abbr chip */}
              <div className="warm-gradient text-primary-foreground rounded-lg px-3 py-1 text-xs font-body font-bold tracking-widest uppercase mb-4 inline-block group-hover:shadow-md group-hover:shadow-primary/20 transition-shadow duration-300">
                {day.abbr}
              </div>
              <h3 className="font-display text-base font-semibold text-foreground mb-4 leading-snug group-hover:text-primary transition-colors duration-300">
                {day.day}
              </h3>
              <div className="space-y-3">
                {day.events.map((event) => (
                  <div key={event.name}>
                    <div className="flex items-center gap-2 mb-1">
                      <Clock className="text-primary shrink-0" size={13} />
                      <span className="font-body text-sm font-bold text-foreground">{event.time}</span>
                    </div>
                    <p className="font-body font-semibold text-foreground text-sm">{event.name}</p>
                    <p className="font-body text-muted-foreground text-xs mt-1 leading-relaxed">{event.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center gap-2 mt-12 text-muted-foreground"
        >
          <MapPin size={16} className="text-primary" />
          <span className="font-body text-sm">Alphaville, São Paulo - SP</span>
        </motion.div>
      </div>
    </section>
  );
};

export default ScheduleSection;
