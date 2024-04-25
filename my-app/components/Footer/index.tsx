import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { FaFacebook, FaInstagramSquare  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'black', color: 'white', p: 2, position: 'fixed', bottom: 0, width: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h4" sx={{bgcolor: 'grey'}}>
          Logo
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Link href="#" color="inherit" underline="none"><FaFacebook /></Link>
          <Link href="#" color="inherit" underline="none"><FaInstagramSquare /></Link>
          <Link href="#" color="inherit" underline="none"><FaXTwitter /></Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
