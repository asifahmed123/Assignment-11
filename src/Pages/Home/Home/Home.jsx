import { FaHeadphones, FaKey, FaRegClock, FaRocket } from "react-icons/fa";
import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryToys from '../CategoryToys/CategoryToys';
import { Helmet } from 'react-helmet-async';
import Banner from '../../../Banner/Banner';

const Home = () => {
     const [toys, setToys] = useState([]);
     // console.log(toys);

     useEffect(() => {
          fetch(`https://toy-haven-server.vercel.app/toys?category=${"Trucks"}`, {
               method: 'GET',
               headers: {
                    'content-type': 'application/json'
               }
          })
               .then(res => res.json())
               .then(data => {
                    setToys(data);
               })
     }, [])

     const handleCategory = (event) => {
          console.log(event.target.innerText);
          const category = event.target.innerText;
          fetch(`https://toy-haven-server.vercel.app/toys?category=${category}`, {
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
               <Helmet>
                    <title>Toy_Haven | Home</title>
               </Helmet>

               <Banner></Banner>

               <div className='mt-20'>
                    <h2 className="lg:text-5xl font-bold text-center">Toy Categories</h2>
                    <Tabs>
                         <TabList onClick={handleCategory}>
                              <Tab><span className='text-2xl font-semibold text-red-400'>Trucks</span></Tab>
                              <Tab><span className='text-2xl font-semibold text-red-400'>Sports Cars</span></Tab>
                              <Tab><span className='text-2xl font-semibold text-red-400'>Sedans</span></Tab>
                         </TabList>

                         <TabPanel>
                              <div className='grid lg:grid-cols-3 gap-4'>
                                   {
                                        toys.map(toy => <CategoryToys
                                             key={toy._id}
                                             toy={toy}
                                        ></CategoryToys>)
                                   }
                              </div>
                         </TabPanel>
                         <TabPanel>
                              <div className='grid lg:grid-cols-3 gap-4'>
                                   {
                                        toys.map(toy => <CategoryToys
                                             key={toy._id}
                                             toy={toy}
                                        ></CategoryToys>)
                                   }
                              </div>
                         </TabPanel>
                         <TabPanel>
                              <div className='grid lg:grid-cols-3 gap-4'>
                                   {
                                        toys.map(toy => <CategoryToys
                                             key={toy._id}
                                             toy={toy}
                                        ></CategoryToys>)
                                   }
                              </div>
                         </TabPanel>
                    </Tabs>
               </div>

               <div className='lg:flex gap-3 mt-20'>
                    <div>
                         <div className="relative">
                              <img style={{ height: '350px' }} src="https://junotoys-html.themerex.net/images/info-block-1.jpg" alt="Your Image" className="w-full max-h-96" />
                              <div className="absolute right-10 top-24 ">
                                   <h2 className='text-amber-400 font-bold text-xl'>DEALS THIS WEEK</h2>
                                   <p className='text-amber-500 text-4xl font-bold'>SAVE 50%</p>
                                   <p>Browse through our best selleres</p>
                                   <button className='bg-amber-400 rounded-lg text-3xl font-bold px-3 py-2'>Shop Now</button>
                              </div>
                         </div>
                    </div>
                    <div>
                         <div className="relative">
                              <img style={{ height: '350px' }} src="https://junotoys-html.themerex.net/images/1-2.png" alt="Your Image" className="w-full" />
                              <div className="absolute bottom-20 right-0">
                                   <h2 className='bg-amber-600 font-bold px-2 py-2 text-white text-2xl rounded-lg'>Best of the month</h2>
                                   <p className='bg-white font-semibold p-2 rounded'>Free shipping on every order</p>
                              </div>
                         </div>
                    </div>
               </div>

               <div className='text-center mt-20 mb-10 space-y-8'>
                    <h2 className='font-bold text-6xl'>Our Gallery</h2>
                    <p className='italic text-xl'>Take a look at our best of the toys. every child will definitely love this collection of toys. This toys are unique attractive and stylish</p>
               </div>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="grid gap-4" data-aos="zoom-in-down">
                         <div >
                              <img className="h-full max-w-full rounded-lg" src="https://images.unsplash.com/photo-1609708536965-6e5b915b195b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&full=format&fit=crop&w=465&q=80" alt="" />
                         </div>
                         <div>
                              <img className="h-full max-w-full rounded-lg" src="https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&full=format&fit=crop&w=880&q=80" alt="" />
                         </div>
                         <div>
                              <img className="h-full max-w-full rounded-lg" src="https://images.unsplash.com/photo-1594787318286-3d835c1d207f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&full=format&fit=crop&w=1170&q=80" alt="" />
                         </div>
                    </div>
                    <div className="grid gap-4" data-aos="zoom-in-down">
                         <div>
                              <img className="h-full max-w-full rounded-lg" src="https://images.unsplash.com/photo-1572635196184-84e35138cf62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&full=format&fit=crop&w=880&q=80" alt="" />
                         </div>
                         <div>
                              <img className="h-full max-w-full rounded-lg" src="https://images.unsplash.com/photo-1508896694512-1eade558679c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&full=format&fit=crop&w=1170&q=80" alt="" />
                         </div>
                         <div>
                              <img className="h-full max-w-full rounded-lg" src="https://images.unsplash.com/photo-1536454891705-7f5a5c762d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&full=format&fit=crop&w=381&q=80" alt="" />
                         </div>
                    </div>
                    <div className="grid gap-4" data-aos="zoom-in-down">
                         <div>
                              <img className="h-full max-w-full rounded-lg" src="https://images.unsplash.com/photo-1592916485147-1e38fc823d21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&full=format&fit=crop&w=387&q=80" alt="" />
                         </div>
                         <div>
                              <img className="h-full max-w-full rounded-lg" src="https://images.unsplash.com/photo-1534732806146-b3bf32171b48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&full=format&fit=crop&w=1074&q=80" alt="" />
                         </div>
                         <div>
                              <img className="h-full max-w-full rounded-lg" src="https://images.unsplash.com/photo-1456082902841-3335005c3082?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&full=format&fit=crop&w=1074&q=80" alt="" />
                         </div>
                    </div>
                    <div className="grid gap-4" data-aos="zoom-in-down">
                         <div>
                              <img className="h-full max-w-full rounded-lg" src="https://images.unsplash.com/photo-1531693251400-38df35776dc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&full=format&fit=crop&w=1074&q=80" alt="" />
                         </div>
                         <div>
                              <img className="h-full max-w-full rounded-lg" src="https://images.unsplash.com/photo-1574243121728-7bbecdf295e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&full=format&fit=crop&w=1170&q=80" alt="" />
                         </div>
                         <div>
                              <img className="h-full max-w-full rounded-lg" src="https://images.unsplash.com/photo-1594787317357-dcda50fd1d78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&full=format&fit=crop&w=1170&q=80" alt="" />
                         </div>
                    </div>
               </div>

               <div className='lg:flex bg-amber-100 mt-20 py-20 px-10'>
                    <div className="lg:w-1/4 lg:mr-4 mb-6">
                         <p><FaRegClock className="text-6xl"></FaRegClock></p>
                         <h2 className="text-2xl font-bold text-green-500 mt-5 mb-2">Fast Delivery</h2>
                         <p>Find tracking information and order details from Your Orders.</p>
                    </div>
                    <div className="lg:w-1/4 lg:mr-4 mb-6">
                         <FaKey className="text-6xl"></FaKey>
                         <h2 className="text-2xl font-bold text-green-500 mt-5 mb-2">Save Money</h2>
                         <p>Save $5 every year compared to the monthly plan by paying yearly.</p>
                    </div>
                    <div className="lg:w-1/4 lg:mr-4 mb-6">
                         <FaRocket className="text-6xl"></FaRocket>
                         <h2 className="text-2xl font-bold text-green-500 mt-5 mb-2">Fast Returns</h2>
                         <p>Money back. If the item didn’t suit you</p>
                    </div>
                    <div className="lg:w-1/4 lg:mr-4 mb-6">
                         <FaHeadphones className="text-6xl"></FaHeadphones>
                         <h2 className="text-2xl font-bold text-green-500 mt-5 mb-2">Online Support</h2>
                         <p>Use our 24/7 customer hotline so you’re not alone if you have a question</p>
                    </div>
               </div>
          </div>
     );
};

export default Home;