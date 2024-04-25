import * as Yup from 'yup';

const RegistrationSchema = Yup.object().shape({
    username: Yup.string()
        .matches(
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{5,}$/,
          'Username harus memiliki minimal 1 huruf besar, 1 huruf kecil, 1 angka, dan minimal 5 karakter'
        )
    .required('Username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
        'Password harus memiliki minimal 1 huruf besar, 1 huruf kecil, 1 angka, dan minimal 8 karakter'
        )
    .required('Password is required'),
});

export default RegistrationSchema;