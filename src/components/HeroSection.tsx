import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import DemoModal from "./DemoModal";

const heroBg = "https://leonardopages.com/wp-content/uploads/2026/03/hero-bg-C0UKtHim.jpg";

const AVATARS = [
  { initials: "RC", color: "bg-blue-600" },
  { initials: "AL", color: "bg-emerald-600" },
  { initials: "MF", color: "bg-purple-600" },
  { initials: "JS", color: "bg-orange-600" },
  { initials: "PT", color: "bg-rose-600" },
];

const HeroSection = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-zinc-950/85 to-zinc-950" />

      {/* Ambient glow behind title - subtle */}
      <div
        className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full opacity-20 blur-[100px] pointer-events-none"
        style={{ background: "radial-gradient(circle, #000287 0%, transparent 70%)" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-44 pb-40 flex flex-col items-center text-center gap-8">
        {/* 1 - Trust Badge */}
        <motion.div
          className="flex items-center gap-3 rounded-full border border-white/10 bg-zinc-900/60 backdrop-blur-sm px-4 py-2"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex -space-x-2">
            {AVATARS.map((a, i) => (
              <Avatar key={i} className="h-7 w-7 border-2 border-zinc-900">
                <AvatarFallback className={`${a.color} text-[10px] font-bold text-white`}>
                  {a.initials}
                </AvatarFallback>
              </Avatar>
            ))}
          </div>
          <span className="text-xs font-medium text-zinc-400">
            + de 5.000 projetos analisados
          </span>
        </motion.div>

        {/* 2 - Title */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Segurança para quem opera, clareza para quem constrói,{" "}
          <br className="hidden sm:block" />
          análise aeronáutica em <span className="text-brand-yellow drop-shadow-[0_0_18px_rgba(252,193,0,0.55)]">segundos</span>.
        </motion.h1>

        {/* 3 - Subtitle */}
        <motion.p
          className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-3xl mx-auto"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          O BR AEROPORT 360 é a ferramenta essencial para quem opera ou constrói no entorno de aeródromos. 
          Mais produtividade, menos retrabalho: verifique obstáculos, superfícies e requisitos regulatórios de forma automática e imediata.
        </motion.p>

        {/* 4 - Video */}
        <motion.div
          className="w-full max-w-4xl rounded-2xl aspect-video relative group cursor-pointer overflow-hidden border border-white/10 bg-zinc-900/40 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
        >
          <img
            src={heroBg}
            alt="Vídeo de apresentação"
            className="absolute inset-0 w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:bg-white/15 transition-colors"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Play className="w-6 h-6 text-white ml-0.5" />
            </motion.div>
          </div>
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <p className="text-xs text-zinc-500 font-medium">
              Assista à demonstração da plataforma
            </p>
          </div>
        </motion.div>

        {/* 5 - Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <a href="#funcionalidades">
            <Button
              size="lg"
              className="h-12 px-8 text-sm font-bold rounded-full bg-brand-green text-white shadow-[0_0_20px_rgba(0,94,55,0.4)] hover:shadow-[0_0_35px_rgba(0,94,55,0.6)] hover:scale-105 transition-all duration-300"
            >
              Conhecer a plataforma
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </a>
        </motion.div>
      </div>
      <DemoModal 
        isOpen={isDemoModalOpen} 
        onOpenChange={setIsDemoModalOpen} 
      />

      {/* Bottom fade gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black/50 pointer-events-none" />
    </section>
  );
};

export default HeroSection;
