import Image from "next/image";

export const BecomePart = () => {
  return (
    <section className="px-6 md:px-12 py-16 md:py-24 bg-white flex flex-col items-center text-center overflow-hidden">
      <div className="mb-10 md:mb-16 space-y-2 md:space-y-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] leading-tight">
          Станьте частью
        </h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#E34234] leading-tight">
          NEO PAY
        </h3>
        <div className="pt-4 md:pt-6">
          <button className="group flex items-center gap-2 border border-gray-300 px-6 py-3 md:px-8 md:py-3 rounded-xl md:rounded-2xl font-medium hover:bg-gray-50 transition-all mx-auto shadow-sm active:scale-95">
            Начать работу
            <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-lg">
              ↗
            </span>
          </button>
        </div>
      </div>

      <div className="relative w-full max-w-[320px] sm:max-w-[450px] md:max-w-[700px] aspect-square flex items-center justify-center">
        <div className="absolute inset-0 bg-red-500/10 blur-[60px] md:blur-[100px] rounded-full z-0" />
        
        <div className="relative w-full h-full animate-[spin_60s_linear_infinite] opacity-90 z-10">
          <Image 
            src="/image/image 180.png" 
            alt="World Map"
            fill
            className="object-contain scale-110 md:scale-125"
            priority
          />
        </div>
      </div>
    </section>
  );
};