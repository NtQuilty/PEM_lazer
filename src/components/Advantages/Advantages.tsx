import React from 'react';
import { advantages } from './const';

export const Advantages: React.FC = () => {
  return (
    <section className='bg-gray-900 py-20 text-white'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-semibold mb-10 text-center'>Наши преимущества</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {advantages.map((item, index) => (
            <div key={index} className=' pl-6 py-6 relative group'>
              <div className='absolute w-4/5 h-3/5 bg-[rgba(48,152,255,0.35)] blur-[100px] opacity-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none group-hover:opacity-100 transition-opacity duration-300'></div>

              <h3 className='text-xl font-semibold mb-3 relative z-10'>{item.title}</h3>
              <p className='text-gray-400 leading-relaxed relative z-10'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
