import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { hasCookieConsent, COOKIE_CONSENT_KEY } from '../../utils/cookieConsent';
import { useNavigate, useLocation } from 'react-router-dom';

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const isCookiePage = location.pathname === '/cookies';
    
    if (!hasCookieConsent() && !isCookiePage) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    window.dispatchEvent(new Event('cookieConsentChange'));
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
      <div className="z-[10] md:mb-[15px] md:mx-4 fixed bottom-0 left-0 right-0 bg-[#1b1e29] shadow-[0_-4px_20px_rgba(0,0,0,0.4)] max-w-full rounded-2xl border-t border-gray-600">
        <div className="relative max-w-7xl mx-auto p-6 md:p-8">
          <div className=" flex flex-col gap-4">
            <Typography
              variant="h6"
              component="h2"
              className="text-white font-semibold mb-4 text-lg md:text-xl"
            >
              Используем cookies для улучшения работы сайта
            </Typography>

            <Typography
              variant="body1"
              className="text-gray-300 mb-6 leading-relaxed text-sm md:text-base "
            >
              Наш сайт{' '}
              <span className="font-medium text-[#3198ff]">nrg-lr.ru</span>{' '}
              использует файлы cookie, чтобы улучшить работу сайта, повысить его
              эффективность и удобство. Вы можете ознакомиться с нашими{' '}
              <button
                onClick={() => navigate('/cookies')}
                className="text-[#3198ff] hover:text-blue-400 underline font-medium transition-colors bg-transparent border-none cursor-pointer p-0"
              >
                Условиями использования файлов cookie
              </button>{' '}
              для получения дополнительной информации.
            </Typography>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={handleAccept}
                className="bg-[#3198ff] hover:bg-[#1d80e2] text-white font-semibold px-8 py-3 rounded-xl text-base transition-all duration-200 shadow-lg"
              >
                Принять все файлы Сookies
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};
