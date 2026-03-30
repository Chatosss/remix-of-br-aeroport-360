import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Os cálculos do sistema seguem quais normas?",
    a: "Baseado rigorosamente em ICA 11-3, ICA 63-19 e RBAC 154.",
  },
  {
    q: "Preciso instalar algum software?",
    a: "Não. Sistema 100% Cloud (SaaS).",
  },
  {
    q: "Como funciona a integração 3D?",
    a: "Geração de arquivos KML/KMZ compatíveis com Google Earth.",
  },
  {
    q: "O software é atualizado?",
    a: "Sim, atualizações normativas automáticas inclusas para assinantes ativos.",
  },
  {
    q: "Posso exportar relatórios?",
    a: "Sim, diagnósticos técnicos detalhados para instrução de processos e viabilidade.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-foreground">
          FAQ Técnico
        </h2>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="glass-card rounded-xl px-6 border-border/50"
            >
              <AccordionTrigger className="text-foreground text-left font-semibold hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
