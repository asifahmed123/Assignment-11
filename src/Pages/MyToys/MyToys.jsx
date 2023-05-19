import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import MyToysRow from './MyToysRow';

const MyToys = () => {
     const { user } = useContext(AuthContext);
     const email = user?.email;
     const [toys, setToys] = useState([])
     const [updatedToy, setUpdatedToy] = useState({})
     console.log(updatedToy);

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

     const handleForm = (event) => {
          event.preventDefault();
          const form = event.target;
          const updatedPrice = form.price.value;
          const updatedQuantity = form.quantity.value;
          const updatedDescription = form.description.value;

          const updatedInfo = {
               price: updatedPrice,
               quantity: updatedQuantity,
               description: updatedDescription
          }
          setUpdatedToy(updatedInfo);
     }

     const handleUpdate = id => {
          fetch(`http://localhost:5000/toys/${id}`, {
               method: 'PATCH',
               headers: {
                    'content-type' : 'application/json'
               },
               body: JSON.stringify(updatedToy)
          })
          .then(res => res.json())
          .then(data => {
               console.log(data);
          })
     }

     return (
          <div className="overflow-x-auto w-full">
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
                                   handleForm={handleForm}
                                   handleUpdate={handleUpdate}
                              ></MyToysRow>)
                         }
                    </tbody>
               </table>
          </div>
     );
};

export default MyToys;