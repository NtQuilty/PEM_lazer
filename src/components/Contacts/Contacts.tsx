import React from 'react';
import { BsTelephoneFill } from 'react-icons/bs';
import { FaTelegram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Contacts: React.FC = () => {
  return (
    <section className='relative min-h-screen w-full'>
      {/* Фоновая карта */}
      <div className='absolute inset-0 w-full h-full z-0'>
        <iframe
          src='https://yandex.ru/map-widget/v1/?um=constructor%3A123456&amp;lang=ru_RU&amp;scroll=false'
          width='100%'
          height='100%'
          title='Карта местоположения'
          className='opacity-70'
        ></iframe>
      </div>

      {/* Контентная часть */}
      <div className='relative z-10 max-w-[1350px] mx-auto px-4 py-16'>
        <div className='bg-[#13151e]/90 backdrop-blur-md p-10 rounded-2xl max-w-lg'>
          <h1 className='text-4xl font-bold text-white mb-8'>Контакты</h1>

          <div className='space-y-8'>
            <div className='flex items-start'>
              <div className='w-10 h-10 rounded-full flex items-center justify-center bg-[#1b1e29] mr-4'>
                <BsTelephoneFill size={18} className='text-white' />
              </div>
              <div>
                <p className='text-gray-400 text-sm'>Телефон</p>
                <Link
                  to='tel:+78122192015'
                  className='text-white hover:text-blue-400 transition-colors'
                >
                  +7 (812) 219 20 15
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
                  to='mailto:zakaz24@nrg-m.ru '
                  className='text-white hover:text-blue-400 transition-colors'
                >
                  Продажи: zakaz24@nrg-m.ru
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

            {/* Соц. сети */}
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
                    d='M13 10V3L4 14h7v7l9-11h-7z'
                  />
                </svg>
              </div>
              <div>
                <p className='text-gray-400 text-sm'>Соц. сети</p>
                <div className='flex mt-2 space-x-3'>
                  <Link
                    to='https://t.me/nrgmru'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-10 h-10 rounded-full flex items-center justify-center bg-[#1b1e29] hover:bg-[#252a39] transition-colors'
                  >
                    <FaTelegram size={20} className='text-white' />
                  </Link>
                  <Link
                    to='https://vk.com/nrgmru'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-10 h-10 rounded-full flex items-center justify-center bg-[#1b1e29] hover:bg-[#252a39] transition-colors'
                  >
                    <svg className='w-5 h-5 text-gray-400' viewBox='0 0 24 24' fill='currentColor'>
                      <path d='M12.785 16.241s.288-.032.436-.19c.136-.148.132-.427.132-.427s-.02-1.304.587-1.496c.596-.19 1.364 1.259 2.182 1.814.618.422 1.085.33 1.085.33l2.17-.03s1.14-.071.6-.964c-.044-.074-.314-.661-1.618-1.869-1.366-1.262-1.183-1.058.462-3.242.998-1.328 1.396-2.14 1.27-2.484-.119-.33-.853-.244-.853-.244l-2.441.015s-.182-.024-.315.055c-.132.079-.216.263-.216.263s-.388 1.029-.905 1.905c-1.09 1.85-1.525 1.948-1.704 1.832-.415-.266-.31-1.07-.31-1.638 0-1.783.27-2.52-.529-2.712-.267-.062-.463-.103-1.143-.11-.874-.008-1.615.003-2.033.207-.279.135-.495.44-.363.458.162.022.532.099.727.363.254.343.245 1.118.245 1.118s.146 2.137-.34 2.401c-.333.18-.789-.187-1.77-1.866-.503-.868-.882-1.82-.882-1.82s-.073-.18-.205-.277c-.16-.12-.382-.157-.382-.157l-2.318.015s-.35.01-.478.161c-.114.136-.01.416-.01.416s1.825 4.258 3.893 6.401c1.895 1.962 4.045 1.837 4.045 1.837h.977z' />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
