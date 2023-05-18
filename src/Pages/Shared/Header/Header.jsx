import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import React from 'react';
import ActiveLink from './ActiveLink';
import { Link } from 'react-router-dom';

const Header = () => {
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
                         Toy Shop
                    </span>
               </Navbar.Brand>
               <div className="flex md:order-2">
                    <Dropdown
                         arrowIcon={false}
                         inline={true}
                         label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />}
                    >
                    </Dropdown>
                         <button><Link to='/login'>Login</Link></button>
                    <Navbar.Toggle />
               </div>
               <Navbar.Collapse>
                    <ActiveLink to='/'>Home</ActiveLink>
                    <ActiveLink to='/alltoys'>All Toys</ActiveLink>
                    <ActiveLink to='/mytoys'>My Toys</ActiveLink>
                    <ActiveLink to='/addtoys'>Add a Toy</ActiveLink>
                    <ActiveLink to='/blog'>Blog</ActiveLink>
               </Navbar.Collapse>
          </Navbar>
     );
};

export default Header;