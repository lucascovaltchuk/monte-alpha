import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-worship.jpg";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax transforms
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.18]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 1.4]);

  const springBgY = useSpring(bgY, { stiffness: 60, damping: 20 });

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: `url(${heroBg})`,
          y: springBgY,
          scale: bgScale,
        }}
      />

      {/* Overlay */}
      <motion.div
        className="absolute inset-0 hero-overlay"
        style={{ opacity: overlayOpacity }}
      />

      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* Glowing orbs — parallax subtly */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full blur-3xl pointer-events-none bg-primary"
        style={{ opacity: 0.12, y: useTransform(scrollYProgress, [0, 1], ["0%", "15%"]) }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-56 h-56 rounded-full blur-3xl pointer-events-none bg-accent"
        style={{ opacity: 0.10, y: useTransform(scrollYProgress, [0, 1], ["0%", "10%"]) }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-4xl"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-sm tracking-[0.35em] uppercase text-primary mb-6 flex items-center justify-center gap-3"
        >
          <span className="w-8 h-px bg-primary inline-block" />
          Comunidade Cristã
          <span className="w-8 h-px bg-primary inline-block" />
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 leading-tight"
        >
          Monte{" "}
          <span className="italic text-primary relative inline-block">
            Alphaville
            <motion.span
              className="absolute -bottom-1 left-0 h-0.5 warm-gradient rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-body text-lg md:text-xl text-primary-foreground/80 mb-3 max-w-2xl mx-auto italic leading-relaxed"
        >
          "Porque onde estiverem dois ou três reunidos em meu nome, ali eu estou no meio deles."
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="font-body text-sm text-primary-foreground/50 mb-12 tracking-widest uppercase"
        >
          — Mateus 18:20
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/programacao"
            className="group relative warm-gradient text-primary-foreground font-body font-semibold px-8 py-4 rounded-xl tracking-wide text-sm uppercase hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-primary/40 hover:shadow-xl shine flex items-center justify-center gap-2"
          >
            Nossos Cultos
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1.5 transition-transform duration-300"
            />
          </Link>
          <Link
            to="/sobre"
            className="group border border-primary-foreground/30 text-primary-foreground font-body font-medium px-8 py-4 rounded-xl tracking-wide text-sm uppercase hover:bg-primary-foreground/10 hover:border-primary-foreground/60 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2"
          >
            Conheça a Comunidade
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-primary-foreground/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{ opacity: useTransform(scrollYProgress, [0, 0.15], [1, 0]) }}
      >
        <span className="font-body text-[10px] tracking-[0.3em] uppercase">Rolar</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-foreground/25 to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
