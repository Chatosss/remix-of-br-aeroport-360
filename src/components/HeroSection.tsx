import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const heroBg = "https://leonardopages.com/wp-content/uploads/2026/03/hero-bg-C0UKtHim.jpg";

const AVATARS = [
  { initials: "RC", color: "bg-blue-600" },
  { initials: "AL", color: "bg-emerald-600" },
  { initials: "MF", color: "bg-purple-600" },
  { initials: "JS", color: "bg-orange-600" },
  { initials: "PT", color: "bg-rose-600" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Subtle center glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full opacity-20 blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, #000287 0%, transparent 70%)" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 flex flex-col items-center text-center">
        {/* Trust Badge */}
        <motion.div
          className="flex items-center gap-3 rounded-full border border-white/10 bg-zinc-900/60 backdrop-blur-sm px-4 py-2 mb-8"
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

        {/* Title */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white mb-6"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          O seu projeto ao redor do aeroporto{" "}
          <br className="hidden sm:block" />
          é um obstáculo? Descubra em{" "}
          <span className="text-brand-yellow">milissegundos</span>.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-base md:text-lg text-zinc-400 leading-relaxed mb-10 max-w-3xl mx-auto"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          O BR AEROPORT 360 é a ferramenta essencial para quem opera ou constrói
          no entorno de aeródromos. Análise técnica autônoma, sem necessidade de consultoria externa.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <Button
            size="lg"
            className="h-12 px-8 text-sm font-bold rounded-full text-white shadow-[0_0_30px_hsl(155,100%,35%,0.25)] hover:shadow-[0_0_40px_hsl(155,100%,35%,0.4)] hover:scale-105 transition-all duration-300"
            style={{ background: "#005E37" }}
          >
            Conhecer a plataforma
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-12 px-8 text-sm font-bold rounded-full border-white/20 text-zinc-300 bg-transparent hover:bg-white/5 hover:border-white/30 transition-all duration-300"
          >
            Ver Demonstração
          </Button>
        </motion.div>

        <motion.p
          className="text-xs text-zinc-600 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          Análise técnica autônoma. Sem necessidade de consultoria externa.
        </motion.p>

        {/* Video */}
        <motion.div
          className="w-full max-w-4xl rounded-2xl aspect-video relative group cursor-pointer overflow-hidden border border-white/10 bg-zinc-900/40"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
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
      </div>
    </section>
  );
};

export default HeroSection;
