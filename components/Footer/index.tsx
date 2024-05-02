import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { FaFacebook, FaInstagramSquare  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <Box className="fixed bottom-0 w-full bg-black text-white p-2">
      <Box className="flex justify-between items-center">
        <Typography variant="h4">
          Logo
        </Typography>
        <Box className = "flex gap-4">
          <Link href="#" color="inherit" underline="none"><FaFacebook /></Link>
          <Link href="#" color="inherit" underline="none"><FaInstagramSquare /></Link>
          <Link href="#" color="inherit" underline="none"><FaXTwitter /></Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
