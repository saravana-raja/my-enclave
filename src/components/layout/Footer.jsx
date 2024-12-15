import React from 'react';
import { Building2, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Building2 className="h-6 w-6 text-[#72ac4f]" />
              <span className="text-xl font-bold text-white">myEnclave</span>
            </div>
            <p className="text-sm">
              Your reliable partner for exceptional serviced apartments and seamless property management. Simplifying stays and streamlining ownership effortlessly.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-[#72ac4f] transition-colors">Home</Link></li>
              <li><Link to="/properties" className="hover:text-[#72ac4f] transition-colors">Properties</Link></li>
              <li><Link to="/about" className="hover:text-[#72ac4f] transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-[#72ac4f] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <Link to="/services">
              <h3 className="text-lg font-semibold text-white mb-4 hover:text-[#72ac4f] transition-colors">
                Our Services
              </h3>
            </Link>
            <ul className="space-y-2">
              <li><Link to="/services#serviced-apartments" className="hover:text-[#72ac4f] transition-colors">Serviced Apartments</Link></li>
              <li><Link to="/services#property-management" className="hover:text-[#72ac4f] transition-colors">Property Management</Link></li>
              <li><Link to="/services#maintenance-repairs" className="hover:text-[#72ac4f] transition-colors">Maintenance and Repairs</Link></li>
              <li><Link to="/services#furnishing-staging" className="hover:text-[#72ac4f] transition-colors">Furnishing and Staging</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <Link to="/contact">
              <h3 className="text-lg font-semibold text-white mb-4 hover:text-[#72ac4f] transition-colors">
                Contact Us
              </h3>
            </Link>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-[#72ac4f]" />
              <span>support@myenclave.in</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-[#72ac4f]" />
              <span>+91 9787518289</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              © {new Date().getFullYear()} myEnclave. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
