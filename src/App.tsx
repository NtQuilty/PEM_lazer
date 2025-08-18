import { Routes, Route, useLocation } from 'react-router-dom';
import { About } from './components/About/About';
import { FAQ } from './components/FAQ/FAQ';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { HomePage } from './components/HomePage';
import { MainContent } from './components/MainContent/MainContent';
import { Projects } from './components/Projects/Projects';
import { Box } from '@mui/material';
import { Contacts } from './components/Contacts/Contacts';
import { OrderFormProvider } from './contexts/OrderFormContext';
import { LazerCutting } from './components/LazerCutting/LazerCutting';
import { CookieConsent } from './components/CookieConsent/CookieConsent';
import { useEffect } from 'react';
import { CookiePolicy } from './components/CookieConsent/CookiePolicy';
import { useCookieConsent } from './hooks/useCookieConsent';
import { initOpenReplay } from './analytics/openreplay';

export const App = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const { consentStatus } = useCookieConsent();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if (import.meta.env.PROD && consentStatus === 'accepted') {
      initOpenReplay();
    }
  }, [consentStatus]);

  return (
    <OrderFormProvider>
      <Header />
      <Box className={isHomePage ? '' : 'pt-[92px] md:pt-[100px]'}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/laser-cutting' element={<LazerCutting />} />
          <Route path='/services' element={<MainContent />} />
          <Route path='/portfolio' element={<Projects isHomePage={isHomePage} />} />
          <Route path='/help' element={<FAQ />} />
          <Route path='/about' element={<About isHomePage={isHomePage} />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/cookies' element={<CookiePolicy />} />
        </Routes>
      </Box>
      <Footer />
      <CookieConsent />
    </OrderFormProvider>
  );
};
