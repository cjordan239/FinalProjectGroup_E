"use client"

import React from "react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { loginUser } from "@/app/api/authApi";
import LoginSchema from "../utils/LoginSchema";
import { LoginData, LoginFormProps } from "@/app/interface/user";
import { TextField, Button, Box, Container, Typography, Grid } from "@mui/material";


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


  // const handleSubmit = async (values: LoginData) => {
  //   try {
  //     const response = await axios.post("https://groupebackendrevou-development.up.railway.app/login", values);
  //     console.log(response.data); // Log the response from the server
  //     response.status === 200 
  //     ? router.push("/dashboard") 
  //     : console.error("Login failed:", response.data.error && router.push("/login")); // redirect to dasboard if succed login else console eror and refresh the page

  //   } catch (error) {
  //     console.error("Login failed:", error);
  //   }
  // };

  return (
    <Container className="flex justify-center items-center" component="main" maxWidth="xl">
      <Grid container spacing={2} alignItems="center" justifyContent="center" >
        <Grid item xs={12} sm={6}>
          <Typography variant="h2" align="center">
            Hero text
          </Typography>
        </Grid>

        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
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
      </Grid>
    </Container >
  );
};

export default Login;
