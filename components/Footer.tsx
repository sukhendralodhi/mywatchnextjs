import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-balck">
      <div className="container mx-auto px-4 pb-6">
        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;