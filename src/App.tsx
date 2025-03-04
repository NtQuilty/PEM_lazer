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

export const App = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      <Header />
      <Box className={isHomePage ? '' : 'pt-[100px]'}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/services' element={<MainContent />} />
          <Route path='/portfolio' element={<Projects />} />
          <Route path='/help' element={<FAQ />} />
          <Route path='/about' element={<About isVisible={true} />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
      </Box>
      <Footer />
    </>
  );
};
