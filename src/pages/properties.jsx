import React, { useState } from 'react'; 
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { sampleProperties } from '../data/sampleProperties';
import { PropertyGrid } from '../components/property/PropertyGrid';
import PropertyDetails from './PropertyDetails'; // Import the PropertyDetails component

const Properties = () => {
  const [selectedProperty, setSelectedProperty] = useState(null); // Track selected property

  const handleViewDetails = (propertyId) => {
    const property = sampleProperties.find((p) => p.id === propertyId); // Find the selected property by ID
    setSelectedProperty(property); // Set the selected property to show in the modal
  };

  const closeModal = () => {
    setSelectedProperty(null); // Close the modal
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Available Properties</h1>
        <PropertyGrid properties={sampleProperties} onViewDetails={handleViewDetails} />

        {/* Show modal if a property is selected */}
        {selectedProperty && (
          <PropertyDetails 
            property={selectedProperty} 
            onClose={closeModal} 
          />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Properties;
