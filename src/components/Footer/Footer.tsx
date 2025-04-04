import React from 'react';
import { navigationLinks } from '../../config';
import { Link } from 'react-router-dom';
import { FaTelegram, FaWhatsapp } from 'react-icons/fa';
import { BsTelephoneFill } from 'react-icons/bs';
import { TbMailFilled } from 'react-icons/tb';
import { IoLocationSharp } from 'react-icons/io5';
import { SocialLink } from './components/SocialLink';
import { ContactItem } from './components/ContactItem';
import { NavLink } from './components/NavLink';

export const Footer: React.FC = () => {
  const servicesNav = navigationLinks.find(item => item.id === 'services');

  return (
    <footer className='bg-[#1a1e2c] py-8 md:py-12'>
      <div className='px-4 mx-auto md:max-w-[1350px]'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
          {/* Колонка 1: Логотип и соцсети */}
          <div>
            <Link to='/' className='block mb-4 md:mb-6'>
              <div className='flex items-center'>
                <img
                  src='/images/logo.png'
                  alt='PEM'
                  width={50}
                  height={30}
                  className='md:w-[40px] md:h-[40px]'
                />
                <div className='ml-2'>
                  <div className='text-white font-bold text-xs md:text-sm'>ПЕТРО</div>
                  <div className='text-white font-bold text-xs md:text-sm'>ЭНЕРГО</div>
                  <div className='text-white font-bold text-xs md:text-sm'>МАШ</div>
                </div>
              </div>
            </Link>
            <div className='flex space-x-3 mb-6'>
              <SocialLink to='https://t.me/dmpmax' icon={FaTelegram} />
              <SocialLink to='https://vk.com/nrgmru' icon={FaWhatsapp} />
            </div>
          </div>

          {/* Колонка 2: Навигация */}
          <div>
            <h3 className='text-white font-bold text-base md:text-lg mb-3 md:mb-4'>Навигация</h3>
            <nav className='space-y-2 md:space-y-3'>
              {navigationLinks.map(item => {
                if (item.id === 'home') return null;
                return (
                  <NavLink key={item.id} to={item.link}>
                    {item.title}
                  </NavLink>
                );
              })}
            </nav>
          </div>

          {/* Колонка 3: Услуги */}
          <div>
            <h3 className='text-white font-bold text-base md:text-lg mb-3 md:mb-4'>Услуги</h3>
            <nav className='space-y-2 md:space-y-3'>
              {servicesNav?.options?.map(service => (
                <NavLink key={service.id} to={service.link}>
                  {service.title}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Колонка 4: Контакты */}
          <div>
            <h3 className='text-white font-bold text-base md:text-lg mb-3 md:mb-4'>Контакты</h3>
            <div className='space-y-2 md:space-y-3'>
              <ContactItem to='tel:+74955322269' icon={BsTelephoneFill} size={14}>
                +7 (812) 219 20 15
              </ContactItem>

              <ContactItem to='mailto:zakaz24@nrg-m.ru' icon={TbMailFilled} size={14}>
                zakaz24@nrg-m.ru
              </ContactItem>

              <ContactItem isLink={false} icon={IoLocationSharp} size={14}>
                г. Санкт-Петербург, ул. Седова 57.
              </ContactItem>
            </div>
          </div>
        </div>

        <div className='border-t border-gray-800 mt-8 md:mt-12 pt-4 md:pt-6'>
          <p className='text-gray-500 text-xs md:text-sm text-center'>
            © {new Date().getFullYear()} Петроэнергомаш. Все права защищены
          </p>
        </div>
      </div>
    </footer>
  );
};
