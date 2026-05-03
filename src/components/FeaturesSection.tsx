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
    title: "Visualização 3D Integrada",
    text: "Transforme dados abstratos em decisões visuais. Tecnologia de visualização 3D dos seus projetos diretamente no Google Earth.",
  },
  {
    icon: Zap,
    title: "Estudos Inteligentes",
    text: "Velocidade é o nosso DNA. Identifique conflitos, receba diagnósticos de viabilidade e elimine gargalos burocráticos em frações de segundo.",
  },
];

const getInitial = (i: number) => {
  if (i === 0) return { x: -50, opacity: 0 };
  if (i === 1) return { y: 50, opacity: 0 };
  return { x: 50, opacity: 0 };
};

const FeaturesSection = () => {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-brand-navy"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          Tecnologia que transforma análises aeronáuticas em produtividade.
        </motion.h2>
        <motion.p
          className="text-center text-gray-500 mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Três pilares fundamentais para o sucesso do seu projeto
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="bg-white/70 backdrop-blur-xl border border-gray-200/60 shadow-lg shadow-gray-200/30 rounded-2xl p-8 group hover:-translate-y-1 hover:bg-white/90 hover:border-gray-300/60 transition-all duration-300"
              initial={getInitial(i)}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <motion.div
                className="w-14 h-14 rounded-xl bg-brand-navy/10 flex items-center justify-center mb-6 group-hover:bg-brand-navy/20 transition-colors"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <f.icon className="w-7 h-7 text-brand-navy" />
              </motion.div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                {f.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm">
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
