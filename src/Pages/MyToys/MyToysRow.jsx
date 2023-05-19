import React from 'react';

const MyToysRow = ({ toy, handleDelete, handleForm, handleUpdate }) => {
     const { _id, name, category, description, picture, price, quantity, rating, sellerEmail, sellerName } = toy;

     return (
          <tr>
               <th>
                    <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle">
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
               </th>
               <td className='flex justify-center items-center gap-3'>
                    <div className="avatar">
                         <div className="rounded w-24 h-24">
                              {picture && <img src={picture} alt="Avatar Tailwind CSS Component" />}
                         </div>
                    </div>
               </td>
               <td>{name}</td>
               <td>{category}</td>
               <td>{price}</td>
               <td>{quantity}</td>
               <td>{rating}</td>
               <td>{sellerName}</td>
               <td>{sellerEmail}</td>
               <td>{/* The button to open modal */}
                    <label htmlFor="my-modal-6" className='bg-pink-600 py-2 px-2 rounded-lg font-semibold text-white hover:bg-pink-800'>Update</label>

                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                    <div className="modal modal-bottom sm:modal-middle">
                         <div className="modal-box">
                              <form onSubmit={handleForm}>
                                   <div className="form-control">
                                        <label className="label">
                                             <span className="label-text">Enter amount</span>
                                        </label>
                                        <label className="input-group">
                                             <span>Price</span>
                                             <input type="text" name="price" placeholder="10" className="input input-bordered" />
                                             <span>USD</span>
                                        </label>
                                        <label className="label">
                                             <span className="label-text">Available Quantity</span>
                                        </label>
                                        <label className="input-group">
                                             <span>Quantity</span>
                                             <input type="text" name="quantity" placeholder="30" className="input input-bordered" />
                                        </label>
                                        <textarea className="textarea textarea-accent mt-3" name="description" placeholder="Detail description"></textarea>
                                   </div>
                                   <div className="modal-action">
                                        <input onClick={() => handleUpdate(_id)} className='bg-pink-600 py-2 px-2 rounded-lg font-semibold text-white hover:bg-pink-800' type="submit" value="Update" />
                                        <label htmlFor="my-modal-6" className="btn">Close</label>
                                   </div>
                              </form>

                         </div>
                    </div></td>


          </tr>
     );
};

export default MyToysRow;