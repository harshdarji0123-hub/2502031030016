import { Search, MapPin, Calendar, Users } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center" id="home">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1714412192114-61dca8f15f68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcGFyYWRpc2V8ZW58MXx8fHwxNzczMDY2NjA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Travel destination"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
          Discover Your Next Adventure
        </h1>
        <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
          Explore breathtaking destinations around the world with our curated travel experiences
        </p>

        {/* Search Bar */}
        <div className="bg-white rounded-lg shadow-2xl p-4 sm:p-6 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Destination */}
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <MapPin className="w-5 h-5 text-gray-500 flex-shrink-0" />
              <Input
                placeholder="Where to?"
                className="border-0 bg-transparent p-0 focus-visible:ring-0"
              />
            </div>

            {/* Date */}
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Calendar className="w-5 h-5 text-gray-500 flex-shrink-0" />
              <Input
                type="date"
                className="border-0 bg-transparent p-0 focus-visible:ring-0"
              />
            </div>

            {/* Guests */}
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Users className="w-5 h-5 text-gray-500 flex-shrink-0" />
              <select className="bg-transparent border-0 outline-none w-full text-gray-700">
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4+ Guests</option>
              </select>
            </div>

            {/* Search Button */}
            <Button size="lg" className="w-full">
              <Search className="w-5 h-5 mr-2" />
              Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
