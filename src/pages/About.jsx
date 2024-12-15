import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Building2 } from 'lucide-react';
import WhatsAppButton from "../components/ui/WhatsAppButton"; // WhatsApp Button Import

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Building2 className="h-16 w-16 text-[#72ac4f] mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">About myEnclave</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your trusted partner in premium serviced apartments and seamless property management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600">
              At myEnclave, our mission is to redefine the serviced apartment experience while offering
              unparalleled property management solutions. We ensure a seamless process for both property
              owners and tenants.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-600">
              We aim to create a future where property ownership and tenancy are effortless and stress-free.
              Through innovation and dedication, we bring value to every property we manage.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
  <h2 className="text-3xl font-semibold mb-6 text-gray-800">Our Core Services</h2>
  <ul className="text-lg text-gray-600 max-w-3xl mx-auto list-inside pl-6 space-y-4 text-left">
    <li>
      <strong className="font-medium text-gray-800">Serviced Apartments:</strong> Fully-furnished apartments offering a perfect blend of comfort and convenience for short or long stays.
    </li>
    <li>
      <strong className="font-medium text-gray-800">Property Management:</strong> Comprehensive solutions for managing your property, from tenant screening to rent collection.
    </li>
    <li>
      <strong className="font-medium text-gray-800">Maintenance and Repairs:</strong> Reliable services to keep your property in top condition with prompt and professional care.
    </li>
    <li>
      <strong className="font-medium text-gray-800">Furnishing and Staging:</strong> Transform unfurnished properties into appealing and functional spaces ready for tenants or buyers.
    </li>
  </ul>
</div>



        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Tailored Solutions',
                description: 'We provide personalized services to meet the unique needs of property owners and tenants.'
              },
              {
                title: 'Quality Assurance',
                description: 'Every property we manage is maintained to the highest standards, ensuring satisfaction and trust.'
              },
              {
                title: 'Expert Team',
                description: 'Our experienced professionals are dedicated to delivering seamless and efficient services.'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
