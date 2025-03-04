import { servicesData } from './const';

export const MainContent = () => {
  return (
    <div className='relative mx-auto '>
      <div className='max-w-[1350px] mx-auto'>
        <h2 className='text-[#d6d6d6] text-[40px] leading-[60px] my-[120px] ml-[145px] mb-[150px] max-w-[800px]'>
          Мы предоставляем полный спектр услуг, связанных с 3D технологиями
        </h2>

        {servicesData.map((service, index) => (
          <div key={service.id} className='relative mb-[50px]'>
            <div
              className='rounded-[20px] h-[560px] flex flex-wrap items-center overflow-visible relative bg-cover bg-center bg-no-repeat bg-blend-soft-light'
              style={{
                backgroundImage: `url(${service.bgImage})`,
              }}
            >
              {index % 2 === 0 ? (
                <>
                  <div className='w-full md:w-1/2 relative flex items-center z-10'>
                    <img
                      src={service.image}
                      alt={service.title}
                      className='w-auto h-auto max-h-[560px] object-contain'
                    />
                  </div>
                  <div className='w-full md:w-1/2 p-6 pr-[150px] z-10'>
                    <h3 className='text-[#d6d6d6] text-[36px] font-bold mb-4'>{service.title}</h3>
                    <p className='text-[rgba(214,214,214,0.7)] text-[16px] leading-[24px] mb-6'>
                      {service.description}
                    </p>
                    <div className='flex gap-4'>
                      <button className='bg-[#3198FF] text-white rounded-[20px] text-[16px] px-6 py-3'>
                        Рассчитать стоимость
                      </button>
                      <button className='border-[1px] border-solid border-[#3198ff] text-[#a7a8ab] rounded-[20px] text-[16px] px-6 py-3'>
                        Подробнее
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className='w-full md:w-1/2 p-6 pl-[150px] z-10'>
                    <h3 className='text-[#d6d6d6] text-[36px] font-bold mb-4'>{service.title}</h3>
                    <p className='text-[rgba(214,214,214,0.7)] text-[16px] leading-[24px] mb-6'>
                      {service.description}
                    </p>
                    <div className='flex gap-4'>
                      <button className='bg-[#3198FF] text-white rounded-[20px] text-[16px] px-6 py-3'>
                        Рассчитать стоимость
                      </button>
                      <button className='border-[1px] border-solid border-[#3198ff] text-[#a7a8ab] rounded-[20px] text-[16px] px-6 py-3'>
                        Подробнее
                      </button>
                    </div>
                  </div>
                  <div className='w-full md:w-1/2  relative flex items-center justify-end z-10'>
                    <img
                      src={service.image}
                      alt={service.title}
                      className='w-auto h-auto max-h-[560px] object-contain'
                    />
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
