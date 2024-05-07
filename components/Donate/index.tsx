"use client"

import React, { useState, } from "react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { donationUser } from "@/app/api/authApi";
import { Button, Container } from "@mui/material";
import DonationSchema from "../utils/DonationSchema";
import { useAuth } from "@/app/context/AuthContext";


const Donate = () => {
    const { isAuthenticated} = useAuth();
    const [donateAmount, setDonationAmount] = useState(0);
    const router = useRouter();
  
    const formik = useFormik({
      initialValues: {
        nominal: 0,
        from_id: 0,
      },
      validationSchema: DonationSchema,
      onSubmit: async (values) => {
        try { 
          
          const response = await donationUser(values);
          const token = response.access_token;
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
        className="flex justify-center items-center"
        component="main"
        maxWidth="xl"
      >
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="flex justify-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Make a Donation
            </h1>
            <form
              onSubmit={formik.handleSubmit}
              className="space-y-4 md:space-y-6"
            >
              <div>
                <label className="block mb-2 text-base font-bold text-gray-900">
                  Nominal
                </label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
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
              <div>
                <label className="block mb-2 text-base font-bold text-gray-900">
                  Name
                </label>

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
          </div>
        </div>
      </Container>
       
    </>
      

    
  );
};

export default Donate;
