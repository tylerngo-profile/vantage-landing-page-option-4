import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './ui/Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm border-stone-200 py-3' : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="flex items-center" aria-label="Vantage home">
          <img
            src="/images/Vantage-logo-dark.svg"
            alt="Vantage"
            className="h-7 w-auto"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium text-stone-600 hover:text-brand-900 transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-stone-600 hover:text-brand-900 transition-colors">
            How it works
          </a>
          <a href="#about" className="text-sm font-medium text-stone-600 hover:text-brand-900 transition-colors">
            About
          </a>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="text" onClick={() => console.log('See hub')}>
            See example hub
          </Button>
          <Button variant="primary" size="sm" onClick={() => console.log('Book demo')}>
            Book a demo
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-stone-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-stone-200 p-6 md:hidden flex flex-col space-y-4 shadow-lg">
           <a href="#features" className="text-lg font-serif text-stone-900" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
           <a href="#how-it-works" className="text-lg font-serif text-stone-900" onClick={() => setIsMobileMenuOpen(false)}>How it works</a>
           <a href="#about" className="text-lg font-serif text-stone-900" onClick={() => setIsMobileMenuOpen(false)}>About</a>
           <Button variant="outline" className="w-full justify-center">See example hub</Button>
           <Button variant="primary" className="w-full justify-center">Book a demo</Button>
        </div>
      )}
    </header>
  );
};

export default Header;