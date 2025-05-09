import { servicesData } from './const';
import { useOrderForm } from '../../contexts/OrderFormContext';
import { Link } from 'react-router-dom';

export const MainContent = () => {
  const { openOrderForm } = useOrderForm();

  return (
    <div className='relative mx-auto'>
      <div className='px-4 mx-auto md:max-w-[1350px]'>
        <h2 className='text-[#d6d6d6] text-2xl md:text-[40px] leading-normal md:leading-[60px] my-10 mx-4 md:ml-[145px] mb-10 md:my-[100px] max-w-full md:max-w-[800px]'>
          Мы изгатавливаем детали технологией 2D и 3D лазерной резки
        </h2>

        {servicesData.map((service, index) => (
          <div
            key={service.id}
            className='rounded-3xl md:rounded-[20px] p-5 md:p-7 bg-no-repeat bg-cover bg-center min-h-[500px] md:min-h-0 mb-10 md:mb-[70px]'
            style={{
              backgroundImage: `url(${service.bgImage})`,
            }}
          >
            <div className='flex flex-col md:flex-row md:items-center'>
              <img
                src={service.image}
                alt={service.title}
                className={`object-contain md:max-h-96 max-h-64 md:w-1/2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}
              />
              <div
                className={`md:flex md:flex-col md:w-1/2 ${index % 2 === 0 ? 'md:order-2 md:pr-10' : 'md:order-1 md:pl-10'}`}
              >
                <h3 className='text-[#d6d6d6] text-2xl md:text-[36px] font-bold mb-3 md:mb-4'>
                  {service.title}
                </h3>
                <p className='text-[rgba(214,214,214,0.7)] text-sm md:text-[16px] leading-tight md:leading-[24px] mb-4 md:mb-6'>
                  {service.description}
                </p>

                <div className='flex justify-between md:justify-start md:gap-4'>
                  <button
                    onClick={() => openOrderForm('order')}
                    className='bg-[#3198FF] text-white rounded-xl md:rounded-[20px] text-sm md:text-[16px] px-4 py-2 md:px-6 md:py-3'
                  >
                    Рассчитать стоимость
                  </button>
                  <Link
                    to='/laser-cutting'
                    className='border-[1px] border-solid border-[#3198ff] text-[#a7a8ab] rounded-xl md:rounded-[20px] text-sm md:text-[16px] px-4 py-2 md:px-6 md:py-3'
                  >
                    Подробнее
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
