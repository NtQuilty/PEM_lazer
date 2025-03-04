import { Advantages } from './components/Advantages/Advantages';
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
    </>
  );
};
