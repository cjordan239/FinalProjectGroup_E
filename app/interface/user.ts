
export interface LoginFormProps {
    onLoginSuccess: (token: string) => void;
  }

  export interface LoginData {
    email: string;
    password: string;
  }