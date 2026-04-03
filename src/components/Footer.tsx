import { Instagram, Youtube, Linkedin, Mail, Phone, MapPin, ShieldCheck } from "lucide-react";
import logoColor from "@/assets/logo-color.png";

const Footer = () => {
  return (
    <footer className="border-t border-white/[0.08] bg-white/[0.03] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img src={logoColor} alt="BR AEROPORT 360" className="h-14 mb-4" />
            <p className="text-xs text-muted-foreground leading-relaxed uppercase tracking-wide">
              BR AEROPORT SOLUÇÕES TECNOLÓGICAS E INOVAÇÃO LTDA
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-foreground mb-4">Contato</h4>
            <a href="mailto:comercial@braeroport360.com.br" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-brand-navy transition-colors">
              <Mail className="w-4 h-4" /> comercial@braeroport360.com.br
            </a>
            <a href="https://wa.me/5528992577697" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-brand-navy transition-colors">
              <Phone className="w-4 h-4" /> (28) 99257-7697
            </a>
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <span>Pref. Osmar Cunha, 416, Sala 1108 - Florianópolis, Centro - CEP: 88015-100, SC.</span>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-bold text-foreground mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a href="https://instagram.com/braeroport360" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-brand-navy transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://youtube.com/@BRAEROPORT360" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-brand-navy transition-all">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/braeroport" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-brand-navy transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.08] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <ShieldCheck className="w-4 h-4 text-brand-green" />
            Ambiente Seguro. Desenvolvido por especialistas em engenharia aeroportuária para profissionais de alta performance.
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} BR AEROPORT 360. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
