import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { Mail, Phone } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Footer } from '../components/layout/Footer';
import WhatsAppButton from '../components/ui/WhatsAppButton';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">
            Get in touch with our team for any inquiries or support
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Contact Us Instantly</h2>
            <p className="text-gray-600 mb-4">
              We make it easy for you to reach us instantly. Click the button below to chat with us directly on WhatsApp.
            </p>
            <WhatsAppButton />
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-[#72ac4f]" />
                  <span>support@myenclave.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-[#72ac4f]" />
                  <span>+91 9787518289</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
