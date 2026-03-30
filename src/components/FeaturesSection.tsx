import { Shield, Globe, Zap } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Rigor Normativo Automatizado",
    text: "Esqueça as inconsistências dos cálculos manuais. O BR AEROPORT 360 executa algoritmos de alta precisão baseados estritamente nas normas vigentes para a construção de planos de proteção e projetos de OPEA. Segurança jurídica e técnica em cada coordenada.",
  },
  {
    icon: Globe,
    title: "Integração Avançada com Google Earth",
    text: "Transforme dados abstratos em decisões visuais. Nossa tecnologia permite a visualização 3D dos seus projetos diretamente no Google Earth, permitindo enxergar a interação real entre as edificações e as superfícies limitadoras de obstáculos com clareza geográfica total.",
  },
  {
    icon: Zap,
    title: "Estudos Aeronáuticos Inteligentes",
    text: "Velocidade é o nosso DNA. Além de gerar a PBZPA instantaneamente, o sistema realiza estudos direcionados para os problemas específicos de cada projeto. Identifique conflitos, receba diagnósticos de viabilidade e elimine gargalos burocráticos em frações de segundo.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Os 3 Pilares
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Tecnologia de ponta aplicada à engenharia aeroportuária
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="glass-card rounded-2xl p-8 hover:border-primary/40 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <f.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">
                {f.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {f.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
