"use client"

import React from "react";
import { links } from "@/components/lib/data";
import { Button} from "@mui/material";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";


const Navbar = () => {

    const { isAuthenticated, login, logout } = useAuth();
    const router = useRouter()
    const handleClick = () => {

        router.push("/register")

    };


    return (
        <nav className="py-12 flex flex-row items-center justify-between text-center">
            <div className="ml-16">
                <p className="font-bold text-2xl font-serif text-black">LOGO</p>
            </div>

            <div className="mr-16 flex flex-row space-x-7">
                <div className="flex flex-row items-center space-x-7">
                    {links.map(nav => (
                        <Button href={nav.hash} key={nav.name}>
                            {nav.name}
                        </Button>
                    ))}
                </div>
                {isAuthenticated
                    ? <Button
                        variant="contained"
                        onClick={logout}
                    >
                        Logout </Button>

                    : <Button
                        variant="contained"
                        onClick={handleClick}
                    >
                        Login </Button>
                }
            </div>


        </nav>
    );
};

export default Navbar;