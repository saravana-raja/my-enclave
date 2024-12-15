import React from "react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919787518289"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 flex flex-col items-center justify-center"
    >
        <div className="bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600">

      <img
        src="assets/WhatsApp.svg" // Path to the WhatsApp icon
        alt="WhatsApp"
        className="w-12 h-12" // Size of the icon (you can adjust this as needed)
      />
      </div>
      <span className="text-black font-bold text-xs mt-2 dark:text-white">Contact Us</span> {/* Text below the icon */}

    </a>
  );
};

export default WhatsAppButton;
