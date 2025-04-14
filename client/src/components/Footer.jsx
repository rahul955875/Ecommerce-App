import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="bg-white dark:bg-gray-800 flex justify-center items-center">
        <footer className="bg-white text-gray-700 border-t border-gray-200">
          <div className="container mx-auto px-6 py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Logo & Description */}
              <div>
                <h2 className="text-xl font-semibold flex items-center space-x-2">
                  <span className="text-blue-600 text-2xl">JMD</span>{" "}
                  <span>Collection</span>
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Imperdiet aliquet
                  faucibus malesuada vitae.
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  <span className="font-semibold">(+91) 555-0114</span>
                </p>
                {/* Social Icons */}
                <div className="flex space-x-3 mt-3">
                  <Link to="/" className="text-blue-600">
                    <i className="fab fa-facebook" />
                  </Link>
                  <Link to="/" className="text-red-600">
                    <i className="fab fa-reddit" />
                  </Link>
                  <Link to="/" className="text-green-500">
                    <i className="fab fa-whatsapp" />
                  </Link>
                  <Link to="/" className="text-pink-600">
                    <i className="fab fa-pinterest" />
                  </Link>
                </div>
              </div>
              {/* My Account */}
              <div>
                <h3 className="font-semibold mb-2">My Account</h3>
                <ul className="text-sm space-y-2">
                  <li>
                    <Link to="/" className="hover:text-blue-600">
                      My Account
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="hover:text-blue-600">
                      Order History
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="hover:text-blue-600">
                      Shopping Cart
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="hover:text-blue-600">
                      Wishlist
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Help Section */}
              <div>
                <h3 className="font-semibold mb-2">Helps</h3>
                <ul className="text-sm space-y-2">
                  <li>
                    <Link to="/" className="hover:text-blue-600">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="hover:text-blue-600">
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="hover:text-blue-600">
                      Terms &amp; Condition
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="hover:text-blue-600">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Categories */}
              <div>
                <h3 className="font-semibold mb-2">Categories</h3>
                <ul className="text-sm space-y-2">
                  <li>
                    <Link to="/" className="hover:text-blue-600">
                      Trending{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="hover:text-blue-600">
                      Wedding
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="hover:text-blue-600">
                      Silk
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* Payment and App Download */}
            <div className="flex flex-col md:flex-row justify-between items-center mt-6">
              <div className="flex space-x-2">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-v52tLnvL3FEjfxjPvZWbvUMYvVUtAm9R6A&s"
                  alt="Google Play"
                  className="h-10"
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJgk5tpxJC_1CAnsXwo2VvBGyQGI-o5c1PJw&s"
                  alt="App Store"
                  className="h-10"
                />
              </div>
              <div className="flex space-x-2 mt-4 md:mt-0">
                <img
                  src="https://www.logo.wine/a/logo/Apple_Pay/Apple_Pay-White-Dark-Background-Logo.wine.svg"
                  alt="Apple Pay"
                  className="h-[30px] w-10 rounded-md"
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSynWEtLag--sQ4XlfTwHh9_DAnfcglW7C3iw&s"
                  alt="Visa"
                  className="h-[30px] w-10 rounded-md"
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6mJsEDg1aR_JCFb3ohk2nCxjgSvkWnpmlKg&s"
                  alt="Mastercard"
                  className="h-[30px] w-10 rounded-md"
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQveKfGcJ1tSEY8bLg52DxvVrFDJXmxXJgv1Q&s"
                  alt="discover"
                  className="h-[30px] w-10 rounded-md"
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDS0zyuJdI4e7E1VGaNDAVtRn3fGTzr0PBOA&s"
                  alt="Secure Payment"
                  className="h-[30px] w-10 rounded-md"
                />
              </div>
            </div>
            {/* Copyright */}
            <div className="text-center text-sm text-gray-500 mt-6 border-t pt-4">
              JMD Collection © 2025. All Rights Reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
