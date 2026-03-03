'use client';

import React, { useState } from 'react';
import { X, Clock, CheckCircle2, AlertCircle, ChevronRight, Plus } from 'lucide-react';

interface Payment {
  id: string;
  coin: string;
  amount: string;
  createdAt: string;
  status: 'ТАЙМ-АУТ' | 'ОПЛАЧЕНО' | 'В ОЖИДАНИИ';
  fiatAmount: string;
  point: string;
  expiryDate: string;
}

const MOCK_PAYMENTS: Payment[] = [
  { id: '71c2ff290ea29e289c6c3098154547f1', coin: 'Биткоин', amount: '9045,4845 USDT', createdAt: '29.01.2026, 17:00:31', status: 'ТАЙМ-АУТ', fiatAmount: '7777 евро', point: 'Счет №4', expiryDate: '29.01.2026, 17:15:35' },
  { id: '71c2ff290ea29e289c6c3098154547f2', coin: 'Биткоин', amount: '1200,00 USDT', createdAt: '29.01.2026, 18:20:10', status: 'ОПЛАЧЕНО', fiatAmount: '1100 евро', point: 'Счет №5', expiryDate: '29.01.2026, 18:35:00' },
  { id: '71c2ff290ea29e289c6c3098154547f3', coin: 'Биткоин', amount: '500,12 USDT', createdAt: '30.01.2026, 09:10:00', status: 'В ОЖИДАНИИ', fiatAmount: '450 евро', point: 'Счет №1', expiryDate: '30.01.2026, 09:25:00' },
];

