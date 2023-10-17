import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider,  createUserWithEmailAndPassword,  getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile,  } from "firebase/auth";
import app from "../Firebase/Firebase.config";
export const AuthContext =createContext(null)
const auth = getAuth(app)
const googleLogin =new GoogleAuthProvider
const AuthProvider = ({children}) => {

    

    const[user,setUser] =useState()
    const [loading,setLoading] =useState(true)
    const googleLogin=()=>{
        setLoading(true)
       return signInWithPopup(auth,googleLogin)
    }

    const register =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const  login =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const handleUpdateProfile = (name, photo) => {
        const user = auth.currentUser;
        if (user) {
            return updateProfile(user, {
                displayName: name,
                photoURL: photo
            });
        } 
    }
    const logOut =()=>{
        setLoading(true)
        signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe =onAuthStateChanged(auth,(currentUser=>{
            setUser(currentUser)
            setLoading(false)
        }))
        return (()=>{
           return unSubscribe()
        }) 
    },[])
    const authInfo={
        googleLogin,register,login,user,logOut,loading,handleUpdateProfile
    }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;