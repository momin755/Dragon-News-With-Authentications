import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../firebase.config';
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const verificationEmail = ()=>{
        sendEmailVerification(auth.currentUser)
    }
    const logInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const resetPassword = (email) =>{
       return sendPasswordResetEmail(auth, email)
    }
    const logOut = ()=>{
        signOut(auth)
    }
    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    }, [])
    const userInfo = {
        user,
        setUser,
        createUser,
        logInUser,
        loading,
        setLoading,
        verificationEmail,
        resetPassword,
        logOut
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;