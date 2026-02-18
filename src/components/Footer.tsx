import { Instagram, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Início", to: "/" },
  { label: "Quem Somos", to: "/sobre" },
  { label: "Refúgio para a Fé", to: "/refugio" },
  { label: "Programação", to: "/programacao" },
  { label: "Dízimos", to: "/dizimos" },
  { label: "Contato", to: "/contato" },
];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-foreground border-t border-primary-foreground/10 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <p className="font-display text-2xl font-bold text-primary-foreground tracking-wide mb-3">
              MONTE <span className="text-primary">ALPHAVILLE</span>
            </p>
            <p className="font-body text-xs text-primary-foreground/40 leading-relaxed max-w-xs">
              Uma comunidade cristã de fé, amor e comunhão. Alphaville, São Paulo.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-4">Navegação</p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-body text-sm text-primary-foreground/50 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-4">Redes Sociais</p>
            <a
              href="https://www.instagram.com/montealphaville"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-foreground/50 hover:text-primary transition-colors group"
            >
              <div className="w-9 h-9 border border-primary-foreground/20 rounded-lg flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
                <Instagram size={17} />
              </div>
              <span className="font-body text-sm">@montealphaville</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-primary-foreground/10">
          <p className="font-body text-xs text-primary-foreground/30">
            © 2026 Monte Alphaville. Todos os direitos reservados.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 border border-primary-foreground/20 rounded-lg flex items-center justify-center text-primary-foreground/40 hover:text-primary hover:border-primary transition-all duration-300"
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
