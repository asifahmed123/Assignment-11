import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToysRow from './AllToysRow';

const AllToys = () => {
     const toys = useLoaderData();
     const [search, setSearch] = useState('');
     console.log(search);
     return (
          <div className="overflow-x-auto mt-20">

               <div className="form-control mb-6">
                    <div className="input-group">
                         <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search…" className="input input-bordered" />
                         <button className="btn btn-square">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                         </button>
                    </div>
               </div>

               <table className="table w-full">
                    {/* head */}
                    <thead>
                         <tr>
                              <th>Seller</th>
                              <th>Toy Name</th>
                              <th>Sub-category</th>
                              <th>Price</th>
                              <th>Available Quantity</th>
                              <th>Details</th>
                         </tr>
                    </thead>
                    <tbody>
                         {
                              toys.filter(item => {
                                   return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search)
                              }).map(toy => <AllToysRow
                                   key={toy._id}
                                   toy={toy}
                              ></AllToysRow>)
                         }
                    </tbody>
               </table>
          </div>
     );
};

export default AllToys;