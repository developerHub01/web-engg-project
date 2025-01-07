import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* About Section */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold">Grocery Shop</h3>
            <p className="text-sm">
              Your one-stop shop for fresh groceries, delivered to your
              doorstep.
            </p>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-bold">Follow Us</h4>
            <div className="flex space-x-4 mt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gray-300"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gray-300"
              >
                Twitter
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gray-300"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center border-t border-green-600 pt-4 text-sm">
          &copy; {new Date().getFullYear()} Grocery Shop. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
