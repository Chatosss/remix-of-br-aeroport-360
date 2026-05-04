import { Keyboard, Zap, FileText } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: Keyboard,
    num: "01",
    title: "Configuração do Aeródromo",
    text: "Configure os parâmetros do aeródromo em poucos cliques.",
  },
  {
    icon: Zap,
    num: "02",
    title: "Processamento Inteligente",
    text: "O motor do sistema cruza instantaneamente seus dados com as normas vigentes.",
  },
  {
    icon: FileText,
    num: "03",
    title: "Visualização e Diagnóstico",
    text: "Visualize a interação em 3D no ambiente real e exporte seus relatórios.",
  },
];

const StepsSection = () => {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-brand-navy"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          Gestão Aeroportuária: Do Dado à Decisão em 3 Passos
        </motion.h2>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200" />

          <div className="space-y-16">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  i % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <div className="flex-1 bg-white/70 backdrop-blur-xl border border-gray-200/60 shadow-lg shadow-gray-200/30 rounded-2xl p-6">
                  <span className="text-5xl font-black text-brand-navy/20">
                    {s.num}
                  </span>
                  <h3 className="text-xl font-bold text-gray-800 mt-2 mb-3">
                    {s.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {s.text}
                  </p>
                </div>

                <motion.div
                  className="relative z-10 w-16 h-16 rounded-full bg-brand-navy/10 border-2 border-brand-navy/30 flex items-center justify-center shrink-0 backdrop-blur-sm"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ type: "spring", stiffness: 200, delay: i * 0.15 + 0.2 }}
                  whileHover={{ scale: 1.15 }}
                >
                  <s.icon className="w-7 h-7 text-brand-navy" />
                </motion.div>

                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
