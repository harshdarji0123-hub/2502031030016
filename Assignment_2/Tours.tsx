import { Clock, Users, Star, Calendar } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const tours = [
  {
    id: 1,
    title: 'Alpine Adventure - Swiss Mountains',
    image: 'https://images.unsplash.com/photo-1595368062405-e4d7840cba14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGFkdmVudHVyZSUyMGhpa2luZ3xlbnwxfHx8fDE3NzMwMjkyNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    price: 1299,
    duration: '7 Days',
    groupSize: '12-16',
    rating: 4.9,
    reviews: 124,
    type: 'Adventure'
  },
  {
    id: 2,
    title: 'Parisian Romance - 5 Star Experience',
    image: 'https://images.unsplash.com/photo-1431274172761-fca41d930114?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJpcyUyMGVpZmZlbCUyMHRvd2VyfGVufDF8fHx8MTc3MzAxMzAxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    price: 1899,
    duration: '5 Days',
    groupSize: '8-10',
    rating: 5.0,
    reviews: 89,
    type: 'Luxury'
  },
  {
    id: 3,
    title: 'Tokyo Culture & Cuisine Tour',
    image: 'https://images.unsplash.com/photo-1648871647634-0c99b483cb63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2t5byUyMGphcGFuJTIwY2l0eXNjYXBlfGVufDF8fHx8MTc3MzA0OTkzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    price: 1599,
    duration: '6 Days',
    groupSize: '10-14',
    rating: 4.8,
    reviews: 156,
    type: 'Cultural'
  },
  {
    id: 4,
    title: 'Santorini Sunset Escape',
    image: 'https://images.unsplash.com/photo-1651045358038-0bdb639d21d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW50b3JpbmklMjBncmVlY2UlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzczMDUxMDU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    price: 2199,
    duration: '4 Days',
    groupSize: '6-8',
    rating: 5.0,
    reviews: 201,
    type: 'Luxury'
  },
  {
    id: 5,
    title: 'Bali Wellness Retreat',
    image: 'https://images.unsplash.com/photo-1604741872759-42c077855b3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxpJTIwaW5kb25lc2lhJTIwdGVtcGxlfGVufDF8fHx8MTc3MzAxOTAzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    price: 999,
    duration: '8 Days',
    groupSize: '8-12',
    rating: 4.7,
    reviews: 92,
    type: 'Wellness'
  },
  {
    id: 6,
    title: 'Dubai Luxury Getaway',
    image: 'https://images.unsplash.com/photo-1657106251952-2d584ebdf886?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJhaSUyMHNreWxpbmUlMjBuaWdodHxlbnwxfHx8fDE3NzMwNjY2MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    price: 2499,
    duration: '5 Days',
    groupSize: '4-6',
    rating: 4.9,
    reviews: 78,
    type: 'Luxury'
  },
];

export function Tours() {
  return (
    <section className="py-20 bg-white" id="tours">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Tours & Packages
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Handpicked experiences designed to create unforgettable memories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <Card key={tour.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className="absolute top-4 right-4 bg-white text-gray-900">
                  {tour.type}
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {tour.title}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Users className="w-4 h-4" />
                    <span>{tour.groupSize} people</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{tour.rating}</span>
                    <span className="text-gray-500">({tour.reviews} reviews)</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <span className="text-2xl font-bold text-blue-600">
                      ${tour.price}
                    </span>
                    <span className="text-gray-500 text-sm"> /person</span>
                  </div>
                  <Button>Book Now</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Tours
          </Button>
        </div>
      </div>
    </section>
  );
}
