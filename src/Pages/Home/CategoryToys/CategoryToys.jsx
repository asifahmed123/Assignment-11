import { Card } from 'flowbite-react';
import React, { useContext } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { AuthContext } from '../../../Provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

const CategoryToys = ({ toy }) => {
     const { user } = useContext(AuthContext);
     const { _id, name, price, ratings, picture, description, sellerEmail, sellerName, quantity } = toy;
     const navigate = useNavigate();

     const handleViewDetails = () => {
          if (!user) {
               alert('please login')
               navigate('/login')
          }
     }

     return (
          <div className="">
               <Card data-aos="zoom-in-down" className='bg-stone-50 hover:bg-stone-100 drop-shadow-2xl h-full'>
                    <img className='h-60 rounded-lg' src={picture} alt="" />
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                         {name}
                    </h5>
                    <p className="font-normal overflow-hidden text-gray-700 dark:text-gray-400">
                         {description}
                    </p>
                    <p>Price: ${price}</p>
                    <div className='flex gap-2'>
                         <Rating
                              style={{ maxWidth: 120 }}
                              value={Math.round(ratings || 0)}
                              readOnly
                         />
                         <p>{ratings}</p>
                    </div>
                    <Link onClick={handleViewDetails} to={`/viewDetails/${_id}`} className='bg-pink-600 py-2 rounded-lg font-semibold text-center text-white hover:bg-pink-800'>View Details</Link>


               </Card>
          </div>
     );
};

export default CategoryToys;