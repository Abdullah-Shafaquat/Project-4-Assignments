// In your footer.tsx or footer component file
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Car Rental. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-2">
          <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
          <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-white">Support</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
