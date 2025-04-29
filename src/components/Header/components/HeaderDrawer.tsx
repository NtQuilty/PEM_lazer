import _React, { FC, useState } from 'react';
import { Drawer, IconButton } from '@mui/material';
import { MdClose, MdKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { navigationLinks, TELEPHONE_NUMBER } from '../../../config';
import { FaTelegram } from 'react-icons/fa';
import { BsTelephoneFill } from 'react-icons/bs';
import { useOrderForm } from '../../../contexts/OrderFormContext';

interface HeaderDrawerProps {
  drawerOpen: boolean;
  toggleDrawer: (open: boolean) => () => void;
}

export const HeaderDrawer: FC<HeaderDrawerProps> = ({ drawerOpen, toggleDrawer }) => {
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const { openOrderForm } = useOrderForm();

  const toggleMobileServices = () => {
    setMobileServicesOpen(!mobileServicesOpen);
  };

  const handleOrderClick = () => {
    openOrderForm('order');
    toggleDrawer(false);
  };

  return (
    <Drawer
      anchor='left'
      open={drawerOpen}
      onClose={toggleDrawer(false)}
      slotProps={{
        backdrop: {
          className: 'bg-black/30 backdrop-blur-sm',
        },
      }}
      sx={{
        '& .MuiDrawer-paper': {
          backdropFilter: 'blur(87.5333px)',
          backgroundColor: 'rgba(19,21,30,0.35)',
          width: '310px',
          boxShadow:
            '0 20px 60px rgba(0, 0, 0, .44), inset 67.3333px -67.3333px 67.3333px rgba(148, 148, 148, .027), inset -67.3333px 67.3333px 67.3333px rgba(255, 255, 255, .027)',
        },
      }}
    >
      <div className='p-4 flex flex-col'>
        {/* Шапка с логотипом и кнопкой закрытия */}
        <div className='flex justify-between items-center mb-8'>
          <Link to='/' onClick={toggleDrawer(false)} className='flex items-center'>
            <img src='/images/logo.png' alt='logo' className='h-8' />
          </Link>
          <IconButton onClick={toggleDrawer(false)} className='text-white'>
            <MdClose size={24} color='white' />
          </IconButton>
        </div>

        {/* Навигационные ссылки */}
        <div className='flex flex-col gap-6'>
          {navigationLinks.map(link => {
            if (link.id === 'home') return null;

            if (link.id === 'services') {
              return (
                <div key={link.id} className='border-b border-gray-700 pb-4'>
                  <button
                    onClick={toggleMobileServices}
                    className='text-[#a7a8ab] hover:text-[#3198ff] transition-colors text-lg flex items-center justify-between w-full'
                  >
                    {link.title}
                    <MdKeyboardArrowDown
                      size={24}
                      className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {mobileServicesOpen && link?.options && (
                    <div className='mt-4 ml-4 flex flex-col gap-3'>
                      {link.options.map(option => (
                        <Link
                          key={option.id}
                          to={option.link}
                          onClick={toggleDrawer(false)}
                          className='text-[#a7a8ab] hover:text-[#3198ff] transition-colors'
                        >
                          {option.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.id}
                to={link.link}
                onClick={toggleDrawer(false)}
                className='text-[#a7a8ab] hover:text-[#3198ff] transition-colors text-lg border-b border-gray-700 pb-4'
              >
                {link.title}
              </Link>
            );
          })}
        </div>

        {/* Кнопка заказа */}
        <button
          onClick={handleOrderClick}
          className='mt-8 bg-[#3198ff] text-white py-3 px-6 rounded-lg hover:bg-[#1d80e2] transition-colors text-base w-full'
        >
          Быстрый заказ
        </button>

        {/* Социальные сети и контакты */}
        <div className='mt-auto pt-8 flex gap-4'>
          <a
            href='https://t.me/nrgmru'
            target='_blank'
            rel='noopener noreferrer'
            className='bg-[#2a2d39] hover:bg-[#3a3e4d] transition-colors w-10 h-10 rounded-full flex items-center justify-center'
          >
            <FaTelegram size={20} className='text-white' />
          </a>

          <a
            href={`tel:${TELEPHONE_NUMBER}`}
            className='bg-[#2a2d39] hover:bg-[#3a3e4d] transition-colors w-10 h-10 rounded-full flex items-center justify-center'
          >
            <BsTelephoneFill size={18} className='text-white' />
          </a>
        </div>
      </div>
    </Drawer>
  );
};
