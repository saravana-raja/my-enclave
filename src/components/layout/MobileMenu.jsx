import React from 'react';
import { X } from 'lucide-react';
import { Button } from '../ui/Button';

export const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white">
      <div className="p-4">
        <button onClick={onClose} className="absolute top-4 right-4">
          <X className="h-6 w-6" />
        </button>

        <div className="flex flex-col space-y-8 mt-16">
          <nav className="flex flex-col space-y-6">
            <a href="/" className="text-lg text-gray-700 hover:text-[#72ac4f]">Home</a>
            <a href="/properties" className="text-lg text-gray-700 hover:text-[#72ac4f]">Properties</a>
            <a href="/about" className="text-lg text-gray-700 hover:text-[#72ac4f]">About</a>
            <a href="/contact" className="text-lg text-gray-700 hover:text-[#72ac4f]">Contact</a>
          </nav>

          <div className="flex flex-col space-y-4">

          </div>
        </div>
      </div>
    </div>
  );
};