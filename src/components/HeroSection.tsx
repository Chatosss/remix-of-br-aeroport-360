import { Button } from "@/components/ui/button";
import logoWhite from "@/assets/logo-white.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(210,100%,56%,0.08),transparent_70%)]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(210 100% 56% / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(210 100% 56% / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <img
          src={logoWhite}
          alt="BR AEROPORT 360"
          className="h-20 md:h-28 mx-auto mb-10 opacity-90"
        />

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-foreground mb-6">
          O seu projeto ao redor do aeroporto é um obstáculo?{" "}
          <span className="gradient-text">Descubra em milissegundos.</span>
        </h1>

        <p className="max-w-3xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed mb-10">
          O BR AEROPORT 360 é a ferramenta essencial para quem opera ou constrói
          no entorno de aeródromos. Nossa tecnologia gera superfícies de proteção
          precisas a partir dos seus dados de entrada, cruzando informações
          instantaneamente para evitar atrasos burocráticos e falhas humanas.
          Inteligência de dados a serviço da aviação.
        </p>

        <Button
          size="lg"
          className="h-14 px-10 text-base font-bold rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_30px_hsl(210,100%,56%,0.3)] hover:shadow-[0_0_40px_hsl(210,100%,56%,0.5)] transition-all duration-300"
        >
          [ Conhecer a plataforma ]
        </Button>

        <p className="mt-5 text-sm text-muted-foreground">
          Análise técnica autônoma. Sem necessidade de consultoria externa.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
