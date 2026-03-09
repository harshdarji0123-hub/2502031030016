import { Dumbbell, MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export function GymFooter() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Dumbbell className="w-10 h-10 text-red-600" />
              <div>
                <span className="text-2xl font-bold text-white tracking-tight">BODY</span>
                <span className="text-2xl font-bold text-red-600 tracking-tight">CRAFT</span>
              </div>
            </div>
            <p className="text-sm mb-6">
              Transform your body and mind with expert guidance, state-of-the-art equipment, 
              and a community that supports your fitness journey.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-red-600 transition-colors">Home</a></li>
              <li><a href="#classes" className="hover:text-red-600 transition-colors">Classes</a></li>
              <li><a href="#pricing" className="hover:text-red-600 transition-colors">Pricing</a></li>
              <li><a href="#trainers" className="hover:text-red-600 transition-colors">Trainers</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-red-600 transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Membership</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Payment Options</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span>456 Fitness Avenue<br />Los Angeles, CA 90001</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <a href="tel:+15551234567" className="hover:text-red-600 transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <a href="mailto:info@bodycraft.com" className="hover:text-red-600 transition-colors">
                  info@bodycraft.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span>Mon-Fri: 5AM - 11PM<br />Sat-Sun: 6AM - 10PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; 2026 BodyCraft Gym. All rights reserved. Built for champions.</p>
        </div>
      </div>
    </footer>
  );
}
