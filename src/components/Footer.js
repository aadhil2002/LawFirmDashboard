// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white p-4 text-center">
      <p>&copy; {new Date().getFullYear()} Lejit. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
