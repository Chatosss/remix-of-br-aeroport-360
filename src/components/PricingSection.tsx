import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";

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
    discount: "20% OFF",
    price: "20.000",
    period: "/mês",
    subtitle: "Continuidade Técnica",
    detail: "Parcela única de R$ 120.000,00",
    cta: "Assinar Plano Semestral",
    featured: false,
  },
  {
    name: "ANUAL",
    discount: "60% OFF",
    price: "9.900",
    period: "/mês",
    subtitle: null,
    detail: "Pagamento único de R$ 118.800,00",
    extra:
      "O valor anual total é menor que o semestral, oferecendo 6 meses de bonificação.",
    cta: "Garantir Licença Anual",
    featured: true,
  },
];

const PricingSection = () => {
  const [annual, setAnnual] = useState(true);

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Escolha o plano que acompanha o ritmo dos seus projetos
        </h2>
        <p className="text-center text-muted-foreground mb-10">
          Licenciamento completo com todas as funcionalidades inclusas.
        </p>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-3 mb-14">
          <span className="text-sm text-muted-foreground">Mensal</span>
          <Switch checked={annual} onCheckedChange={setAnnual} />
          <span className="text-sm text-foreground font-semibold">Anual</span>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 ${
                p.featured
                  ? "glass-card border-primary/60 shadow-[0_0_40px_hsl(210,100%,56%,0.15)] scale-[1.03] md:scale-105"
                  : "glass-card hover:border-primary/30"
              }`}
            >
              {p.featured && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 text-xs font-bold">
                  MAIS VANTAJOSO
                </Badge>
              )}

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg font-bold text-foreground">
                    {p.name}
                  </h3>
                  {p.discount && (
                    <Badge
                      variant="outline"
                      className="text-primary border-primary/40 text-[10px]"
                    >
                      {p.discount}
                    </Badge>
                  )}
                </div>
                {p.subtitle && (
                  <p className="text-xs text-muted-foreground">{p.subtitle}</p>
                )}
              </div>

              <div className="mb-2">
                <span className="text-4xl font-black text-foreground">
                  R$ {p.price}
                </span>
                <span className="text-sm text-muted-foreground">,00 {p.period}</span>
              </div>

              {p.detail && (
                <p className="text-xs text-muted-foreground mb-2">
                  {p.detail}
                </p>
              )}
              {p.extra && (
                <p className="text-xs text-primary/80 mb-4 leading-relaxed">
                  {p.extra}
                </p>
              )}

              <div className="mt-auto pt-6">
                <Button
                  className={`w-full h-12 font-bold rounded-xl transition-all duration-300 ${
                    p.featured
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_hsl(210,100%,56%,0.3)]"
                      : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                  }`}
                >
                  {p.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* ROI trigger */}
        <div className="mt-14 glass-card rounded-2xl p-8 text-center max-w-3xl mx-auto">
          <p className="text-sm text-muted-foreground leading-relaxed">
            O custo de um embargo por erro de PBZPA pode custar{" "}
            <span className="text-foreground font-semibold">
              50x o valor desta assinatura
            </span>
            . O BR AEROPORT 360 é o seu seguro contra falhas humanas. Condições
            exclusivas para os primeiros licenciamentos da Versão 1.0. Valor
            sujeito a reajuste conforme atualizações normativas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
