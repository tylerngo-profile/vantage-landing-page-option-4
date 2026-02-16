import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-section-border bg-background/95 backdrop-blur-sm">
      <div className="section-container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
            <span className="text-sm font-bold text-primary-foreground">V</span>
          </div>
          <span className="text-lg font-semibold text-foreground">Vantage</span>
          <span className="text-xs text-subtle font-body">by Profile</span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">How it works</a>
          <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About</a>
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#demo" className="rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors">
            See an example hub
          </a>
          <a href="#demo" className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary-hover transition-colors">
            Book a demo
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 text-foreground" aria-label="Toggle menu">
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-section-border bg-background px-6 py-4 space-y-3">
          <a href="#features" className="block text-sm font-medium text-muted-foreground">Features</a>
          <a href="#how-it-works" className="block text-sm font-medium text-muted-foreground">How it works</a>
          <a href="#about" className="block text-sm font-medium text-muted-foreground">About</a>
          <div className="flex flex-col gap-2 pt-3 border-t border-section-border">
            <a href="#demo" className="rounded-md border border-border px-4 py-2 text-center text-sm font-medium text-foreground">See an example hub</a>
            <a href="#demo" className="rounded-md bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground">Book a demo</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
