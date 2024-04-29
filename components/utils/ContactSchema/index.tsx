import * as yup from "yup";

const ContactSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  message: yup.string().required("Please enter your message"),
});

export default ContactSchema;