"use client";
import React from "react";
import Login from "@/components/Login";
import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";

const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const router = useRouter();

  const handleLoginSuccess = (token: string) => {
    login(token);
    router.push("/donation");
    // console.log(profile)
  };

  return (
    <>
      <Login onLoginSuccess={handleLoginSuccess} />
    </>
  );
};

export default LoginPage;
