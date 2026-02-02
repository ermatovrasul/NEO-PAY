import Image from "next/image";

const cryptoRates = [
  { name: "AQUSTO/USDT", price: "0,00007504", change: "+110,01%", color: "text-green-500", image: '/icon/Ellipse 69.png' },
  { name: "THQ/USDT", price: "0,007504", change: "+34,18%", color: "text-green-500", image: '/icon/Ellipse 69 (1).png' },
  { name: "NRABBIT/USDT", price: "0,00007504", change: "+29,01%", color: "text-green-500", image: '/icon/Ellipse 69 (2).png' },
];

export const CryptoControl = () => {
  return (
    <section className="px-4 md:px-12 py-8 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
        <div className="bg-[#F7F7F7] rounded-[32px] md:rounded-[40px] p-8 md:p-14 flex flex-col gap-8 border border-gray-50 min-h-[400px]">
          <div className="flex -space-x-4 mb-8 md:mb-0"> 
            {[65, "65 (1)", "65 (2)", "65 (3)"].map((ext, i) => (
              <div key={i} className="relative w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 border-4 border-[#F7F7F7] rounded-full overflow-hidden">
                <Image 
                  src={`/icon/Ellipse ${ext}.png`} 
                  alt="App Icon" 
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl md:text-3xl font-extrabold text-[#1A1A1A] leading-tight">
              Скачайте приложение и принимайте платежи
            </h3>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-[420px]">
              Скачайте простое и интуитивно понятное мобильное приложение, специально разработанное для вашего удобства.
            </p>
          </div>
        </div>

        <div className="bg-[#F7F7F7] rounded-[32px] md:rounded-[40px] p-8 md:p-14 border border-gray-50 flex flex-col justify-between">
          <div className="mb-8 md:mb-12">
            <h3 className="text-xl md:text-3xl font-extrabold text-[#1A1A1A] leading-tight">
              Вы контролируете свои деньги
            </h3>
            <p className="text-gray-500 text-sm md:text-base mt-3">
              Выводите средства в криптовалюте или в фиате в любое время
            </p>
          </div>

          <div className="space-y-6 md:space-y-8">
            {cryptoRates.map((item, index) => (
              <div key={index} className="flex items-center justify-between group cursor-default border-b border-gray-200/50 pb-4 last:border-0 last:pb-0">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="relative w-10 h-10 md:w-12 md:h-12 bg-white rounded-full p-2 shadow-sm">
                    <Image 
                      src={item.image} 
                      alt={item.name} 
                      fill 
                      className="object-contain p-1.5"
                    />
                  </div>
                  <span className="font-bold text-sm md:text-[16px] text-[#1A1A1A] tracking-tight">
                    {item.name}
                  </span>
                </div>
                <div className="text-right">
                  <div className="font-black text-sm md:text-[16px] text-[#1A1A1A]">{item.price}</div>
                  <div className={`text-[12px] md:text-[13px] font-bold mt-0.5 ${item.color}`}>
                    {item.change}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};