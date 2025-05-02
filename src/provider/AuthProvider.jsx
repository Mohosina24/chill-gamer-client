import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";
 export const AuthContext = createContext();
 const auth = getAuth();
const AuthProvider = ({children}) => {
    
       const name = "biva";
    const gamerInfo={
          name,
    }
    return (
      <AuthContext.Provider value={gamerInfo}>
      {children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;