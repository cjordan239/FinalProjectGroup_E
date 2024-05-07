import * as Yup from 'yup';

const DonationSchema = Yup.object().shape({
    amount: Yup.number()
      .positive("Amount must be greater than zero")
      .required("Amount is required"),
    username: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
  });
  
  export default DonationSchema