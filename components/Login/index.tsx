"use client"

import React from "react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { loginUser } from "@/app/api/authApi";
import LoginSchema from "../utils/LoginSchema";
import { LoginData, LoginFormProps } from "@/app/interface/context";
import { Button, Container, Box } from "@mui/material";
import Image from "next/image";
import logIn from "../Image/organizeDonations.jpg";

// TestingApp1234@gmail.com
// AppTesting1234

const Login: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/register");
  }

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
        console.error("Login failed", error);
      }
    },
  });


  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "row",
        height: "100%",
        paddingTop: "7.5rem",
        minHeight: "90vh",
        alignItems: "center",
        justifyContent: "center"
      }}
      component="main"
      maxWidth="xl"
    >
      <Box
        sx={{
          width: "50%",
          display: "flex",
          boxSizing: "border-box",
          alignContent: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}>
        <Image
          style={{
            width: 'auto',
            height: '90%',
            borderRadius: "15px"
          }}
          src={logIn} alt="Compasstio Community" />
      </Box>

      <div className="w-full bg-white rounded-lg shadow ml-24 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="flex justify-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
            Log In
          </h1>
          <form onSubmit={formik.handleSubmit} className="space-y-4 md:space-y-6">
            <div>
              <label className="block mb-2 text-base font-bold text-gray-900">Email</label>
              <input
                name="email"
                type="email"
                placeholder="name@company.com"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {
                formik.touched.email && formik.errors.email && (
                  <p className="block my-2 text-sm text-red-500">{formik.errors.email}</p>
                )
              }
            </div>
            <div>
              <label className="block mb-2 text-base font-bold text-gray-900">Password</label>
              <input
                name="password"
                type="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {
                formik.touched.password && formik.errors.password && (
                  <p className="block my-2 text-sm text-red-500">{formik.errors.password}</p>
                )
              }
            </div>
            <Button type="submit" fullWidth variant="contained" className="mt-2 mb-2">
              Log In
            </Button>
          </form>
          <div className="text-sm font-light text-gray-500">
            Don’t have an account yet?
            <span
              onClick={handleRedirect}
              className="font-medium hover:underline ml-1 text-blue-500 cursor-pointer"
            >
              Register now!
            </span>
          </div>
        </div>
      </div>
    </Container >
  );
};

export default Login;
