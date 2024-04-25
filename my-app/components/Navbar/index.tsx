import React from 'react';
import { links } from '@/components/lib/data';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';

const Navbar = () => {

    const router = useRouter()
    const handleClick = () => {  

        router.push('/register')
        
    };

    return (
        <nav className='bg-white py-12 flex items-center justify-between '>
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

            <Button
                variant="contained"
                className='text-black mr-12'
                onClick={handleClick}
            >
                Login
            </Button>
        </nav>
    );
};

export default Navbar;