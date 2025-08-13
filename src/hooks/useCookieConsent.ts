import { useState, useEffect } from 'react';
import { 
  getCookieConsentStatus, 
  isCookieConsentAccepted, 
  isCookieConsentDeclined,
  hasCookieConsent,
  type CookieConsentStatus 
} from '../utils/cookieConsent';

export const useCookieConsent = () => {
  const [consentStatus, setConsentStatus] = useState<CookieConsentStatus>(
    getCookieConsentStatus()
  );

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'cookie-consent') {
        setConsentStatus(getCookieConsentStatus());
      }
    };

    // Также слушаем кастомное событие для изменений в том же окне
    const handleConsentChange = () => {
      setConsentStatus(getCookieConsentStatus());
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('cookieConsentChange', handleConsentChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('cookieConsentChange', handleConsentChange);
    };
  }, []);

  return {
    consentStatus,
    isAccepted: isCookieConsentAccepted(),
    isDeclined: isCookieConsentDeclined(),
    hasConsent: hasCookieConsent(),
  };
};
