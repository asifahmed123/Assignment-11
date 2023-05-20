import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
     const toy = useLoaderData();
     const { _id, name, price, ratings, picture, description, sellerEmail, sellerName, quantity } = toy;
     console.log(toy);
     return (
          <div className='mt-20'>
               <h2 className='font-bold text-5xl text-center mb-6'>Details of: <span className='text-pink-600 italic underline'>{name}</span></h2>
               <div className='flex items-center'>
                    <div className='w-1/2'>
                         <img className='w-full rounded-lg h-[30rem]' src={picture} alt="" />
                    </div>
                    <div className='ps-8 space-y-2'>
                         <p className='font-semibold'><span className='text-pink-600 font-bold text-2xl'>Seller Name:</span> {sellerName}</p>
                         <p className='font-semibold'><span className='text-pink-600 font-bold text-2xl'>Seller Email:</span> {sellerEmail}</p>
                         <p className='font-semibold'><span className='text-pink-600 font-bold text-2xl'>Price:</span> {price}</p>
                         <p className='font-semibold'><span className='text-pink-600 font-bold text-2xl'>Available quantity:</span> {quantity}</p>
                         <p className='font-semibold'><span className='text-pink-600 font-bold text-2xl'>Ratings:</span> {ratings}</p>
                         <p className='font-semibold'><span className='text-pink-600 font-bold text-2xl'>Detail description:</span> {description}</p>
                    </div>
               </div>


          </div>
     );
};

export default ViewDetails;