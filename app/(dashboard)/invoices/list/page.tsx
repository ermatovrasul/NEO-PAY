"use client";
import React from 'react';
import { Plus, ChevronRight } from 'lucide-react';

const MOCK_INVOICES = [
  { id: "71c2ff290ea29e26....", client: "Петр Петров Петрович", total: "12 долларов США", date: "29.01.2026, 17:00:31", status: "ТАЙМ-АУТ" },
  { id: "71c2ff290ea29e26....", client: "Петр Петров Петрович", total: "12 долларов США", date: "29.01.2026, 17:00:31", status: "ТАЙМ-АУТ" },
];

export default function InvoiceListPage() {
  return (
    <div className="p-2 md:p-6 bg-[#FBFBFB] min-h-screen">
      <div className="max-w-6xl mx-auto bg-white border border-[#EBEBEB] rounded-[24px] md:rounded-[32px] p-4 md:p-10 shadow-sm">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <h2 className="text-xl font-bold text-[#1A1A1A]">Счета-фактуры</h2>
          <button className="w-full sm:w-auto bg-[#BC1818] text-white px-6 py-3 rounded-xl text-[11px] font-black uppercase tracking-wider active:scale-95 transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-100">
            <Plus size={16} /> Создать Счет-фактуру
          </button>
        </div>
        <div className="flex flex-col gap-4 lg:hidden">
          {MOCK_INVOICES.map((inv, idx) => (
            <div key={idx} className="border border-[#F3F4F6] rounded-2xl p-5 active:bg-gray-50 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Идентификатор</span>
                  <p className="text-sm text-blue-500 font-medium break-all">{inv.id}</p>
                </div>
                <span className="bg-[#FEE2E2] text-[#BC1818] text-[9px] font-black px-2 py-1 rounded-lg uppercase tracking-wider">
                  {inv.status}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Клиент</span>
                  <p className="text-[13px] font-bold text-[#1A1A1A] line-clamp-1">{inv.client}</p>
                </div>
                <div className="space-y-1 text-right">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Сумма</span>
                  <p className="text-[13px] font-black text-[#1A1A1A]">{inv.total}</p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-[#F3F4F6] flex justify-between items-center">
                <span className="text-xs text-gray-400 font-medium">{inv.date}</span>
                <ChevronRight size={18} className="text-gray-300" />
              </div>
            </div>
          ))}
        </div>
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-[10px] font-black uppercase text-[#A1A1A1] border-b border-[#F3F4F6] tracking-widest">
                <th className="pb-5 pl-4">Идентификатор</th>
                <th className="pb-5">Клиент</th>
                <th className="pb-5">Общий</th>
                <th className="pb-5">Дата выпуска</th>
                <th className="pb-5 pr-4 text-right">Статус</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F3F4F6]">
              {MOCK_INVOICES.map((inv, idx) => (
                <tr key={idx} className="group hover:bg-gray-50/50 transition-colors cursor-pointer">
                  <td className="py-6 pl-4 text-sm text-[#3B82F6] font-medium underline decoration-blue-100 underline-offset-4">{inv.id}</td>
                  <td className="py-6 text-sm text-[#1A1A1A] font-medium">{inv.client}</td>
                  <td className="py-6 text-sm font-black text-[#1A1A1A]">{inv.total}</td>
                  <td className="py-6 text-sm text-gray-400 font-medium">{inv.date}</td>
                  <td className="py-6 pr-4 text-right">
                    <span className="bg-[#FEE2E2] text-[#BC1818] text-[10px] font-black px-4 py-2 rounded-lg uppercase tracking-wider">
                      {inv.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}