import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LoanSimulator } from "@/components/LoanSimulator";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle2, ArrowRight, ShieldCheck, Zap, Users, Building2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-primary/90 text-white py-20 lg:py-32 overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute inset-0 bg-primary/20 backdrop-blur-3xl" />
        {/* Unsplash image: Professional finance/office setting */}
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-overlay"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2832&auto=format&fit=crop")' }}
        />
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse" />
                <span className="text-sm font-medium">Aprovação em até 24h</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-display font-bold leading-tight mb-6">
                Financiamento rápido para o futuro de Moçambique
              </h1>
              <p className="text-lg text-gray-200 mb-8 leading-relaxed max-w-xl">
                Créditos acessíveis para empreendedores, trabalhadores e jovens visionários. 
                Sem burocracia complexa, 100% digital e seguro.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/register">
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 py-6 rounded-xl shadow-lg shadow-secondary/25 text-lg">
                    Solicitar Crédito
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline" className="border-white/30 hover:bg-white/10 text-white px-8 py-6 rounded-xl text-lg">
                    Saber Mais
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative z-10"
            >
              <LoanSimulator />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats/Trust Section */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-primary font-display mb-1">+5.000</p>
              <p className="text-gray-600 text-sm">Clientes Satisfeitos</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary font-display mb-1">24h</p>
              <p className="text-gray-600 text-sm">Tempo de Resposta</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary font-display mb-1">100%</p>
              <p className="text-gray-600 text-sm">Processo Digital</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary font-display mb-1">Maputo</p>
              <p className="text-gray-600 text-sm">Sede Principal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Soluções Financeiras Sob Medida</h2>
            <p className="text-gray-600">Oferecemos diversos tipos de crédito adaptados às suas necessidades e sonhos.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Users className="w-10 h-10 text-primary" />}
              title="Crédito Pessoal"
              description="Para despesas inesperadas, educação ou compras pessoais. Taxas justas e prazos flexíveis."
            />
            <ServiceCard 
              icon={<Building2 className="w-10 h-10 text-primary" />}
              title="Microcrédito Negócios"
              description="Impulsione seu pequeno negócio. Capital de giro para comprar estoque ou equipamentos."
            />
            <ServiceCard 
              icon={<Zap className="w-10 h-10 text-primary" />}
              title="Crédito Rápido"
              description="Soluções de emergência com aprovação expressa para quem não pode esperar."
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-secondary/20 rounded-2xl transform -rotate-3"></div>
              {/* Unsplash image: Happy African business people */}
              <img 
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2938&auto=format&fit=crop" 
                alt="Equipe feliz" 
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">Por que escolher o Microcrédito Mais?</h2>
              <div className="space-y-6">
                <BenefitItem title="Transparência Total" description="Sem taxas escondidas. Você sabe exatamente quanto vai pagar desde o início." />
                <BenefitItem title="Segurança Garantida" description="Seus dados são protegidos com a mais alta tecnologia de criptografia." />
                <BenefitItem title="Sem Burocracia" description="Processo 100% online. Adeus às filas e papelada desnecessária." />
                <BenefitItem title="Apoio Local" description="Uma empresa moçambicana que entende a realidade e necessidades do país." />
              </div>
              <div className="mt-8">
                <Link href="/services">
                  <Button variant="outline" className="gap-2">
                    Conheça Nossos Serviços <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Pronto para realizar seus sonhos?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de moçambicanos que já transformaram suas vidas com nosso apoio.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/register">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold px-8 py-6 rounded-xl shadow-lg">
                Abrir Minha Conta Agora
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
      <Link href="/services" className="inline-flex items-center mt-4 text-primary font-semibold hover:text-secondary">
        Saiba mais <ArrowRight className="w-4 h-4 ml-1" />
      </Link>
    </div>
  );
}

function BenefitItem({ title, description }: { title: string, description: string }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 mt-1">
        <CheckCircle2 className="w-6 h-6 text-secondary" />
      </div>
      <div>
        <h4 className="font-bold text-gray-900">{title}</h4>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
      </div>
    </div>
  );
}
