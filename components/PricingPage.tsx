import React from 'react';
import { Check, ArrowUpRight } from 'lucide-react';
import { pricingRows } from '@/type/pricingData';

const PricingPage = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <section className="px-4 md:px-12 mx-auto pt-16 pb-12 px-4 text-center">
        <div className="bg-[#F8F9FA] rounded-[32px] py-16 px-6 relative overflow-hidden">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-24 h-48 bg-gray-200/50 rounded-r-full" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-24 h-48 bg-gray-200/50 rounded-l-full" />

          <h1 className="text-4xl md:text-6xl font-extrabold text-[#1A1A1A] mb-8 relative z-10">
            Прайс на наши услуги
          </h1>
          
          <button className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors relative z-10 bg-white shadow-sm">
            Проще не бывает — вы будете в восторге
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-24">
        <h2 className="text-xl md:text-4xl font-bold text-center mb-12 text-[#1A1A1A]">
          Мы придерживаемся простоты
        </h2>

        <div className="border-t border-gray-100">
          {pricingRows.map((row, index) => (
            <div 
              key={index} 
              className="flex items-center justify-between py-5 border-b border-gray-100 hover:bg-gray-50 transition-colors px-4"
            >
              <span className="text-gray-600 font-medium">
                {row.label}
              </span>
              
              <div className="text-right">
                {row.value ? (
                  <span className="font-bold text-[#1A1A1A]">{row.value}</span>
                ) : (
                  <div className="bg-white border border-gray-200 rounded-md p-1 shadow-sm">
                    {row.isChecked && <Check className="w-4 h-4 text-gray-800 stroke-[3px]" />}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PricingPage;