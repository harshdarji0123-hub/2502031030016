import { GymHeader } from './components/GymHeader';
import { GymHero } from './components/GymHero';
import { GymClasses } from './components/GymClasses';
import { GymPricing } from './components/GymPricing';
import { GymTrainers } from './components/GymTrainers';
import { GymTestimonials } from './components/GymTestimonials';
import { GymCTA } from './components/GymCTA';
import { GymFooter } from './components/GymFooter';

export default function App() {
  return (
    <div className="min-h-screen">
      <GymHeader />
      <main>
        <GymHero />
        <GymClasses />
        <GymPricing />
        <GymTrainers />
        <GymTestimonials />
        <GymCTA />
      </main>
      <GymFooter />
    </div>
  );
}
