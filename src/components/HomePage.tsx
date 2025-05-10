import { About } from './About/About';
import { Advantages } from './Advantages/Advantages';
import { ConsultationPromo } from './ConsultationPromo/ConsultationPromo';
import { DiscountForm } from './DiscountForm/DiscountForm';
import { FAQ } from './FAQ/FAQ';
import { LandingHero } from './LandingHero/LandingHero';
import { MainContent } from './MainContent/MainContent';
import { Projects } from './Projects/Projects';

export const HomePage = () => {
  return (
    <div className='pt-[92px] md:pt-0'>
      <LandingHero />
      <MainContent />
      <Advantages />
      <ConsultationPromo />
      <Projects />
      <FAQ />
      <About />
      <DiscountForm />
    </div>
  );
};
