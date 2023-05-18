import React, { createContext, useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase.config';

const auth = getAuth(app);

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);

     const logInUser = (email, password) => {
          return signInWithEmailAndPassword(auth, email, password)
     }



     const authInfo = {
          user,
          loading,
          logInUser
     }
     return (
          <AuthContext.Provider value={authInfo}>
               {children}
          </AuthContext.Provider>
     );
};

export default AuthProvider;