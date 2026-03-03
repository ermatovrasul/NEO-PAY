"use client";
import React, { useState } from 'react';
import { Search, ChevronDown, User } from 'lucide-react';

const CURRENCIES = [
  { id: 1, name: "Биткоин", code: "0 BTC", icon: "₿", color: "bg-orange-500" },
  { id: 2, name: "Биткоин", code: "0 BTC", icon: "₿", color: "bg-orange-500" },
  { id: 3, name: "Биткоин", code: "0 BTC", icon: "₿", color: "bg-orange-500" },
  { id: 4, name: "Биткоин", code: "0 BTC", icon: "₿", color: "bg-orange-500" },
  { id: 5, name: "Биткоин", code: "0 BTC", icon: "₿", color: "bg-orange-500" },
];

export default function SettingsComponent() {
  const [enabledIds, setEnabledIds] = useState<number[]>([1, 2, 3, 4, 5]);

  const toggleCurrency = (id: number) => {
    setEnabledIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="p-2 md:p-6 bg-[#FBFBFB] min-h-screen ">
      <div className="max-w-6xl mx-auto space-y-6">
        
        <div className="bg-white border border-[#EBEBEB] rounded-[24px] md:rounded-[32px] p-6 md:p-10 shadow-sm max-w-2xl">
          <h2 className="text-lg font-bold text-[#1A1A1A] mb-2">Управление валютами</h2>
          <p className="text-[11px] md:text-[13px] text-gray-600 mb-8 ">
            Выберите валюты, которые хотите отобразить, и отсортируйте их по своему усмотрению.
          </p>

          <div className="space-y-4">
            {CURRENCIES.map((currency) => (
              <div key={currency.id} className="flex items-center justify-between py-1">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 ${currency.color} rounded-full flex items-center justify-center text-white text-sm font-bold shadow-sm`}>
                    {currency.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[13px] font-bold text-[#1A1A1A]">{currency.name}</span>
                    <span className="text-[10px] font-black uppercase bg-indigo-600 text-white px-1.5 py-0.5 rounded-[4px] w-fit">
                      {currency.code}
                    </span>
                  </div>
                </div>
                <button 
                  onClick={() => toggleCurrency(currency.id)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                    enabledIds.includes(currency.id) ? 'bg-[#BC1818]' : 'bg-gray-200'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      enabledIds.includes(currency.id) ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}