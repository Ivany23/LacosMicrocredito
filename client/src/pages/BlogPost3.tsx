import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function BlogPost3() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Navbar />

            <div className="bg-primary py-12 text-white">
                <div className="container mx-auto px-4">
                    <Link href="/blog">
                        <Button variant="ghost" className="text-white hover:bg-white/10 mb-4">
                            <ArrowLeft className="w-4 h-4 mr-2" /> Voltar ao Blog
                        </Button>
                    </Link>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16 max-w-4xl">
                <article className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                    <div className="text-xs font-bold text-secondary uppercase tracking-wide mb-4">Economia</div>
                    <h1 className="text-4xl font-display font-bold text-gray-900 mb-6">
                        O papel do microcrédito no desenvolvimento de Moçambique
                    </h1>

                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-600 leading-relaxed mb-6">
                            O microcrédito tem se mostrado uma ferramenta poderosa para o desenvolvimento econômico em países emergentes, incluindo Moçambique.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">O que é microcrédito?</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Microcrédito são pequenos empréstimos destinados a pessoas que não têm acesso ao sistema bancário tradicional. Esses créditos permitem que empreendedores iniciem ou expandam pequenos negócios.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Benefícios para a comunidade</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Quando um pequeno empreendedor recebe crédito e consegue fazer seu negócio crescer, toda a comunidade se beneficia. Mais empregos são criados, produtos e serviços ficam mais acessíveis, e a economia local se fortalece.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Empoderamento econômico</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            O microcrédito dá às pessoas a oportunidade de serem donas do seu próprio destino financeiro. Em vez de depender apenas de um emprego, elas podem criar suas próprias fontes de renda.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Desafios e responsabilidades</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            É importante lembrar que o crédito deve ser usado com responsabilidade. Antes de solicitar, faça um plano de negócio simples e certifique-se de que conseguirá pagar as parcelas.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">O futuro do microcrédito em Moçambique</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Com a digitalização dos serviços financeiros, o acesso ao microcrédito está se tornando mais fácil e rápido. Isso significa mais oportunidades para empreendedores em todo o país.
                        </p>

                        <div className="bg-blue-50 border-l-4 border-primary p-6 mt-8">
                            <p className="text-gray-700 font-medium">
                                🌍 <strong>Impacto Social:</strong> O microcrédito não é apenas sobre dinheiro - é sobre dar às pessoas as ferramentas para construir um futuro melhor para si mesmas e suas famílias.
                            </p>
                        </div>
                    </div>
                </article>
            </div>

            <Footer />
        </div>
    );
}
