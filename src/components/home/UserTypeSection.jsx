import React from 'react';
import { Home, Building } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

export const UserTypeSection = () => {
  const navigate = useNavigate(); // Get the navigate function

  // Function to navigate to the properties page and scroll to the top
  const handleStartBrowsing = () => {
    navigate('/properties');
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <div className="grid md:grid-cols-2 gap-6 mt-12">
      <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow order-first">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="p-4 bg-[#f0f7ec] rounded-full">
            <Building className="h-8 w-8 text-[#72ac4f]" />
          </div>
          <h3 className="text-2xl font-semibold">Property Management Services</h3>
          <p className="text-gray-600">
            <strong>Comprehensive property management services to ensure your property is well-maintained and profitable.</strong>
          </p>
          <p className="text-gray-600">&bull; Owning a flat and struggling to rent it?</p>
          <p className="text-gray-600">&bull; We handle everything from tenant search to property maintenance.</p>
          <p className="text-gray-600">&bull; Assured rental and free maintenance</p>
          <p className="text-gray-600">&bull; Hassle-free Management</p>
          <p className="text-gray-600">&bull; Long-term contracts for peace of mind</p>

          {/* Change the anchor link to open WhatsApp */}
          <a
            href="https://wa.me/919787518289?text=Hi, I am interested in renting out my property and would like more information about your services."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-[#72ac4f] font-semibold hover:text-[#5f9341] transition-colors"
          >
            Contact Us →
          </a>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="p-4 bg-[#f0f7ec] rounded-full">
            <Home className="h-8 w-8 text-[#72ac4f]" />
          </div>
          <h3 className="text-2xl font-semibold">Serviced Apartments</h3>
          <p className="text-gray-600">
            <strong>Discover premium serviced apartments tailored to your needs, offering comfort and convenience.</strong>
          </p>
          <p className="text-gray-600">&bull; Struggling to find a stay?</p>
          <p className="text-gray-600">&bull; We are here to help you with finding great service apartments</p>
          <p className="text-gray-600">&bull; Prime locations with great accessibility</p>
          <p className="text-gray-600">&bull; Affordable and flexible rent options</p>
          <p className="text-gray-600">&bull; Ideal for short and long-term stays</p>
          <button
            onClick={handleStartBrowsing} // Add the handler for the button
            className="mt-4 text-[#72ac4f] font-semibold hover:text-[#5f9341] transition-colors"
          >
            Browse Apartments →
          </button>
        </div>
      </div>
    </div>
  );
};
