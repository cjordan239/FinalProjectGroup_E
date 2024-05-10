"use client"
import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import Image from "next/image";
import freeFood from "../Image/freeFood.jpg";

const About = () => {

  const router = useRouter()
  const handleClick = () => {
    router.push("/donation")
  };



  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
          alignItems: "center",
          paddingTop: "7.5rem",
          minHeight: "90vh",
        }}
        component="main"
        maxWidth="xl"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
          component="article">
          <Box
            sx={{
              width: "50%",
              margin: "7rem 2rem",
              boxSizing: "border-box",
            }}
            component="div"
          >
            <Typography fontWeight={700} mb={3} component="h1" variant="h2">
              About Compasstio
            </Typography>
            <Typography sx={{ color: "text.secondary" }} mb={3} component="h2" variant="h6">
              combat hunger through donations and small actions
            </Typography>
            <Typography mb={3} component="p">
              At Compasstio, we are passionate about addressing one of the most pressing challenges of our time: hunger. Every day, millions of people around the world struggle to access enough nutritious food to lead healthy and active lives. With your support, we strive to create a world where no one goes to bed hungry.
            </Typography>
          </Box>

          <Box
            sx={{
              width: "50%",
              display: "flex",
              boxSizing: "border-box",
              alignContent: "center",
              justifyContent: "center",
              textAlign: "center",
              flexWrap: "wrap",
              margin: "0 2rem",
            }}>
            <Image
              style={{
                width: 'auto',
                height: '90%',
                borderRadius: "10px"
              }}
              src={freeFood} alt="Free Food" />
          </Box>
        </Box>

        <Box
          sx={{
            width: "80%",
            padding: "3rem 10rem 3rem 0",
            margin: "2rem 0",
            boxSizing: "border-box",
          }}
          component="section"
        >
          <Typography fontWeight={700} mb={3} component="h1" variant="h3">
            We have Noble Goals
          </Typography>
          <Typography mb={3} component="p">
            Hunger is a multifaceted issue with profound implications for individuals, communities, and societies as a whole. Our planet has provided us with tremendous resources, but unequal access and inefficient handling leaves millions of people malnourished. Moreover, malnutrition undermines children's ability to learn and thrive, robbing them of the opportunity to reach their full potential. By addressing hunger, we can unlock the door to a brighter future for generations to come.
          </Typography>
        </Box>

        <Box
          sx={{
            width: "80%",
            padding: "3rem 0 3rem 10rem",
            margin: "2rem 0",
            boxSizing: "border-box",
            textAlign: "right"
          }}
          component="section"
        >
          <Typography fontWeight={700} mb={3} component="h1" variant="h3">
            Get Involved with Us
          </Typography>
          <Typography mb={3} component="p">
            Join us in our mission to end hunger and build a brighter future for all. Whether you're interested in volunteering, fundraising, or spreading awareness, there are countless ways to make a difference. Together, we can create a world where every person has access to nutritious food and the opportunity to thrive.
          </Typography>
          <Button variant="contained" endIcon={<KeyboardDoubleArrowRightOutlinedIcon />} onClick={handleClick}>
            Donate Now
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default About;