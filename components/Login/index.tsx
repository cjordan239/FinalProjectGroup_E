"use client"

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {useRouter}  from 'next/navigation';
import LoginSchema from '../utils/LoginSchema';
import axios from 'axios';
import { TextField, Button, Box, Container, Typography, Grid } from '@mui/material';

interface LoginData {
    email: string;
    password: string;
}

const Login= () => {
  
  const router = useRouter()

  const handleSubmit = async (values: LoginData) => {
    try {
      const response = await axios.post('https://groupebackendrevou-development.up.railway.app/login', values);
      console.log(response.data); // Log the response from the server
      response.status === 200 
      ? router.push('/dashboard') 
      : console.error('Login failed:', response.data.error && router.push('/login')); // redirect to dasboard if succed login else console eror and refresh the page
    
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
  
    <Container component="main" maxWidth="lg">
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={6}>
          <Typography variant="h2" align="center">
            Hero text
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              bgcolor: 'background.paper',
              overflow: 'hidden',
              borderRadius: '12px',
              boxShadow: 1,
              p: 3,
              mt: 8,
            }}
          >
            <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
              Log In
            </Typography>
            <Formik
              initialValues={{ email: '', password: '' }}
              validationSchema={LoginSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                <Box sx={{ mt: 1, mb: 2 }}>
                  <Field as={TextField} name="email" type="email" label="Email or Phone Number" fullWidth required />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                </Box>
                <Box sx={{ mt: 1, mb: 2 }}>
                  <Field as={TextField} name="password" type="password" label="Password" fullWidth required />
                  <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                </Box>
                <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 2, mb: 2 }}>
                  Log In
                </Button>
              </Form>
            </Formik>
          </Box>
        </Grid>
      </Grid>
    </Container>
    
  );
};

export default Login;
