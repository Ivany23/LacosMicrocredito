import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { type InsertLoan } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";

export function useLoans() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: loans, isLoading } = useQuery({
    queryKey: [api.loans.list.path],
    queryFn: async () => {
      const res = await fetch(api.loans.list.path, { credentials: "include" });
      if (res.status === 401) return null;
      if (!res.ok) throw new Error("Failed to fetch loans");
      return api.loans.list.responses[200].parse(await res.json());
    },
  });

  const createLoanMutation = useMutation({
    mutationFn: async (data: InsertLoan) => {
      const res = await fetch(api.loans.create.path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        credentials: "include",
      });

      if (!res.ok) throw new Error("Erro ao solicitar crédito");
      return api.loans.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [api.loans.list.path] });
      toast({
        title: "Pedido enviado com sucesso!",
        description: "Nossa equipe analisará seu pedido em breve.",
      });
    },
    onError: (error) => {
      toast({
        title: "Erro",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  return {
    loans,
    isLoading,
    createLoan: createLoanMutation.mutate,
    isCreating: createLoanMutation.isPending,
  };
}
