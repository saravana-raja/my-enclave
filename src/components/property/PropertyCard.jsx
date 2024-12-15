import React, { useState } from 'react';
import { Home, Bath, BedDouble, MapPin } from 'lucide-react';
import { Button } from '../ui/Button';
import PropertyDetails from '../../pages/PropertyDetails';

export const PropertyCard = ({ property, onViewDetails }) => {  // Accept onViewDetails prop
  const [showDetails, setShowDetails] = useState(false);

  const handleCloseDetails = () => {
    setShowDetails(false);
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
        <div className="relative h-48">
          <img
            src={property.imageUrl}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-[#72ac4f] text-white px-3 py-1 rounded-full text-sm font-semibold">
            {property.type === 'sale' ? 'For Sale' : 'For Rent'}
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
            <MapPin size={16} />
            <span>{property.location}</span>
          </div>

          <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{property.description}</p>

          <div className="flex justify-between items-center mb-4">
            <div className="flex gap-4 text-gray-600">
              <div className="flex items-center gap-1">
                <BedDouble size={18} />
                <span>{property.bedrooms}</span>
              </div>
              <div className="flex items-center gap-1">
                <Bath size={18} />
                <span>{property.bathrooms}</span>
              </div>
              <div className="flex items-center gap-1">
                <Home size={18} />
                <span>{property.area}m²</span>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="text-[#72ac4f] font-bold text-xl">
              ₹ {property.price.toLocaleString()}
              {property.type === 'rent' && '/month'}
            </div>
            <Button
              variant="primary"
              size="sm"
              onClick={() => onViewDetails(property.id)} // Trigger onViewDetails
            >
              View Details
            </Button>
          </div>
        </div>
      </div>

      {showDetails && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-8 max-w-3xl w-full">
            <PropertyDetails property={property} onClose={handleCloseDetails} />
            <Button
              variant="secondary"
              size="sm"
              onClick={handleCloseDetails}
              className="mt-4 w-full"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
