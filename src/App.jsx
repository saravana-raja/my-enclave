import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams, useNavigate } from 'react-router-dom';
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
import { HelmetProvider, Helmet } from 'react-helmet-async'; // Ensure react-helmet-async is imported
import { Home, Building } from 'lucide-react';
import Services from './pages/Services';

function App() {
  const bannerImage = '/assets/banner1.png';
  const { filters, updateFilters, filteredProperties } = usePropertySearch(sampleProperties);
  const navigate = useNavigate(); // Add useNavigate hook

  const handleViewDetails = (id) => {
    navigate(`/properties/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          <div
            className="text-center space-y-6 px-4 py-12 rounded-lg shadow-lg"
            style={{
              backgroundImage: `url(${bannerImage})`,
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

// Dynamic SEO optimization for PropertyDetailsPage
function Head({ title, description, image }) {
  return (
    <Helmet>
      <title>{title || 'Property Management & Serviced Apartment Solutions'}</title>
      <meta
        name="description"
        content={description || 'Offering comprehensive property management services, including serviced apartments, maintenance, repairs, furnishing, and staging, for property owners and tenants in Chennai.'}
      />
      <meta
        name="keywords"
        content="property management, serviced apartments, property repairs, maintenance, property furnishing, property staging, rent property, manage property, Chennai property, real estate services, property rental, serviced apartments in Chennai"
      />
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
}


// Open Graph Meta Tags for PropertyDetailsPage
function OpenGraph({ title, description, image }) {
  return (
    <>
      <meta property="og:title" content={title || 'Comprehensive Property Management & Serviced Apartment Solutions for Owners and Tenants in Chennai'} />
      <meta
        property="og:description"
        content={description || 'Our professional services offer hassle-free property management, serviced apartments, maintenance, repairs, furnishing, and staging solutions for property owners and tenants in Chennai.'}
      />
      <meta property="og:image" content={image || 'https://www.myenclave.in/assets/bannermeta.png'} />
      <meta property="og:url" content="https://www.myenclave.in" />
    </>
  );
}


// Twitter Meta Tags for PropertyDetailsPage
function TwitterCard({ title, description, image }) {
  return (
    <>
      <meta name="twitter:title" content={title || 'Property Management & Serviced Apartments with Maintenance, Furnishing & Repairs in Chennai'} />
      <meta
        name="twitter:description"
        content={description || 'We provide comprehensive property management services, including serviced apartments, maintenance, repairs, furnishing, and staging to help property owners and tenants in Chennai.'}
      />
      <meta name="twitter:image" content={image || 'https://www.myenclave.in/assets/banner1.png'} />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  );
}


// Property Details Page (Dynamic SEO)
function PropertyDetailsPage() {
  const { id } = useParams();
  const property = sampleProperties.find((p) => p.id === id);

  const handleClose = () => {
    window.history.back();
  };

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <>
      <Head
        title={`Property Details - ${property.name}`}
        description={property.description}
        image={property.imageUrl} // Dynamic image URL from the property object
      />
      <OpenGraph
        title={`Property Details - ${property.name}`}
        description={property.description}
        image={property.imageUrl} // Dynamic image URL from the property object
      />
      <TwitterCard
        title={`Property Details - ${property.name}`}
        description={property.description}
        image={property.imageUrl} // Dynamic image URL from the property object
      />
      <PropertyDetails property={property} onClose={handleClose} />
    </>
  );
}

function AppWithRouting() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/properties/:id" element={<PropertyDetailsPage />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default AppWithRouting;
