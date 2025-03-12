import { Link } from 'react-router-dom';

export const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <div className='relative group'>
    <div className='absolute w-4/5 h-4/5 bg-[rgba(48,152,255,0.35)] blur-[50px] opacity-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none group-hover:opacity-100 transition-opacity duration-300'></div>
    <Link to={to} className='block text-gray-400 group-hover:text-[#3198ff] transition-colors'>
      {children}
    </Link>
  </div>
);
