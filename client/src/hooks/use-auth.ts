import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "wouter";

interface User {
  email: string;
  fullName: string;
}

interface LoginData {
  email: string;
  password: string;
}

interface RegisterData {
  email: string;
  password: string;
  confirmPassword: string;
}

export function useAuth() {
  const { toast } = useToast();
  const [, setLocation] = useLocation();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = (data: LoginData) => {
    setIsLoggingIn(true);
    setTimeout(() => {
      const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
      const foundUser = storedUsers.find(
        (u: any) => u.email === data.email && u.password === data.password
      );

      if (foundUser) {
        const userData = { email: foundUser.email, fullName: foundUser.fullName };
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
        toast({
          title: "Bem-vindo de volta!",
          description: `Olá, ${foundUser.fullName}`,
        });
        setLocation("/profile");
      } else {
        toast({
          title: "Erro de autenticação",
          description: "Email ou senha incorretos",
          variant: "destructive",
        });
      }
      setIsLoggingIn(false);
    }, 800);
  };

  const register = (data: RegisterData) => {
    setIsRegistering(true);
    setTimeout(() => {
      if (data.password !== data.confirmPassword) {
        toast({
          title: "Erro no registro",
          description: "As senhas não coincidem",
          variant: "destructive",
        });
        setIsRegistering(false);
        return;
      }

      const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
      if (storedUsers.some((u: any) => u.email === data.email)) {
        toast({
          title: "Erro no registro",
          description: "Email já registrado",
          variant: "destructive",
        });
        setIsRegistering(false);
        return;
      }

      const newUser = {
        email: data.email,
        password: data.password,
        fullName: data.email.split("@")[0],
      };

      storedUsers.push(newUser);
      localStorage.setItem("users", JSON.stringify(storedUsers));
      toast({
        title: "Conta criada!",
        description: "Faça login para continuar.",
      });
      setLocation("/login");
      setIsRegistering(false);
    }, 800);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    setLocation("/");
    toast({
      title: "Sessão encerrada",
      description: "Até logo!",
    });
  };

  return { user, isLoading, login, isLoggingIn, register, isRegistering, logout };
}
