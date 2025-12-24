import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function BlogPost1() {
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
                    <div className="text-xs font-bold text-secondary uppercase tracking-wide mb-4">Educação Financeira</div>
                    <h1 className="text-4xl font-display font-bold text-gray-900 mb-6">
                        Como organizar as finanças do seu pequeno negócio
                    </h1>

                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Organizar as finanças é fundamental para o sucesso de qualquer negócio, especialmente para microempreendedores. Aqui estão algumas dicas práticas:
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Separe as contas pessoais das empresariais</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Nunca misture o dinheiro do seu negócio com suas despesas pessoais. Abra uma conta bancária separada para a empresa, mesmo que seja um pequeno negócio. Isso facilita o controle e evita confusões.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Registre todas as entradas e saídas</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Mantenha um caderno ou use aplicativos simples para anotar cada venda e cada despesa. No final do mês, você saberá exatamente quanto ganhou e quanto gastou.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Planeje seus gastos</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Antes de fazer compras para o negócio, faça uma lista do que realmente precisa. Evite compras por impulso que podem comprometer seu capital de giro.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Tenha uma reserva de emergência</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Sempre que possível, guarde uma pequena parte do lucro para emergências. Isso evita que você precise de crédito urgente em situações inesperadas.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Revise suas finanças regularmente</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Dedique um tempo toda semana para revisar suas contas. Isso ajuda a identificar problemas cedo e tomar decisões mais informadas.
                        </p>

                        <div className="bg-blue-50 border-l-4 border-primary p-6 mt-8">
                            <p className="text-gray-700 font-medium">
                                💡 <strong>Dica Extra:</strong> Se precisar de crédito para o seu negócio, planeje bem como vai usar o dinheiro e certifique-se de que consegue pagar as parcelas sem comprometer as operações do dia a dia.
                            </p>
                        </div>
                    </div>
                </article>
            </div>

            <Footer />
        </div>
    );
}
