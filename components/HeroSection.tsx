import Image from "next/image";

// src/components/sections/Hero.tsx
export const Hero = () => {
  return (
    <section className="px-6 md:px-12 py-10 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-[#E34234] rounded-[32px] p-10 md:p-16 text-white flex flex-col justify-between">
        <div>
          <span className="bg-black/20 text-[12px] px-3 py-1 rounded-full uppercase tracking-wider">
            криптовалютный терминал
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-6 leading-tight">
            Цифровое решение для каждого бизнеса
          </h1>
        </div>
        <div className="flex gap-4 mt-12">
          <button className="border border-white/30 bg-white/10 px-6 py-3 rounded-xl hover:bg-white/20 transition">
            Запланировать демонстрацию ↗
          </button>
          <button className="bg-white text-black px-6 py-3 rounded-xl font-bold">
            Начать работу
          </button>
        </div>
      </div>
      <div className="bg-[#F5F5F7] rounded-[32px] p-10 relative overflow-hidden">
        <p className="text-gray-500 text-sm ">
          Мы предлагаем полный набор инструментов для интеграции цифровых валют: платёжные шлюзы, аналитику и клиентские решения, которые упрощают криптоплатежи для бизнеса любого масштаба.
        </p>
        <div className="mt-10 flex justify-center">
          <Image src="/image/Terminal.png" alt="Hero Image" width={400} height={300} className="object-contain" />
        </div>
        <span className="absolute bottom-10 left-10 text-6xl font-bold text-gray-200">01</span>
      </div>
    </section>
  );
};