"use client";
import React from "react";
import { useFormik } from "formik";
import RegistrationSchema from "../utils/RegistrationSchema";
import { registerUser } from "@/app/api/authApi";
import { useRouter } from "next/navigation";
import { Button, Container, Box } from "@mui/material";
import { RegistrationData } from "@/app/interface/context";
import Image from "next/image";
import register from "../Image/register.jpg";

const Registration: React.FC = () => {
  const router = useRouter();

  const handleLoginRedirect = () => {
    router.push("/login");
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      realname: "",
      address: "",
      occupation: "",
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
    <Container
      sx={{
        display: "flex",
        flexDirection: "row",
        height: "100%",
        paddingTop: "7.5rem",
        minHeight: "90vh",
        alignItems: "center",
        marginBottom: "1rem",
        justifyContent: "center"
      }}
      component="main"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "end",
          width: "50%",
          marginRight: "7rem",
          boxSizing: "border-box",
        }}
      >
        <div className="w-full bg-white rounded-lg mt-5 mb-10 shadow sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="flex justify-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Register for an account
            </h1>
            <form
              onSubmit={formik.handleSubmit}
              className="space-y-4 md:space-y-6"
            >
              <div>
                <label className="block mb-2 text-base font-bold text-gray-900">
                  Username
                </label>
                <input
                  name="username"
                  type="text"
                  placeholder="YourUsername"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.username}
                />
                {formik.touched.username && formik.errors.username && (
                  <p className="block my-2 text-sm text-red-500">
                    {formik.errors.username}
                  </p>
                )}
              </div>
              <div>
                <label className="block mb-2 text-base font-bold text-gray-900">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="name@company.com"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="block my-2 text-sm text-red-500">
                    {formik.errors.email}
                  </p>
                )}
              </div>
              <div>
                <label className="block mb-2 text-base font-bold text-gray-900">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password && (
                  <p className="block my-2 text-sm text-red-500">
                    {formik.errors.password}
                  </p>
                )}
              </div>
              <div>
                <label className="block mb-2 text-base font-bold text-gray-900">
                  Real Name
                </label>
                <input
                  name="realname"
                  type="text"
                  placeholder="Your Real Name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.realname}
                />
                {formik.touched.realname && formik.errors.realname && (
                  <p className="block my-2 text-sm text-red-500">
                    {formik.errors.realname}
                  </p>
                )}
              </div>
              <div>
                <label className="block mb-2 text-base font-bold text-gray-900">
                  Address
                </label>
                <input
                  name="address"
                  type="text"
                  placeholder="Your Address"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.address}
                />
                {formik.touched.address && formik.errors.address && (
                  <p className="block my-2 text-sm text-red-500">
                    {formik.errors.address}
                  </p>
                )}
              </div>
              <div>
                <label className="block mb-2 text-base font-bold text-gray-900">
                  Occupation
                </label>
                <input
                  name="occupation"
                  type="text"
                  placeholder="Your Occupation"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.occupation}
                />
                {formik.touched.occupation && formik.errors.occupation && (
                  <p className="block my-2 text-sm text-red-500">
                    {formik.errors.occupation}
                  </p>
                )}
              </div>
              {/* End of fields for realname, address, and occupation */}
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
      </Box>

      <Box
        sx={{
          width: "50%",
          display: "flex",
          boxSizing: "border-box",
          alignContent: "center",
          justifyContent: "center",
          flexWrap: "wrap"
        }}>
        <Image
          style={{
            width: 'auto',
            height: '90%',
            borderRadius: "15px"
          }}
          src={register} alt="Register" />
      </Box>
    </Container>
  );
};

export default Registration;
