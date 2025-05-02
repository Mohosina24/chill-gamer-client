import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';

 export const AuthContext = createContext();
 const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser] =useState(null);
    const [loading,setLoading] = useState(true);


    const googleLogin = ()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }

    const register =(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    } 
    
    const userLogin = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }
    
    const updateUserProfile = (updatedData)=>{
        return updateProfile(auth.currentUser,updatedData)
    }
    const gamerInfo={
          register,
          userLogin,
          user,
          setUser,
          logOut,
          updateUserProfile,
          googleLogin,

    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{
            unsubscribe;
        };
    
    },[])
    return (
      <AuthContext.Provider value={gamerInfo}>
      {children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;