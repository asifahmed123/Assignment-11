
import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Home = () => {
     const [toys, setToys] = useState([]);
     // console.log(toys);

     const handleCategory = (event) => {
          console.log(event.target.innerText);
          const category = event.target.innerText;
          fetch(`http://localhost:5000/toys?category=${category}`, {
               method: 'GET',
               headers: {
                    'content-type': 'application/json'
               }
          })
               .then(res => res.json())
               .then(data => {
                    setToys(data);
               })
     }
     return (
          <div>

               <Tabs>
                    <TabList onClick={handleCategory}>
                         <Tab><span className='text-2xl font-semibold text-fuchsia-500'>Trucks</span></Tab>
                         <Tab><span className='text-2xl font-semibold text-fuchsia-500'>Sports Cars</span></Tab>
                         <Tab><span className='text-2xl font-semibold text-fuchsia-500'>Sedans</span></Tab>
                    </TabList>

                    <TabPanel>
                         <div>
                              <h2>Toys coming here: {toys.length}</h2>
                              {
                                   toys.map(toy => <p key={toy._id}>{toy.name}</p>)
                              }
                         </div>

                    </TabPanel>
                    <TabPanel>
                         <h2>Toys coming here: {toys.length}</h2>
                    </TabPanel>
                    <TabPanel>
                         <h2>Toys coming here: {toys.length}</h2>
                    </TabPanel>
               </Tabs>

               <div className='text-center mt-20 mb-20 space-y-8'>
                    <h2 className='font-bold text-6xl'>Our Gallery</h2>
                    <p className='italic text-xl'>Take a look at our best of the toys. every child will definitely love this collection of toys. This toys are unique attractive and stylish</p>
               </div>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="grid gap-4">
                         <div>
                              <img className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1609708536965-6e5b915b195b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80" alt="" />
                         </div>
                         <div>
                              <img className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" alt="" />
                         </div>
                         <div>
                              <img className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1594787318286-3d835c1d207f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                         </div>
                    </div>
                    <div className="grid gap-4">
                         <div>
                              <img className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1572635196184-84e35138cf62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" alt="" />
                         </div>
                         <div>
                              <img className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1508896694512-1eade558679c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                         </div>
                         <div>
                              <img className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1536454891705-7f5a5c762d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=381&q=80" alt="" />
                         </div>
                    </div>
                    <div className="grid gap-4">
                         <div>
                              <img className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1592916485147-1e38fc823d21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" />
                         </div>
                         <div>
                              <img className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1534732806146-b3bf32171b48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="" />
                         </div>
                         <div>
                              <img className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1456082902841-3335005c3082?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="" />
                         </div>
                    </div>
                    <div className="grid gap-4">
                         <div>
                              <img className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1531693251400-38df35776dc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="" />
                         </div>
                         <div>
                              <img className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1574243121728-7bbecdf295e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                         </div>
                         <div>
                              <img className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1594787317357-dcda50fd1d78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Home;