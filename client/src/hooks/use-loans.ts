import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

interface Loan {
    id: number;
    amount: number;
    months: number;
    totalPayable: number;
    status: "pending" | "approved" | "rejected";
    createdAt: string;
}

interface CreateLoanData {
    amount: number;
    months: number;
    totalPayable: number;
}

export function useLoans() {
    const { toast } = useToast();
    const [loans, setLoans] = useState<Loan[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isCreating, setIsCreating] = useState(false);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            const user = JSON.parse(storedUser);
            const userLoans = JSON.parse(localStorage.getItem(`loans_${user.email}`) || "[]");
            setLoans(userLoans);
        }
        setIsLoading(false);
    }, []);

    const createLoan = (data: CreateLoanData) => {
        setIsCreating(true);
        setTimeout(() => {
            const storedUser = localStorage.getItem("user");
            if (!storedUser) {
                toast({
                    title: "Erro",
                    description: "Você precisa estar logado para solicitar crédito",
                    variant: "destructive",
                });
                setIsCreating(false);
                return;
            }

            const user = JSON.parse(storedUser);
            const userLoans = JSON.parse(localStorage.getItem(`loans_${user.email}`) || "[]");

            const newLoan: Loan = {
                id: Date.now(),
                amount: data.amount,
                months: data.months,
                totalPayable: data.totalPayable,
                status: "pending",
                createdAt: new Date().toISOString(),
            };

            const updatedLoans = [...userLoans, newLoan];
            localStorage.setItem(`loans_${user.email}`, JSON.stringify(updatedLoans));
            setLoans(updatedLoans);

            toast({
                title: "Pedido enviado com sucesso!",
                description: "Nossa equipe analisará seu pedido em breve.",
            });
            setIsCreating(false);
        }, 800);
    };

    return { loans, isLoading, createLoan, isCreating };
}
