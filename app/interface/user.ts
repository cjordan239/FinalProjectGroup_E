
export interface LoginFormProps {
    onLoginSuccess: (token: string) => void;
  }

  export interface LoginData {
    email: string;
    password: string;
  }

  export interface RegistrationData {
    username: string;
    email: string;
    password: string;
    realname:"",
    address:"",
    occupation:"",
  }

  export interface UserProfile {
    username: string;
    email: string;
    realname: string;
    address: string;
    occupation: string;
  }