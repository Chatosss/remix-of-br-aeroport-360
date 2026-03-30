import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="glass-card rounded-3xl p-12 md:p-16 border-primary/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(210,100%,56%,0.06),transparent_70%)]" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Pronto para eliminar a incerteza dos seus projetos aeroportuários?
            </h2>
            <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
              Junte-se aos operadores que já utilizam a tecnologia mais rápida do
              Brasil para análise de obstáculos e PBZPA.
            </p>
            <Button
              size="lg"
              className="h-14 px-12 text-base font-bold rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_30px_hsl(210,100%,56%,0.3)] hover:shadow-[0_0_40px_hsl(210,100%,56%,0.5)] transition-all duration-300"
            >
              [ Começar Agora ]
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
