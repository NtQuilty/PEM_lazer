import React from 'react';

interface AboutProps {
  isVisible: boolean;
}

export const About: React.FC<AboutProps> = ({ isVisible }) => {
  return (
    <section className='bg-[#1a1e2c] py-8 md:py-16'>
      <div className='px-4 mx-auto md:max-w-[1350px]'>
        {/* Заголовок секции */}
        <h1 className='text-[#D6D6D6] text-2xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-12'>
          О компании
        </h1>

        {/* Верхняя секция с информацией */}
        <div className='flex flex-col md:flex-row gap-6 mb-8 md:mb-12'>
          <div className='w-full md:w-[60%]'>
            <div className='flex flex-col gap-4 md:gap-6'>
              <p className='text-[#D6D6D6CC] text-sm md:text-base leading-relaxed md:leading-[35px]'>
                Петроэнергомаш - компания, специализирующаяся на услугах 3D-сканирования, 3D-печати
                и реверс-инжиниринга. Наша команда экспертов реализует нестандартные проекты и
                создает технологичные решения для медицинских, промышленных и коммерческих целей.
              </p>
            </div>
            <div className='mt-6 md:mt-8 md:h-[500px] md:overflow-hidden'>
              <img
                src='/images/about/copper-equipment.png'
                alt='Оборудование для 3D печати'
                className='rounded-lg w-full h-auto md:h-full md:w-full md:object-cover'
              />
            </div>
          </div>

          <div className='w-full md:w-[40%] mt-6 md:mt-0'>
            <div className='flex flex-col mb-4 md:mb-6 gap-5'>
              <div className='md:h-[250px] md:overflow-hidden'>
                <img
                  src='/images/about/gold-equipment.png'
                  alt='Оборудование с компьютером'
                  className='rounded-lg w-full h-auto mb-4 md:h-full md:w-full md:object-cover md:mb-0'
                />
              </div>
              <p className='text-[#D6D6D6CC] text-sm md:text-base leading-relaxed md:leading-[35px]'>
                Мы используем передовое 3D-оборудование, обладаем обширным опытом работы с
                различными материалами и создаем высококачественные 3D-модели любой сложности.
                Сотрудничаем с крупными промышленными предприятиями и выполняем индивидуальные
                заказы.
              </p>
              <p className='text-[#D6D6D6CC] text-sm md:text-base leading-relaxed md:leading-[35px]'>
                В своей работе мы используем профессиональное оборудование для 3D печати и
                сканирования, а также качественный софт для моделирования и проектирования.
                Сотрудники Петроэнергомаш могут успешно реализовать любую задачу и подобрать
                решение, которое удовлетворит вас не только по качеству, но и по цене.
              </p>
            </div>
          </div>
        </div>

        {/* Нижняя секция с изображением */}
        {isVisible && (
          <div className='mt-8 md:mt-12'>
            <div className='flex flex-col md:flex-row gap-6'>
              <div className='w-full md:w-[40%]'>
                <p className='text-[#D6D6D6CC] text-sm md:text-base leading-relaxed md:leading-[35px]'>
                  Мы предлагаем своим клиентам лучший сервис. Наши сотрудники готовы помочь в выборе
                  способа решения вашей задачи (технологии сканирования или печати), а также
                  составить техническое задание на основе ваших пожеланий. Мы принимаем заявки на
                  услуги по всей России. Сотрудничество с сервисами доставки позволяет отправлять
                  заказы в любой город страны. Цифровые данные в виде файлов вы можете получить по
                  ссылке в любом удобном формате. Свяжитесь с менеджером Петроэнергомаш, чтобы
                  узнать больше об услугах и сделать заказ.
                </p>
              </div>
              <div className='w-full md:w-[60%] md:h-[400px] md:overflow-hidden'>
                <img
                  src='/images/about/mesh-structure.png'
                  alt='Сетчатая структура'
                  className='rounded-lg w-full h-auto md:h-full md:w-full md:object-cover'
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
