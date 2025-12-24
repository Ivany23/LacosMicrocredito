import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useAuth } from "@/hooks/use-auth";
import { useLoans } from "@/hooks/use-loans";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link, Redirect } from "wouter";
import { Plus, Clock, FileText, CheckCircle2, XCircle, User } from "lucide-react";

export default function Profile() {
  const { user, isLoading: isUserLoading } = useAuth();
  const { loans, isLoading: isLoansLoading } = useLoans();

  if (isUserLoading) return null;
  if (!user) return <Redirect to="/login" />;

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-green-500 hover:bg-green-600">Aprovado</Badge>;
      case "rejected":
        return <Badge variant="destructive">Rejeitado</Badge>;
      default:
        return <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">Em Análise</Badge>;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-display font-bold text-gray-900">Minha Conta</h1>
            <p className="text-gray-500">Gerencie seus pedidos de crédito e informações</p>
          </div>
          <a href="/#inicio">
            <Button className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 gap-2">
              <Plus className="w-4 h-4" /> Solicitar Novo Crédito
            </Button>
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* User Info Card */}
          <Card className="h-fit shadow-md border-gray-100">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                Dados Pessoais
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase">Nome</label>
                <p className="font-medium text-gray-900">{user.fullName}</p>
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500 uppercase">Email</label>
                <p className="font-medium text-gray-900">{user.email}</p>
              </div>
            </CardContent>
          </Card>

          {/* Loans List */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-gray-500" />
              Meus Pedidos de Crédito
            </h2>

            {isLoansLoading ? (
              <div className="space-y-4">
                {[1, 2].map((i) => (
                  <div key={i} className="h-32 bg-gray-200 rounded-xl animate-pulse" />
                ))}
              </div>
            ) : loans && loans.length > 0 ? (
              <div className="grid gap-4">
                {loans.map((loan: any) => (
                  <Card key={loan.id} className="overflow-hidden border-gray-100 hover:shadow-md transition-shadow">
                    <div className="p-6 flex flex-col sm:flex-row justify-between gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm text-gray-500">#{loan.id}</span>
                          {getStatusBadge(loan.status)}
                        </div>
                        <p className="text-2xl font-bold text-gray-900">
                          {Number(loan.amount).toLocaleString()} MTN
                        </p>
                        <p className="text-sm text-gray-600">
                          {loan.months} meses • Total a pagar: {Number(loan.totalPayable).toLocaleString()} MTN
                        </p>
                      </div>

                      <div className="flex items-center text-sm text-gray-500 bg-gray-50 px-4 py-2 rounded-lg h-fit self-start sm:self-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {new Date(loan.createdAt).toLocaleDateString('pt-MZ')}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="border-dashed border-2 border-gray-200 bg-gray-50/50">
                <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <FileText className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Nenhum pedido encontrado</h3>
                  <p className="text-gray-500 max-w-sm mt-2 mb-6">
                    Você ainda não tem pedidos de crédito registrados. Use o simulador para fazer seu primeiro pedido.
                  </p>
                  <a href="/#inicio">
                    <Button>Simular Crédito Agora</Button>
                  </a>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
