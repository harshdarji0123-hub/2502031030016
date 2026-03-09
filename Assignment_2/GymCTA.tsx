import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function GymCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-red-600 to-red-700" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Start Your
              <span className="block">Transformation?</span>
            </h2>
            <p className="text-lg text-red-100 mb-8">
              Join BodyCraft today and get access to world-class facilities, expert trainers, 
              and a supportive community dedicated to your success.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-white flex-shrink-0" />
                <span className="text-white">7-day free trial - No credit card required</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-white flex-shrink-0" />
                <span className="text-white">Cancel anytime - No long-term commitment</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-white flex-shrink-0" />
                <span className="text-white">Free fitness assessment included</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Get Started Today
            </h3>
            <p className="text-gray-600 mb-6">
              Fill out the form below and we'll get in touch within 24 hours
            </p>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <Input
                  type="text"
                  placeholder="John Doe"
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <Input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Fitness Goal
                </label>
                <select className="w-full border border-gray-300 rounded-md p-2">
                  <option>Weight Loss</option>
                  <option>Muscle Building</option>
                  <option>General Fitness</option>
                  <option>Athletic Performance</option>
                  <option>Flexibility & Mobility</option>
                </select>
              </div>

              <Button className="w-full bg-red-600 hover:bg-red-700 text-white" size="lg">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
