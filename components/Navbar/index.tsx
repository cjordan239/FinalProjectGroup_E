"use client"

import React from "react";
import { links } from "@/components/lib/data";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";
import Image from "next/image";
import logo from "../Image/logo.png";


const Navbar = () => {

    const { isAuthenticated, login, logout } = useAuth();
    const router = useRouter()
    const handleClick = () => {

        router.push("/login")

    };


    return (
        <nav className="fixed bg-white pt-10 pb-4 flex flex-row items-center justify-between text-center w-full">
            <div className="ml-16">
                <Image
                    style={{
                        width: 'auto',
                        height: '4rem',
                    }}
                    src={logo} alt="Compasstio Logo" />
            </div>

            <div className="mr-16 flex flex-row space-x-7">
                <div className="flex flex-row items-center space-x-7">
                    {links.map(nav => (
                        <button className="font-semibold text-lg text-black capitalize" onClick={() => router.push(nav.hash)} key={nav.name}>
                            {nav.name}
                        </button>
                    ))}
                </div>
                {isAuthenticated
                    ? <button
                        className="bg-black font-semibold text-lg text-white capitalize py-3 px-5 rounded-lg"
                        onClick={logout}
                    >
                        Logout </button>

                    : <button
                        className="bg-black font-semibold text-lg text-white capitalize py-3 px-5 rounded-lg"
                        onClick={handleClick}
                    >
                        Login </button>
                }
            </div>


        </nav>
    );
};

export default Navbar;