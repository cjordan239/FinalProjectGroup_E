"use client"

import React from 'react';
import { Formik, Form, Field, ErrorMessage, useFormik} from 'formik';
import {useRouter}  from 'next/navigation';
import { loginUser } from '@/app/api/authApi';
import LoginSchema from '../utils/LoginSchema';
import { LoginData, LoginFormProps } from '@/app/interface/user';
import { TextField, Button, Box, Container, Typography, Grid } from '@mui/material';


const Login: React.FC<LoginFormProps> = ( { onLoginSuccess } ) => {

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: async (values: LoginData) => {
      try {
        const response = await loginUser(values);
        const token = response.access_token;
        onLoginSuccess(token);
        
      } catch (error) {
        console.error("Registration failed", error);
      }
    },
  });


  // const handleSubmit = async (values: LoginData) => {
  //   try {
  //     const response = await axios.post('https://groupebackendrevou-development.up.railway.app/login', values);
  //     console.log(response.data); // Log the response from the server
  //     response.status === 200 
  //     ? router.push('/dashboard') 
  //     : console.error('Login failed:', response.data.error && router.push('/login')); // redirect to dasboard if succed login else console eror and refresh the page
    
  //   } catch (error) {
  //     console.error('Login failed:', error);
  //   }
  // };

  return (
  
    <Container component="main" maxWidth="lg">
      <Grid container spacing={2} alignItems="center" justifyContent="center" >
        <Grid item xs={12} sm={6}>
          <Typography variant="h2" align="center">
            Hero text
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box className="flex flex-col items-center bg-white overflow-hidden rounded-lg shadow-md p-3 gap-12 mt-8">
            <Typography component="h1" variant="h5" className='mb-2'>
              Log In
            </Typography>
            
            <form onSubmit={formik.handleSubmit}>
              <Box className = " mt-1 mb-2">
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                required
              />
            </Box>


            <Box className = " mt-1 mb-2">
              <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              required
            />
            </Box>
            <Button type="submit" fullWidth variant="contained" color="primary" className = "mt-2 mb-2">
              Log In
            </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Container>
    
  );
};

export default Login;
