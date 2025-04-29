import { IconType } from 'react-icons';
import { Link } from 'react-router-dom';

export const SocialLink = ({
  to,
  icon,
  size = '16',
}: {
  to: string;
  icon: IconType;
  size?: string;
}) => (
  <Link
    to={to}
    target='_blank'
    rel='noopener noreferrer'
    className='flex items-center justify-center bg-[#1b1e29] hover:bg-[rgba(49,152,255,0.1)] hover:border-[#3198ff] transition-colors border-2 border-[#dadada] rounded-full p-2'
  >
    {icon({ className: 'text-white group-hover:fill-[#3198ff] transition-colors', size })}
  </Link>
);
