import React from 'react';

export const ConsultationPromo: React.FC = () => {
  return (
    <section className='bg-[#13151e] py-4 md:py-24 overflow-hidden'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row items-center gap-4'>
          {/* Изображение кристалла */}
          <div className='w-full md:w-2/5 mb-8 md:mb-0 relative'>
            <img
              src='/images/blue-crystal.webp'
              alt='Кристалл'
              width={400}
              height={400}
              className='object-contain'
            />
          </div>

          {/* Текст и кнопка */}
          <div className='w-full  text-white'>
            <h2 className='text-[53px] font-bold leading-[74px] mb-[30px] text-[rgba(214,214,214,0.8)]'>
              Проконсультируем по любому интересующему вас вопросу.
            </h2>

            <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4'>
              <button className='bg-blue-500 hover:bg-blue-600 transition-colors text-white py-[19px] px-6 rounded-md max-w-[255px] w-[255px] text-[17px]'>
                Консультация
              </button>

              <p className='ml-6 text-xs text-[rgba(214,214,214,0.8)]'>
                Наши специалисты свяжутся с вами в течение 15 минут. Любым удобным для вас способом.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
