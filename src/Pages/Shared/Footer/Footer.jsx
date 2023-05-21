import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
     return (
          <footer className="footer p-10 bg-teal-100 text-base-content mt-20">
               <div>
                    <img className='rounded-lg w-40' src="https://i.ibb.co/3RqcZYY/Blue-and-Yellow-Creative-Minimalist-3-D-Toys-Store-Promotion-Facebook-Post.png" alt="" />
                    <p><span className='font-bold text-2xl'>TOY-HAVEN</span> Industries Ltd.<br />Providing reliable tech since 1992</p>
               </div>
               <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
               </div>
               <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
               </div>
               <div>
                    <span className="footer-title">Social</span>
                    <a className="link link-hover text-2xl" href='https://www.facebook.com/'><FaFacebook></FaFacebook></a>
                    <a className="link link-hover text-2xl" href='https://twitter.com/'><FaTwitter></FaTwitter></a>
                    <a className="link link-hover text-2xl" href='https://www.instagram.com/'><FaInstagram></FaInstagram></a>
               </div>
          </footer>
     );
};

export default Footer;