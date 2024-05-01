"use client";

import React from "react";
import { useFormik } from "formik";
import RegistrationSchema from "../utils/RegistrationSchema";
import { registerUser } from "@/app/api/authApi";
import axios from "axios";
import { useRouter } from "next/navigation";
import { TextField, Button, Box, Container, Typography } from "@mui/material";

interface RegistrationData {
  username: string;
  email: string;
  password: string;
}

const Registration: React.FC = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: RegistrationSchema,
    onSubmit: async (values: RegistrationData) => {
      try {
        await registerUser(values)
        router.push('/login')
      } catch (error) {
        console.error("Registration failed", error);
      }
    },
  });

  return (
    <>
      <Container component="main" maxWidth="xl">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">Register for an account</Typography>
          <form onSubmit={formik.handleSubmit} className="mt-8 space-y-6">
            <Box sx={{ mt: 1 }}>
              <input
                name="username"
                type="text"
                placeholder="Username"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
                required
              />
            </Box>
            <Box sx={{ mt: 1 }}>
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
            <Box sx={{ mt: 1 }}>
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
          </form>
        </Box>
      </Container>
    </>
  );
};

export default Registration;
