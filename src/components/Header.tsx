import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoMonte from "@/assets/logo-monte.jpg";

const navItems = [
  { label: "Início", to: "/" },
  { label: "Quem Somos", to: "/sobre" },
  { label: "Refúgio para a Fé", to: "/refugio" },
  { label: "Programação", to: "/programacao" },
  { label: "Dízimos", to: "/dizimos" },
  { label: "Contato", to: "/contato" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass shadow-lg shadow-foreground/10 py-0"
          : "bg-transparent border-b border-transparent py-0"
      }`}
    >
      <div
        className={`container mx-auto flex items-center justify-between px-6 transition-all duration-500 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="relative"
          >
            <img
              src={logoMonte}
              alt="Logo Monte Alphaville"
              className={`rounded-full object-cover transition-all duration-500 ring-2 ring-primary/30 group-hover:ring-primary/70 ${
                scrolled ? "w-9 h-9" : "w-11 h-11"
              }`}
            />
            <span className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
          <div className="hidden sm:block overflow-hidden">
            <motion.span
              className={`font-display font-bold text-primary-foreground tracking-wide block transition-all duration-500 ${
                scrolled ? "text-lg" : "text-xl"
              }`}
            >
              MONTE{" "}
              <span className="text-primary">ALPHAVILLE</span>
            </motion.span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                onMouseEnter={() => setHoveredItem(item.to)}
                onMouseLeave={() => setHoveredItem(null)}
                className="relative px-3 py-2 group"
              >
                {/* Hover background pill */}
                <AnimatePresence>
                  {hoveredItem === item.to && !isActive && (
                    <motion.span
                      layoutId="nav-hover"
                      className="absolute inset-0 rounded-lg bg-primary-foreground/8"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    />
                  )}
                </AnimatePresence>

                <span
                  className={`relative z-10 text-xs font-body font-semibold tracking-[0.12em] uppercase transition-colors duration-200 ${
                    isActive
                      ? "text-primary"
                      : "text-primary-foreground/70 group-hover:text-primary-foreground"
                  }`}
                >
                  {item.label}
                </span>

                {/* Active indicator */}
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute bottom-0.5 left-3 right-3 h-0.5 warm-gradient rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}

          {/* Divider */}
          <span className="w-px h-5 bg-primary-foreground/20 mx-2" />

          {/* Instagram */}
          <motion.a
            href="https://www.instagram.com/montealphaville/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.12, rotate: 5 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-primary-foreground/8 hover:bg-primary/20 text-primary-foreground/70 hover:text-primary transition-colors duration-200"
          >
            <Instagram size={17} />
          </motion.a>
        </nav>

        {/* Mobile burger */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors duration-200"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                <X size={20} />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                <Menu size={20} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden glass border-t border-primary/10"
          >
            <div className="flex flex-col py-6 px-6 gap-1">
              {navItems.map((item, i) => {
                const isActive = location.pathname === item.to;
                return (
                  <motion.div
                    key={item.to}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.055, duration: 0.25 }}
                  >
                    <Link
                      to={item.to}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-body font-semibold tracking-widest uppercase transition-all duration-200 ${
                        isActive
                          ? "bg-primary/15 text-primary"
                          : "text-primary-foreground/70 hover:bg-primary-foreground/8 hover:text-primary-foreground"
                      }`}
                    >
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      )}
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}

              <div className="border-t border-primary-foreground/10 mt-3 pt-4">
                <a
                  href="https://www.instagram.com/montealphaville/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-body text-primary-foreground/60 hover:text-primary hover:bg-primary/10 transition-all duration-200"
                >
                  <Instagram size={17} />
                  <span className="tracking-widest uppercase font-semibold">Instagram</span>
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
