import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          className="glass-card rounded-3xl p-12 md:p-16 border-brand-red/20 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(0,100%,23%,0.06),transparent_70%)]" />
          <div className="relative z-10">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6 text-brand-navy"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Pronto para eliminar a incerteza dos seus projetos aeroportuários?
            </motion.h2>
            <motion.p
              className="text-muted-foreground mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Junte-se aos operadores que já utilizam a tecnologia mais rápida do
              Brasil para análise de obstáculos e PBZPA.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button
                size="lg"
                className="h-14 px-12 text-base font-bold rounded-xl bg-brand-green hover:bg-brand-green-light text-white shadow-[0_0_30px_hsl(155,100%,18%,0.25)] hover:shadow-[0_0_40px_hsl(155,100%,18%,0.4)] hover:scale-105 transition-all duration-300"
              >
                [ Começar Agora ]
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
