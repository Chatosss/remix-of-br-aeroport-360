import { Shield, Globe, Zap } from "lucide-react";
import { motion } from "framer-motion";

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
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Os 3 Pilares
        </motion.h2>
        <motion.p
          className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Tecnologia de ponta aplicada à engenharia aeroportuária
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="glass-card rounded-2xl p-8 hover:border-primary/40 transition-all duration-300 group hover:-translate-y-1"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <motion.div
                className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <f.icon className="w-7 h-7 text-primary" />
              </motion.div>
              <h3 className="text-xl font-bold mb-4 text-foreground">
                {f.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {f.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
