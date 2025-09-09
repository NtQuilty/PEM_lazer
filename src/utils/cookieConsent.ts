export const COOKIE_CONSENT_KEY = 'cookie-consent';

export type CookieConsentStatus = 'accepted' | 'declined' | null;

export const getCookieConsentStatus = (): CookieConsentStatus => {
  const status = localStorage.getItem(COOKIE_CONSENT_KEY);
  return status as CookieConsentStatus;
};

export const isCookieConsentAccepted = (): boolean => {
  return getCookieConsentStatus() === 'accepted';
};

export const isCookieConsentDeclined = (): boolean => {
  return getCookieConsentStatus() === 'declined';
};

export const hasCookieConsent = (): boolean => {
  return getCookieConsentStatus() !== null;
};

