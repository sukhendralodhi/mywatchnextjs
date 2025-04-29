import React from 'react';

const Footer = () => {
  return (
    <footer className="text-balck bg-slate-100 border border-slate-300">
      <div className="container mx-auto px-4 pb-6">
        <div className=" border-gray-600 mt-8    text-center">
          <p>© {new Date().getFullYear()} ZWatches. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;