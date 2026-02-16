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
        
        {/* Logo - Serif Typographic */}
        <div className="flex items-center space-x-2">
          <span className="font-serif text-2xl font-bold tracking-tight text-stone-900">
            Vantage.
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#how-it-works" className="text-sm font-medium text-stone-600 hover:text-brand-900 transition-colors">
            Mechanism
          </a>
          <a href="#examples" className="text-sm font-medium text-stone-600 hover:text-brand-900 transition-colors">
            Examples
          </a>
          <a href="#roi" className="text-sm font-medium text-stone-600 hover:text-brand-900 transition-colors">
            ROI
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
           <a href="#how-it-works" className="text-lg font-serif text-stone-900" onClick={() => setIsMobileMenuOpen(false)}>Mechanism</a>
           <a href="#examples" className="text-lg font-serif text-stone-900" onClick={() => setIsMobileMenuOpen(false)}>Examples</a>
           <Button variant="outline" className="w-full justify-center">See example hub</Button>
           <Button variant="primary" className="w-full justify-center">Book a demo</Button>
        </div>
      )}
    </header>
  );
};

export default Header;