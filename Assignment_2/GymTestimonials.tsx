import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const testimonials = [
  {
    id: 1,
    name: 'John Martinez',
    role: 'Lost 30 lbs',
    rating: 5,
    text: 'BodyCraft transformed my life! The trainers are incredibly supportive and the facilities are top-notch. I\'ve never felt better!',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop'
  },
  {
    id: 2,
    name: 'Lisa Thompson',
    role: 'Marathon Runner',
    rating: 5,
    text: 'The personalized training program helped me achieve my goal of running a marathon. The community here is amazing!',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop'
  },
  {
    id: 3,
    name: 'Marcus Davis',
    role: 'Strength Athlete',
    rating: 5,
    text: 'Best gym I\'ve ever joined. The equipment is state-of-the-art and the atmosphere is incredibly motivating. Highly recommend!',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop'
  },
];

export function GymTestimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Success <span className="text-red-600">Stories</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our members who have achieved amazing results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-0 shadow-lg hover:shadow-2xl transition-shadow">
              <CardContent className="p-8">
                <Quote className="w-12 h-12 text-red-600 mb-4" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-red-600 text-red-600" />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-red-600">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
