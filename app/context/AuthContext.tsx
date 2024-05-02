"use client"

import React, { createContext, useState, useEffect, useContext} from 'react'
import { AuthContextProps, AuthProviderProps } from '@/app/interface/context';
import {useRouter}  from 'next/navigation';

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const AuthProvider : React.FC <AuthProviderProps>  = ({children}) => {


    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
          setIsAuthenticated(true);
        }
      }, []);

      const login = (token: string) => {
        localStorage.setItem('token', token);
        setIsAuthenticated(true);
      };
    
      const logout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        router.push('/login')
      };
    
    
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
        {children}
    </AuthContext.Provider>
  )
  
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
  };

export default AuthProvider 