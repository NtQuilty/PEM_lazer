import React from 'react';
import { useCookieConsent } from '../../hooks/useCookieConsent';

// Пример компонента, который использует cookie consent
export const ExampleAnalyticsComponent: React.FC = () => {
  const { isAccepted, isDeclined, hasConsent } = useCookieConsent();

  React.useEffect(() => {
    if (isAccepted) {
      console.log('Загружаем аналитику - пользователь согласился на cookies');
    }
  }, [isAccepted]);

  if (!hasConsent) {
    return <div>Ожидаем согласия пользователя...</div>;
  }

  return (
    <div>
      {isAccepted && <div>Аналитика активна ✅</div>}
      {isDeclined && <div>Аналитика отключена ❌</div>}
    </div>
  );
};

export const ExampleMarketingComponent: React.FC = () => {
  const { isAccepted } = useCookieConsent();

  if (!isAccepted) {
    return null; 
  }

  return (
    <div>
      <div>Маркетинговые инструменты активны</div>
    </div>
  );
};
