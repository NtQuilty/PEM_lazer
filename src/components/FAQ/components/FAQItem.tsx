import React, { useEffect, useRef } from 'react';
import { FiMinusCircle } from 'react-icons/fi';
import { GoPlusCircle } from 'react-icons/go';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

export const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState(0);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className='border-b border-gray-800 py-5 relative group'>
      <div className='absolute w-4/5 bg-[rgba(48,152,255,0.35)] blur-[100px] opacity-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none group-hover:opacity-100 transition-opacity duration-300'></div>

      <button
        className={`w-full flex justify-between items-center text-left relative z-10 transition-colors duration-200 ${
          isOpen ? 'text-[#3198ff]' : 'hover:text-[#3198ff]'
        }`}
        onClick={onClick}
      >
        <h3
          className={`text-lg transition-colors duration-200 ${
            isOpen ? 'text-[#3198ff]' : 'text-[#afafb1] group-hover:text-[#3198ff]'
          }`}
        >
          {question}
        </h3>
        <span
          className={`ml-4 transition-colors duration-200 ${
            isOpen ? 'text-[#3198ff]' : 'text-gray-400 group-hover:text-[#3198ff]'
          }`}
        >
          {isOpen ? <FiMinusCircle size={24} /> : <GoPlusCircle size={24} />}
        </span>
      </button>

      <div
        className='overflow-hidden transition-all duration-300 ease-in-out relative z-10'
        style={{ height: `${height}px` }}
      >
        <div ref={contentRef} className='py-3 text-[rgba(214,214,214,0.8)] text-sm'>
          {answer}
        </div>
      </div>
    </div>
  );
};
