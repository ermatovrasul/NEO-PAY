"use client";
import React from 'react';
import { ArrowUpRight, ArrowLeftRight } from 'lucide-react';

const accountsData = [
  { id: 1, name: 'Биткоин', code: 'BTC', balance: '0 BTC', color: 'bg-[#F7931A]' },
  { id: 1, name: 'Биткоин', code: 'BTC', balance: '0 BTC', color: 'bg-[#F7931A]' },
  { id: 2, name: 'Эфириум', code: 'ETH', balance: '0 ETH', color: 'bg-[#627EEA]' },
  { id: 2, name: 'Эфириум', code: 'ETH', balance: '0 ETH', color: 'bg-[#627EEA]' },
  { id: 3, name: 'SOLUSDT', code: 'DASH', balance: '0 DASH', color: 'bg-[#008CE7]' },
  { id: 4, name: 'BNB Smart Chain', code: 'BNB', balance: '0 BNB', color: 'bg-[#F3BA2F]' },
  { id: 5, name: 'Лайткоин', code: 'LTC', balance: '0 LTC', color: 'bg-[#345D9D]' },
];

export const AccountsComponent = () => {
  return (
    <div className="w-full bg-white mr-4 rounded-[24px] md:rounded-[20px] p-4 md:p-4 shadow-sm border border-gray-50">
      <div className="flex flex-col gap-1 mb-6 md:mb-8">
        <h2 className="text-lg md:text-xl font-bold text-black">Счета</h2>
        <p className="text-[10px] md:text-xs text-gray-400 font-medium uppercase tracking-wider">Общие остатки</p>
      </div>

      <div className="flex flex-col gap-1">
        {accountsData.map((account) => (
          <div 
            key={account.id} 
            className="group flex items-center justify-between py-3 md:py-2 border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-all rounded-2xl px-2 -mx-2"
          >
            <div className="flex items-center gap-3 md:gap-4 min-w-0">
              <div className={`flex-shrink-0 w-10 h-10 md:w-10 md:h-10 ${account.color} rounded-full flex items-center justify-center text-white shadow-sm`}>
                <span className="font-bold text-base md:text-lg">{account.code[0]}</span>
              </div>
              <div className="flex flex-col gap-0.5 truncate">
                <span className="font-bold text-[14px] md:text-[15px] text-gray-900 truncate">
                  {account.name}
                </span>
                <span className="bg-[#BC1818] text-white text-[9px] md:text-[10px] font-black px-1.5 md:px-2 py-0.5 rounded uppercase w-fit">
                  {account.balance}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 md:gap-2 ml-2">
              <button className="flex items-center justify-center gap-1.5 p-2 md:px-4 md:py-2 rounded-lg border border-gray-100 bg-white text-[11px] font-bold text-gray-500 hover:border-[#BC1818] hover:text-[#BC1818] transition-all">
                <ArrowLeftRight size={16} className="md:w-[14px] md:h-[14px]" />
                <span className="hidden md:inline">Отправить</span>
              </button>
              
              <button className="flex items-center justify-center gap-1.5 p-2 md:px-4 md:py-2 rounded-lg border border-gray-100 bg-white text-[11px] font-bold text-gray-500 hover:border-[#BC1818] hover:text-[#BC1818] transition-all">
                <ArrowUpRight size={16} className="md:w-[14px] md:h-[14px]" />
                <span className="hidden md:inline">Отправить</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};