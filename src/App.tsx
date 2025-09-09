import { Box } from '@mui/material';
import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { initOpenReplay } from './analytics/openreplay';
import { About } from './components/About/About';
import { Contacts } from './components/Contacts/Contacts';
import { CookieConsent } from './components/CookieConsent/CookieConsent';
import { CookiePolicy } from './components/CookieConsent/CookiePolicy';
import { FAQ } from './components/FAQ/FAQ';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { HomePage } from './components/HomePage';
import { LazerCutting } from './components/LazerCutting/LazerCutting';
import { MainContent } from './components/MainContent/MainContent';
import { Projects } from './components/Projects/Projects';
import { ScrollToTop } from './components/ScrollToTop';
import { OrderFormProvider } from './contexts/OrderFormContext';
import { useCookieConsent } from './hooks/useCookieConsent';

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
      <Box>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/laser-cutting" element={<LazerCutting />} />
          <Route path="/services" element={<MainContent isHomePage={false} />} />
          <Route path="/portfolio" element={<Projects isHomePage={isHomePage} />} />
          <Route path="/help" element={<FAQ />} />
          <Route path="/about" element={<About isHomePage={isHomePage} />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/cookies" element={<CookiePolicy />} />
        </Routes>
      </Box>
      <Footer />
      <ScrollToTop />
      <CookieConsent />
    </OrderFormProvider>
  );
};
