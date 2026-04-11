import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Planos", href: "#planos" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/10 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <img
          src="https://leonardopages.com/wp-content/uploads/2026/04/logo-vertical-br-color-scaled.png"
          alt="BR AEROPORT 360"
          className="h-10 md:h-12 w-auto"
        />

        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            className="text-sm font-bold px-5 py-2 rounded-lg bg-brand-green hover:bg-brand-green-light text-white transition-all duration-300"
          >
            Começar Agora
          </a>
        </nav>
      </div>
    </motion.header>
  );
};

export default Navbar;
