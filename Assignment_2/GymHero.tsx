import { ArrowRight, Play } from 'lucide-react';
import { Button } from './ui/button';

export function GymHero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden" id="home">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1584827386916-b5351d3ba34b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjB3b3Jrb3V0JTIwZml0bmVzc3xlbnwxfHx8fDE3NzMwNTk0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Gym workout"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block px-4 py-2 bg-red-600/20 border border-red-600 rounded-full mb-6">
            <span className="text-red-500 font-semibold">TRANSFORM YOUR BODY</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Build Your
            <span className="block text-red-600">Dream Body</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-lg">
            Join BodyCraft and unlock your full potential with expert trainers, 
            state-of-the-art equipment, and a supportive community.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg">
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg">
              <Play className="mr-2 w-5 h-5" />
              Watch Video
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="hidden lg:grid grid-cols-2 gap-6">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20">
            <h3 className="text-4xl font-bold text-red-600 mb-2">5000+</h3>
            <p className="text-gray-300">Active Members</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20">
            <h3 className="text-4xl font-bold text-red-600 mb-2">50+</h3>
            <p className="text-gray-300">Expert Trainers</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20">
            <h3 className="text-4xl font-bold text-red-600 mb-2">100+</h3>
            <p className="text-gray-300">Classes Weekly</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20">
            <h3 className="text-4xl font-bold text-red-600 mb-2">15+</h3>
            <p className="text-gray-300">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
