import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import logoColor from "@/assets/logo-color.png";
import heroBg from "@/assets/hero-bg.jpg";

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
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/85" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(240 98% 65% / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(240 98% 65% / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <motion.img
          src={logoColor}
          alt="BR AEROPORT 360"
          className="h-20 md:h-28 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column */}
          <div>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black leading-tight tracking-tight text-foreground mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              O seu projeto ao redor do aeroporto é um{" "}
              <span className="text-brand-red">obstáculo</span>?{" "}
              Descubra em{" "}
              <span className="border-b-2 border-brand-yellow">milissegundos</span>.
            </motion.h1>

            <motion.p
              className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8"
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
                className="h-14 px-10 text-base font-bold rounded-xl bg-brand-green hover:bg-brand-green-light text-foreground shadow-[0_0_30px_hsl(155,100%,35%,0.3)] hover:shadow-[0_0_40px_hsl(155,100%,35%,0.5)] hover:scale-105 transition-all duration-300"
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

          {/* Right Column - Video Placeholder */}
          <motion.div
            className="glass-card rounded-2xl aspect-video relative group cursor-pointer overflow-hidden"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <img
              src={heroBg}
              alt="Vídeo de apresentação"
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-20 h-20 rounded-full bg-brand-red/80 backdrop-blur-sm flex items-center justify-center shadow-[0_0_40px_hsl(0,100%,23%,0.4)] group-hover:bg-brand-red/90 transition-colors"
                whileHover={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Play className="w-8 h-8 text-foreground ml-1" />
              </motion.div>
            </div>
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <p className="text-sm text-muted-foreground font-medium">
                Assista à demonstração da plataforma
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
