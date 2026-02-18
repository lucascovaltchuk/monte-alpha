import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Heart, BookOpen, Users, HandHeart } from "lucide-react";
import communityImg from "@/assets/community.jpg";

const values = [
  {
    icon: BookOpen,
    title: "Palavra de Deus",
    description: "Pregação fiel e comprometida com as Escrituras Sagradas, levando a mensagem de Cristo a todos.",
  },
  {
    icon: Heart,
    title: "Amor ao Próximo",
    description: "Acolhemos cada pessoa com amor, respeito e cuidado, refletindo o amor de Jesus.",
  },
  {
    icon: Users,
    title: "Comunhão",
    description: "Somos uma família em Cristo, fortalecendo laços através da fé e do convívio fraterno.",
  },
  {
    icon: HandHeart,
    title: "Servir",
    description: "Servimos a Deus e à comunidade com dedicação, levando esperança e transformação.",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  return (
    <section id="sobre" ref={sectionRef} className="py-28 bg-background overflow-hidden">
      <div ref={ref} className="container mx-auto px-6">
        {/* Intro with image */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-3 flex items-center gap-3">
              <span className="w-6 h-px bg-primary inline-block" />
              Quem Somos
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Uma Comunidade de{" "}
              <span className="italic text-primary">Fé e Amor</span>
            </h2>
            <div className="section-divider mb-6" style={{ margin: "0 0 1.5rem" }} />
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-5">
              A Monte Alphaville é uma comunidade cristã que existe para proclamar o Evangelho,
              formar discípulos e servir ao próximo. Somos um lugar de acolhimento, onde cada
              pessoa é amada e valorizada por Deus.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Acreditamos na transformação de vidas pela Palavra de Deus e na força da comunhão
              entre irmãos. Venha fazer parte dessa família!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.97 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
            className="relative overflow-hidden rounded-2xl shadow-2xl"
          >
            {/* Parallax image */}
            <div className="overflow-hidden rounded-2xl h-80 md:h-96">
              <motion.img
                src={communityImg}
                alt="Comunidade Monte Alphaville reunida"
                className="w-full h-full object-cover scale-110 hover:scale-115 transition-transform duration-700"
                style={{ y: imgY }}
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 warm-gradient rounded-2xl opacity-20 blur-xl pointer-events-none" />
            <div className="absolute -top-4 -right-4 w-16 h-16 border-2 border-primary/20 rounded-2xl pointer-events-none" />
          </motion.div>
        </div>

        {/* Values */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="bg-card p-7 rounded-2xl border border-border group text-center relative overflow-hidden cursor-default"
            >
              <div className="absolute inset-0 warm-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl" />
              {/* Shine border on hover */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-primary/0 group-hover:ring-primary/20 transition-all duration-500" />
              <div className="w-14 h-14 rounded-xl warm-gradient flex items-center justify-center mb-5 mx-auto group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-300 animate-pulse-glow">
                <value.icon className="text-primary-foreground" size={24} />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
