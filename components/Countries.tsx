import Image from 'next/image';

const countries = [
  { name: 'Великобритания', flag: '/image/Frame 1261155696.png' },
  { name: 'Испания', flag: '/image/Frame 1261155696 (1).png' },
  { name: 'Кыргызстан', flag: '/image/Frame 1261155696 (2).png' },
  { name: 'Германия', flag: '/image/Frame 1261155696 (3).png' },
  { name: 'Индия', flag: '/image/Frame 1261155696 (4).png' },
];

export const Countries = () => {
  return (
    <section className="px-6 md:px-12 lg:px-12 py-12 md:py-24 bg-white">
      <div className="max-w-4xl mb-10 md:mb-16">
        <h2 className="text-2xl md:text-5xl lg:text-4xl font-bold mb-4 text-[#1A1A1A] leading-tight">
          Наш терминал работает <span className="text-[#E34234]">10+</span> странах
        </h2>
        <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl">
          Мы предлагаем полный набор инструментов для интеграции цифровых валют: 
          платёжные шлюзы, аналитику и клиентские решения.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
        {countries.map((c) => (
          <div 
            key={c.name} 
            className="bg-[#F8F9FB] p-6 md:p-8 rounded-[32px] flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-2 group cursor-default"
          >
            <div className="relative w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 transition-transform duration-500 group-hover:scale-110">
              <Image 
                src={c.flag} 
                alt={c.name} 
                fill 
                className="object-contain"
                sizes="(max-width: 768px) 96px, 144px"
              />
            </div>
            
            <span className="font-bold text-[#1A1A1A] text-lg md:text-xl text-center">
              {c.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};