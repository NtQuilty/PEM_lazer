import { Advantages } from './components/Advantages/Advantages';
import { ConsultationPromo } from './components/ConsultationPromo/ConsultationPromo';
import { FAQ } from './components/FAQ/FAQ';
import { Header } from './components/Header/Header';
import { LandingHero } from './components/LandingHero/LandingHero';
import { MainContent } from './components/MainContent/MainContent';

export const App = () => {
  return (
    <>
      <Header />
      <LandingHero />
      <MainContent />
      <Advantages />
      <ConsultationPromo />
      <FAQ />
    </>
  );
};
