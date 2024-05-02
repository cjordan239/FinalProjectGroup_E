"use client"

import React from 'react';
import { links } from '@/components/lib/data';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/context/AuthContext';


const Navbar = () => {
    
    const { isAuthenticated, login, logout } = useAuth();
    console.log(isAuthenticated)
    const router = useRouter()
    const handleClick = () => {  

        router.push('/register')
        
    };


    return (
        <nav className='bg-white py-12 flex items-center justify-between rounded-lg shadow-md '>
            <div className='text-cyan-400 ml-12 font-bold text-2xl font-serif'>
                LOGO
            </div>

            <div className='flex items-center space-x-6 mr-36'>
                {links.map(nav => (
                    <Button href={nav.hash} key={nav.name}>
                        {nav.name}
                    </Button>
                ))}
            </div>
            {isAuthenticated 
            ? <Button
                variant="contained"
                className='text-black mr-12'
                onClick={logout}
            >
                Logout </Button>
            
            : <Button
                variant="contained"
                className='text-black mr-12'
                onClick={handleClick}
            >
                Login </Button> 
            }
            
            
        </nav>
    );
};

export default Navbar;