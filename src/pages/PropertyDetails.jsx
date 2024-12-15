import React, { useState } from 'react';

const PropertyDetails = ({ property, onClose }) => {
  const [expandedImage, setExpandedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const allImages = [property.imageUrl, ...(property.images || [])];

  const openImage = (index) => {
    setExpandedImage(allImages[index]);
    setCurrentImageIndex(index);
  };

  const closeImage = () => {
    setExpandedImage(null);
  };

  const goToPreviousImage = () => {
    if (currentImageIndex > 0) {
      const newIndex = currentImageIndex - 1;
      setCurrentImageIndex(newIndex);
      setExpandedImage(allImages[newIndex]);
    }
  };

  const goToNextImage = () => {
    if (currentImageIndex < allImages.length - 1) {
      const newIndex = currentImageIndex + 1;
      setCurrentImageIndex(newIndex);
      setExpandedImage(allImages[newIndex]);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-lg">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold">{property.title}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <img
            src={property.imageUrl}
            alt={property.title}
            className="w-full h-64 object-cover rounded-lg mb-4 cursor-pointer"
            onClick={() => openImage(0)} // Open banner image on click

          />

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Image Gallery</h3>
            <div className="grid grid-cols-3 gap-4">
              {property.images && property.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Property Image ${index + 1}`}
                  className="w-full h-32 object-cover rounded-lg cursor-pointer"
                  onClick={() => openImage(index + 1)}
                />
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-gray-600">{property.location}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-gray-600">{property.description}</p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-50 p-3 rounded">
                <p className="text-sm text-gray-500">Bedrooms</p>
                <p className="font-semibold">{property.bedrooms}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <p className="text-sm text-gray-500">Bathrooms</p>
                <p className="font-semibold">{property.bathrooms}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <p className="text-sm text-gray-500">Area</p>
                <p className="font-semibold">{property.area} m²</p>
              </div>
            </div>

            <div className="border-t pt-4">
              <p className="text-2xl font-bold text-[#72ac4f]">
                ₹ {property.price.toLocaleString()}{' '}
                {property.type === 'rent' && '/month'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {expandedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-60"
          onClick={closeImage} // Close modal when clicking outside
        >
          <div
            className="bg-white p-6 rounded-lg max-w-4xl relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <button
              onClick={closeImage}
              className="text-gray-500 hover:text-gray-700 absolute top-1 right-1"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={expandedImage}
              alt="Expanded Property"
              className="max-w-full max-h-[80vh] object-contain"
            />
            <div className="flex justify-between mt-4">
              <button
                onClick={goToPreviousImage}
                disabled={currentImageIndex === 0}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50"
              >
                Previous
              </button>
              <button
                onClick={goToNextImage}
                disabled={currentImageIndex === allImages.length - 1}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyDetails;
