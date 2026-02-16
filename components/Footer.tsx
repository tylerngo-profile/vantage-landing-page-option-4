import React from 'react';
import Button from './ui/Button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-stone-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          <div className="lg:col-span-1">
            <a href="#" className="inline-flex items-center mb-6" aria-label="Vantage home">
              <img
                src="/images/Vantage-logo-dark.svg"
                alt="Vantage"
                className="h-7 w-auto"
              />
            </a>
            <p className="text-stone-500 text-sm leading-relaxed">
              The editorial engine for the world's leading professional services firms.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-stone-900 mb-4 text-sm uppercase tracking-wider">Product</h4>
            <ul className="space-y-3 text-sm text-stone-600">
              <li><a href="#" className="hover:text-brand-900">Content Hub</a></li>
              <li><a href="#" className="hover:text-brand-900">Creation Service</a></li>
              <li><a href="#" className="hover:text-brand-900">Distribution</a></li>
              <li><a href="#" className="hover:text-brand-900">Analytics</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-stone-900 mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3 text-sm text-stone-600">
              <li><a href="#" className="hover:text-brand-900">About</a></li>
              <li><a href="#" className="hover:text-brand-900">Customers</a></li>
              <li><a href="#" className="hover:text-brand-900">Manifesto</a></li>
              <li><a href="#" className="hover:text-brand-900">Contact</a></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
             <h4 className="font-bold text-stone-900 mb-4 text-sm uppercase tracking-wider">Start Now</h4>
             <div className="flex flex-col space-y-3">
               <Button variant="primary">Book a Demo</Button>
               <Button variant="outline">See Example Hub</Button>
             </div>
          </div>
        </div>

        <div className="border-t border-stone-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-400">
          <div>
            &copy; 2024 Vantage Platform Inc. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-stone-900">Privacy Policy</a>
            <a href="#" className="hover:text-stone-900">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;