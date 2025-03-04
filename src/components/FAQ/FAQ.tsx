import React, { useState } from 'react';
import { FAQItem } from './components/FAQItem';
import { questions } from './const';

export const FAQ: React.FC = () => {
  // Состояние для отслеживания активного элемента
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Функция для переключения активного элемента
  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className='bg-[#1b1e29] py-16'>
      <div className='max-w-[1350px] mx-auto pl-[100px]'>
        <div className='max-w-[660px]'>
          <h2 className='text-4xl font-bold text-white mb-8'>{'Ответы на вопросы'}</h2>

          <div className='mb-8'>
            {questions.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={activeIndex === index}
                onClick={() => toggleItem(index)}
              />
            ))}
          </div>

          <div className='flex items-center'>
            <span className='text-[rgba(214,214,214,0.8)] mr-4'>Остались вопросы?</span>
            <button
              onClick={() => undefined}
              className='bg-blue-500 hover:bg-blue-600 transition-colors text-white py-3 px-6 rounded-md'
            >
              {'Задать вопрос'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
