import { IconType } from 'react-icons';
import { Link } from 'react-router-dom';

export const ContactItem: React.FC<{
  to?: string;
  icon: IconType;
  children: React.ReactNode;
  isLink?: boolean;
  size?: number;
}> = ({ to, icon, children, isLink = true, size = 20 }) => {
  const content = (
    <>
      <span className='w-6 h-6 rounded-full flex items-center justify-center bg-[#1b1e29] mr-3 group-hover:text-[#3198ff] transition-colors'>
        {icon({ className: 'text-white group-hover:text-[#3198ff] transition-colors', size: size })}
      </span>
      <span className='group-hover:text-[#3198ff] transition-colors'>{children}</span>
    </>
  );

  return (
    <div className='relative group flex items-start text-gray-400'>
      <div className='absolute w-4/5 h-4/5 bg-[rgba(48,152,255,0.35)] blur-[50px] opacity-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none group-hover:opacity-100 transition-opacity duration-300'></div>
      {isLink ? (
        <Link to={to || '#'} target='_blank' className='flex items-center'>
          {content}
        </Link>
      ) : (
        content
      )}
    </div>
  );
};
