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
    <section className="px-6 md:px-12 py-20  bg-white">
      <h2 className="text-4xl font-bold mb-4 text-[#1A1A1A]">
        Наш терминал работает 10+ странах
      </h2>
      <p className="text-gray-400 mb-12 max-w-3xl text-[16px] leading-relaxed">
        Мы предлагаем полный набор инструментов для интеграции цифровых валют: 
        платёжные шлюзы, аналитику и клиентские решения, которые упрощают 
        криптоплатежи для бизнеса любого масштаба.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {countries.map((c) => (
          <div 
            key={c.name} 
            className="bg-[#F8F9FB] p-8 rounded-[24px] flex flex-col  justify-center gap-4 transition-hover hover:shadow-md cursor-default"
          >
            <div className="relative w-[141px] h-[141px] mx-auto">
              <Image 
                src={c.flag} 
                alt={c.name} 
                fill 
                className="object-contain"
              />
            </div>
            <span className="font-semibold text-[#1A1A1A] text-xl text-center">
              {c.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};