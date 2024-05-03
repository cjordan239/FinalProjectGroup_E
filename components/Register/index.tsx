"use client";

import React from "react";
import { useFormik } from "formik";
import RegistrationSchema from "../utils/RegistrationSchema";
import { registerUser } from "@/app/api/authApi";
import { useRouter } from "next/navigation";
import { Button, Box, Container, Typography } from "@mui/material";

interface RegistrationData {
  username: string;
  email: string;
  password: string;
}

const Registration: React.FC = () => {
  const router = useRouter();
  
  const handleLoginRedirect = () => {
    router.push('/login'); // Replace '/login' with the path to your login page
  }

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: RegistrationSchema,
    onSubmit: async (values: RegistrationData) => {
      try {
        await registerUser(values);
        router.push("/login");
      } catch (error) {
        console.error("Registration failed", error);
      }
    },
  });

  return (
    <>
      <Container component="main">
        <Box className="mt-24 border border-gray-300 shadow-md ">
          <div className="p-6 flex flex-col items-center justify-center">
            <Typography variant="h6">Register for an account</Typography>
            <form onSubmit={formik.handleSubmit} className="mt-8 space-y-6">
              <div className="mt-1">
                <input
                  name="username"
                  type="text"
                  placeholder="Username"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.username}
                  required
                />
              </div>
              <div className="mt-1">
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  required
                />
              </div>
              <div className="mt-1">
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  required
                />
              </div>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className="mt-1 mb-2"
              >
                Register
              </Button>
            </form>
            <div className="mt-4">
              Already have an account? 
              <span 
                onClick={handleLoginRedirect} 
                className="ml-2 text-blue-500 cursor-pointer"
              >
                Log in
              </span>
            </div>
          </div>
        </Box>
      </Container>
    </>
  );
};

export default Registration;
