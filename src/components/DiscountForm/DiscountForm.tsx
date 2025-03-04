import { SmartCaptcha } from '@yandex/smart-captcha';
import React, { useState } from 'react';

export const DiscountForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isAgreed, setIsAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, phone, email, isAgreed });
  };

  return (
    <section className='bg-[#1b1e29] py-16'>
      <div className='max-w-[1350px] mx-auto px-4'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-8'>
          {/* Левая часть с изображением и текстом */}
          <div className='md:w-1/2'>
            <div className='text-center md:text-left'>
              <img
                src='/images/sale.webp'
                alt='Скидка 10%'
                className='max-w-full h-auto mx-auto md:mx-0'
              />
            </div>
          </div>

          {/* Правая часть с формой */}
          <div className='md:w-1/2 max-w-lg w-full'>
            <div className='bg-[#1b1e29] rounded-3xl p-6 border border-gray-700 shadow-md relative'>
              {/* Тонкая внутренняя подсветка */}
              <div
                className='absolute inset-0 rounded-lg opacity-30 pointer-events-none'
                style={{
                  boxShadow: 'inset 0 0 20px rgba(100, 100, 100, 0.2)',
                  border: '1px solid rgba(120, 120, 120, 0.2)',
                }}
              ></div>

              <h3 className='text-3xl font-bold text-white mb-2 relative z-10'>Отправьте заявку</h3>
              <p className='text-[#D6D6D6CC] mb-6 relative z-10'>
                И мы свяжемся с Вами в течение 15 минут
              </p>

              <form onSubmit={handleSubmit}>
                <div className='mb-4'>
                  <div className='bg-[#1b1e29] flex items-center rounded p-3'>
                    <span className='text-gray-400 mr-3'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        className='w-5 h-5'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                        />
                      </svg>
                    </span>
                    <input
                      type='text'
                      placeholder='Ваше имя'
                      className='bg-transparent w-full text-white focus:outline-none'
                      value={name}
                      onChange={e => setName(e.target.value)}
                    />
                  </div>
                </div>

                <div className='mb-4'>
                  <div className='bg-[#1b1e29] flex items-center rounded p-3'>
                    <span className='text-gray-400 mr-3'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        className='w-5 h-5'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                        />
                      </svg>
                    </span>
                    <input
                      type='tel'
                      placeholder='Ваш телефон'
                      className='bg-transparent w-full text-white focus:outline-none'
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                    />
                  </div>
                </div>

                <div className='mb-6'>
                  <div className='bg-[#1b1e29] flex items-center rounded p-3'>
                    <span className='text-gray-400 mr-3'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        className='w-5 h-5'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                        />
                      </svg>
                    </span>
                    <input
                      type='email'
                      placeholder='Ваш Email'
                      className='bg-transparent w-full text-white focus:outline-none'
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <button
                  type='submit'
                  className='w-full bg-[#0ea5e9] hover:bg-blue-600 text-white font-medium py-3 px-4 rounded transition-colors'
                >
                  Получить скидку 10%
                </button>

                <div className='mt-4'>
                  <SmartCaptcha sitekey={''} />
                </div>

                <div className='mt-4 flex items-start'>
                  <div className='relative flex-shrink-0' style={{ width: '42px', height: '42px' }}>
                    <input
                      type='checkbox'
                      id='privacy'
                      checked={isAgreed}
                      onChange={() => setIsAgreed(!isAgreed)}
                      className='absolute w-full h-full opacity-0 cursor-pointer z-10'
                    />
                    <div
                      className={`
                      w-[42px] h-[42px]
                      border-2 border-[#252d37]
                      rounded-[15px]
                      box-border
                      flex items-center justify-center
                      relative
                      ${isAgreed ? 'bg-blue-500/20' : ''}
                    `}
                    >
                      {isAgreed && (
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-6 w-6 text-blue-500'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M5 13l4 4L19 7'
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                  <label htmlFor='privacy' className='ml-3 text-sm text-[#D6D6D6CC]'>
                    Нажав кнопку "Отправить", вы даете согласие на обработку персональных данных.
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
