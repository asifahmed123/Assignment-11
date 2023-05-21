import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const MyToysUpdate = () => {
     const toy = useLoaderData();
     const { _id } = toy;
     const navigate = useNavigate();

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

          Swal.fire({
               title: 'Are you sure?',
               text: "You want to update this!",
               icon: 'warning',
               showCancelButton: true,
               confirmButtonColor: '#3085d6',
               cancelButtonColor: '#d33',
               confirmButtonText: 'Yes, update!'
          }).then((result) => {
               if (result.isConfirmed) {
                    fetch(`https://toy-haven-server.vercel.app/toys/${_id}`, {
                         method: 'PATCH',
                         headers: {
                              'content-type': 'application/json'
                         },
                         body: JSON.stringify(updatedInfo)
                    })
                         .then(res => res.json())
                         .then(data => {
                              console.log(data);
                              if (data.modifiedCount > 0) {
                                   // 
                                   Swal.fire(
                                        'Updated!',
                                        'Your file has been updated.',
                                        'success'
                                   )
                                   navigate('/mytoys')
                              }
                         })
               }
          })


     }

     return (
          <div className="hero min-h-screen bg-base-200">
               <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                         <h2 className='text-center text-3xl font-bold'>Update Your Toy</h2>
                         <form onSubmit={handleForm}>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Price</span>
                                   </label>
                                   <input type="number" name="price" className="input input-bordered" />
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Quantity</span>
                                   </label>
                                   <input type="number" name="quantity" className="input input-bordered" />
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Description</span>
                                   </label>
                                   <input type="text" name="description" className="input input-bordered" />
                              </div>

                              <div className="form-control mt-6">
                                   <input className='bg-pink-600 py-2 px-2 rounded-lg font-semibold text-white hover:bg-pink-800' type="submit" value="Update" />
                              </div>
                         </form>
                    </div>
               </div>
          </div>
     );
};

export default MyToysUpdate;