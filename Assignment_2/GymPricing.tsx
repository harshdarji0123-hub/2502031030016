import { Check } from 'lucide-react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const plans = [
  {
    id: 1,
    name: 'Basic',
    price: 29,
    popular: false,
    description: 'Perfect for beginners',
    features: [
      'Access to gym equipment',
      'Locker room access',
      '3 group classes per week',
      'Mobile app access',
      'Basic nutrition guide'
    ]
  },
  {
    id: 2,
    name: 'Pro',
    price: 59,
    popular: true,
    description: 'Most popular choice',
    features: [
      'Everything in Basic',
      'Unlimited group classes',
      '2 personal training sessions/month',
      'Nutrition consultation',
      'Priority class booking',
      'Free guest passes (2/month)'
    ]
  },
  {
    id: 3,
    name: 'Elite',
    price: 99,
    popular: false,
    description: 'Ultimate fitness experience',
    features: [
      'Everything in Pro',
      '8 personal training sessions/month',
      'Customized meal plan',
      'Body composition analysis',
      'Towel service',
      'Sauna & spa access',
      'Priority equipment access'
    ]
  },
];

export function GymPricing() {
  return (
    <section className="py-20 bg-black" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Membership <span className="text-red-600">Plans</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Choose the plan that fits your fitness journey and budget
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={`relative overflow-hidden ${
                plan.popular
                  ? 'border-2 border-red-600 shadow-2xl scale-105'
                  : 'border border-gray-800 bg-gray-900'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <Badge className="bg-red-600 text-white rounded-tl-none rounded-br-none px-4 py-2">
                    MOST POPULAR
                  </Badge>
                </div>
              )}
              
              <CardHeader className="p-8 pb-4">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-5xl font-bold text-white">${plan.price}</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <Button
                  className={`w-full ${
                    plan.popular
                      ? 'bg-red-600 hover:bg-red-700 text-white'
                      : 'bg-gray-800 hover:bg-gray-700 text-white'
                  }`}
                  size="lg"
                >
                  Get Started
                </Button>
              </CardHeader>

              <CardContent className="p-8 pt-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400">
            All plans include a 7-day free trial. No credit card required. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
