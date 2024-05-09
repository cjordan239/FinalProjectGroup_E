import React, { useState } from "react";
import { useFormik } from "formik";
import { Button, Container, Box, Typography } from "@mui/material";
import { donateUser } from "@/app/api/authApi";
import DonationSchema from "../utils/DonationSchema";
import Image from "next/image";
import donation from "../Image/donation.jpg";

const Donate = () => {
  const [donateAmount, setDonationAmount] = useState(0);

  const formik = useFormik({
    initialValues: {
      nominal: 0,
    },
    validationSchema: DonationSchema,
    onSubmit: async (values) => {
      try {
        const response = await donateUser(values);
        setDonationAmount(values.nominal);
        alert(`Thanks for the donation of: ${values.nominal}`);
      } catch (error) {
        console.error("Donation failed", error);
      }
    },
  });

  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
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
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            marginBottom: "4rem",
          }}
        >
          <Typography fontWeight={700} mb={3} component="h1" variant="h2">
            Make a Donation!
          </Typography>
          <Typography sx={{ color: "text.secondary" }} component="h3" variant="h6">
            Together, we can create a world where every person has access to nutritious food and the opportunity to thrive.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "80%"
          }}
        >
          <Box
            sx={{
              width: "50%",
              margin: "0 6rem 0 3rem",
              boxSizing: "border-box",
            }}
          >
            <form
              onSubmit={formik.handleSubmit}
              className="space-y-4 md:space-y-6"
            >
              <Typography sx={{ color: "text.secondary" }} component="h2" variant="h6">
                Please enter your donation information
              </Typography>
              <div>
                <label className="block mb-2 text-base font-bold text-gray-900">
                  Nominal (Rupiah)
                </label>
                <input
                  type="number"
                  id="nominal"
                  name="nominal"
                  min="1"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.nominal}
                />
                {formik.touched.nominal && formik.errors.nominal && (
                  <p className="block my-2 text-sm text-red-500">
                    {formik.errors.nominal}
                  </p>
                )}
              </div>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className="mt-1 mb-2"
              >
                Donate
              </Button>
            </form>
          </Box>

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
              src={donation} alt="Donation Box" />
          </Box>

        </Box>
      </Container>
    </>
  );
};

export default Donate;
