// src/Footer.js
import React from 'react';

import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <footer className="bg-white-500 text-grey py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={logo} alt="YourLogo" className="h-16 w-auto" />
            <p className="mt-4">
              We provide high quality tech solutions to help you achieve your business goals.
            </p>
            <div className="mt-4">
              <span className="block"><i className="fas fa-phone"></i> &nbsp;+91 9348146253</span>
              <span className="block"><i className="fas fa-envelope"></i> &nbsp; info@sudhaportfolio.com</span>
            </div>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-xl"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-xl"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-xl"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-xl"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>

          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold">Quick Links</h2>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="w-full md:w-1/3">
            <h2 className="text-2xl font-bold">Contact Me</h2>
            <form action="#" className="mt-4">
              <input type="email" name="email" className="w-full p-2 mb-4 bg-gray-700 rounded focus:outline-none" placeholder="Your email address..." />
              <textarea rows="4" name="message" className="w-full p-2 mb-4 bg-gray-700 rounded focus:outline-none" placeholder="Your message..."></textarea>
              <button type="submit" className="w-full p-2 bg-lime-500 rounded text-white hover:bg-lime-600">
                <i className="fas fa-envelope"></i> Send
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          &copy; portfolio.com | Designed by sudhakar
        </div>
      </div>
    </footer>
  );
};

export default Footer;
