import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { motion } from "framer-motion";

const plans = [
  {
    name: "MENSAL",
    price: "25.000",
    period: "/mês",
    subtitle: "Projetos Pontuais",
    detail: null,
    cta: "Assinar Plano Mensal",
    featured: false,
  },
  {
    name: "SEMESTRAL",
    discount: "-20%",
    price: "20.000",
    period: "/mês",
    subtitle: "Continuidade Técnica",
    detail: "Parcela única de R$ 120.000,00",
    cta: "Assinar Plano Semestral",
    featured: false,
  },
  {
    name: "ANUAL",
    discount: "-60%",
    price: "9.900",
    period: "/mês",
    subtitle: null,
    detail: "Pagamento único de R$ 118.800,00",
    extra: "6 meses de bonificação no valor total.",
    cta: "Garantir Licença Anual",
    featured: true,
  },
];

const PricingSection = () => {
  const [annual, setAnnual] = useState(true);

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-brand-navy"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          Escolha o plano que acompanha a evolução dos seus projetos.
        </motion.h2>
        <motion.p
          className="text-center text-gray-500 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Todos os recursos da plataforma disponíveis desde o primeiro dia.
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-3 mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="text-sm text-gray-500">Mensal</span>
          <Switch checked={annual} onCheckedChange={setAnnual} />
          <span className="text-sm text-gray-800 font-semibold">Anual</span>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 backdrop-blur-xl ${
                p.featured
                  ? "bg-white border-2 border-brand-red/30 shadow-[0_0_40px_hsl(0,100%,23%,0.1)] scale-[1.03] md:scale-105 ring-1 ring-brand-yellow/20"
                  : "bg-white/70 border border-gray-200/60 shadow-lg shadow-gray-200/30 hover:bg-white/90 hover:border-gray-300/60"
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              {p.featured && (
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.4 }}
                >
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-red text-white px-4 py-1 text-xs font-bold border-0">
                    Opção 1 (recomendada)
                  </Badge>
                </motion.div>
              )}

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg font-bold text-gray-800">{p.name}</h3>
                  {p.discount && (
                    <Badge variant="outline" className="text-brand-navy border-brand-navy/40 text-[10px]">
                      {p.discount}
                    </Badge>
                  )}
                </div>
                {p.subtitle && (
                  <p className="text-xs text-gray-500">{p.subtitle}</p>
                )}
              </div>

              <div className="mb-2">
                <span className="text-4xl font-black text-gray-800">R$ {p.price}</span>
                <span className="text-sm text-gray-500">,00 {p.period}</span>
              </div>

              {p.detail && (
                <p className="text-xs text-gray-500 mb-2">{p.detail}</p>
              )}
              {p.extra && (
                <p className="text-xs text-brand-green mb-4 leading-relaxed">{p.extra}</p>
              )}

              <div className="mt-auto pt-6">
                <Button
                  className={`w-full h-12 font-bold rounded-xl transition-all duration-300 hover:scale-[1.03] ${
                    p.featured
                      ? "bg-brand-red hover:bg-brand-red/90 text-white shadow-[0_0_20px_hsl(0,100%,23%,0.3)]"
                      : "bg-brand-navy hover:bg-brand-navy/90 text-white"
                  }`}
                >
                  {p.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-14 bg-white/70 backdrop-blur-xl border border-gray-200/60 shadow-lg shadow-gray-200/30 rounded-2xl p-8 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-sm text-gray-500 leading-relaxed">
            O custo de um embargo por erro pode custar{" "}
            <span className="text-brand-red font-semibold">50x o valor desta assinatura</span>.
            O BR AEROPORT 360 é o seu seguro contra falhas humanas.{" "}
            <span className="text-gray-400">Condições exclusivas para V1.0.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
