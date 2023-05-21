import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import ActiveLink from './ActiveLink';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { AuthContext } from '../../../Provider/AuthProvider';

const Header = () => {
     const { user, logOut } = useContext(AuthContext);
     const [isOpen, setIsOpen] = useState(false)

     const handleLogout = () => {
          logOut()
               .then()
               .catch(error => {
                    console.log(error.message);
               })
     }

     return (
          <Navbar
               fluid={true}
               rounded={true}
          >
               <Navbar.Brand href="/">
                    <img
                         src="https://img.freepik.com/free-vector/font-design-word-toy-shop-with-many-toys_1308-42318.jpg?w=996&t=st=1684407579~exp=1684408179~hmac=3acb65f3d11d7f4ab209d347370931374b7cd6e39270ed9d0bcfa3ec675c4c00"
                         className="mr-3 h-20 sm:h-9"
                         alt=""
                    />
                    <span className="self-center whitespace-nowrap text-2xl font-bold dark:text-white">
                         Toy Haven
                    </span>
               </Navbar.Brand>
               <div className="flex md:order-2">
                    {
                         user ? <> <a data-tooltip-id="my-tooltip" onMouseOver={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
                              {<Avatar alt="User settings" img={user?.photoURL} rounded={true} />}
                         </a> <button onClick={handleLogout} className='bg-cyan-400 font-bold px-3 py-2 ms-2 rounded-3xl'>Logout</button></>
                              :
                              <button className='bg-stone-300 font-bold px-3 py-2 rounded'><Link to='/login'>Login</Link></button>
                    }
                    <Tooltip
                         id="my-tooltip"
                         content={user ? user.displayName : ""}
                         isOpen={isOpen}
                    />
                    <Navbar.Toggle />
               </div>
               <Navbar.Collapse>
                    <ActiveLink to='/'>Home</ActiveLink>
                    <ActiveLink to='/alltoys'>All Toys</ActiveLink>
                    <p onClick={() => !user && alert('Please login to view this page')}><ActiveLink to='/mytoys'>My Toys</ActiveLink></p>
                    <p onClick={() => !user && alert('Please login to view this page')}><ActiveLink to='/addtoys'>Add a Toy</ActiveLink></p>
                    <ActiveLink to='/blog'>Blog</ActiveLink>
               </Navbar.Collapse>
          </Navbar>
     );
};

export default Header;