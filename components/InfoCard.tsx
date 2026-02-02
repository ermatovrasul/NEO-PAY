import Image from "next/image";

export const InfoCards = () => {
  return (
    <section className="px-6 md:px-12 py-10 flex flex-col gap-8">
      <div className="bg-[#F8F9FB] rounded-[40px] p-10 md:p-4 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex-1 flex justify-start">
          <div className="relative">
            <span className="absolute top-10 max-w-[200px] left-10 bg-white/80 backdrop-blur-sm text-[#E34234] text-[12px] font-semibold px-3 py-1 rounded-full border border-red-100">
              криптовалютный терминал
            </span>
            <Image 
              src="/image/image 178.png" 
              alt="Info Card Image" 
              width={480} 
              height={450} 
              className="object-contain pt-8"
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col items-end text-right">
          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-[#1A1A1A] leading-tight">
            Самый быстрый <br /> криптоплатежный терминал
          </h3>
          <p className="text-gray-400 text-lg max-w-[400px] leading-relaxed">
            Мы предлагаем полный набор инструментов для интеграции цифровых валют: 
            платёжные шлюзы, аналитику и клиентские решения.
          </p>
          <div className="mt-10">
            <button className="border border-gray-200 bg-white text-gray-800 px-8 py-3 rounded-2xl font-medium hover:bg-gray-50 transition-colors shadow-sm">
              подробнее
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#F8F9FB] rounded-[40px] p-10 md:p-4 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex-1 flex justify-start">
           <div className="relative">
            <span className="absolute top-10 left-10 bg-white/80 max-w-[200px] backdrop-blur-sm text-gray-600 text-[12px] font-semibold px-3 py-1 rounded-full border border-gray-100">
              мобильное приложение
            </span>
            <Image 
              src="/image/Rectangle 2850.png" 
              alt="Mobile App" 
              width={480} 
              height={450} 
              className="object-contain pt-8"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-end text-right">
          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-[#1A1A1A] leading-tight">
            Скачайте приложение и <br /> принимайте платежи
          </h3>
          <p className="text-gray-400 text-lg max-w-[400px] leading-relaxed">
            Скачайте простой и интуитивно понятное мобильное приложение специально разработанный для вашего удобства.
          </p>
          <div className="mt-10">
            <button className="border border-gray-200 bg-white text-gray-800 px-8 py-3 rounded-2xl font-medium hover:bg-gray-50 transition-colors shadow-sm">
              Скачать мобильное приложение
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};