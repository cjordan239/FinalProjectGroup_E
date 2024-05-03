"use client";

import React from "react";
import { useFormik } from "formik";
import RegistrationSchema from "../utils/RegistrationSchema";
import { registerUser } from "@/app/api/authApi";
import { useRouter } from "next/navigation";
import { Button, Container } from "@mui/material";

interface RegistrationData {
  username: string;
  email: string;
  password: string;
}

const Registration: React.FC = () => {
  const router = useRouter();

  const handleLoginRedirect = () => {
    router.push("/login"); // Replace "/login" with the path to your login page
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
    <Container className="flex justify-center items-center" component="main" maxWidth="xl">
      <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="flex justify-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
            Register for an account
          </h1>
          <form onSubmit={formik.handleSubmit} className="space-y-4 md:space-y-6">
            <div>
              <label className="block mb-2 text-base font-bold text-gray-900">Username</label>
              <input
                name="username"
                type="text"
                placeholder="YourUsername"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
              />
              {
                formik.touched.username && formik.errors.username && (
                  <p className="block my-2 text-sm text-red-500">{formik.errors.username}</p>
                )
              }
            </div>
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className="mt-1 mb-2"
            >
              Register
            </Button>
          </form>
          <div className="text-sm font-light text-gray-500">
            Already have an account?
            <span
              onClick={handleLoginRedirect}
              className="font-medium hover:underline ml-1 text-blue-500 cursor-pointer"
            >
              Log in
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Registration;
