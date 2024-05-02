"use client"
import React from 'react';
import Login from "@/components/Login";
import Footer from '@/components/Footer';
import { useAuth } from '@/app/context/AuthContext';
import { useRouter } from 'next/navigation';


const loginPage = () => {
    const { isAuthenticated, login, logout } = useAuth();
    const router = useRouter();

    const handleLoginSuccess = (token: string) => {
        login(token);
        router.push('/dashboard')
      };
    return (
        <>
            <Login onLoginSuccess={handleLoginSuccess}/>
            <Footer/>
        </>
    );
};

export default loginPage;