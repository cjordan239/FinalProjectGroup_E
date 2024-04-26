"use client"
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import RegistrationSchema from '../utils/RegistrationSchema';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { TextField, Button, Box, Container, Typography } from '@mui/material';

interface RegistrationData {
    username: string;
    email: string;
    password: string;
}



const Registration = () => {
  
  const router = useRouter()

  const handleSubmit = async (values: RegistrationData) => {
    try {
      const response = await axios.post('/api/register', values);
      console.log(response.data); // Log the response from the server
      response.status === 200 ? router.push('/login') : console.error('Registration failed:', response.data.error)      
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  
  return (
    <Container component="main" maxWidth="xl">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Register for an account
        </Typography>
        <Formik
          initialValues={{ username: '', email: '', password: '' }}
          validationSchema={RegistrationSchema}
          onSubmit={handleSubmit}
          validateOnChange={false} // to not validate when value change
          validateOnBlur={false} // to not validate when it out of focus
        >
          <Form className="mt-8 space-y-6">
            <Box sx={{ mt: 1 }}>
              <Field as={TextField} name="username" type="text" label="Username" fullWidth required />
              <ErrorMessage name="username" component="div" className="text-red-500 text-sm mt-1" />
            </Box>
            <Box sx={{ mt: 1 }}>
              <Field as={TextField} name="email" type="email" label="Email Address" fullWidth required />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
            </Box>
            <Box sx={{ mt: 1 }}>
              <Field as={TextField} name="password" type="password" label="Password" fullWidth required />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
            </Box>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Register
            </Button>
          </Form>
        </Formik>
      </Box>
    </Container>
  );
};

export default Registration;
