import Image from "next/image";

export const Hero = () => {
  return (
    <section className="px-4 md:px-12 py-6 md:py-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="bg-[#E34234] rounded-[32px] p-8 md:p-16 text-white flex flex-col justify-between min-h-[450px] md:min-h-[550px]">
        <div>
          <span className="bg-black/20 text-[10px] md:text-[12px] px-3 py-1.5 rounded-full uppercase tracking-wider font-medium">
            криптовалютный терминал
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-6 leading-[1.1] tracking-tight">
            Цифровое решение для каждого бизнеса
          </h1>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 mt-10 md:mt-12">
          <button className="w-full sm:w-auto border border-white/30 bg-white/10 px-6 py-4 rounded-2xl hover:bg-white/20 transition-all active:scale-95 text-sm md:text-base font-medium">
            Запланировать демонстрацию ↗
          </button>
          <button className="w-full sm:w-auto bg-white text-black px-6 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all active:scale-95 text-sm md:text-base">
            Начать работу
          </button>
        </div>
      </div>

      <div className="bg-[#F5F5F7] rounded-[32px] p-8 md:p-12 relative overflow-hidden flex flex-col justify-between min-h-[450px] md:min-h-[550px]">
        <div className="relative z-10">
          <p className="text-gray-500 text-sm md:text-base lg:text-lg leading-relaxed max-w-[320px] md:max-w-md">
            Мы предлагаем полный набор инструментов для интеграции цифровых валют: 
            платёжные шлюзы, аналитику и клиентские решения, которые упрощают 
            криптоплатежи для бизнеса любого масштаба.
          </p>
        </div>

        <div className="mt-6 flex justify-center items-center relative h-full">
          <div className="relative w-full max-w-[280px] md:max-w-[400px] aspect-square">
            <Image 
              src="/image/Terminal.png" 
              alt="Hero Image" 
              fill
              className="object-contain"
              priority 
            />
          </div>
        </div>

        <span className="absolute bottom-6 left-8 md:bottom-10 md:left-12 text-5xl md:text-8xl font-black text-black/5 pointer-events-none">
          01
        </span>
      </div>
    </section>
  );
};