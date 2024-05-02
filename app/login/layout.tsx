
// import "./globals.css";

import AuthProvider from "../context/AuthContext";

export default function loginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <>
      
        {children}
        
    </>

  );
}
