import { Instagram, Youtube, Linkedin, Mail, Phone, MapPin, ShieldCheck } from "lucide-react";
import logoColor from "@/assets/logo-color.png";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img src={logoColor} alt="BR AEROPORT 360" className="h-24 w-auto mb-4" />
            <p className="text-xs text-gray-500 leading-relaxed uppercase tracking-wide">
              BR AEROPORT TECNOLOGIA E INOVAÇÃO LTDA
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-gray-800 mb-4">Contato</h4>
            <a href="mailto:comercial@braeroport360.com.br" className="flex items-center gap-2 text-sm text-gray-500 hover:text-brand-navy transition-colors">
              <Mail className="w-4 h-4" /> comercial@braeroport360.com.br
            </a>
            <a href="https://wa.me/5548992232756" className="flex items-center gap-2 text-sm text-gray-500 hover:text-brand-navy transition-colors">
              <Phone className="w-4 h-4" /> (48) 99223-2756
            </a>
            <div className="flex items-start gap-2 text-sm text-gray-500">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <span>Av. Prefeito Osmar Cunha, n° 416, Sala 1108, Centro, Florianópolis – SC - CEP: 88.015-100</span>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-bold text-gray-800 mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a href="https://instagram.com/braeroport360" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg bg-white/70 backdrop-blur-xl border border-gray-200/60 shadow-sm flex items-center justify-center text-gray-500 hover:text-brand-navy transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://youtube.com/@BRAEROPORT360" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg bg-white/70 backdrop-blur-xl border border-gray-200/60 shadow-sm flex items-center justify-center text-gray-500 hover:text-brand-navy transition-all">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/braeroport" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-lg bg-white/70 backdrop-blur-xl border border-gray-200/60 shadow-sm flex items-center justify-center text-gray-500 hover:text-brand-navy transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <ShieldCheck className="w-4 h-4 text-brand-green" />
            Ambiente Seguro. Desenvolvido por especialistas em engenharia aeroportuária para profissionais de alta performance.
          </div>
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} BR AEROPORT 360. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
