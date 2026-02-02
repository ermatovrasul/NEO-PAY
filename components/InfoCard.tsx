import Image from "next/image";

export const InfoCards = () => {
  return (
    <section className="px-4 md:px-12 py-10 flex flex-col gap-6 md:gap-12">
      <div className="bg-[#F8F9FB] rounded-[32px] md:rounded-[48px] p-6 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 overflow-hidden">
        <div className="w-full lg:flex-1 flex justify-center lg:justify-start order-2 lg:order-1">
          <div className="relative w-full max-w-[400px] md:max-w-[480px] aspect-square md:aspect-auto">
            <span className="absolute top-4 left-4 md:top-10 md:left-10 z-10 bg-white/90 backdrop-blur-sm text-[#E34234] text-[10px] md:text-[12px] font-bold px-3 py-1 rounded-full border border-red-500/10 shadow-sm">
              криптовалютный терминал
            </span>
            <Image 
              src="/image/image 178.png" 
              alt="Info Card Image" 
              width={480} 
              height={450} 
              className="object-contain w-full h-auto"
              priority
            />
          </div>
        </div>
        <div className="w-full lg:flex-1 flex flex-col items-center lg:items-end text-center lg:text-right order-1 lg:order-2">
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 text-[#1A1A1A] leading-[1.1]">
            Самый быстрый <br className="hidden md:block" /> криптоплатежный терминал
          </h3>
          <p className="text-gray-500 text-sm md:text-lg max-w-[450px] leading-relaxed">
            Мы предлагаем полный набор инструментов для интеграции цифровых валют: 
            платёжные шлюзы, аналитику и клиентские решения.
          </p>
          <div className="mt-8 md:mt-10 w-full lg:w-auto">
            <button className="w-full lg:w-auto border border-gray-200 bg-white text-[#1A1A1A] px-8 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all active:scale-95 shadow-sm">
              подробнее
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#F8F9FB] rounded-[32px] md:rounded-[48px] p-6 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 overflow-hidden">
        <div className="w-full lg:flex-1 flex justify-center lg:justify-start order-2 lg:order-1">
          <div className="relative w-full max-w-[400px] md:max-w-[480px]">
            <span className="absolute top-4 left-4 md:top-10 md:left-10 z-10 bg-white/90 backdrop-blur-sm text-gray-600 text-[10px] md:text-[12px] font-bold px-3 py-1 rounded-full border border-gray-200 shadow-sm">
              мобильное приложение
            </span>
            <Image 
              src="/image/Rectangle 2850.png" 
              alt="Mobile App" 
              width={480} 
              height={450} 
              className="object-contain w-full h-auto"
            />
          </div>
        </div>

        <div className="w-full lg:flex-1 flex flex-col items-center lg:items-end text-center lg:text-right order-1 lg:order-2">
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 text-[#1A1A1A] leading-[1.1]">
            Скачайте приложение <br className="hidden md:block" /> и принимайте платежи
          </h3>
          <p className="text-gray-500 text-sm md:text-lg max-w-[450px] leading-relaxed">
            Скачайте простое и интуитивно понятное мобильное приложение, специально разработанное для вашего удобства.
          </p>
          <div className="mt-8 md:mt-10 w-full lg:w-auto">
            <button className="w-full lg:w-auto border border-gray-200 bg-white text-[#1A1A1A] px-8 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all active:scale-95 shadow-sm">
              Скачать приложение
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};