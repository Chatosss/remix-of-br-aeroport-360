import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { BarChart3, Zap, ShieldCheck } from "lucide-react";

const counters = [
  { icon: BarChart3, value: 5000, prefix: "+", suffix: "", label: "Projetos Analisados" },
  { icon: Zap, value: 0.5, prefix: "", suffix: " seg", label: "Segundos por Análise", decimals: 1 },
  { icon: ShieldCheck, value: 100, prefix: "", suffix: "%", label: "Compliance Normativo" },
];

function AnimatedNumber({ value, prefix, suffix, decimals = 0, inView }: { value: number; prefix: string; suffix: string; decimals?: number; inView: boolean }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      setDisplay(Math.min(value, increment * step));
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span className="text-4xl md:text-5xl font-black text-brand-navy">
      {prefix}{decimals > 0 ? display.toFixed(decimals) : Math.round(display).toLocaleString("pt-BR")}{suffix}
    </span>
  );
}

const CountersSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section ref={ref} className="py-16 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {counters.map((c, i) => (
            <motion.div
              key={c.label}
              className="text-center glass-card rounded-2xl p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <c.icon className="w-8 h-8 text-brand-navy mx-auto mb-3" />
              <AnimatedNumber
                value={c.value}
                prefix={c.prefix}
                suffix={c.suffix}
                decimals={c.decimals}
                inView={inView}
              />
              <p className="mt-2 text-sm text-muted-foreground font-medium">{c.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountersSection;
