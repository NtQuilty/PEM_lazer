import React from 'react';

export const ConsultationPromo: React.FC = () => {
  return (
    <div className='container mx-auto px-4'>
      <div className='flex relative overflow-hidden mx-auto align-center mt-[-60px] '>
        <div>
          <img
            src='/images/blue-crystal.webp'
            alt='Кристалл'
            className='transform -translate-x-1/2 md:-translate-x-1/4 md:h-[500px]'
          />
        </div>

        <div className='absolute flex flex-col justify-end mt-[100px] max-w-[280px] right-0  mr-[20px] md:max-w-[860px]'>
          <h2 className='text-[21px] md:text-[53px]  font-bold leading-tight mb-6 text-[rgba(214,214,214,0.8)] text-right md:text-justify'>
            Проконсультируем по любому интересующему вас вопросу.
          </h2>
          <div className='flex justify-end md:justify-normal items-center gap-[24px]'>
            <button className='bg-[#3B82F6] rounded-[10px] text-white py-3 md:py-4 px-[30px] md:px-[80px] max-w-[180px] md:max-w-none  text-center'>
              Консультация
            </button>
            <p className='hidden md:block text-xs text-[rgba(214,214,214,0.8)]'>
              Наши специалисты свяжутся с вами в течение 15 минут. Любым удобным для вас способом.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
