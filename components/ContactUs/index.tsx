"use client"
import React from "react";
import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import ContactSchema from '../utils/ContactSchema';
import axios from "axios";
import { useRouter } from 'next/navigation';
import { TextField, Button, Box, Container, Typography } from '@mui/material';

interface ContactData {
  name: string;
  email: string;
  message: string;
}

const ContactUs = () => {

  const router = useRouter()

  const handleSubmit = async (values: ContactData) => {
    try {
      const response = await axios.post('/api/contact', values);
      console.log(response.data);
      response.status === 200 ? router.push('/contact') : console.error('Submit failed:', response.data.error)
    } catch (error) {
      console.error('Submit failed:', error);
    }
  };

  return (
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
      >
        <Typography fontWeight={700} mb={3} component="h1" variant="h2">
          Contact Us
        </Typography>
        <Typography sx={{ color: 'text.secondary' }} component="h2" variant="h6">
          Have anything to ask us? Drop your question below and we'll send you an email!
        </Typography>
        <Formik
          initialValues={{ name: '', email: '', message: '', }}
          validationSchema={ContactSchema}
          onSubmit={handleSubmit}
          validateOnChange={false}
          validateOnBlur={false}
          sx={{
            marginTop: 3,
            width: '100%'
          }}
        >
          <Form className="mt-8 space-y-6">
            <Box>
              <Field
                as={TextField}
                name="name"
                type="text"
                label="Name"
                sx={{ width: 1 }}
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </Box>
            <Box>
              <Field
                as={TextField}
                name="email"
                type="email"
                label="Email Address"
                sx={{ width: 1 }}
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </Box>
            <Box>
              <Field
                as={TextField}
                name="message"
                type="text"
                label="Message"
                multiline
                minRows={5}
                sx={{ width: 1 }}
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </Box>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Submit
            </Button>
          </Form>
        </Formik>
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
    </Container >
  );
}

export default ContactUs