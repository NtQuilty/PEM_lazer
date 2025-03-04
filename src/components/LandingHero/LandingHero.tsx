import { services } from '../../config';
import { FaTelegram } from 'react-icons/fa';
import { FaChevronDown } from 'react-icons/fa';

export const LandingHero = () => {
  return (
    <div className="relative w-full h-[800px] mb-28">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img src={services[0].image} alt={services[0].id} className="w-full h-full object-cover" />
      </div>
      <div className="relative max-w-[1350px] mx-auto flex items-center h-full">
        <div className="flex flex-col justify-center pl-20 gap-6 max-w-[950px]">
          <h1 className="text-[#c1c1c1] text-[54px] font-extrabold leading-[63px]">
            {services[0].title}
          </h1>
          <p className="text-[rgba(214,214,214,0.7)] text-[24px] font-light leading-[43px] mb-[40px] max-w-[722px]">
            {services[0].description}
          </p>
          <div className="flex gap-[35px]">
            <button
              className="
              bg-[#3198FF] text-white rounded-[20px] text-[23px]
              w-[340px]
              py-[25px]
            "
            >
              Рассчитать стоимость
            </button>
            <button
              className="
              border-[1px] border-solid border-[#3198ff]
              text-[#a7a8ab]
              rounded-[20px]
              text-[23px]
              w-[260px]
              py-[25px]
            "
            >
              Подробнее
            </button>
          </div>
        </div>
      </div>

      {/* Иконка Telegram */}
      <a
        href="https://t.me/your_username"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-8 right-8 text-white"
      >
        <FaTelegram size={32} />
      </a>

      {/* Стрелка вниз */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer">
        <FaChevronDown size={32} />
      </div>
    </div>
  );
};
