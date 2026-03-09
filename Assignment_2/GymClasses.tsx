import { Flame, Heart, Zap, Target, Users, Clock } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const classes = [
  {
    id: 1,
    name: 'Strength Training',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1689514226730-c0fbca1345c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWlnaHRsaWZ0aW5nJTIwYmFyYmVsbHxlbnwxfHx8fDE3NzMwNTA3MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Build muscle and increase strength with our specialized weightlifting programs.',
    duration: '60 min',
    intensity: 'High',
    participants: '15'
  },
  {
    id: 2,
    name: 'Cardio Blast',
    icon: Flame,
    image: 'https://images.unsplash.com/photo-1761971974992-6df33df97c3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJkaW8lMjB0cmVhZG1pbGwlMjBydW5uaW5nfGVufDF8fHx8MTc3MzA2ODUyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'High-intensity cardio workouts to burn calories and boost endurance.',
    duration: '45 min',
    intensity: 'High',
    participants: '20'
  },
  {
    id: 3,
    name: 'Yoga & Flexibility',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1651077837628-52b3247550ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwY2xhc3MlMjBzdHVkaW98ZW58MXx8fHwxNzcyOTc3NDgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Improve flexibility, balance, and mental clarity through guided yoga sessions.',
    duration: '60 min',
    intensity: 'Low',
    participants: '25'
  },
  {
    id: 4,
    name: 'Boxing Fitness',
    icon: Target,
    image: 'https://images.unsplash.com/photo-1734191797121-de71b48ba038?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hpbmclMjB0cmFpbmluZyUyMGd5bXxlbnwxfHx8fDE3NzMwMTgxMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Combine cardio and strength training with boxing techniques and drills.',
    duration: '50 min',
    intensity: 'Medium',
    participants: '12'
  },
  {
    id: 5,
    name: 'CrossFit',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1759300642026-3f8ded9a9196?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNjdWxhciUyMGF0aGxldGUlMjB0cmFpbmluZ3xlbnwxfHx8fDE3NzMwNjg1MjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Intense functional training combining various movements and exercises.',
    duration: '60 min',
    intensity: 'High',
    participants: '18'
  },
  {
    id: 6,
    name: 'HIIT Training',
    icon: Flame,
    image: 'https://images.unsplash.com/photo-1632077804406-188472f1a810?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwZXF1aXBtZW50JTIwZ3ltfGVufDF8fHx8MTc3MzAyMDQ1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Short bursts of intense exercise alternated with recovery periods.',
    duration: '30 min',
    intensity: 'High',
    participants: '20'
  },
];

export function GymClasses() {
  return (
    <section className="py-20 bg-gray-50" id="classes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-red-600">Classes</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from a variety of expert-led classes designed to help you reach your fitness goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((gymClass) => {
            const Icon = gymClass.icon;
            return (
              <Card key={gymClass.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={gymClass.image}
                    alt={gymClass.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <div className="bg-red-600 p-3 rounded-full">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Badge className={`${
                      gymClass.intensity === 'High' ? 'bg-red-600' : 
                      gymClass.intensity === 'Medium' ? 'bg-yellow-600' : 
                      'bg-green-600'
                    } text-white`}>
                      {gymClass.intensity} Intensity
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {gymClass.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {gymClass.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{gymClass.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{gymClass.participants} max</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
