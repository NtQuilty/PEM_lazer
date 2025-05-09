import React from 'react';
import { BsTelephoneFill } from 'react-icons/bs';
import { FaTelegram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { EMAIL, TELEPHONE_NUMBER } from '../../config';
import { formatPhoneNumber } from '../../helpers';

export const Contacts: React.FC = () => {
  return (
    <section className='min-h-screen w-full flex flex-col md:relative'>
      {/* Контентная часть - сначала на мобильных */}
      <div className='bg-[#13151e]/90 backdrop-blur-md p-6 lg:p-10 md:p-20 rounded-2xl w-full md:max-w-lg md:absolute lg:top-1 md:top-[5%] md:left-[5%] z-10'>
        <h1 className='text-4xl font-bold text-white mb-8'>Контакты</h1>

        <div className='space-y-8'>
          <div className='flex items-start'>
            <div className='w-10 h-10 rounded-full flex items-center justify-center bg-[#1b1e29] mr-4'>
              <BsTelephoneFill size={18} className='text-white' />
            </div>
            <div>
              <p className='text-gray-400 text-sm'>Телефон</p>
              <Link
                to={`tel:${TELEPHONE_NUMBER}`}
                className='text-white hover:text-blue-400 transition-colors'
              >
                {formatPhoneNumber(TELEPHONE_NUMBER)}
              </Link>
            </div>
          </div>

          {/* Адрес */}
          <div className='flex items-start'>
            <div className='w-10 h-10 rounded-full flex items-center justify-center bg-[#1b1e29] mr-4'>
              <svg
                className='w-5 h-5 text-gray-400'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                />
              </svg>
            </div>
            <div>
              <p className='text-gray-400 text-sm'>Адрес</p>
              <p className='text-white'>г. Санкт-Петербург, ул. Седова 57.</p>
            </div>
          </div>

          {/* Режим работы */}
          <div className='flex items-start'>
            <div className='w-10 h-10 rounded-full flex items-center justify-center bg-[#1b1e29] mr-4'>
              <svg
                className='w-5 h-5 text-gray-400'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </div>
            <div>
              <p className='text-gray-400 text-sm'>Режим работы</p>
              <p className='text-white'>Пн. - Пт.: с 10:00 до 19:00</p>
              <p className='text-white'>Сб. - Вс.: выходные</p>
            </div>
          </div>

          {/* E-mail */}
          <div className='flex items-start'>
            <div className='w-10 h-10 rounded-full flex items-center justify-center bg-[#1b1e29] mr-4'>
              <svg
                className='w-5 h-5 text-gray-400'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                />
              </svg>
            </div>
            <div>
              <p className='text-gray-400 text-sm'>E-mail</p>
              <Link
                to={`mailto:${EMAIL}`}
                className='text-white hover:text-blue-400 transition-colors'
              >
                {EMAIL}
              </Link>
            </div>
          </div>

          {/* Мессенджеры */}
          <div className='flex items-start'>
            <div className='w-10 h-10 rounded-full flex items-center justify-center bg-[#1b1e29] mr-4'>
              <svg
                className='w-5 h-5 text-gray-400'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
                />
              </svg>
            </div>
            <div>
              <p className='text-gray-400 text-sm'>Мессенджеры</p>
              <div className='mt-2'>
                <Link
                  to='https://t.me/nrgmru'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center justify-center bg-[#1b1e29] hover:bg-[#252a39] text-white px-4 py-2 rounded-lg transition-colors'
                >
                  <FaTelegram className='mr-2' /> Telegram
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Фоновая карта - снизу на мобильных */}
      <div className='w-full h-[60vh] md:h-screen md:absolute md:inset-0 md:max-h-screen md:overflow-hidden'>
        <iframe
          src='https://yandex.ru/map-widget/v1/?um=constructor%3A1_bPGipJIRyuCIuWrZ2dVK6CYVPMo0Rz&amp;source=constructor&amp;ll=30.427308%2C59.880216&amp;z=16&amp;pt=30.426208%2C59.880216,pm2rdl~%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%AD%D0%BD%D0%B5%D1%80%D0%B3%D0%BE%D0%9C%D0%B0%D1%88&amp;scroll=false'
          width='100%'
          height='100%'
          className='opacity-70 md:opacity-70'
        ></iframe>
      </div>
    </section>
  );
};
