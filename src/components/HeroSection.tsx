import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import logoColor from "@/assets/logo-color.png";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
      {/* Lighter overlay to show image */}
      <div className="absolute inset-0 bg-background/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(240 98% 27% / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(240 98% 27% / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-10">
        <motion.img
          src={logoColor}
          alt="BR AEROPORT 360"
          className="h-24 md:h-36 mx-auto mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-foreground mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          O seu projeto ao redor do aeroporto é um{" "}
          <span className="text-brand-yellow">obstáculo</span>?{" "}
          <span className="gradient-text-navy">Descubra em milissegundos.</span>
        </motion.h1>

        <motion.p
          className="max-w-3xl mx-auto text-base md:text-lg text-foreground/70 leading-relaxed mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          O BR AEROPORT 360 é a ferramenta essencial para quem opera ou constrói
          no entorno de aeródromos. Nossa tecnologia gera superfícies de proteção
          precisas a partir dos seus dados de entrada, cruzando informações
          instantaneamente para evitar atrasos burocráticos e falhas humanas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button
            size="lg"
            className="h-14 px-10 text-base font-bold rounded-xl bg-brand-green hover:bg-brand-green-light text-foreground shadow-[0_0_30px_hsl(155,100%,18%,0.3)] hover:shadow-[0_0_40px_hsl(155,100%,18%,0.5)] hover:scale-105 transition-all duration-300"
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

        {/* Video Placeholder */}
        <motion.div
          className="mt-14 mx-auto max-w-3xl aspect-video rounded-2xl overflow-hidden border-2 border-border/60 bg-card/80 backdrop-blur-sm relative group cursor-pointer"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        >
          <img
            src={heroBg}
            alt="Vídeo de apresentação"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-20 h-20 rounded-full bg-brand-red/90 flex items-center justify-center shadow-[0_0_40px_hsl(0,100%,23%,0.4)] group-hover:bg-brand-red transition-colors"
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Play className="w-8 h-8 text-foreground ml-1" />
            </motion.div>
          </div>
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <p className="text-sm text-foreground/80 font-medium">
              Assista à demonstração da plataforma
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
