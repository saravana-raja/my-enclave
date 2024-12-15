import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Properties from './pages/properties';
import PropertyDetails from './pages/PropertyDetails';
import { SearchFilters } from './components/search/SearchFilters';
import { UserTypeSection } from './components/home/UserTypeSection';
import { PropertyGrid } from './components/property/PropertyGrid';
import { usePropertySearch } from './hooks/usePropertySearch';
import WhatsAppButton from './components/ui/WhatsAppButton';
import { sampleProperties } from './data/sampleProperties';
import { Helmet } from 'react-helmet';
import { Home, Building } from 'lucide-react';
import Services from './pages/Services'; // Import the new services page

function App() {
  // Static banner image (choose the desired image)
  const bannerImage = '/assets/banner1.png';  // You can change this to any image you want

  const { filters, updateFilters, filteredProperties } = usePropertySearch(sampleProperties);

  const handleViewDetails = (id) => {
    window.location.href = `/properties/${id}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          <div
            className="text-center space-y-6 px-4 py-12 rounded-lg shadow-lg"
            style={{
              backgroundImage: `url(${bannerImage})`,  // Static image instead of rotation
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <h1 className="text-5xl font-extrabold text-white sm:text-6xl">
              Unlock Your Property's Potential with Us
            </h1>
            <p className="text-lg text-white px-4 py-2 rounded max-w-3xl mx-auto">
              Whether you're an owner seeking hassle-free management or a tenant looking for serviced apartments, we’ve got you covered.
            </p>
            <div className="flex justify-center mt-6 space-x-8">
              <div className="flex items-center text-white px-4 py-2 rounded space-x-2">
                <Home className="h-6 w-6" />
                <span className="text-lg">For Property Owners</span>
              </div>
              <div className="flex items-center text-white px-4 py-2 rounded space-x-2">
                <Building className="h-6 w-6" />
                <span className="text-lg">For Tenants</span>
              </div>
            </div>
          </div>

          {/* Search Filters */}
          <SearchFilters filters={filters} onFilterChange={updateFilters} />

          {/* User Type Section */}
          <UserTypeSection />

          {/* Property Grid Display */}
          <PropertyGrid properties={filteredProperties} onViewDetails={handleViewDetails} />
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}

// SEO optimization using react-helmet
function Head() {
  return (
    <Helmet>
      <title>Property Management Services | Find Your Perfect Property</title>
      <meta
        name="description"
        content="Browse and find properties for rent or sale. Explore luxurious apartments, houses, and condos in prime locations."
      />
      <meta
        name="keywords"
        content="property, real estate, house, apartments for rent, apartments for sale, property management"
      />
      <meta name="robots" content="index, follow" />
      <meta
        property="og:title"
        content="Property Management Services | Find Your Perfect Property"
      />
      <meta
        property="og:description"
        content="Browse and find properties for rent or sale. Explore luxurious apartments, houses, and condos in prime locations."
      />
      <meta property="og:image" content="https://www.example.com/image.jpg" />
      <meta property="og:url" content="https://www.example.com" />
    </Helmet>
  );
}

function PropertyDetailsPage() {
  const { id } = useParams();
  const property = sampleProperties.find((p) => p.id === id);

  const handleClose = () => {
    window.history.back();
  };

  if (!property) {
    return <div>Property not found</div>;
  }

  return <PropertyDetails property={property} onClose={handleClose} />;
}

function AppWithRouting() {
  return (
    <Router>
      <Head />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/properties/:id" element={<PropertyDetailsPage />} />
        <Route path="/services" element={<Services />} /> {/* Add Services page */}
      </Routes>
    </Router>
  );
}

export default AppWithRouting;
