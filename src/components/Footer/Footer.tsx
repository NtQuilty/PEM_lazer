import React from 'react';
import { navigationLinks } from '../../config';

export const Footer: React.FC = () => {
  const servicesNav = navigationLinks.find(item => item.id === 'services');

  return (
    <footer className='bg-[#13151e] py-12'>
      <div className='max-w-[1350px] mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* Колонка 1: Логотип и соцсети */}
          <div>
            <a href='/' className='block mb-6'>
              <div className='flex items-center'>
                <img src='/images/logo.png' alt='PEM' width={40} height={40} />
                <div className='ml-2'>
                  <div className='text-white font-bold text-sm'>ПЕТРО</div>
                  <div className='text-white font-bold text-sm'>ЭНЕРГО</div>
                  <div className='text-white font-bold text-sm'>МАШ</div>
                </div>
              </div>
            </a>

            <div className='flex space-x-3 mb-6'>
              <a
                href='https://t.me/digitalcraft3d'
                target='_blank'
                rel='noopener noreferrer'
                className='w-10 h-10 rounded-full flex items-center justify-center bg-[#1b1e29] hover:bg-[#252a39] transition-colors'
              >
                <svg className='w-5 h-5 text-gray-400' viewBox='0 0 24 24' fill='currentColor'>
                  <path d='M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.14 19.018c-.237 0-.47-.033-.696-.1-1.92-.569-3.71-1.464-5.19-2.72-1.42-1.273-2.63-2.96-3.6-4.976-.38-.802-.57-1.684-.57-2.622 0-3.438 2.8-6.236 6.238-6.236.954 0 1.856.205 2.674.608 1.73.838 2.996 2.393 3.5 4.272.134.59.206 1.2.206 1.822 0 1.228-.27 2.397-.782 3.455-.52 1.062-1.27 1.934-2.21 2.578-.939.643-2.01.97-3.16.97zm5.935-10.353l-1.407 6.624c-.104.487-.563.752-1.068.752h-1.885c-.561 0-1.082-.295-1.15-.847l-.174-1.436c-.089-.741-.52-1.383-1.15-1.7l-1.82-.923c-.53-.271-.686-.941-.32-1.385.367-.444 1.05-.503 1.568-.184l2.161 1.333c.262.162.583.176.868.041l5.653-2.812c.548-.273 1.13.174.97.75z' />
                </svg>
              </a>
              <a
                href='https://vk.com/digitalcraft3d'
                target='_blank'
                rel='noopener noreferrer'
                className='w-10 h-10 rounded-full flex items-center justify-center bg-[#1b1e29] hover:bg-[#252a39] transition-colors'
              >
                <svg className='w-5 h-5 text-gray-400' viewBox='0 0 24 24' fill='currentColor'>
                  <path d='M12.785 16.241s.288-.032.436-.19c.136-.148.132-.427.132-.427s-.02-1.304.587-1.496c.596-.19 1.364 1.259 2.182 1.814.618.422 1.085.33 1.085.33l2.17-.03s1.14-.071.6-.964c-.044-.074-.314-.661-1.618-1.869-1.366-1.262-1.183-1.058.462-3.242.998-1.328 1.396-2.14 1.27-2.484-.119-.33-.853-.244-.853-.244l-2.441.015s-.182-.024-.315.055c-.132.079-.216.263-.216.263s-.388 1.029-.905 1.905c-1.09 1.85-1.525 1.948-1.704 1.832-.415-.266-.31-1.07-.31-1.638 0-1.783.27-2.52-.529-2.712-.267-.062-.463-.103-1.143-.11-.874-.008-1.615.003-2.033.207-.279.135-.495.44-.363.458.162.022.532.099.727.363.254.343.245 1.118.245 1.118s.146 2.137-.34 2.401c-.333.18-.789-.187-1.77-1.866-.503-.868-.882-1.82-.882-1.82s-.073-.18-.205-.277c-.16-.12-.382-.157-.382-.157l-2.318.015s-.35.01-.478.161c-.114.136-.01.416-.01.416s1.825 4.258 3.893 6.401c1.895 1.962 4.045 1.837 4.045 1.837h.977z' />
                </svg>
              </a>
            </div>
          </div>

          {/* Колонка 2: Навигация */}
          <div>
            <h3 className='text-white font-bold text-lg mb-4'>Навигация</h3>
            <nav className='space-y-3'>
              {navigationLinks.map(item => (
                <a
                  key={item.id}
                  href={item.link}
                  className='block text-gray-400 hover:text-white transition-colors'
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </div>

          {/* Колонка 3: Услуги */}
          <div>
            <h3 className='text-white font-bold text-lg mb-4'>Услуги</h3>
            <nav className='space-y-3'>
              {servicesNav?.options?.map(service => (
                <a
                  key={service.id}
                  href={service.link}
                  className='block text-gray-400 hover:text-white transition-colors'
                >
                  {service.title}
                </a>
              ))}
            </nav>
          </div>

          {/* Колонка 4: Контакты */}
          <div>
            <h3 className='text-white font-bold text-lg mb-4'>Контакты</h3>
            <div className='space-y-3'>
              <a
                href='tel:+74955322269'
                className='flex items-center text-gray-400 hover:text-white transition-colors'
              >
                <span className='w-6 h-6 rounded-full flex items-center justify-center bg-[#1b1e29] mr-3'>
                  <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                    />
                  </svg>
                </span>
                +7 (495) 532 22 69
              </a>

              <a
                href='mailto:zakaz@digitalcraft3d.com'
                className='flex items-center text-gray-400 hover:text-white transition-colors'
              >
                <span className='w-6 h-6 rounded-full flex items-center justify-center bg-[#1b1e29] mr-3'>
                  <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                    />
                  </svg>
                </span>
                zakaz@digitalcraft3d.com
              </a>

              <div className='flex items-start text-gray-400'>
                <span className='w-6 h-6 rounded-full flex items-center justify-center bg-[#1b1e29] mr-3 mt-1'>
                  <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
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
                </span>
                <div>г. Москва, Варшавское шоссе, д. 17, стр. 5</div>
              </div>
            </div>
          </div>
        </div>

        <div className='border-t border-gray-800 mt-12 pt-6'>
          <p className='text-gray-500 text-sm text-center'>
            © {new Date().getFullYear()} Петроэнергомаш. Все права защищены
          </p>
        </div>
      </div>
    </footer>
  );
};
