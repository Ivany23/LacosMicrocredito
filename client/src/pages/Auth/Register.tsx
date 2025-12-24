import { Navbar } from "@/components/Navbar";
import { useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";
import { Mail, Lock, CheckCircle, ArrowRight, Sparkles } from "lucide-react";

export default function Register() {
    const { register, isRegistering } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        register({ email, password, confirmPassword });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex flex-col">
            <Navbar />
            <div className="flex-1 flex items-center justify-center p-4 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-10 right-10 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse delay-500"></div>

                <div className="w-full max-w-md relative z-10">
                    <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 md:p-10 transform transition-all hover:shadow-3xl">
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-primary rounded-2xl mb-4 shadow-lg">
                                <Sparkles className="w-8 h-8 text-white" />
                            </div>
                            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-primary bg-clip-text text-transparent mb-2">
                                Criar Nova Conta
                            </h1>
                            <p className="text-gray-600">
                                Junte-se a nós em poucos passos
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                    <Mail className="w-4 h-4 text-purple-600" />
                                    Email
                                </label>
                                <div className="relative">
                                    <Input
                                        type="email"
                                        placeholder="seu@email.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="h-12 pl-4 pr-4 bg-white/50 border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 rounded-xl transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                    <Lock className="w-4 h-4 text-purple-600" />
                                    Senha
                                </label>
                                <div className="relative">
                                    <Input
                                        type="password"
                                        placeholder="Mínimo 6 caracteres"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        minLength={6}
                                        className="h-12 pl-4 pr-4 bg-white/50 border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 rounded-xl transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-purple-600" />
                                    Confirmar Senha
                                </label>
                                <div className="relative">
                                    <Input
                                        type="password"
                                        placeholder="Digite a senha novamente"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required
                                        minLength={6}
                                        className="h-12 pl-4 pr-4 bg-white/50 border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 rounded-xl transition-all"
                                    />
                                </div>
                            </div>

                            <Button
                                type="submit"
                                disabled={isRegistering}
                                className="w-full h-12 bg-gradient-to-r from-purple-600 to-primary hover:from-purple-600/90 hover:to-primary/90 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/25 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 mt-6"
                            >
                                {isRegistering ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        Criando conta...
                                    </>
                                ) : (
                                    <>
                                        Criar Conta
                                        <ArrowRight className="w-5 h-5" />
                                    </>
                                )}
                            </Button>
                        </form>

                        <div className="mt-8 text-center">
                            <p className="text-gray-600">
                                Já tem conta?{" "}
                                <Link
                                    href="/login"
                                    className="text-purple-600 font-semibold hover:text-primary transition-colors inline-flex items-center gap-1"
                                >
                                    Faça login
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
