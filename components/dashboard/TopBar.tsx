import { Search, ChevronDown, Bell } from "lucide-react";

export default function TopBar() {
  return (
    <header className="h-20 bg-white border-b border-gray-100 px-8 flex items-center justify-between sticky top-0 z-10">
      <div className="relative w-96">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input 
          type="text" 
          placeholder="Поиск" 
          className="w-full bg-[#F8F9FA] border border-gray-100 py-2.5 pl-10 pr-4 rounded-xl outline-none focus:border-red-200 transition-all text-sm"
        />
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
          <span className="text-xs font-bold text-gray-700">🇷🇺 RU</span>
          <ChevronDown size={14} className="text-gray-400" />
        </div>

        <div className="flex items-center gap-3 pl-4 border-l border-gray-100">
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-red-50 hover:text-[#BC1818] cursor-pointer transition-all">
            <span className="font-bold text-sm">👤</span>
          </div>
        </div>
      </div>
    </header>
  );
}