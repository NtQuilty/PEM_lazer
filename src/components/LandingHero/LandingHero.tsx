import { useState, useRef } from 'react';
import { services } from '../../config';
import { FaChevronDown } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { useOrderForm } from '../../contexts/OrderFormContext';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import { Link } from 'react-router-dom';

export const LandingHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  const { openOrderForm } = useOrderForm();

  const activeService = services[activeIndex];

  return (
    <div className='w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] mb-12 md:mb-20 lg:mb-28'>
      <div className='w-full h-full grid grid-cols-1 grid-rows-1'>
        <div className='col-start-1 row-start-1 w-full h-full overflow-hidden'>
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
                <div className='w-full h-full '>
                  <img src={service.image} alt={service.id} className='w-full h-full object-cover bg-black' />
                  <div className='absolute inset-0 bg-black opacity-70'></div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className='col-start-1 row-start-1 z-10 w-full h-full flex flex-col justify-between'>
          <div className='flex-1 flex items-center justify-start'>
            <div className='w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20'>
              <div className='flex flex-col justify-center md:mb-[-150px] gap-3 md:gap-6 max-w-full md:max-w-[950px]'>
                <h1 className='text-[#c1c1c1] text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold md:font-extrabold leading-tight md:leading-[63px]'>
                  {activeService.title}
                </h1>
                <p className='text-[#c1c1c1] text-base sm:text-lg md:text-xl lg:text-[24px] font-light leading-normal md:leading-[43px] mb-4 md:mb-[40px] max-w-full md:max-w-[722px]'>
                  {activeService.description}
                </p>

                <div className='flex flex-col sm:flex-row gap-4 sm:gap-[35px]'>
                  <button
                    onClick={() => openOrderForm('order')}
                    className='
                    bg-[#3198FF] text-white rounded-[20px] text-base sm:text-lg md:text-xl lg:text-[23px]
                    w-full sm:w-[260px] md:w-[300px] lg:w-[340px]
                    py-3 md:py-4 lg:py-[25px] transition-all duration-200 hover:bg-[#2980e6]'
                  >
                    Рассчитать стоимость
                  </button>

                  <Link
                    to='/laser-cutting'
                    className='
                      border-[1px] border-solid border-[#3198ff]
                      text-[#a7a8ab] hover:text-white hover:bg-[#3198ff]
                      rounded-[20px]
                      text-base sm:text-lg md:text-xl lg:text-[23px]
                      w-full sm:w-[200px] md:w-[230px] lg:w-[260px]
                      py-3 md:py-4 lg:py-[25px]
                      flex items-center justify-center
                      transition-all duration-200
                    '
                  >
                    Подробнее
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='flex justify-center pb-6 md:pb-8'>
            <button
              onClick={() => {
                if (swiperRef.current) {
                  swiperRef.current.slideNext();
                }
              }}
              className='text-white hover:text-[#3198FF] transition-colors duration-200 p-2'
              aria-label='Следующий слайд'
            >
              <FaChevronDown size={24} className='md:text-3xl' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
