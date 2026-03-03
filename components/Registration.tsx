"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

export default function Registration() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full px-4 md:px-12 py-6">
      <div className="bg-[#BC1818] rounded-[32px] p-8 md:p-16 text-center text-white relative overflow-hidden">
        <div className="absolute left-0 top-0 w-64 h-full bg-white/5 rounded-full -translate-x-1/2 scale-150" />
        <div className="absolute right-0 top-0 w-64 h-full bg-white/5 rounded-full translate-x-1/2 scale-150" />

        <div className="relative z-10 max-w-xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Зарегистрироваться</h1>
          <p className="text-white/80 mb-10 text-sm md:text-base">
            Пожалуйста, создайте новый аккаунт и начните своё приключение.
          </p>

          <form className="space-y-4 text-left" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold ml-1">Электронная почта</label>
              <input
                type="email"
                placeholder="primerniypochta@gmail.com"
                className="w-full bg-white/20 border border-white/30 py-3.5 px-4 rounded-xl outline-none focus:bg-white/30 text-white placeholder:text-white/50 transition-all"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold ml-1">Пароль</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full bg-white/20 border border-white/30 py-3.5 px-4 pr-12 rounded-xl outline-none focus:bg-white/30 text-white placeholder:text-white/50 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3 py-2">
              <input 
                type="checkbox" 
                className="w-4 h-4 accent-white rounded border-none" 
                id="terms" 
              />
              <label htmlFor="terms" className="text-[10px] md:text-xs text-white/80 leading-tight">
                Я согласен с условиями <Link href="#" className="underline font-bold">политики конфиденциальности</Link>
              </label>
            </div>

            <button className="w-full bg-[#E5E7EB] text-[#BC1818] py-3.5 rounded-xl font-bold hover:bg-white transition-colors">
              Зарегистрироваться
            </button>

            <div className="text-center pt-2">
              <p className="text-white/70 text-xs">
                У вас уже есть аккаунт?{" "}
                <Link href="/login" className="text-white font-bold hover:underline">
                  Войти
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}