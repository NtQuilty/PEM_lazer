export const About = ({ isHomePage = true }: { isHomePage?: boolean }) => {
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
                Петроэнергомаш — компания, специализирующаяся на услугах лазерной резки металлов и
                композитных материалов. Наша команда экспертов реализует нестандартные проекты и
                создает высокоточные решения для машиностроения, энергетики, строительства и
                рекламной индустрии.
                <br />
                Современные лазерные комплексы с ЧПУ Мы используем передовые волоконные и CO₂
                лазерные станки, работаем с материалами толщиной от 0,5 до 40 мм: нержавеющая и
                черная сталь, алюминий, медь, латунь, полимеры. Изготавливаем детали с точностью до
                0,02 мм — от серийного производства до уникальных заказов. Сотрудничаем с
                промышленными предприятиями, архитектурными бюро и стартапами.
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
                Технологии и экспертиза В своей работе мы применяем высокотехнологичное лазерное
                оборудование и специализированное ПО для проектирования, оптимизации раскроя и
                контроля качества. Инженеры «Петроэнергомаш» подберут решение, которое удовлетворит
                вас по:
              </p>
              <ul className='text-[#D6D6D6CC] text-sm md:text-base leading-relaxed md:leading-[35px] list-disc pl-5 space-y-2'>
                <li>Скорости — срочные заказы от 24 часов;</li>
                <li>Экономии — минимизация отходов за счет интеллектуального раскроя;</li>
                <li>Гибкости — резка сложных контуров, микроотверстий и пазов.</li>
              </ul>
              <p className='text-[#D6D6D6CC] text-sm md:text-base leading-relaxed md:leading-[35px] mt-3'>
                Примеры наших проектов:
              </p>
              <ul className='text-[#D6D6D6CC] text-sm md:text-base leading-relaxed md:leading-[35px] list-disc pl-5 space-y-2'>
                <li>Детали для промышленного оборудования (кожухи, кронштейны).</li>
                <li>
                  Декоративные элементы фасадов и интерьеров. Точные компоненты для медицинских
                  приборов.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {!isHomePage && (
          <div className='mt-8 md:mt-12'>
            <div className='flex flex-col md:flex-row gap-6'>
              <div className='w-full md:w-[30%]'>
                <p className='text-[#D6D6D6CC] text-sm md:text-base leading-relaxed md:leading-[35px]'>
                  Мы предлагаем своим клиентам лучший сервис. Наши сотрудники готовы помочь в выборе
                  способа решения вашей задачи, а также составить техническое задание на основе
                  ваших пожеланий. Мы принимаем заявки на услуги по всей России. Сотрудничество с
                  сервисами доставки позволяет отправлять заказы в любой город страны. Цифровые
                  данные в виде файлов вы можете получить по ссылке в любом удобном формате.
                  Свяжитесь с менеджером Петроэнергомаш, чтобы узнать больше об услугах и сделать
                  заказ.
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
