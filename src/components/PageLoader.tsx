import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import logoMonte from "@/assets/logo-monte.jpg";

const PageLoader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-foreground"
        >
          {/* Glow blob */}
          <div className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl bg-primary animate-pulse" />

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative flex flex-col items-center gap-6"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary/30 blur-xl animate-pulse scale-150" />
              <img
                src={logoMonte}
                alt="Monte Alphaville"
                className="relative w-20 h-20 rounded-full object-cover border-2 border-primary/50 shadow-2xl"
              />
            </div>

            <div className="text-center">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="font-display text-3xl font-bold text-primary-foreground tracking-wide"
              >
                MONTE <span className="text-primary italic">ALPHAVILLE</span>
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="font-body text-xs tracking-[0.3em] uppercase text-primary-foreground/50 mt-1"
              >
                Comunidade Cristã
              </motion.p>
            </div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="w-40 h-0.5 bg-primary-foreground/10 rounded-full overflow-hidden"
            >
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.4, delay: 0.8, ease: "easeInOut" }}
                className="h-full warm-gradient rounded-full"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
