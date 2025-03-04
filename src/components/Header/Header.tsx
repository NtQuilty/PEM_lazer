import { Link } from 'react-router-dom';
import { navigationLinks, NavigationOption } from '../../config';
import { BsTelephoneFill } from 'react-icons/bs';
import { TbMailFilled } from 'react-icons/tb';
import _React, { FC, useState, useEffect } from 'react';
import { Menu, MenuItem } from '@mui/material';
import { MdKeyboardArrowDown } from 'react-icons/md';

export const Header: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesAnchorEl, setServicesAnchorEl] = useState<null | HTMLElement>(null);

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

  const handleServicesOpen = (event: React.MouseEvent<HTMLElement>) => {
    setServicesAnchorEl(event.currentTarget);
  };

  const handleServicesClose = () => {
    setServicesAnchorEl(null);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 py-4 z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-[57.5px] bg-[rgba(19,21,30,0.5)] shadow-header'
          : 'bg-transparent'
      }`}
    >
      <div className='flex justify-between items-center max-w-[1350px] mx-auto'>
        <Link to='/'>
          <img src='/images/logo.png' alt='logo' />
        </Link>
        {navigationLinks.map(({ id, title, link, options }) =>
          options ? (
            <div
              key={id}
              className='relative'
              onMouseEnter={handleServicesOpen}
              onMouseLeave={handleServicesClose}
            >
              <button
                aria-controls='services-menu'
                aria-haspopup='true'
                className='text-[#a7a8ab] text-base flex items-center gap-1'
              >
                {title} <MdKeyboardArrowDown />
              </button>
              <Menu
                id='services-menu'
                anchorEl={servicesAnchorEl}
                keepMounted
                open={Boolean(servicesAnchorEl)}
                onClose={handleServicesClose}
                className='services-menu'
                disableScrollLock={true}
                MenuListProps={{
                  onMouseLeave: handleServicesClose,
                }}
              >
                {options.map((option: NavigationOption) => (
                  <MenuItem
                    key={option.id}
                    onClick={handleServicesClose}
                    className='text-[#a7a8ab] hover:bg-[rgba(49,152,255,0.1)]'
                  >
                    <Link to={option.link} className='w-full py-1 px-2'>
                      {option.title}
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </div>
          ) : (
            <Link key={id} to={link} className='text-[#a7a8ab] text-base'>
              {title}
            </Link>
          )
        )}
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
