import React from 'react';
import { Link } from 'react-router-dom';

const MyToysRow = ({ toy, handleDelete }) => {
     const { _id, name, category, description, picture, price, quantity, ratings, sellerEmail, sellerName } = toy;

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
               <td>{ratings}</td>
               <td>{description}</td>
               <td>{sellerName}</td>
               <td>{sellerEmail}</td>
               <td><Link to={`/toys/${_id}`} className='bg-pink-600 py-2 px-2 rounded-lg font-semibold text-white hover:bg-pink-800'>Update</Link></td>
          </tr>
     );
};

export default MyToysRow;