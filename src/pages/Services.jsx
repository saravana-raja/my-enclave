import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Home, Building, Wrench, Sofa } from 'lucide-react';
import WhatsAppButton from '../components/ui/WhatsAppButton'; // WhatsApp Button Import

const Services = () => {
  const services = [
    {
      icon: <Home className="h-8 w-8 text-[#72ac4f]" />, // Icon
      title: 'Serviced Apartments',
      description:
        'Serviced apartments are fully furnished properties tailored for tenants who prefer a ready-to-live-in home. Designed to meet long-term rental needs, these apartments ensure comfort, convenience, and premium living standards for tenants while offering hassle-free rental management for property owners.',
    },
    {
        icon: <Building className="h-8 w-8 text-[#72ac4f]" />, // Icon
        title: 'Property Management',
        description:
          'Our property management services are designed to maximize your property\'s potential. We take care of tenant screening, rent collection, property inspections, and everything in between, ensuring peace of mind for property owners.',
      },
      
    {
      icon: <Wrench className="h-8 w-8 text-[#72ac4f]" />, // Icon
      title: 'Maintenance and Repairs',
      description:
        'We provide affordable, reliable, and timely property maintenance and repair services, ensuring your property stays in excellent condition without the hassle of managing repairs on your own.',
    },
    {
      icon: <Sofa className="h-8 w-8 text-[#72ac4f]" />, // Icon
      title: 'Furnishing and Staging',
      description:
        'Our furnishing and staging services transform your unfurnished property into an inviting, fully-equipped home, attracting tenants quickly and maximizing rental income.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore the wide range of services we offer to make property ownership hassle-free and rewarding.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-[#f0f7ec] rounded-full">{service.icon}</div>
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Services;
