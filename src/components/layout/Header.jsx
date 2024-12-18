import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import { Menu } from 'lucide-react';
import { Button } from '../ui/Button';
import { MobileMenu } from './MobileMenu';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-1">

            <img
              src="../assets/svgviewer.svg" // Adjust the path to your logo file
              alt="MyEnclave Logo"
              className="h-16 w-16 text-[#72ac4f]"
            />
            <Link to="/" className="text-xl font-bold text-gray-900 hover:text-[#72ac4f]">
              MyEnclave
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <nav className="flex gap-6">
              <Link to="/services" className="text-gray-700 hover:text-[#72ac4f]">Our Services</Link>
              <Link to="/properties" className="text-gray-700 hover:text-[#72ac4f]">Properties</Link>
              <Link to="/about" className="text-gray-700 hover:text-[#72ac4f]">About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-[#72ac4f]">Contact</Link>
              <Link to="/" className="text-gray-700 hover:text-[#72ac4f]">Home</Link>
            </nav>

            {/* Uncomment if you want sign-in buttons */}
            {/* <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSdyzU6Q6GQHzx_5fszGKK7MRWMYRM0ZN0IpcAlJRuk9PV1Asw/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white border border-transparent rounded-md shadow-sm bg-[#72ac4f] hover:bg-[#5f9341] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#72ac4f]"
              >
                List Your Property
              </a> 
            </div> */}

          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
};
