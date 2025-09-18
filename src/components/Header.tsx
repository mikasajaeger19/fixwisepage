import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">FW</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">FixWise</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-primary transition-colors">
              Services
            </a>
            <a href="#process" className="text-gray-600 hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#benefits" className="text-gray-600 hover:text-primary transition-colors">
              Benefits
            </a>
            {/* <a href="#testimonials" className="text-gray-600 hover:text-primary transition-colors">
              Testimonials
            </a> */}
            <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {/* <Button variant="ghost">Sign In</Button> */}
            <Button>Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <a href="#services" className="text-gray-600 hover:text-primary transition-colors">
                Services
              </a>
              <a href="#process" className="text-gray-600 hover:text-primary transition-colors">
                How It Works
              </a>
              <a href="#benefits" className="text-gray-600 hover:text-primary transition-colors">
                Benefits
              </a>
              {/* <a href="#testimonials" className="text-gray-600 hover:text-primary transition-colors">
                Testimonials
              </a> */}
              <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">
                Contact
              </a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-100">
                <Button variant="ghost" className="justify-start">Sign In</Button>
                <Button className="justify-start">Get Started</Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}