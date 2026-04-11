import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const heroBg = "https://leonardopages.com/wp-content/uploads/2026/03/hero-bg-C0UKtHim.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <motion.img
        src={heroBg}
        alt=""
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
      />
      {/* Navy overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(0, 2, 135, 0.80)" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(240 98% 65% / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(240 98% 65% / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight text-white mb-6">
            O seu projeto ao redor do aeroporto é um{" "}
            <span className="text-brand-red">obstáculo</span>?{" "}
            Descubra em{" "}
            <span className="border-b-2 border-brand-yellow text-brand-yellow">milissegundos</span>.
          </h1>

          <p className="text-base md:text-lg text-white/70 leading-relaxed mb-8 max-w-xl">
            O BR AEROPORT 360 é a ferramenta essencial para quem opera ou constrói
            no entorno de aeródromos. Nossa tecnologia gera superfícies de proteção
            precisas a partir dos seus dados de entrada, cruzando informações
            instantaneamente para evitar atrasos burocráticos e falhas humanas.
          </p>

          {/* Buttons side by side */}
          <div className="flex flex-wrap gap-4 mb-4">
            <Button
              size="lg"
              className="h-14 px-10 text-base font-bold rounded-xl text-white shadow-[0_0_30px_hsl(155,100%,35%,0.3)] hover:shadow-[0_0_40px_hsl(155,100%,35%,0.5)] hover:scale-105 transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #005E37, #02753F)",
              }}
            >
              [ Conhecer a plataforma ]
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-10 text-base font-bold rounded-xl border-white/30 text-white/90 bg-transparent hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              [ Ver Demonstração ]
            </Button>
          </div>
          <p className="text-sm text-white/50">
            Análise técnica autônoma. Sem necessidade de consultoria externa.
          </p>
        </motion.div>

        {/* Right: Video */}
        <motion.div
          className="w-full glass-card rounded-2xl aspect-video relative group cursor-pointer overflow-hidden"
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        >
          <img
            src={heroBg}
            alt="Vídeo de apresentação"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-20 h-20 rounded-full bg-brand-red/80 backdrop-blur-sm flex items-center justify-center shadow-[0_0_40px_hsl(0,100%,23%,0.4)] group-hover:bg-brand-red/90 transition-colors"
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Play className="w-8 h-8 text-white ml-1" />
            </motion.div>
          </div>
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <p className="text-sm text-white/60 font-medium">
              Assista à demonstração da plataforma
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
