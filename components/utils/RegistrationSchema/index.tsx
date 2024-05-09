import * as Yup from 'yup';

const RegistrationSchema = Yup.object().shape({
    username: Yup.string()
        .matches(
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{5,}$/,
            'The password must contain at least 1 uppercase letter, 1 lowercase letter, 1 digit, and be at least 5 characters long.'
        )
        .required('Username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
        'The password must contain at least 1 uppercase letter, 1 lowercase letter, 1 digit, and be at least 8 characters long.'
    )
        .required('Password is required'),
    realname: Yup.string().required('Name is required'),
    address: Yup.string().required('Address is required'),
    occupation: Yup.string().required('Occupation is required'),
});

export default RegistrationSchema;