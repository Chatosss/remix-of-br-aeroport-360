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
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div
        className={`flex items-center gap-2 rounded-full border border-white/10 bg-zinc-900/80 backdrop-blur-md px-8 py-4 shadow-lg shadow-black/20 transition-all duration-300 ${
          scrolled ? "border-white/15" : ""
        }`}
      >
        {/* Logo */}
        <img
          src="https://leonardopages.com/wp-content/uploads/2026/04/logo-vertical-br-color-scaled.png"
          alt="BR AEROPORT 360"
          className="h-8 w-auto mr-4"
        />

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-medium text-zinc-400 hover:text-white px-4 py-2 rounded-full hover:bg-white/5 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href="#contato"
          className="ml-4 text-sm font-bold px-6 py-2.5 rounded-full bg-brand-green hover:bg-brand-green-light text-white transition-all duration-300"
        >
          Começar Agora
        </a>
      </div>
    </motion.header>
  );
};

export default Navbar;
