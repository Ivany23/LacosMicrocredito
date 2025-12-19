import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Briefcase, Home, GraduationCap, Tractor } from "lucide-react";

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="bg-secondary py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-display font-bold mb-4">Nossos Serviços</h1>
          <p className="text-white/90 max-w-2xl mx-auto">Soluções flexíveis desenhadas para atender às suas necessidades específicas.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12">
          <ServiceRow 
            icon={<Briefcase className="w-12 h-12 text-primary" />}
            title="Crédito para Negócios"
            description="Capital de giro para micro e pequenos empreendedores. Aumente seu estoque, reforme seu estabelecimento ou compre novos equipamentos. Aprovação rápida para não perder oportunidades de negócio."
            features={["De 5.000 a 100.000 MTN", "Prazos até 12 meses", "Sem garantia real"]}
            image="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2874&auto=format&fit=crop"
          />
          
          <ServiceRow 
            icon={<Home className="w-12 h-12 text-primary" />}
            title="Crédito Pessoal & Lar"
            description="Realize pequenas reformas, compre eletrodomésticos ou resolva imprevistos familiares. Um crédito simples, direto na sua conta, para usar como quiser."
            features={["Aprovação em 24h", "Processo 100% digital", "Taxas competitivas"]}
            image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2873&auto=format&fit=crop"
            reversed
          />
          
          <ServiceRow 
            icon={<Tractor className="w-12 h-12 text-primary" />}
            title="Microcrédito Agrícola"
            description="Apoio especial para pequenos agricultores. Financie sementes, fertilizantes e pequenas ferramentas para aumentar sua produção e garantir uma colheita melhor."
            features={["Prazos ajustados à colheita", "Consultoria básica", "Apoio ao campo"]}
            image="https://images.unsplash.com/photo-1625246333195-58197bd47d26?q=80&w=2787&auto=format&fit=crop"
          />
        </div>
        
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Não encontrou o que procura?</h3>
          <Link href="/contact">
            <Button variant="outline" size="lg">Fale com um Consultor</Button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function ServiceRow({ icon, title, description, features, image, reversed = false }: any) {
  return (
    <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100`}>
      <div className="w-full lg:w-1/2">
        <img src={image} alt={title} className="rounded-xl shadow-lg w-full h-64 lg:h-80 object-cover" />
      </div>
      <div className="w-full lg:w-1/2 space-y-6">
        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
          {icon}
        </div>
        <h2 className="text-3xl font-display font-bold text-gray-900">{title}</h2>
        <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
        <ul className="space-y-3">
          {features.map((feature: string, idx: number) => (
            <li key={idx} className="flex items-center text-gray-700 font-medium">
              <span className="w-2 h-2 bg-secondary rounded-full mr-3" />
              {feature}
            </li>
          ))}
        </ul>
        <Link href="/simulator">
          <Button className="mt-4 bg-primary hover:bg-primary/90">
            Simular Este Crédito <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
