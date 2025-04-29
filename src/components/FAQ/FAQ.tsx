import React, { useState } from 'react';
import { FAQItem } from './components/FAQItem';
import { questions } from './const';
import { useOrderForm } from '../../contexts/OrderFormContext';
import { useLocation } from 'react-router-dom';
import { TELEPHONE_NUMBER } from '../../config';

export const FAQ: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { openOrderForm } = useOrderForm();

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section
      className='bg-[#13151e] py-16 '
      style={!isHomePage ? { backgroundImage: `url(/images/faq-banner-new.png)` } : undefined}
    >
      <div>
        <div
          className={`flex flex-col max-w-[1350px] mx-auto px-4 md:pl-[100px] ${!isHomePage ? 'md:flex md:justify-end' : ''}`}
        >
          <div className={`max-w-[660px] ${!isHomePage ? 'md:ml-auto' : ''}`}>
            <h2 className='text-4xl font-bold text-white mb-8'>Ответы на вопросы</h2>

            <div className='mb-8'>
              {questions.map((item, index) => (
                <FAQItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  isOpen={activeIndex === index}
                  onClick={() => toggleItem(index)}
                />
              ))}
            </div>

            <div className='flex items-center'>
              <span className='text-[rgba(214,214,214,0.8)] mr-4'>Остались вопросы?</span>
              <button
                onClick={() => openOrderForm('consultation')}
                className='bg-blue-500 hover:bg-blue-600 transition-colors text-white py-3 px-6 rounded-md'
              >
                {'Задать вопрос'}
              </button>
            </div>
          </div>

          {!isHomePage && (
            <div className='mt-16'>
              <div className='flex flex-col md:flex-row gap-8'>
                <div className='w-full md:w-2/3'>
                  <h2 className='text-3xl font-bold text-white mb-6'>Условия доставки</h2>

                  <p className='text-[rgba(214,214,214,0.8)] mb-8'>
                    Для вашего удобства мы предлагаем разные варианты доставки заказов. Вы можете
                    выбрать один из вариантов: забрать заказ из пункта выдачи, оформить доставку
                    курьером по Москве, а также заказать отправку заказа по России и в другие
                    страны.
                  </p>

                  <div className='mb-8'>
                    <h3 className='text-xl font-bold text-white mb-4'>Самовывоз</h3>
                    <p className='text-[rgba(214,214,214,0.8)] mb-4'>
                      В офисе ПетроЭнергоМаш вы можете самостоятельно забрать готовый заказ.
                      Обращаем ваше внимание на то, что забрать заказ можно только после
                      подтверждения о его готовности по телефону или уведомлением на адрес
                      электронной почты.
                    </p>
                    <p className='text-[rgba(214,214,214,0.8)] mb-2'>
                      Адрес пункта выдачи:
                      <span className='text-white'>{''} улица пушкина дом колотушкина</span>
                    </p>
                    <p className='text-[rgba(214,214,214,0.8)] mb-2'>Время работы:</p>
                    <p className='text-[rgba(214,214,214,0.8)] mb-2'>Пн. - Пт.: с 10:00 до 19:00</p>
                    <p className='text-[rgba(214,214,214,0.8)] mb-2'>
                      Сб. - Вс.: Забрать заказ можно по предварительной договоренности.
                    </p>
                    <p className='text-[rgba(214,214,214,0.8)]'>
                      Телефон: <span className='text-white'>{TELEPHONE_NUMBER}</span>
                    </p>
                  </div>

                  <div className='mb-8'>
                    <h3 className='text-xl font-bold text-white mb-4'>Цена доставки</h3>
                    <p className='text-[rgba(214,214,214,0.8)] mb-4'>
                      Стоимость доставки
                      <span className='text-white'>
                        по Санкт-Петербургу и Ленинградской области составляет 300 рублей
                      </span>
                      , при условии: общий вес заказа не превышает 10 кг и общие габариты не
                      превышают 150 см
                    </p>
                    <p className='text-[rgba(214,214,214,0.8)]'>
                      Цена доставки в другие регионы и страны рассчитывается индивидуально для
                      каждого отправления. Всю информацию предоставит менеджер ведущий ваш заказ.
                    </p>
                  </div>
                </div>

                <div className='w-full md:w-1/2'>
                  <div
                    style={{
                      position: 'relative',
                      textAlign: 'right',
                      height: '205px',
                      width: '100%',
                      marginBottom: '75px',
                    }}
                    className='hidden md:block'
                  >
                    <img
                      src='/images/services-images/map_s.png'
                      alt='Карта доставки'
                      className='absolute top-0 right-0 h-full object-contain'
                    />
                  </div>

                  <div className='mb-8'>
                    <h3 className='text-xl font-bold text-white mb-4'>
                      Доставка по Москве в пределах МКАД
                    </h3>
                    <p className='text-[rgba(214,214,214,0.8)]'>
                      Наша компания сотрудничает с сервисами Яндекс.Доставка и СДЭК, также у нас
                      есть свой водитель. Можем привезти груз как в пункт выдачи курьерской службы,
                      так и доставить до адреса. Согласовать удобное время и дату доставки можно с
                      менеджером ПетроЭнергоМаш.
                    </p>
                  </div>

                  <div className='mb-8'>
                    <h3 className='text-xl font-bold text-white mb-4'>По России</h3>
                    <p className='text-[rgba(214,214,214,0.8)]'>
                      Мы отправляем заказы в другие города России с помощью транспортной компании
                      СДЭК. При необходимости вы можете уточнить у специалиста возможность отправки
                      другими курьерскими службами.
                    </p>
                  </div>

                  <div className='mb-8'>
                    <h3 className='text-xl font-bold text-white mb-4'>В СНГ</h3>
                    <p className='text-[rgba(214,214,214,0.8)]'>
                      Расчет стоимости доставки и выбор транспортной компании для доставки заказов в
                      страны ближнего зарубежья осуществляется в индивидуальном порядке.
                    </p>
                  </div>

                  <div>
                    <h3 className='text-xl font-bold text-white mb-4'>Другие страны</h3>
                    <p className='text-[rgba(214,214,214,0.8)]'>
                      Доставка отправленных заказов в другие страны рассчитывается индивидуально.
                      Стоимость и сроки пересылки уточняйте у менеджера, который ведет ваш заказ.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
