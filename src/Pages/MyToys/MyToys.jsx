import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import MyToysRow from './MyToysRow';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const MyToys = () => {
     const { user } = useContext(AuthContext);
     const email = user?.email;
     const [toys, setToys] = useState([]);
     const [sort, setSort] = useState(1);
     console.log(sort);


     useEffect(() => {
          fetch(`https://toy-haven-server.vercel.app/my-toys?sellerEmail=${email}&sort=${sort}`, {
               method: 'GET',
               headers: {
                    'content-type': 'application/json'
               }
          })
               .then(res => res.json())
               .then(data => {
                    setToys(data);
               })
     }, [email, sort])

     const handleDelete = (id) => {

          Swal.fire({
               title: 'Are you sure?',
               text: "You won't be able to revert this!",
               icon: 'warning',
               showCancelButton: true,
               confirmButtonColor: '#3085d6',
               cancelButtonColor: '#d33',
               confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
               if (result.isConfirmed) {
                    fetch(`https://toy-haven-server.vercel.app/toys/${id}`, {
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
                    Swal.fire(
                         'Deleted!',
                         'Your file has been deleted.',
                         'success'
                    )
               }
          })
     }


     return (
          <div className="overflow-x-auto w-full mt-24">
               <Helmet>
                    <title>Toy_Haven | My Toys</title>
               </Helmet>
               <div className="dropdown dropdown-right mb-14">
                    <label tabIndex={0} className="btn m-1">Sort By</label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                         <li><a onClick={() => setSort(1)}>Ascending</a></li>
                         <li><a onClick={() => setSort(-1)}>Descending</a></li>
                    </ul>
               </div>
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
                              <th>ratings</th>
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