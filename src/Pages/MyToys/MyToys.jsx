import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const MyToys = () => {
     const { user } = useContext(AuthContext);
     const email = user?.email;
     console.log(email);

     useEffect(() => {
          fetch(`http://localhost:5000/my-toys?sellerEmail=${email}`, {
               method: 'GET',
               headers: {
                    'content-type': 'application/json'
               }
          })
               .then(res => res.json())
               .then(data => {
                    console.log(data);
               })
     }, [email])

     return (
          <div>
               <h2>My Toys here</h2>
          </div>
     );
};

export default MyToys;