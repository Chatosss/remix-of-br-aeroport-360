import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  fullName: z.string().min(3, "Nome completo é obrigatório"),
  email: z.string().email("E-mail corporativo inválido").min(1, "E-mail é obrigatório"),
  phone: z.string().min(10, "WhatsApp / Telefone é obrigatório"),
  company: z.string().optional(),
  role: z.string().optional(),
  city: z.string().min(2, "Cidade / UF é obrigatório"),
  plan: z.string().min(1, "Plano de interesse é obrigatório"),
  organizationType: z.string().min(1, "Perfil da organização é obrigatório"),
  teamSize: z.string().min(1, "Campo obrigatório"),
  implementationTime: z.string().min(1, "Campo obrigatório"),
});

interface DemoModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  defaultPlan?: string;
}

const DemoModal = ({ isOpen, onOpenChange, defaultPlan }: DemoModalProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      company: "",
      role: "",
      city: "",
      plan: defaultPlan || "",
      organizationType: "",
      teamSize: "",
      implementationTime: "",
    },
  });

  // Update form plan if defaultPlan changes
  React.useEffect(() => {
    if (defaultPlan) {
      form.setValue("plan", defaultPlan);
    }
  }, [defaultPlan, form]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://braeroport360.com.br/enviar.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          formulario: "Planos",
        }),
      });

      if (response.ok) {
        toast({
          title: "Solicitação Enviada!",
          description: "Nossa equipe entrará em contato para agendar sua demonstração.",
        });
        form.reset();
        onOpenChange(false);
      } else {
        throw new Error("Erro no servidor");
      }
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Ocorreu um problema ao enviar sua solicitação. Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 11) value = value.slice(0, 11);
    
    if (value.length > 10) {
      value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (value.length > 6) {
      value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (value.length > 2) {
      value = value.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
    } else {
      value = value.replace(/^(\d*)/, "($1");
    }
    form.setValue("phone", value);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-brand-navy">Solicitar Demonstração</DialogTitle>
          <DialogDescription>
            Preencha os dados abaixo e entraremos em contato para agendar uma apresentação personalizada.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome completo *</FormLabel>
                    <FormControl>
                      <Input placeholder="Seu nome" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mail corporativo *</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="seu@empresa.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>WhatsApp / Telefone *</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="(00) 00000-0000" 
                        {...field} 
                        onChange={(e) => {
                          field.onChange(e);
                          handlePhoneChange(e);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Empresa / Instituição</FormLabel>
                    <FormControl>
                      <Input placeholder="Nome da empresa" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cargo / Função</FormLabel>
                    <FormControl>
                      <Input placeholder="Seu cargo" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cidade / UF *</FormLabel>
                    <FormControl>
                      <Input placeholder="Ex: Florianópolis / SC" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="plan"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Plano de interesse *</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione um plano" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="AeroProfessional">AeroProfessional</SelectItem>
                        <SelectItem value="AeroGov">AeroGov</SelectItem>
                        <SelectItem value="AeroEnterprise">AeroEnterprise</SelectItem>
                        <SelectItem value="Ainda não sei">Ainda não sei</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="organizationType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Perfil da organização *</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o perfil" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Aeroporto / Operador aeroportuário">Aeroporto / Operador aeroportuário</SelectItem>
                        <SelectItem value="Órgão público">Órgão público</SelectItem>
                        <SelectItem value="Empresa de engenharia / consultoria">Empresa de engenharia / consultoria</SelectItem>
                        <SelectItem value="Outro">Outro</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="teamSize"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Quantas pessoas devem usar? *</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione a quantidade" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1 pessoa">1 pessoa</SelectItem>
                        <SelectItem value="2–5 pessoas">2–5 pessoas</SelectItem>
                        <SelectItem value="6–10 pessoas">6–10 pessoas</SelectItem>
                        <SelectItem value="Mais de 10 pessoas">Mais de 10 pessoas</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="implementationTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Quando pretende implementar? *</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o prazo" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Imediatamente">Imediatamente</SelectItem>
                        <SelectItem value="Nos próximos 3 meses">Nos próximos 3 meses</SelectItem>
                        <SelectItem value="Apenas pesquisando">Apenas pesquisando</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="pt-4">
              <Button 
                type="submit" 
                className="w-full h-12 bg-brand-navy hover:bg-brand-navy/90 text-white font-bold rounded-xl shadow-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Solicitar Demonstração"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default DemoModal;