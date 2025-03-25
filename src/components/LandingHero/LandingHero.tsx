import { useState, useRef } from 'react';
import { services } from '../../config';
import { FaTelegram } from 'react-icons/fa';
import { FaChevronDown } from 'react-icons/fa';
import { OrderForm } from '../OrderForm/OrderForm';
// Импортируем Swiper и его компоненты
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
// Импортируем стили Swiper
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

export const LandingHero = () => {
  const [orderFormOpen, setOrderFormOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const openOrderForm = () => {
    setOrderFormOpen(true);
  };

  // Активный сервис, который отображается в данный момент
  const activeService = services[activeIndex];

  return (
    <div className='relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] mb-12 md:mb-20 lg:mb-28'>
      <div className='absolute inset-0 w-full h-full overflow-hidden'>
        <Swiper
          modules={[EffectFade, Autoplay]}
          effect='fade'
          direction='horizontal'
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={1000}
          className='w-full h-full'
          onSwiper={swiper => {
            swiperRef.current = swiper;
          }}
          onSlideChange={swiper => {
            setActiveIndex(swiper.realIndex);
          }}
        >
          {services.map(service => (
            <SwiperSlide key={service.id} className='w-full h-full'>
              <img src={service.image} alt={service.id} className='w-full h-full object-cover' />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='relative max-w-[1350px] mx-auto flex items-center h-full z-10'>
        <div className='flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:pl-20 gap-3 md:gap-6 max-w-full md:max-w-[950px]'>
          <h1 className='text-[#c1c1c1] text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold md:font-extrabold leading-tight md:leading-[63px]'>
            {activeService.title}
          </h1>
          <p className='text-[#c1c1c1] text-base sm:text-lg md:text-xl lg:text-[24px] font-light leading-normal md:leading-[43px] mb-4 md:mb-[40px] max-w-full md:max-w-[722px]'>
            {activeService.description}
          </p>

          <div className='flex flex-col sm:flex-row gap-4 sm:gap-[35px]'>
            <button
              onClick={openOrderForm}
              className='
              bg-[#3198FF] text-white rounded-[20px] text-base sm:text-lg md:text-xl lg:text-[23px]
              w-full sm:w-[260px] md:w-[300px] lg:w-[340px]
              py-3 md:py-4 lg:py-[25px]'
            >
              Рассчитать стоимость
            </button>

            <OrderForm open={orderFormOpen} onClose={() => setOrderFormOpen(false)} />
            <button
              className='
              border-[1px] border-solid border-[#3198ff]
              text-[#a7a8ab]
              rounded-[20px]
              text-base sm:text-lg md:text-xl lg:text-[23px]
              w-full sm:w-[200px] md:w-[230px] lg:w-[260px]
              py-3 md:py-4 lg:py-[25px]
            '
            >
              Подробнее
            </button>
          </div>
        </div>
      </div>

      {/* Индикаторы слайдов */}
      <div className='absolute bottom-10 md:bottom-20 right-4 md:right-8 flex flex-col gap-2'>
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              index === activeIndex ? 'bg-[#3198FF]' : 'bg-white opacity-50'
            }`}
            onClick={() => {
              if (swiperRef.current) {
                swiperRef.current.slideTo(index + 1);
              }
            }}
          />
        ))}
      </div>

      {/* Иконка Telegram */}
      <a
        href='https://t.me/your_username'
        target='_blank'
        rel='noopener noreferrer'
        className='absolute top-4 md:top-8 right-4 md:right-8 text-white'
      >
        <FaTelegram size={24} className='md:text-3xl' />
      </a>

      {/* Стрелка вниз */}
      <div
        className='absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer z-10'
        onClick={() => {
          if (swiperRef.current) {
            // Переходим к следующему слайду
            swiperRef.current.slideNext();
          }
        }}
      >
        <FaChevronDown size={24} className='md:text-3xl' />
      </div>
    </div>
  );
};
