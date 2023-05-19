import { Button, Card, Modal } from 'flowbite-react';
import React, { useContext } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const CategoryToys = ({ toy }) => {
     const { user } = useContext(AuthContext);
     const { name, price, ratings, picture, description } = toy;
     console.log(toy);
     const navigate = useNavigate();

     const handleViewDetails = () => {
          if (!user) {
               alert('please login')
               navigate('/login')
          }
     }

     return (
          <div className="max-w-sm">
               <Card imgSrc={picture}>
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
                    <button onClick={handleViewDetails} className='bg-pink-600 py-2 rounded-lg font-semibold text-white hover:bg-pink-800'>View Details</button>

               </Card>
          </div>
     );
};

export default CategoryToys;