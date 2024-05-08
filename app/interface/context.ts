


export interface UserProfile {
  id: number;
  username: string;
  email: string;
  realname: string;
  address: string;
  occupation: string;
}

export interface AuthContextProps {
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
}
  
export interface AuthProviderProps {
  children: React.ReactNode;
}


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



export interface UserProfileContextType {
  userProfile: UserProfile | null;
  setUserProfile: React.Dispatch<React.SetStateAction<UserProfile | null>>;
}