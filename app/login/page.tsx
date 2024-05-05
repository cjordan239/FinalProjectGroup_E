"use client"
import React from 'react';
import Login from "@/components/Login";
import Footer from '@/components/Footer';
import { useAuth } from '@/app/context/AuthContext';
import { useRouter } from 'next/navigation';


const LoginPage: React.FC = () => {
    const { isAuthenticated, login, logout } = useAuth();
    const router = useRouter();

    const handleLoginSuccess = (token: string) => {
        login(token);
        router.push('/donate')
    };
    return (
        <>
            <Login onLoginSuccess={handleLoginSuccess} />
            <Footer />
        </>
    );
};

export default LoginPage;