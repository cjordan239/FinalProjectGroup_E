"use client"
import React from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import { Button, Box, Container, Typography } from '@mui/material';
import hungerFree from "../Image/hungerFree.svg"

const Home = () => {

  const router = useRouter()

  const moreClick = () => {
    router.push('/about')
  };


  const donateClick = () => {
    router.push('/donation')
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
          paddingTop: "8rem",
          minHeight: "90vh",
        }}
        component="main"
        maxWidth="xl"
      >
        <Box
          sx={{
            width: '100%',
            height: 'auto',
          }}>
          <Image
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '35vh',
              objectFit: 'fill'
            }}
            src={hungerFree} alt="Free Hunger" />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
          component="article"
        >
          <Box
            sx={{
              width: "50%",
              margin: "5rem 2rem",
              boxSizing: "border-box",
              textAlign: "right",
            }}
            component="div"
          >
            <Typography fontWeight={700} mb={3} component="h1" variant="h3">
              Towards a Hunger-Free World
            </Typography>
            <Typography mb={3} component="p">
              Compasstio, where every donation makes a difference in the fight against hunger. Together, we can build a world where no one goes to bed hungry. Explore our website to learn more about our mission and how you can get involved.
            </Typography>
            <Button
              variant="contained"
              onClick={moreClick}
            >
              More on Us
            </Button>
          </Box>

          <Box
            sx={{
              width: "50%",
              margin: "5rem 2rem",
              boxSizing: "border-box",
              textAlign: "left",
            }}
            component="div"
          >
            <Typography fontWeight={700} mb={3} component="h1" variant="h3">
              Take Action Today
            </Typography>
            <Typography mb={3} component="p">
              Ready to make a difference? Join us in the fight against hunger by making a donation today. Your contribution will directly impact the lives of those in need and help create a brighter future for communities around the world.
            </Typography>
            <Button
              variant="contained"
              onClick={donateClick}
            >
              Donate Now
            </Button>
          </Box>

        </Box>
      </Container>
    </>
  );
};

export default Home;
