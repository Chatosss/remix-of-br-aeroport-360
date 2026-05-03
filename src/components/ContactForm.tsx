import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating form submission as we don't have a real backend endpoint for mail here
    // In a real scenario, this would post to an API that sends to comercial@braeroport360.com.br
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Mensagem Enviada!",
        description: "Entraremos em contato o mais breve possível.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contato" className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-brand-navy mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ficou com alguma dúvida?
          </motion.h2>
          <motion.p 
            className="text-gray-500 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Nossa equipe técnica está pronta para responder suas perguntas sobre análise de obstáculos e regulamentação aeronáutica.
          </motion.p>
        </div>

        <motion.div 
          className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Nome Completo</label>
              <Input required placeholder="Seu nome" name="name" className="h-12 border-gray-200" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Telefone/WhatsApp</label>
              <Input required placeholder="(00) 00000-0000" name="phone" className="h-12 border-gray-200" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">E-mail</label>
              <Input required type="email" placeholder="seu@email.com" name="email" className="h-12 border-gray-200" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Indicador de Localidade do Aeródromo</label>
              <Input placeholder="Ex: SBFL, SDSC..." name="location" className="h-12 border-gray-200" />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-semibold text-gray-700">Como Podemos te Ajudar?</label>
              <Textarea required placeholder="Descreva sua dúvida ou projeto..." name="message" className="min-h-[120px] border-gray-200" />
            </div>
            <div className="md:col-span-2 pt-4">
              <Button 
                type="submit" 
                className="w-full h-14 text-base font-bold bg-brand-navy hover:bg-brand-navy/90 text-white rounded-xl shadow-lg transition-all duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
