import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import app from '../../firebase.config';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);

     const logInUser = (email, password) => {
          setLoading(true)
          return signInWithEmailAndPassword(auth, email, password)
     }

     const registerUser = (email, password) => {
          setLoading(true)
          return createUserWithEmailAndPassword(auth, email, password)
     }
     
     const googleLogIn = () => {
          return signInWithPopup(auth, googleProvider)
     }

     const updateUser = (name, photo) => {
          setLoading(true)
          return updateProfile(auth.currentUser, {
               displayName: name,
               photoURL: photo
          })
     }

     useEffect(() => {
          const unsubscribe = onAuthStateChanged(auth, currentUser => {
               setUser(currentUser)
               setLoading(false)
          })
          return () => {
               unsubscribe()
          }
     }, [])

     const authInfo = {
          user,
          loading,
          logInUser,
          registerUser,
          updateUser,
          googleLogIn
     }
     return (
          <AuthContext.Provider value={authInfo}>
               {children}
          </AuthContext.Provider>
     );
};

export default AuthProvider;