export default function PaymentTable() {
  const [selected, setSelected] = useState<Payment | null>(null);

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'ОПЛАЧЕНО': return 'bg-green-50 text-green-600 border-green-100';
      case 'В ОЖИДАНИИ': return 'bg-yellow-50 text-yellow-600 border-yellow-100';
      default: return 'bg-red-50 text-[#BC1818] border-red-100';
    }
  };

  return (
    <div className="p-2 md:p-2 bg-[#FBFBFB] min-h-screen text-[#1A1A1A]">
      <div className="max-w-6xl mx-auto bg-white border border-[#EBEBEB] rounded-[24px] md:rounded-[32px] p-4 md:p-10 shadow-sm">
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <h2 className="text-xl font-bold">Платежи</h2>
          <button className="w-full sm:w-auto bg-[#BC1818] text-white px-6 py-3 rounded-xl text-[12px] font-black uppercase tracking-wider shadow-lg shadow-red-100 active:scale-95 transition-all flex items-center justify-center gap-2">
            <Plus size={16} /> Создать платеж
          </button>
        </div>

        <div className="flex flex-col gap-4 lg:hidden">
          {MOCK_PAYMENTS.map((payment) => (
            <div 
              key={payment.id} 
              onClick={() => setSelected(payment)}
              className="border border-[#F3F4F6] rounded-2xl p-5 active:bg-gray-50 transition-colors cursor-pointer"
            >
              <div className="flex justify-between items-start mb-3">
                <span className={`text-[9px] font-black px-2 py-1 rounded-lg border uppercase tracking-wider ${getStatusStyle(payment.status)}`}>
                  {payment.status}
                </span>
                <span className="text-[11px] text-gray-400 font-medium">{payment.createdAt}</span>
              </div>
              <p className="text-[13px] text-blue-500 font-medium mb-3 truncate">{payment.id}</p>
              <div className="flex justify-between items-end">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-[#F7931A] rounded-full flex items-center justify-center text-[10px] text-white font-bold">₿</div>
                  <span className="text-[14px] font-bold">{payment.amount}</span>
                </div>
                <ChevronRight size={18} className="text-gray-300" />
              </div>
            </div>
          ))}
        </div>

        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-[#A1A1A1] text-[10px] font-black uppercase tracking-widest border-b border-[#F3F4F6]">
                <th className="pb-5 pl-4">Счёт</th>
                <th className="pb-5">Монета</th>
                <th className="pb-5">Количество</th>
                <th className="pb-5">Создано в</th>
                <th className="pb-5 pr-4 text-right">Статус</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F3F4F6]">
              {MOCK_PAYMENTS.map((payment) => (
                <tr 
                  key={payment.id} 
                  onClick={() => setSelected(payment)}
                  className="hover:bg-gray-50/50 cursor-pointer transition-colors group"
                >
                  <td className="py-6 pl-4 text-[#3B82F6] text-[13px] font-medium max-w-[200px] truncate underline decoration-blue-100 underline-offset-4">
                    {payment.id}
                  </td>
                  <td className="py-6 text-[13px] font-bold">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-[#F7931A] rounded-full flex items-center justify-center text-[10px] text-white font-bold">₿</div>
                      {payment.coin}
                    </div>
                  </td>
                  <td className="py-6 text-[13px] font-black">{payment.amount}</td>
                  <td className="py-6 text-[13px] text-gray-400 font-medium">{payment.createdAt}</td>
                  <td className="py-6 pr-4 text-right">
                    <span className={`text-[10px] font-black px-3 py-1.5 rounded-lg border uppercase tracking-wider ${getStatusStyle(payment.status)}`}>
                      {payment.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 transition-all">
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300" 
            onClick={() => setSelected(null)} 
          />
          
          <div className="relative bg-white w-full max-w-[540px] rounded-t-[32px] sm:rounded-[32px] shadow-2xl p-6 sm:p-10 animate-in slide-in-from-bottom sm:zoom-in duration-300">
            <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-6 sm:hidden" onClick={() => setSelected(null)} />
            
            <h3 className="text-center text-[18px] font-black mb-8">Платежные данные</h3>
            
            <div className="space-y-8 relative ml-2">
              <div className="absolute left-[9px] top-2 bottom-2 w-[1.5px] bg-[#F3F4F6]" />

              <div className="flex gap-6 relative">
                <div className="w-[20px] h-[20px] rounded-full bg-green-500 z-10 ring-4 ring-white flex-shrink-0 flex items-center justify-center">
                  <CheckCircle2 size={12} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-[14px] font-bold mb-1">Платеж создан</p>
                  <p className="text-[11px] text-blue-500 break-all font-medium leading-relaxed">ID: {selected.id}</p>
                  <p className="text-[10px] text-gray-400 mt-1 font-bold">{selected.createdAt}</p>
                  
                  <div className="flex items-center gap-1.5 mt-4 mb-4">
                    <div className="w-5 h-5 bg-[#F7931A] rounded-full flex items-center justify-center text-[8px] text-white font-bold">₿</div>
                    <span className="text-[12px] font-black uppercase tracking-wider">{selected.coin}</span>
                  </div>

                  <div className="grid grid-cols-1 xs:grid-cols-3 gap-3 bg-[#F9FAFB] border border-[#F3F4F6] p-4 rounded-2xl">
                    <div className="space-y-1">
                      <p className="text-[9px] text-gray-400 uppercase font-black tracking-tighter">Точка</p>
                      <p className="text-[12px] font-bold">{selected.point}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[9px] text-gray-400 uppercase font-black tracking-tighter">Сумма Crypto</p>
                      <p className="text-[12px] font-black">{selected.amount.split(' ')[0]}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[9px] text-gray-400 uppercase font-black tracking-tighter">Фиат</p>
                      <p className="text-[12px] font-black">{selected.fiatAmount}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-6 relative">
                <div className={`w-[20px] h-[20px] rounded-full z-10 ring-4 ring-white flex-shrink-0 flex items-center justify-center ${selected.status === 'ТАЙМ-АУТ' ? 'bg-red-500' : 'bg-gray-300'}`}>
                   {selected.status === 'ТАЙМ-АУТ' ? <AlertCircle size={12} className="text-white" /> : <Clock size={12} className="text-white" />}
                </div>
                <div>
                  <p className="text-[14px] font-bold mb-1">
                    {selected.status === 'ОПЛАЧЕНО' ? 'Платеж завершен' : 'Истекло время ожидания'}
                  </p>
                  <p className="text-[10px] text-gray-400 font-bold">{selected.expiryDate}</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <button 
                onClick={() => setSelected(null)}
                className="w-full bg-[#BC1818] text-white py-4 rounded-2xl text-[14px] font-bold shadow-lg shadow-red-100 hover:bg-[#a01515] transition-all active:scale-95"
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}