import { Instagram, Facebook, Twitter } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const trainers = [
  {
    id: 1,
    name: 'Mike Johnson',
    specialty: 'Strength & Conditioning',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&h=400&fit=crop',
    experience: '10 years',
    social: {
      instagram: '#',
      facebook: '#',
      twitter: '#'
    }
  },
  {
    id: 2,
    name: 'Sarah Williams',
    specialty: 'Yoga & Pilates',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=400&fit=crop',
    experience: '8 years',
    social: {
      instagram: '#',
      facebook: '#',
      twitter: '#'
    }
  },
  {
    id: 3,
    name: 'David Chen',
    specialty: 'CrossFit & HIIT',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop',
    experience: '12 years',
    social: {
      instagram: '#',
      facebook: '#',
      twitter: '#'
    }
  },
  {
    id: 4,
    name: 'Emily Rodriguez',
    specialty: 'Nutrition & Wellness',
    image: 'https://images.unsplash.com/photo-1587398392116-16b0aa31dc3e?w=400&h=400&fit=crop',
    experience: '7 years',
    social: {
      instagram: '#',
      facebook: '#',
      twitter: '#'
    }
  },
];

export function GymTrainers() {
  return (
    <section className="py-20 bg-white" id="trainers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Expert <span className="text-red-600">Trainers</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet our certified professionals who are dedicated to helping you achieve your fitness goals
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer) => (
            <Card key={trainer.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative h-80 overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Social Icons - appear on hover */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={trainer.social.instagram}
                    className="bg-white/90 p-2 rounded-full hover:bg-red-600 hover:text-white transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href={trainer.social.facebook}
                    className="bg-white/90 p-2 rounded-full hover:bg-red-600 hover:text-white transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href={trainer.social.twitter}
                    className="bg-white/90 p-2 rounded-full hover:bg-red-600 hover:text-white transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {trainer.name}
                </h3>
                <p className="text-red-600 font-semibold mb-2">
                  {trainer.specialty}
                </p>
                <p className="text-gray-600 text-sm">
                  {trainer.experience} experience
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
