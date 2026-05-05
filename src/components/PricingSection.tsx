import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { User, Users, Globe, BarChart3, Building2, ShieldCheck } from "lucide-react";
import DemoModal from "./DemoModal";

const PricingSection = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const handleOpenDemo = (plan: string) => {
    setSelectedPlan(plan);
    setIsDemoModalOpen(true);
  };

  return (
    <section id="planos" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-brand-navy"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Escolha o plano que acompanha a evolução dos seus projetos.
        </motion.h2>
        <motion.p
          className="text-center text-gray-500 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Todos os recursos da plataforma disponíveis desde o primeiro dia.
        </motion.p>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {/* CARD 1 - AeroProfissional */}
          <motion.div
            className="flex flex-col bg-white rounded-3xl border-2 border-blue-100 p-8 shadow-xl shadow-blue-50/50"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <BarChart3 className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">AeroProfissional: Produtividade Individual</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Emita laudos técnicos com rapidez e reduza o retrabalho desde o primeiro projeto.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <User className="w-5 h-5 text-blue-500" />
                <span>Público: Consultores independentes</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Users className="w-5 h-5 text-blue-500" />
                <span>Acesso: Individual</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Globe className="w-5 h-5 text-blue-500" />
                <span>Abrangência: Por Usuário</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 mb-8 mt-auto">
              <span className="text-xs text-gray-400 font-medium block mb-1">Investimento Profissional:</span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black text-gray-900">R$ 15.000</span>
                <span className="text-sm text-gray-500">/ mês</span>
              </div>
              <p className="text-[10px] text-gray-400 leading-tight mt-2">
                Valor inicial para acesso ao motor de análise e relatórios técnicos exclusivos.
              </p>
            </div>

            <Button 
              className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl tracking-wider uppercase"
              onClick={() => window.open("https://wa.me/5511999999999", "_blank")}
            >
              COMEÇAR AGORA
            </Button>
          </motion.div>

          {/* CARD 2 - AeroGov */}
          <motion.div
            className="flex flex-col bg-white rounded-3xl border-2 border-emerald-100 p-8 shadow-xl shadow-emerald-50/50"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-emerald-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Building2 className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">AeroGov: Gestão Territorial Municipal</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Transforme dados aeronáuticos em decisões seguras para o planejamento urbano e proteção jurídica.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Building2 className="w-5 h-5 text-emerald-500" />
                <span>Público: Prefeituras</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Users className="w-5 h-5 text-emerald-500" />
                <span>Acesso: Multi-usuários</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Globe className="w-5 h-5 text-emerald-500" />
                <span>Abrangência: Municipal</span>
              </div>
            </div>

            <div className="flex-grow"></div>

            <Button 
              className="w-full h-14 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl tracking-wider uppercase"
              onClick={() => handleOpenDemo("AeroGov")}
            >
              AGENDAR DEMONSTRAÇÃO
            </Button>
          </motion.div>

          {/* CARD 3 - AeroEnterprise */}
          <motion.div
            className="flex flex-col bg-white rounded-3xl border-2 border-purple-100 p-8 shadow-xl shadow-purple-50/50"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-purple-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <ShieldCheck className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">AeroEnterprise: Proteção Sistêmica</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Evite riscos operacionais e prejuízos milionários com inteligência estratégica em larga escala.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <ShieldCheck className="w-5 h-5 text-purple-500" />
                <span>Público: Corporações</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Users className="w-5 h-5 text-purple-500" />
                <span>Acesso: Integração Total</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Globe className="w-5 h-5 text-purple-500" />
                <span>Abrangência: Nacional</span>
              </div>
            </div>

            <div className="bg-purple-50/50 border border-purple-100 rounded-2xl p-6 mb-4 mt-auto">
              <h4 className="text-sm font-bold text-purple-900 mb-2">Integração Total e SLA Prioritário:</h4>
              <p className="text-xs text-purple-800 leading-relaxed">
                Abrangência nacional com suporte prioritário e relatórios executivos para múltiplos aeroportos.
              </p>
            </div>

            <div className="px-1 mb-8">
              <span className="text-xs font-bold text-gray-700">Soluções Sob Medida:</span>
              <span className="text-xs text-gray-500 ml-1">Preço customizado conforme a necessidade de integração e escala da organização.</span>
            </div>

            <Button 
              className="w-full h-14 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl tracking-wider uppercase"
              onClick={() => handleOpenDemo("AeroEnterprise")}
            >
              FALAR COM CONSULTOR
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="mt-14 bg-white/70 backdrop-blur-xl border border-gray-200/60 shadow-lg shadow-gray-200/30 rounded-2xl p-8 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-sm text-gray-500 leading-relaxed">
            O custo de um atraso por não conformidade evitável pode ser até{" "}
            <span className="text-brand-red font-semibold">50x o valor desta assinatura</span>.
            O BR AEROPORT 360 foi criado para poupar seu tempo e evitar que problemas previsíveis atrasem o seu processo.
          </p>
        </motion.div>
      </div>
      <DemoModal 
        isOpen={isDemoModalOpen} 
        onOpenChange={setIsDemoModalOpen} 
        defaultPlan={selectedPlan} 
      />
    </section>
  );
};

export default PricingSection;
