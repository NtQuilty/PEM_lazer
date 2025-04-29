import React, { createContext, useState, useContext, ReactNode } from 'react';
import { OrderForm } from '../components/OrderForm/OrderForm';

// Определяем типы форм
export type OrderFormType = 'order' | 'consultation';

interface OrderFormContextProps {
  isOrderFormOpen: boolean;
  formType: OrderFormType;
  openOrderForm: (type?: OrderFormType) => void;
  closeOrderForm: () => void;
}

const OrderFormContext = createContext<OrderFormContextProps | undefined>(undefined);

interface OrderFormProviderProps {
  children: ReactNode;
}

export const OrderFormProvider: React.FC<OrderFormProviderProps> = ({ children }) => {
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);
  const [formType, setFormType] = useState<OrderFormType>('order');

  const openOrderForm = (type: OrderFormType = 'order') => {
    setFormType(type);
    setIsOrderFormOpen(true);
  };

  const closeOrderForm = () => setIsOrderFormOpen(false);

  return (
    <OrderFormContext.Provider value={{ isOrderFormOpen, formType, openOrderForm, closeOrderForm }}>
      {children}
      <OrderForm open={isOrderFormOpen} onClose={closeOrderForm} formType={formType} />
    </OrderFormContext.Provider>
  );
};

export const useOrderForm = (): OrderFormContextProps => {
  const context = useContext(OrderFormContext);
  if (!context) {
    throw new Error('useOrderForm должен использоваться внутри OrderFormProvider');
  }
  return context;
};
