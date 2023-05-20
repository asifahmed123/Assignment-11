import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import MyToysRow from './MyToysRow';

const MyToys = () => {
     const { user } = useContext(AuthContext);
     const email = user?.email;
     const [toys, setToys] = useState([])

     useEffect(() => {
          fetch(`http://localhost:5000/my-toys?sellerEmail=${email}`, {
               method: 'GET',
               headers: {
                    'content-type': 'application/json'
               }
          })
               .then(res => res.json())
               .then(data => {
                    setToys(data);
               })
     }, [email])

     const handleDelete = (id) => {
          fetch(`http://localhost:5000/toys/${id}`, {
               method: 'DELETE'
          })
               .then(res => res.json())
               .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                         const remaining = toys.filter(toy => toy._id !== id);
                         setToys(remaining)
                    }
               })
     }

    
     return (
          <div className="overflow-x-auto w-full mt-24">
               <table className="table w-full">
                    {/* head */}
                    <thead>
                         <tr>
                              <th>
                                   <label>
                                        <input type="checkbox" className="checkbox" />
                                   </label>
                              </th>
                              <th>photo</th>
                              <th>Name</th>
                              <th>category</th>
                              <th>price</th>
                              <th>quantity</th>
                              <th>rating</th>
                              <th>description</th>
                              <th>seller-Name</th>
                              <th>seller-Email</th>
                              <th>status</th>
                         </tr>
                    </thead>
                    <tbody>
                         {
                              toys.map(toy => <MyToysRow
                                   key={toy._id}
                                   toy={toy}
                                   handleDelete={handleDelete}
                              ></MyToysRow>)
                         }
                    </tbody>
               </table>
          </div>
     );
};

export default MyToys;