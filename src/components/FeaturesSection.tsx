import { Shield, Globe, Zap } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Shield,
    title: "Rigor Normativo Automatizado",
    text: "Esqueça as inconsistências dos cálculos manuais. Algoritmos de alta precisão baseados estritamente nas normas vigentes para PBZPA e OPEA.",
  },
  {
    icon: Globe,
    title: "Integração com Google Earth",
    text: "Transforme dados abstratos em decisões visuais. Tecnologia de visualização 3D dos seus projetos diretamente no Google Earth.",
  },
  {
    icon: Zap,
    title: "Estudos Inteligentes",
    text: "Velocidade é o nosso DNA. Identifique conflitos, receba diagnósticos de viabilidade e elimine gargalos burocráticos em frações de segundo.",
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
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          Os 3 Pilares
        </motion.h2>
        <motion.p
          className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Tecnologia de ponta aplicada à engenharia aeroportuária
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="rounded-2xl p-8 border border-foreground/10 bg-foreground/5 backdrop-blur-lg shadow-lg shadow-brand-navy/5 hover:border-brand-navy/40 transition-all duration-300 group hover:-translate-y-1"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <motion.div
                className="w-14 h-14 rounded-xl bg-brand-navy/15 flex items-center justify-center mb-6 group-hover:bg-brand-navy/25 transition-colors"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <f.icon className="w-7 h-7 text-brand-yellow" />
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
