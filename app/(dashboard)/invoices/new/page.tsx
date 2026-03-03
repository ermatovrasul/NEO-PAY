"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { X, ChevronDown, Plus } from "lucide-react";

export default function NewInvoicePage() {
  const router = useRouter();
  const [clientName, setClientName] = useState("");
  const [items, setItems] = useState([{ id: Date.now(), name: "", price: "", qty: "1" }]);

  const handleSend = () => {
    router.push("/invoices/list");
  };

  const addItem = () => setItems([...items, { id: Date.now(), name: "", price: "", qty: "1" }]);
  const removeItem = (id: number) => items.length > 1 && setItems(items.filter(i => i.id !== id));

  return (
    <div className="p-2 md:p-4 bg-[#FBFBFB] min-h-screen font-sans">
      <div className="max-w-6xl mx-auto bg-white border border-[#EBEBEB] rounded-[24px] md:rounded-[32px] p-5 md:p-12 shadow-sm">
        
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 md:mb-10 gap-6">
          <div>
            <h2 className="text-lg md:text-xl font-bold text-[#1A1A1A]">Михаил Черкашн</h2>
            <div className="text-[12px] md:text-[13px] text-[#A1A1A1] mt-2 leading-relaxed font-medium">
              <p>Гатчинский переулок 28</p>
              <p>Бишкек, 188231</p>
              <p>+79145905206</p>
            </div>
          </div>
          <button 
            onClick={handleSend} 
            className="w-full md:w-auto bg-[#BC1818] text-white px-8 py-3.5 rounded-2xl text-[13px] font-bold shadow-lg shadow-red-100 hover:bg-[#a01515] transition-all active:scale-95"
          >
            Отправить счет фактуру
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 mb-8 md:mb-12 gap-y-6">
          
          <div className="space-y-6 md:space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-[#A1A1A1] ml-1">Дата выпуска</label>
                <input type="date" className="w-full bg-[#F3F4F6] border-none rounded-2xl px-4 py-4 text-sm outline-none focus:ring-2 focus:ring-red-500/10" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-[#A1A1A1] ml-1">Срок оплаты</label>
                <input type="date" className="w-full bg-[#F3F4F6] border-none rounded-2xl px-4 py-4 text-sm outline-none focus:ring-2 focus:ring-red-500/10" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-[#A1A1A1] ml-1">Счет-фактура на имя:</label>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <select 
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full bg-[#F3F4F6] border-none rounded-2xl px-4 py-4 text-sm appearance-none outline-none cursor-pointer"
                  >
                    <option value="">Выберите</option>
                    <option value="Петр Петров">Петр Петров</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-4 text-gray-400 pointer-events-none" size={18} />
                </div>
                <button className="bg-[#BC1818] text-white px-8 py-4 rounded-2xl text-[12px] font-bold whitespace-nowrap active:scale-95 transition-transform">
                  Добавить клиента
                </button>
              </div>
            </div>
          
          </div>
          <div className="hidden md:block"></div>
        </div>

        <div className="space-y-6">
          <div className="hidden md:grid grid-cols-12 gap-4 px-4 text-[10px] font-black uppercase text-[#A1A1A1]">
            <div className="col-span-6">Элемент</div>
            <div className="col-span-3 text-center">Расходы</div>
            <div className="col-span-2 text-center">Кол-во</div>
            <div className="col-span-1"></div>
          </div>

          <div className="space-y-8 md:space-y-4">
            {items.map((item) => (
              <div key={item.id} className="grid grid-cols-12 gap-3 md:gap-4 items-end border-b border-gray-100 pb-6 md:border-none md:pb-0">
                <div className="col-span-12 md:col-span-6 space-y-2">
                  <label className="md:hidden text-[10px] font-black uppercase text-[#A1A1A1]">Элемент</label>
                  <input type="text" placeholder="Введите название товара" className="w-full bg-[#F3F4F6] border-none rounded-2xl px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-red-500/10" />
                </div>
                
                <div className="col-span-7 md:col-span-3 relative space-y-2">
                  <label className="md:hidden text-[10px] font-black uppercase text-[#A1A1A1]">Расходы</label>
                  <div className="relative">
                    <input type="number" placeholder="0" className="w-full bg-[#F3F4F6] border-none rounded-2xl px-5 py-4 text-sm outline-none pr-10" />
                    <span className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 text-xs">0</span>
                  </div>
                </div>

                <div className="col-span-3 md:col-span-2 relative space-y-2">
                  <label className="md:hidden text-[10px] font-black uppercase text-[#A1A1A1]">Кол-во</label>
                  <div className="relative">
                    <input type="number" placeholder="1" className="w-full bg-[#F3F4F6] border-none rounded-2xl px-5 py-4 text-sm outline-none pr-8" />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs">0</span>
                  </div>
                </div>

                <div className="col-span-2 md:col-span-1 flex justify-center pb-2 md:pb-3">
                  <button onClick={() => removeItem(item.id)} className="p-2 text-gray-300 hover:text-red-500 transition-colors">
                    <X size={22}/>
                  </button>
                </div>
              </div>
            ))}

            {items.map((item) => (
              <div key={item.id} className="grid grid-cols-12 gap-3 md:gap-4 items-end border-b border-gray-100 pb-6 md:border-none md:pb-0">
                <div className="col-span-12 md:col-span-6 space-y-2">
                  <label className="md:hidden text-[10px] font-black uppercase text-[#A1A1A1]">Элемент</label>
                  <input type="text" placeholder="Введите название товара" className="w-full bg-[#F3F4F6] border-none rounded-2xl px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-red-500/10" />
                </div>
                
                <div className="col-span-7 md:col-span-3 relative space-y-2">
                  <label className="md:hidden text-[10px] font-black uppercase text-[#A1A1A1]">Расходы</label>
                  <div className="relative">
                    <input type="number" placeholder="0" className="w-full bg-[#F3F4F6] border-none rounded-2xl px-5 py-4 text-sm outline-none pr-10" />
                    <span className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 text-xs">0</span>
                  </div>
                </div>

                <div className="col-span-3 md:col-span-2 relative space-y-2">
                  <label className="md:hidden text-[10px] font-black uppercase text-[#A1A1A1]">Кол-во</label>
                  <div className="relative">
                    <input type="number" placeholder="1" className="w-full bg-[#F3F4F6] border-none rounded-2xl px-5 py-4 text-sm outline-none pr-8" />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs">0</span>
                  </div>
                </div>

                <div className="col-span-2 md:col-span-1 flex justify-center pb-2 md:pb-3">
                  <button onClick={() => removeItem(item.id)} className="p-2 text-gray-300 hover:text-red-500 transition-colors">
                    <X size={22}/>
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <button onClick={addItem} className="flex items-center gap-2 bg-[#BC1818] text-white px-6 py-3 rounded-xl text-[12px] font-bold active:scale-95 transition-transform shadow-sm">
            <Plus size={16} /> Добавить товар
          </button>
        </div>

        <div className="mt-10 md:mt-12 pt-8 md:pt-10 border-t border-[#F3F4F6]">
          <div className="max-w-md space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-[#A1A1A1] ml-1">Валюта</label>
              <div className="relative w-full sm:w-[240px]">
                <select className="w-full bg-[#F3F4F6] border-none rounded-2xl px-5 py-4 text-sm appearance-none outline-none">
                  <option>евро</option>
                  <option>USD</option>
                </select>
                <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-[#A1A1A1] ml-1">Примечание:</label>
              <textarea placeholder="Напишите здесь" className="w-full bg-[#F3F4F6] border-none rounded-[24px] px-6 py-5 text-sm h-32 md:h-40 resize-none outline-none focus:ring-2 focus:ring-red-500/10" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}