import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Button, Spinner } from 'flowbite-react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
     const { user, loading } = useContext(AuthContext);
     const location = useLocation()

     if (loading) {
          return < Button >
               <Spinner aria-label="Spinner button example" />
               <span className="pl-3">
                    Loading...
               </span>
          </Button >
     }

     if (user) {
          return children;
     }
     return (
          <Navigate state={{from: location}} to='/login'></Navigate>
     );
};

export default PrivateRoute;