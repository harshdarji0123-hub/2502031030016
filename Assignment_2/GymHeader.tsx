import { Dumbbell, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

export function GymHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Dumbbell className="w-10 h-10 text-red-600" />
            <div>
              <span className="text-2xl font-bold text-white tracking-tight">BODY</span>
              <span className="text-2xl font-bold text-red-600 tracking-tight">CRAFT</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-300 hover:text-red-600 transition-colors font-medium">Home</a>
            <a href="#classes" className="text-gray-300 hover:text-red-600 transition-colors font-medium">Classes</a>
            <a href="#pricing" className="text-gray-300 hover:text-red-600 transition-colors font-medium">Pricing</a>
            <a href="#trainers" className="text-gray-300 hover:text-red-600 transition-colors font-medium">Trainers</a>
            <a href="#contact" className="text-gray-300 hover:text-red-600 transition-colors font-medium">Contact</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-6">
              Join Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col gap-4">
              <a href="#home" className="text-gray-300 hover:text-red-600 transition-colors font-medium">Home</a>
              <a href="#classes" className="text-gray-300 hover:text-red-600 transition-colors font-medium">Classes</a>
              <a href="#pricing" className="text-gray-300 hover:text-red-600 transition-colors font-medium">Pricing</a>
              <a href="#trainers" className="text-gray-300 hover:text-red-600 transition-colors font-medium">Trainers</a>
              <a href="#contact" className="text-gray-300 hover:text-red-600 transition-colors font-medium">Contact</a>
              <Button className="bg-red-600 hover:bg-red-700 text-white mt-2">
                Join Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
