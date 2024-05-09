"use client"
import React from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import { Button, Box, Container, Typography } from '@mui/material';
import hungerFree from "../Image/hungerFree.svg"

const Home = () => {

  const router = useRouter()
  const handleClick = () => {
    router.push('/about')
  };

  return (
    <>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          boxSizing: 'border-box',
          alignContent: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          flexWrap: 'wrap',
          paddingTop: "7.5rem",
          minHeight: "90vh",
        }}
        component="main"
        maxWidth="xl"
      >
        <Box
          sx={{
            width: '100%',
            height: 'auto'
          }}>
          <Image
            style={{
              width: '100%',
              height: 'auto',
            }}
            src={hungerFree} alt="Free Hunger" />
        </Box>

        <Box
          sx={{
            width: '100%',
            padding: '10rem 0'
          }}
        >
          <Typography fontWeight={700} mb={3} component="h1" variant="h2">
            Toward a Hunger-Free World
          </Typography>
          <Typography sx={{ color: 'text.secondary' }} mb={3} component="h2" variant="h6">
            Build Awareness and Action
          </Typography>
          <Button
            variant="contained"
            onClick={handleClick}
          >
            More Information
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Home;
