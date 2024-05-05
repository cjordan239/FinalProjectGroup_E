"use client"
import React from "react";
import { useFormik, Formik, Form, Field, ErrorMessage } from "formik";
import ContactSchema from "../utils/ContactSchema";
import axios from "axios";
import { useRouter } from "next/navigation";
import { TextField, Button, Box, Container, Typography } from "@mui/material";

interface ContactData {
  name: string;
  email: string;
  message: string;
}

const ContactUs: React.FC = () => {

  const router = useRouter()

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: ContactSchema,
    onSubmit: async (values: ContactData) => {
      console.warn(values);

      try {
        let result = await fetch("https://groupebackendrevou-development.up.railway.app/contacts", {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        });

        result = await result.json();
        router.push("/contact");
        console.warn("result", result);
      } catch (error) {
        console.error("Submit failed", error);
      }
    },
  })

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "row",
        height: "100%",

      }}
      component="main"
      maxWidth="xl"
    >
      <Box
        sx={{
          width: "50%",
          margin: "0 6rem 5rem 6rem",
          boxSizing: "border-box",
        }}
      >
        <Typography fontWeight={700} mb={3} component="h1" variant="h2">
          Contact Us
        </Typography>
        <Typography sx={{ color: "text.secondary" }} component="h2" variant="h6">
          Have anything to ask us? Drop your question below and we will send you an email!
        </Typography>
        <div className="w-full">
          <form onSubmit={formik.handleSubmit} className="mt-8 space-y-6">
            <Box>
              <label className="block mb-2 text-base font-bold text-gray-900">Name</label>
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {
                formik.touched.name && formik.errors.name && (
                  <p className="block my-2 text-sm text-red-500">{formik.errors.name}</p>
                )
              }
            </Box>
            <Box>
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
            </Box>
            <Box>
              <label className="block mb-2 text-base font-bold text-gray-900">Message</label>
              <textarea
                name="message"
                placeholder="Enter your question or message"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                rows={5}
              />
              {
                formik.touched.message && formik.errors.message && (
                  <p className="block my-2 text-sm text-red-500">{formik.errors.message}</p>
                )
              }
            </Box>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Submit
            </Button>
          </form>
        </div>
      </Box>
      <Box
        sx={{
          width: "50%",
          display: "flex",
          boxSizing: "border-box",
          alignContent: "center",
          justifyContent: "center",
          textAlign: "center",
          flexWrap: "wrap"
        }}>
        <Typography
          sx={{
            display: "flex",
            fontWeight: 700,
            flexDirection: "row"
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