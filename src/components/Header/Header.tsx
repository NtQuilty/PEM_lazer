import { Link } from 'react-router-dom';
import { navigationLinks } from '../../config';
import { BsTelephoneFill } from 'react-icons/bs';
import { TbMailFilled } from 'react-icons/tb';
import _React, { FC, useState, useEffect } from 'react';

//bg-[rgba(19,21,30,0.5)]

export const Header: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 py-4 z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-[57.5px] bg-[rgba(19,21,30,0.5)] shadow-header'
          : 'bg-transparent'
      }`}
    >
      <div className='flex justify-between items-center max-w-[1350px] mx-auto'>
        <img src='/public/images/logo.png' alt='logo' />
        {navigationLinks.map(({ id, title, link }) => (
          <Link key={id} to={link} className='text-[#a7a8ab] text-base'>
            {title}
          </Link>
        ))}
        <div className='flex items-center border-2 border-[#dadada] rounded-full p-3'>
          <BsTelephoneFill color='white' size={24} />
        </div>
        <div className='flex items-center border-2 border-[#dadada] rounded-full p-3'>
          <TbMailFilled color='white' size={24} />
        </div>
        <div>
          <button className='text-[#fff] text-lg bg-[#3198ff]  px-[40px] py-[10px] rounded-xl'>
            Заказать
          </button>
        </div>
      </div>
    </header>
  );
};
