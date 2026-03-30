import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import logoWhite from "@/assets/logo-white.png";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with subtle zoom */}
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
      <div className="absolute inset-0 bg-background/80" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(210 100% 56% / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(210 100% 56% / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.img
          src={logoWhite}
          alt="BR AEROPORT 360"
          className="h-20 md:h-28 mx-auto mb-10 opacity-90"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-foreground mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          O seu projeto ao redor do aeroporto é um obstáculo?{" "}
          <span className="gradient-text">Descubra em milissegundos.</span>
        </motion.h1>

        <motion.p
          className="max-w-3xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          O BR AEROPORT 360 é a ferramenta essencial para quem opera ou constrói
          no entorno de aeródromos. Nossa tecnologia gera superfícies de proteção
          precisas a partir dos seus dados de entrada, cruzando informações
          instantaneamente para evitar atrasos burocráticos e falhas humanas.
          Inteligência de dados a serviço da aviação.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button
            size="lg"
            className="h-14 px-10 text-base font-bold rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_30px_hsl(210,100%,56%,0.3)] hover:shadow-[0_0_40px_hsl(210,100%,56%,0.5)] hover:scale-105 transition-all duration-300"
          >
            [ Conhecer a plataforma ]
          </Button>
        </motion.div>

        <motion.p
          className="mt-5 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          Análise técnica autônoma. Sem necessidade de consultoria externa.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
