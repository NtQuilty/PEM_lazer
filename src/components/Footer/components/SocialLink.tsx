import { IconType } from 'react-icons';
import { Link } from 'react-router-dom';

export const SocialLink: React.FC<{ to: string; icon: IconType }> = ({ to, icon }) => (
  <Link
    to={to}
    target='_blank'
    rel='noopener noreferrer'
    className='w-10 h-10 flex items-center justify-center bg-[#1b1e29] hover:bg-[#252a39] transition-colors border-2 border-[#dadada] rounded-full relative group'
  >
    <div className='absolute w-full h-full bg-[rgba(48,152,255,0.35)] blur-[30px] opacity-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none group-hover:opacity-100 transition-opacity duration-300'></div>

    {icon({ className: 'text-white group-hover:text-[#3198ff] transition-colors' })}
  </Link>
);
