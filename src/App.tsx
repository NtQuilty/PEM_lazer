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
import { useEffect } from 'react';

export const App = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <OrderFormProvider>
      <Header />
      <Box className={isHomePage ? '' : 'pt-[76px] md:pt-[100px]'}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/laser-cutting' element={<LazerCutting />} />
          <Route path='/services' element={<MainContent />} />
          <Route path='/portfolio' element={<Projects isHomePage={isHomePage} />} />
          <Route path='/help' element={<FAQ />} />
          <Route path='/about' element={<About isHomePage={isHomePage} />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
      </Box>
      <Footer />
    </OrderFormProvider>
  );
};
