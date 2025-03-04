import { Link } from 'react-router-dom';
import { navigationLinks } from '../../config';
import { BsTelephoneFill } from 'react-icons/bs';
import { TbMailFilled } from 'react-icons/tb';

//bg-[rgba(19,21,30,0.5)]

export const Header = () => {
  return (
    <div
      className="fixed top-0 left-0 right-0  py-4 z-10"
      // style={{
      //   backdropFilter: 'blur(57.5333px)',
      //   background: 'rgba(19, 21, 30, 0.5)',
      //   WebkitBoxShadow:
      //     '0 20px 60px rgba(0, 0, 0, 0.44), inset 67.3333px -67.3333px 67.3333px rgba(148, 148, 148, 0.027), inset -67.3333px 67.3333px 67.3333px rgba(255, 255, 255, 0.027)',
      //   boxShadow:
      //     '0 20px 60px rgba(0, 0, 0, 0.44), inset 67.3333px -67.3333px 67.3333px rgba(148, 148, 148, 0.027), inset -67.3333px 67.3333px 67.3333px rgba(255, 255, 255, 0.027)',
      // }}
    >
      <div className="flex justify-between items-center max-w-[1350px] mx-auto">
        <img src="/public/images/logo.png" alt="logo" />
        {navigationLinks.map(({ id, title, link }) => (
          <Link key={id} to={link} className="text-[#a7a8ab] text-base">
            {title}
          </Link>
        ))}
        <div className="flex items-center border-2 border-[#dadada] rounded-full p-3">
          <BsTelephoneFill color="white" size={24} />
        </div>
        <div className="flex items-center border-2 border-[#dadada] rounded-full p-3">
          <TbMailFilled color="white" size={24} />
        </div>
        <div>
          <button className="text-[#fff] text-lg bg-[#3198ff]  px-[40px] py-[10px] rounded-xl">
            Заказать
          </button>
        </div>
      </div>
    </div>
  );
};
