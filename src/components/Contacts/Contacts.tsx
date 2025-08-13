import React from 'react';
import { BsFillGeoAltFill, BsTelephoneFill } from 'react-icons/bs';
import { FaRegClock, FaTelegram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { EMAIL, TELEPHONE_NUMBER } from '../../config';
import { formatPhoneNumber } from '../../helpers';
import { TbBrandMessenger, TbMailFilled } from 'react-icons/tb';

export const Contacts: React.FC = () => {
  return (
    <section className='min-h-screen w-full flex flex-col md:relative'>
      <div className='bg-[#13151e]/90 backdrop-blur-md p-6 lg:p-10 md:p-20 rounded-2xl w-full md:max-w-lg md:absolute md:top-[15%] md:left-[5%] z-10'>
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

          <div className='flex items-start'>
            <div className='w-10 h-10 rounded-full flex items-center justify-center bg-[#1b1e29] mr-4'>
              <BsFillGeoAltFill size={18} className='text-white' />
            </div>
            <div>
              <p className='text-gray-400 text-sm'>Адрес</p>
              <p className='text-white'>г. Санкт-Петербург, ул. Седова 57.</p>
            </div>
          </div>

          <div className='flex items-start'>
            <div className='w-10 h-10 rounded-full flex items-center justify-center bg-[#1b1e29] mr-4'>
              <FaRegClock size={18} className='text-white' />
            </div>
            <div>
              <p className='text-gray-400 text-sm'>Режим работы</p>
              <p className='text-white'>Пн. - Пт.: с 10:00 до 19:00</p>
              <p className='text-white'>Сб. - Вс.: выходные</p>
            </div>
          </div>

          <div className='flex items-start'>
            <div className='w-10 h-10 rounded-full flex items-center justify-center bg-[#1b1e29] mr-4'>
              <TbMailFilled size={18} className='text-white' />
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

          <div className='flex items-start'>
            <div className='w-10 h-10 rounded-full flex items-center justify-center bg-[#1b1e29] mr-4'>
              <TbBrandMessenger size={18} className='text-white' />
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
