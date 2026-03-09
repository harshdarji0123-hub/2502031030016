import { Shield, Award, Headphones, DollarSign } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Safe & Secure',
    description: 'Your safety is our priority with comprehensive travel insurance and 24/7 support'
  },
  {
    icon: Award,
    title: 'Best Price Guarantee',
    description: 'We match any competitor price and ensure you get the best value for your money'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Our dedicated team is available around the clock to assist you on your journey'
  },
  {
    icon: DollarSign,
    title: 'Easy Booking',
    description: 'Simple and secure booking process with flexible payment options'
  },
];

export function Features() {
  return (
    <section className="py-20 bg-blue-600" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Why Choose TravelWorld?
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            We're committed to making your travel dreams come true with exceptional service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-blue-100">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
