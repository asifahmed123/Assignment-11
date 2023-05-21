import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
     const { error, status } = useRouteError()
     console.log(error.statusText);
     return (
          <div className='text-center flex flex-col items-center justify-center h-[100vh]'>
               <div className='text-5xl font-bold mb-5'>
                    {
                         status ?
                              <h2>{status} Not Found</h2>
                              :
                              <h2>Unknown Error Code</h2>
                    }
               </div>
               <h4 className='font-semibold text-2xl'><i>{error?.statusText || error?.message}</i></h4>
               <img className='w-6/12 mx-auto h-96' src="https://i.ibb.co/CVsWdvb/Colored-Gradient-Illustration-Error-404-Instagram-Post-1.png" alt="" />

               <Link to='/'><button className='bg-blue-500 py-2 px-3 rounded font-bold text-white'>Go back to Homepage</button></Link>
          </div>
     );
};

export default Error;