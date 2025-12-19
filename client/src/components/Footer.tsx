import { Link } from "wouter";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-primary p-1.5 rounded-lg">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                MICROCRÉDITO MAIS
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Impulsionando o futuro de Moçambique com soluções financeiras rápidas, seguras e transparentes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg mb-6">Links Rápidos</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-gray-400 hover:text-primary transition-colors">Sobre Nós</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-primary transition-colors">Nossos Serviços</Link></li>
              <li><Link href="/simulator" className="text-gray-400 hover:text-primary transition-colors">Simulador</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-primary transition-colors">Blog & Dicas</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-primary transition-colors">Fale Conosco</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg mb-6">Serviços</h3>
            <ul className="space-y-4">
              <li><Link href="/services" className="text-gray-400 hover:text-primary transition-colors">Crédito Pessoal</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-primary transition-colors">Microcrédito Agrícola</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-primary transition-colors">Empreendedores</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-primary transition-colors">Consolidação de Dívidas</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Av. 24 de Julho, Nº 1500, Maputo, Moçambique</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+258 84 123 4567</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>info@microcreditomais.mz</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Microcrédito Mais. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
