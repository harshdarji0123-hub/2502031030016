import { Plane, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Plane className="w-8 h-8 text-blue-500" />
              <span className="text-xl font-bold text-white">TravelWorld</span>
            </div>
            <p className="text-sm mb-4">
              Your trusted partner in discovering amazing destinations around the world. Creating unforgettable memories since 2015.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Destinations</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Tour Packages</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Travel Blog</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-500 transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Booking Policy</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Cancellations</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm">
              <li>123 Travel Street</li>
              <li>New York, NY 10001</li>
              <li>United States</li>
              <li className="pt-2">
                <a href="tel:+1234567890" className="hover:text-blue-500 transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li>
                <a href="mailto:info@travelworld.com" className="hover:text-blue-500 transition-colors">
                  info@travelworld.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; 2026 TravelWorld. All rights reserved. Designed with passion for travelers.</p>
        </div>
      </div>
    </footer>
  );
}
