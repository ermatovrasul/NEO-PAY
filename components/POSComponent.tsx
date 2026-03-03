"use client";
import React from 'react';
import { Search, ChevronDown, User, Plus } from 'lucide-react';

const POS_DATA = [
  { id: "71c2ff290ea29e26....", date: "29.01.2026, 17:00:31", type: "API", status: "ТАЙМ-АУТ" },
  { id: "71c2ff290ea29e26....", date: "29.01.2026, 17:00:31", type: "API", status: "ТАЙМ-АУТ" },
];

const IntegrationOption = ({ number, title }: { number: number; title: string }) => (
  <div className="flex items-center gap-3 py-2">
    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-red-50 text-[#BC1818] text-[10px] font-black border border-red-100">
      {number}
    </span>
    <span className="text-[13px] text-gray-600 font-medium">{title}</span>
  </div>
);

export default function POSComponent() {
  return (
    <div className="p-2 md:p-6 bg-[#FBFBFB] min-h-screen font-sans">
      <div className="max-w-6xl mx-auto space-y-6">
        
        <div className="bg-white border border-[#EBEBEB] rounded-[24px] md:rounded-[32px] p-6 md:p-10 shadow-sm">
          <h2 className="text-lg font-bold text-[#1A1A1A] mb-4">Точки продаж</h2>
          <p className="text-[13px] text-gray-400 leading-relaxed mb-8 max-w-3xl">
            Мы предлагаем несколько вариантов внедрения нашего продукта. Например, вы можете использовать физический платежный терминал или установить приложение. Мы также предлагаем плагины для популярных CMS и API-решений.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 mb-8">
            <IntegrationOption number={1} title="Мобильное приложение" />
            <IntegrationOption number={3} title="Плагины для CMS" />
            <IntegrationOption number={2} title="Платежный терминал" />
            <IntegrationOption number={4} title="API-решение" />
          </div>

          <button className="w-full md:w-auto bg-[#BC1818] text-white px-8 py-4 rounded-2xl text-[12px] font-bold shadow-lg shadow-red-100 hover:bg-[#a01515] transition-all active:scale-95">
            Добавить новый POS-терминал
          </button>
        </div>

        {/* 2. Транзакциялар тизмеси */}
        <div className="bg-white border border-[#EBEBEB] rounded-[24px] md:rounded-[32px] p-6 md:p-10 shadow-sm">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <h2 className="text-lg font-bold text-[#1A1A1A]">Точки продаж</h2>
            <button className="w-full sm:w-auto bg-[#BC1818] text-white px-6 py-3 rounded-xl text-[11px] font-black uppercase tracking-wider active:scale-95 transition-transform flex items-center justify-center gap-2">
              <Plus size={14} /> Создать платеж
            </button>
          </div>

          <div className="overflow-x-auto -mx-6 md:mx-0">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="text-[10px] font-black uppercase text-[#A1A1A1] border-b border-[#F3F4F6] tracking-widest">
                  <th className="pb-5 text-left pl-6 font-black">Имя</th>
                  <th className="pb-5 text-left font-black">Дата</th>
                  <th className="pb-5 text-left font-black">Тип</th>
                  <th className="pb-5 text-right pr-6 font-black">Статус</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3F4F6]">
                {POS_DATA.map((pos, i) => (
                  <tr key={i} className="hover:bg-gray-50/50 transition-colors cursor-pointer group">
                    <td className="py-6 pl-6 text-sm text-[#3B82F6] font-medium underline decoration-blue-100 underline-offset-4">{pos.id}</td>
                    <td className="py-6 text-sm text-gray-500 font-medium">{pos.date}</td>
                    <td className="py-6 text-sm text-[#1A1A1A] font-bold">{pos.type}</td>
                    <td className="py-6 pr-6 text-right">
                      <span className="inline-block bg-[#FEE2E2] text-[#BC1818] text-[10px] font-black px-4 py-2 rounded-lg uppercase tracking-wider">
                        {pos.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}