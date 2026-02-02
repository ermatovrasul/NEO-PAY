import Image from "next/image";

const cryptoRates = [
  { name: "AQUSTO/USDT", price: "0,00007504", change: "+110,01%", color: "text-green-500", image: '/icon/Ellipse 69.png' },
  { name: "THQ/USDT", price: "0,007504", change: "+34,18%", color: "text-green-500", image: '/icon/Ellipse 69 (1).png' },
  { name: "NRABBIT/USDT", price: "0,00007504", change: "+29,01%", color: "text-green-500", image: '/icon/Ellipse 69 (2).png' },
];

export const CryptoControl = () => {
  return (
    <section className="px-6 md:px-12 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        
        <div className="bg-[#F7F7F7] rounded-[40px] p-10 md:p-14 flex flex-col justify-between border border-gray-50">
          <div className="flex  mb-10"> 
             <Image 
              src="/icon/Ellipse 65.png" 
              alt="Apple Logo" 
              width={156} 
              height={156}
              className="z-10"
            />
            <Image 
              src="/icon/Ellipse 65 (1).png" 
              alt="Apple Logo" 
              width={156} 
              height={156}
              className="z-10"
            />
            <Image 
              src="/icon/Ellipse 65 (2).png" 
              alt="Apple Logo" 
              width={156} 
              height={156}
              className="z-10"
            />
            <Image 
              src="/icon/Ellipse 65 (3).png" 
              alt="Apple Logo" 
              width={156} 
              height={156}
              className="z-10"
            />
          </div>
          
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-[#1A1A1A] leading-tight ">
              Скачайте приложение и принимайте платежи
            </h3>
            <p className="text-gray-400 text-base leading-relaxed max-w-[400px]">
              Скачайте простое и интуитивно понятное мобильное приложение специально разработанный для вашего удобства.
            </p>
          </div>
        </div>

        <div className="bg-[#F7F7F7] rounded-[40px] p-10 md:p-14 border border-gray-50">
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-[#1A1A1A]">Вы контролируете свои деньги</h3>
            <p className="text-gray-400 text-base mt-3">
              Выводите средства в криптовалюте или в фиате в любое время
            </p>
          </div>

          <div className="space-y-8">
            {cryptoRates.map((item, index) => (
              <div key={index} className="flex items-center justify-between group cursor-default">
                <div className="flex items-center gap-4">
                  <div className="relative w-10 h-10">
                    <Image 
                      src={item.image} 
                      alt={item.name} 
                      fill 
                      className="object-contain"
                    />
                  </div>
                  <span className="font-bold text-[15px] text-[#1A1A1A] tracking-tight">{item.name}</span>
                </div>
                <div className="text-right">
                  <div className="font-extrabold text-[15px] text-[#1A1A1A]">{item.price}</div>
                  <div className={`text-[13px] font-bold mt-1 ${item.color}`}>{item.change}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};