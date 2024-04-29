import React from "react";
import { Box, Container, Typography } from '@mui/material';

const About = () => {
  return (
    <>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'row',
          height: '100%',
        }}
        component="main"
        maxWidth="xl"
      >
        <Box
          sx={{
            width: '50%',
            margin: 10,
            boxSizing: 'border-box',
          }}
          component="article"
        >
          <Typography fontWeight={700} mb={3} component="h1" variant="h2">
            About
          </Typography>
          <Typography sx={{ color: 'text.secondary' }} mb={3} component="h2" variant="h6">
            Suheading
          </Typography>
          <Typography mb={3} component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
        </Box>
        <Box
          sx={{
            width: '50%',
            display: 'flex',
            boxSizing: 'border-box',
            alignContent: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            flexWrap: 'wrap'
          }}>
          <Typography
            sx={{
              display: 'flex',
              fontWeight: 700,
              flexDirection: 'row'
            }}
            component="h1"
            variant="h1">
            Insert Promo Image
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default About;