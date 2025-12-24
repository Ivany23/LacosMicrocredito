import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function BlogPost2() {
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
                    <div className="text-xs font-bold text-secondary uppercase tracking-wide mb-4">Crédito</div>
                    <h1 className="text-4xl font-display font-bold text-gray-900 mb-6">
                        5 Dicas para ser aprovado no seu pedido de crédito
                    </h1>

                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Solicitar crédito pode parecer complicado, mas seguindo estas dicas você aumenta suas chances de aprovação:
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Tenha seus documentos em ordem</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Certifique-se de ter seu BI (Bilhete de Identidade) válido e comprovante de residência atualizado. Documentos organizados demonstram seriedade e facilitam a análise.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Peça apenas o que realmente precisa</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Não solicite um valor maior do que você necessita. Quanto menor o valor, mais fácil a aprovação e menor será o compromisso mensal com as parcelas.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Escolha um prazo adequado à sua realidade</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Avalie sua capacidade de pagamento mensal. É melhor escolher um prazo que permita pagar as parcelas confortavelmente do que se comprometer demais.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Seja honesto nas informações</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Forneça informações verdadeiras sobre sua renda e situação financeira. Mentir pode resultar na recusa do crédito e prejudicar futuras solicitações.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Tenha um plano claro para usar o dinheiro</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Saiba exatamente como vai usar o crédito. Se for para o negócio, explique como o investimento vai ajudar a aumentar sua renda. Isso demonstra responsabilidade.
                        </p>

                        <div className="bg-green-50 border-l-4 border-green-500 p-6 mt-8">
                            <p className="text-gray-700 font-medium">
                                ✅ <strong>Lembre-se:</strong> O crédito é uma ferramenta para alcançar objetivos, não uma solução para problemas financeiros. Use com responsabilidade!
                            </p>
                        </div>
                    </div>
                </article>
            </div>

            <Footer />
        </div>
    );
}
