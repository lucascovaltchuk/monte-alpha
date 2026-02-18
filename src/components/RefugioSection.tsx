import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Calendar, Clock, MapPin, Users, ArrowUpRight } from "lucide-react";
import refugioImg from "@/assets/refugio-fe.png";

const details = [
  { icon: Calendar, label: "Data", value: "16 de Fevereiro de 2025" },
  { icon: Clock, label: "Horário", value: "A partir das 18h" },
  { icon: MapPin, label: "Local", value: "Alto do Monte Alphaville" },
  { icon: Users, label: "Para quem", value: "Você, família e amigos — entrada gratuita" },
];

const RefugioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);

  return (
    <section id="refugio" ref={sectionRef} className="py-28 bg-section-alt overflow-hidden">
      <div ref={ref} className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Imagem com parallax */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <motion.img
                src={refugioImg}
                alt="Refúgio para a Fé - Monte Alphaville"
                className="w-full h-auto object-cover scale-105 hover:scale-110 transition-transform duration-700"
                style={{ y: imgY }}
              />
            </div>

            {/* Badge flutuante */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-5 -right-5 warm-gradient text-primary-foreground rounded-2xl px-6 py-5 shadow-2xl animate-float"
            >
              <p className="font-display text-4xl font-bold leading-none">16</p>
              <p className="font-body text-xs tracking-widest uppercase opacity-80">FEV</p>
            </motion.div>

            {/* Glow */}
            <div className="absolute -bottom-8 -left-8 w-40 h-40 warm-gradient rounded-full opacity-10 blur-2xl pointer-events-none" />
          </motion.div>

          {/* Conteúdo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-primary inline-block" />
              Evento Especial
            </p>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-4 leading-tight">
              Refúgio{" "}
              <span className="italic text-primary">para a Fé</span>
            </h2>
            <div className="section-divider mb-6" style={{ margin: "0 0 1.5rem" }} />

            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-5">
              O Brasil está prestes a viver dias sombrios, mas há um Refúgio do Espírito Santo
              para aqueles que são Dele! O Monte Alphaville está preparado para receber você,
              sua família e amigos para se refugiar nestes dias!
            </p>

            <p className="font-body text-foreground font-medium text-lg mb-8">
              O Monte estará aberto para{" "}
              <span className="text-primary font-bold">todos</span>!{" "}
              Venha buscar a Deus conosco.
            </p>

            {/* Details com stagger */}
            <div className="space-y-3 mb-8">
              {details.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 24 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="flex items-center gap-4 bg-background rounded-xl p-4 border border-border group hover:border-primary/30 hover:shadow-md hover:shadow-primary/5 transition-all duration-300 cursor-default"
                >
                  <div className="w-10 h-10 rounded-lg warm-gradient flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-primary/20 transition-all duration-300">
                    <item.icon className="text-primary-foreground" size={17} />
                  </div>
                  <div>
                    <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                    <p className="font-display font-semibold text-foreground text-sm">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="https://www.instagram.com/p/DUo3bmEkS0W/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2 warm-gradient text-primary-foreground font-body font-semibold px-8 py-4 rounded-xl tracking-wide text-sm uppercase hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-primary/30 hover:shadow-xl shine"
            >
              Saiba Mais no Instagram
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RefugioSection;
