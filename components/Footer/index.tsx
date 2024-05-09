import React from 'react';
import { Box, Link } from '@mui/material';
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import logo from "../Image/logo.png";

const Footer = () => {
  return (
    <Box className="w-full bg-white text-black px-16">
      <Box className="flex justify-between items-center border-t-2 pb-12 pt-5">
        <Box className="ml-10 flex flex-row space-x-7">
          <Link href="#" color="inherit" underline="none"><FaFacebook /></Link>
          <Link href="#" color="inherit" underline="none"><FaInstagramSquare /></Link>
          <Link href="#" color="inherit" underline="none"><FaXTwitter /></Link>
        </Box>

        <div className="mr-10">
          <Image
            style={{
              width: 'auto',
              height: '3rem',
            }}
            src={logo} alt="Compasstio Logo" />
        </div>
      </Box>
    </Box>
  );
};

export default Footer;
