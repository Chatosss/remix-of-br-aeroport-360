const NAV_LINKS = [
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Planos", href: "#planos" },
  { label: "FAQ", href: "#faq" },
];

import { useState } from "react";
import { Button } from "@/components/ui/button";
import DemoModal from "./DemoModal";

const Navbar = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <div className="fixed top-6 inset-x-0 flex justify-center z-[100] pointer-events-none w-full">
      <nav className="pointer-events-auto flex items-center justify-center gap-8 bg-zinc-900/80 backdrop-blur-md border border-white/10 rounded-full px-8 py-4 shadow-xl">
        <a href="#" aria-label="BR AEROPORT 360" className="shrink-0 flex items-center justify-center bg-white rounded-full w-12 h-12">
          <img
            src="https://leonardopages.com/wp-content/uploads/2026/04/logo-vertical-br-color-scaled.png"
            alt="BR AEROPORT 360"
            className="h-8 w-auto"
          />
        </a>

        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-base font-medium text-zinc-400 transition-all duration-200 hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <Button
          onClick={() => setIsDemoModalOpen(true)}
          className="rounded-full bg-brand-green px-6 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:bg-brand-green-light border-none h-auto"
        >
          Começar Agora
        </Button>
      </nav>
      <DemoModal 
        isOpen={isDemoModalOpen} 
        onOpenChange={setIsDemoModalOpen} 
      />
    </div>
  );
};

export default Navbar;
