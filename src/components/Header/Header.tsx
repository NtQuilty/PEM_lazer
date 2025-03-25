import { Link } from 'react-router-dom';
import { navigationLinks, NavigationOption } from '../../config';
import { BsTelephoneFill } from 'react-icons/bs';
import { TbMailFilled } from 'react-icons/tb';
import _React, { FC, useState, useEffect } from 'react';
import { Menu, MenuItem } from '@mui/material';
import { MdKeyboardArrowDown, MdKeyboardArrowLeft } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';
import { HeaderDrawer } from './components/HeaderDrawer';

export const Header: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesAnchorEl, setServicesAnchorEl] = useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

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

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setServicesAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setServicesAnchorEl(null);
  };

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 py-4 z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-[57.5px] bg-[rgba(19,21,30,0.5)] shadow-header'
          : 'bg-transparent'
      }`}
    >
      <div className='flex justify-between items-center px-4 mx-auto md:max-w-[1350px]'>
        <button onClick={toggleDrawer(true)} className='block md:hidden ml-3' aria-label='Меню'>
          <RxHamburgerMenu size={24} color='white' />
        </button>

        <Link to='/' className='relative z-10 ml-14'>
          <img src='/images/logo.png' alt='logo' className='h-8 md:h-10' />
        </Link>

        {/* Мобильные иконки телефона и почты - видны только на мобильных */}
        <div className='flex items-center gap-3 md:hidden'>
          <a
            href='tel:+78122192015'
            className='flex items-center justify-center  rounded-full border border-[#dadada] p-[6px]'
          >
            <BsTelephoneFill className='text-white' size={16} />
          </a>
          <a
            href='mailto:zakaz24@nrg-m.ru'
            className='flex items-center justify-center  rounded-full border border-[#dadada]  p-[6px]'
          >
            <TbMailFilled className='text-white' size={16} />
          </a>
        </div>

        <div className='hidden md:flex items-center justify-around flex-1 ml-8'>
          {navigationLinks.map(navigationLink => {
            if (navigationLink.id === 'home') return null;

            if (navigationLink.options) {
              return (
                <div
                  key={navigationLink.id}
                  className='relative group'
                  onMouseEnter={handleClick}
                  onMouseLeave={handleClose}
                >
                  <div className='absolute w-full h-full bg-[rgba(48,152,255,0.35)] blur-[50px] opacity-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none group-hover:opacity-100 transition-opacity duration-300'></div>
                  <button className='text-[#a7a8ab] group-hover:text-[#3198ff] transition-colors text-base flex items-center justify-center gap-1'>
                    {navigationLink.title}
                    <div className='mt-[3px]'>
                      {servicesAnchorEl ? (
                        <MdKeyboardArrowLeft
                          size={24}
                          className='group-hover:text-[#3198ff] transition-colors'
                        />
                      ) : (
                        <MdKeyboardArrowDown
                          size={24}
                          className='group-hover:text-[#3198ff] transition-colors'
                        />
                      )}
                    </div>
                  </button>
                  <Menu
                    id='services-menu'
                    anchorEl={servicesAnchorEl}
                    keepMounted
                    open={Boolean(servicesAnchorEl)}
                    onClose={handleClose}
                    disableScrollLock={true}
                    MenuListProps={{
                      onMouseLeave: handleClose,
                    }}
                  >
                    {navigationLink.options.map((option: NavigationOption) => (
                      <MenuItem
                        key={option.id}
                        onClick={handleClose}
                        className='text-[#a7a8ab] hover:bg-[rgba(49,152,255,0.1)]'
                      >
                        <Link key={option.id} to={option.link} className='w-full py-1 px-2'>
                          {option.title}
                        </Link>
                      </MenuItem>
                    ))}
                  </Menu>
                </div>
              );
            }

            return (
              <div key={navigationLink.id} className='relative group'>
                <div className='absolute w-full h-full bg-[rgba(48,152,255,0.35)] blur-[50px] opacity-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none group-hover:opacity-100 transition-opacity duration-300'></div>
                <Link
                  to={navigationLink.link}
                  className='text-[#a7a8ab] hover:text-[#3198ff] transition-colors text-base'
                >
                  {navigationLink.title}
                </Link>
              </div>
            );
          })}
        </div>

        {/* Правая часть десктопного хедера - скрыта на мобильных */}
        <div className='hidden md:flex items-center gap-[16px]'>
          <div className='flex items-center border-2 border-[#dadada] hover:border-[#3198ff] transition-colors rounded-full p-3 relative group'>
            <div className='absolute w-full h-full bg-[rgba(48,152,255,0.35)] blur-[50px] opacity-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none group-hover:opacity-100 transition-opacity duration-300'></div>
            <BsTelephoneFill
              className='text-white group-hover:text-[#3198ff] transition-colors'
              size={24}
            />
          </div>
          <div className='flex items-center border-2 border-[#dadada] hover:border-[#3198ff] transition-colors rounded-full p-3 relative group'>
            <div className='absolute w-full h-full bg-[rgba(48,152,255,0.35)] blur-[50px] opacity-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none group-hover:opacity-100 transition-opacity duration-300'></div>
            <TbMailFilled
              className='text-white group-hover:text-[#3198ff] transition-colors'
              size={24}
            />
          </div>
          <div className='relative group'>
            <button className='text-[#fff] text-lg bg-[#3198ff] px-[40px] py-[10px] rounded-xl group-hover:bg-[#1d80e2] transition-colors'>
              Заказать
            </button>
          </div>
        </div>
      </div>

      {/* Мобильное боковое меню */}
      <HeaderDrawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
    </header>
  );
};
