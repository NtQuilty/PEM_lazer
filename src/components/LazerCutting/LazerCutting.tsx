import React from 'react';
import { useOrderForm } from '../../contexts/OrderFormContext';

export const LazerCutting: React.FC = () => {
  const { openOrderForm } = useOrderForm();

  return (
    <div className='bg-[#1a1e2c] pt-8'>
      <div className='px-4 mx-auto md:max-w-[1350px]'>
        <h1 className='text-[#D6D6D6] text-2xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-12'>
          Лазерная резка металла
        </h1>
      </div>

      <div className='flex justify-center items-center'>
        <img src='/images/error-image.png' className='w-full md:h-[500px] object-cover'></img>
        <div className='absolute p-4 bg-black/50 text-white'>
          <span>Произошла ошибка. Отправьте заявку через</span>{' '}
          <button onClick={() => openOrderForm('order')} className='text-[#3B82F6] underline'>
            форму
          </button>
        </div>
      </div>
    </div>
  );
};
