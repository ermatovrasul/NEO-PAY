import React from 'react';

export const InputField = ({ label, placeholder, type = "text" }: any) => (
  <div className="space-y-1.5 w-full">
    <label className="text-[11px] font-bold text-gray-400 uppercase ml-1 tracking-wider">
      {label}
    </label>
    <input 
      type={type} 
      placeholder={placeholder} 
      className="w-full bg-[#F8F9FA] border border-gray-100 p-3.5 rounded-xl outline-none focus:bg-white focus:border-red-200 transition-all text-sm text-gray-800 placeholder:text-gray-400" 
    />
  </div>
);

export const SelectField = ({ label, options }: any) => (
  <div className="space-y-1.5 w-full">
    <label className="text-[11px] font-bold text-gray-400 uppercase ml-1 tracking-wider">
      {label}
    </label>
    <div className="relative">
      <select className="w-full bg-[#F8F9FA] border border-gray-100 p-3.5 rounded-xl outline-none focus:bg-white focus:border-red-200 text-sm text-gray-500 appearance-none cursor-pointer">
        {options.map((opt: string) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  </div>
);

// 3. Дата тандоо талаасы
export const DateField = ({ label }: any) => (
  <div className="space-y-1.5 w-full">
    <label className="text-[11px] font-bold text-gray-400 uppercase ml-1 tracking-wider">
      {label}
    </label>
    <input 
      type="date" 
      className="w-full bg-[#F8F9FA] border border-gray-100 p-3.5 rounded-xl outline-none text-sm text-gray-500 focus:bg-white focus:border-red-200 transition-all" 
    />
  </div>
);