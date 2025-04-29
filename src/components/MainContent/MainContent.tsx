import { servicesData } from './const';
import { useOrderForm } from '../../contexts/OrderFormContext';

export const MainContent = () => {
  const { openOrderForm } = useOrderForm();

  return (
    <div className='relative mx-auto'>
      <div className='px-4 mx-auto md:max-w-[1350px]'>
        <h2 className='text-[#d6d6d6] text-2xl md:text-[40px] leading-normal md:leading-[60px] my-10 md:my-[120px] mx-4 md:ml-[145px] mb-10 md:mb-[150px] max-w-full md:max-w-[800px]'>
          Мы предоставляем полный спектр услуг, связанных с 3D технологиями
        </h2>

        {servicesData.map((service, index) => (
          <div key={service.id} className='relative mb-8 md:mb-[100px] '>
            <div
              className='rounded-lg md:rounded-[20px] min-h-[360px] md:h-[560px] flex flex-col md:flex-row flex-wrap items-center overflow-visible relative bg-cover bg-center bg-no-repeat bg-blend-soft-light'
              style={{
                backgroundImage: `url(${service.bgImage})`,
              }}
            >
              {index % 2 === 0 ? (
                <>
                  <div className='w-full md:w-1/2 max-h-[100%] relative flex items-center justify-center md:justify-start z-10 order-1'>
                    <img src={service.image} alt={service.title} className='object-contain' />
                  </div>
                  <div className='w-full md:w-1/2 p-4 md:p-6 md:pr-[150px] z-10 order-2 md:order-1'>
                    <h3 className='text-[#d6d6d6] text-2xl md:text-[36px] font-bold mb-3 md:mb-4'>
                      {service.title}
                    </h3>
                    <p className='text-[rgba(214,214,214,0.7)] text-sm md:text-[16px] leading-tight md:leading-[24px] mb-4 md:mb-6'>
                      {service.description}
                    </p>
                    <div className='flex justify-between md:justify-start md:gap-4'>
                      <button
                        onClick={openOrderForm}
                        className='bg-[#3198FF] text-white rounded-xl md:rounded-[20px] text-sm md:text-[16px] px-4 py-2 md:px-6 md:py-3'
                      >
                        Рассчитать стоимость
                      </button>
                      <button className='border-[1px] border-solid border-[#3198ff] text-[#a7a8ab] rounded-xl md:rounded-[20px] text-sm md:text-[16px] px-4 py-2 md:px-6 md:py-3'>
                        Подробнее
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className='w-full md:w-1/2 p-4 md:p-6 md:pl-[150px] z-10 order-2 md:order-1'>
                    <h3 className='text-[#d6d6d6] text-2xl md:text-[36px] font-bold mb-3 md:mb-4'>
                      {service.title}
                    </h3>
                    <p className='text-[rgba(214,214,214,0.7)] text-sm md:text-[16px] leading-tight md:leading-[24px] mb-4 md:mb-6'>
                      {service.description}
                    </p>
                    <div className='flex justify-between md:justify-start md:gap-4'>
                      <button
                        onClick={openOrderForm}
                        className='bg-[#3198FF] text-white rounded-xl md:rounded-[20px] text-sm md:text-[16px] px-4 py-2 md:px-6 md:py-3'
                      >
                        Рассчитать стоимость
                      </button>
                      <button className='border-[1px] border-solid border-[#3198ff] text-[#a7a8ab] rounded-xl md:rounded-[20px] text-sm md:text-[16px] px-4 py-2 md:px-6 md:py-3'>
                        Подробнее
                      </button>
                    </div>
                  </div>
                  <div className='w-full md:w-1/2 max-h-[100%] relative flex items-center justify-center md:justify-end z-10 order-1 md:order-2'>
                    <img src={service.image} alt={service.title} className='object-contain' />
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
