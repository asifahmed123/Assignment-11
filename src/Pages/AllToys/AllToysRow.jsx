import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const AllToysRow = ({toy}) => {
     const {user} = useContext(AuthContext);
     const {_id, sellerName, name, category, price, quantity} = toy;
     const handleViewDetails = () => {
          if (!user) {
               alert('please login')
               navigate('/login')
          }
     }
     return (
          <tr>
               <th>{sellerName}</th>
               <td>{name}</td>
               <td>{category}</td>
               <td>{price}</td>
               <td>{quantity}</td>
               <td><Link onClick={handleViewDetails} to={`/viewDetails/${_id}`} className='bg-pink-600 py-2 px-2 rounded-lg font-semibold text-center text-white hover:bg-pink-800'>View Details</Link></td>
          </tr>
     );
};

export default AllToysRow;