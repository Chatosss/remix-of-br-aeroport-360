import { Keyboard, Zap, FileText } from "lucide-react";

const steps = [
  {
    icon: Keyboard,
    num: "01",
    title: "Configuração do Aeródromo",
    text: "Nossa interface intuitiva permite que você configure os parâmetros do seu aeródromo em poucos cliques, sem necessidade de cálculos manuais complexos.",
  },
  {
    icon: Zap,
    num: "02",
    title: "Processamento Inteligente em Milissegundos",
    text: "O motor do BR AEROPORT 360 gera a PBZPA e analisa interferências cruzando instantaneamente seus dados com as normas OPEA.",
  },
  {
    icon: FileText,
    num: "03",
    title: "Visualização 3D e Diagnóstico",
    text: "Receba o diagnóstico completo. Visualize a interação em 3D no ambiente real e obtenha a base técnica necessária para a viabilização do seu empreendimento.",
  },
];

const StepsSection = () => {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
          Da inserção de dados ao relatório final em{" "}
          <span className="gradient-text">3 passos simples</span>
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-16">
            {steps.map((s, i) => (
              <div
                key={s.num}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  i % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1 text-center md:text-left">
                  <span className="text-5xl font-black text-primary/20">
                    {s.num}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mt-2 mb-3">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {s.text}
                  </p>
                </div>

                {/* Center node */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center shrink-0">
                  <s.icon className="w-7 h-7 text-primary" />
                </div>

                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
