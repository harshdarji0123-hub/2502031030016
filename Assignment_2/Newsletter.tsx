import { Mail } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function Newsletter() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700" id="contact">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Mail className="w-16 h-16 text-white mx-auto mb-6" />
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Get Exclusive Travel Deals
        </h2>
        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter and receive special offers, travel tips, and destination guides directly to your inbox
        </p>

        <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <Input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 h-12 bg-white"
          />
          <Button size="lg" variant="secondary" className="h-12 px-8">
            Subscribe
          </Button>
        </div>

        <p className="text-sm text-blue-100 mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
