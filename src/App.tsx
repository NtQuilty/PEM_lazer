import { About } from './components/About/About';
import { Advantages } from './components/Advantages/Advantages';
import { ConsultationPromo } from './components/ConsultationPromo/ConsultationPromo';
import { DiscountForm } from './components/DiscountForm/DiscountForm';
import { FAQ } from './components/FAQ/FAQ';
import { Footer } from './components/Footer/Footer';
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
      <About isVisible={false} />
      <DiscountForm />
      <Footer />
    </>
  );
};
