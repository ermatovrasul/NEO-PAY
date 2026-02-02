"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Lock, Mail, ArrowRight } from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="min-h-screen bg-[#F8F9FB] flex items-center justify-center px-4 py-12">
      <div className="bg-white w-full max-w-[480px] rounded-[32px] md:rounded-[48px] p-8 md:p-12 shadow-sm border border-gray-100">
        <div className="text-center mb-10">
          <div className="text-2xl font-black text-[#E34234] tracking-tighter mb-4">NEO PAY</div>
          <p className="text-gray-400">Войдите в свой аккаунт, чтобы продолжить</p>
        </div>
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[#1A1A1A] ml-1">Электронная почта</label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#E34234] transition-colors" size={20} />
              <input 
                type="email" 
                placeholder="example@mail.com"
                className="w-full bg-[#F8F9FB] border border-gray-100 py-4 pl-12 pr-4 rounded-2xl outline-none focus:border-[#E34234]/30 focus:bg-white transition-all"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center ml-1">
              <label className="text-sm font-semibold text-[#1A1A1A]">Пароль</label>
              <Link href="#" className="text-xs font-bold text-[#E34234] hover:underline">Забыли пароль?</Link>
            </div>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#E34234] transition-colors" size={20} />
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="••••••••"
                className="w-full bg-[#F8F9FB] border border-gray-100 py-4 pl-12 pr-12 rounded-2xl outline-none focus:border-[#E34234]/30 focus:bg-white transition-all"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#1A1A1A]"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          <div className="flex items-center gap-2 py-1">
            <input type="checkbox" className="accent-[#E34234] w-4 h-4 cursor-pointer" id="remember" />
            <label htmlFor="remember" className="text-sm text-gray-500 cursor-pointer select-none">Запомнить меня</label>
          </div>
          <button className="w-full bg-[#E34234] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-[#c9352a] transition-all active:scale-[0.98] shadow-lg shadow-red-500/20 mt-2">
            Войти в систему
            <ArrowRight size={20} />
          </button>
          <div className="text-center pt-6">
            <p className="text-gray-500 text-sm">
              Нет аккаунта? {" "}
              <Link href="/register" className="text-[#E34234] font-bold hover:underline">
                Создать аккаунт
              </Link>
            </p>
          </div>

        </form>
      </div>
    </section>
  );
};