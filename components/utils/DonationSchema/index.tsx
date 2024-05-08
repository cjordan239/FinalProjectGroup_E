import * as Yup from 'yup';

const DonationSchema = Yup.object().shape({
    nominal: Yup.number()
      .positive("Amount must be greater than zero")
      .required("Amount is required"),
    from_id: Yup.number()
  });
  
  export default DonationSchema