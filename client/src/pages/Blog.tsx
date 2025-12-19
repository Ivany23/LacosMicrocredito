import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function Blog() {
  const posts = [
    {
      title: "Como organizar as finanças do seu pequeno negócio",
      date: "12 de Outubro, 2023",
      category: "Educação Financeira",
      excerpt: "Dicas práticas para separar as contas pessoais das empresariais e garantir a saúde do seu empreendimento.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2936&auto=format&fit=crop"
    },
    {
      title: "5 Dicas para ser aprovado no seu pedido de crédito",
      date: "25 de Setembro, 2023",
      category: "Crédito",
      excerpt: "Entenda o que as instituições financeiras avaliam na hora de conceder um empréstimo pessoal ou empresarial.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop"
    },
    {
      title: "O impacto do microcrédito na economia moçambicana",
      date: "10 de Agosto, 2023",
      category: "Economia",
      excerpt: "Como pequenos empréstimos estão transformando comunidades e criando oportunidades de emprego em todo o país.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-display font-bold mb-4">Blog & Dicas</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">Conteúdo educativo para ajudar você a cuidar melhor do seu dinheiro.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 flex flex-col">
              <div className="h-48 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-xs font-bold text-secondary uppercase tracking-wide mb-2">{post.category}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4 flex-1 text-sm">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                  <span className="text-xs text-gray-400">{post.date}</span>
                  <Button variant="link" className="text-primary p-0 h-auto">Ler Mais</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
