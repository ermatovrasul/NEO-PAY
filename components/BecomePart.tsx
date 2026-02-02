import Image from "next/image";

export const BecomePart = () => {
  return (
    <section className="px-6 md:px-32 py-24 bg-white flex flex-col items-center text-center">
      <div className="mb-16 space-y-4">
        <h2 className="text-4xl md:text-6xl font-bold text-[#1A1A1A]">
          Станьте частью
        </h2>
        <h3 className="text-4xl md:text-6xl font-bold text-[#E34234]">
          NEO PAY
        </h3>
        <div className="pt-6">
          <button className="group flex items-center gap-2 border border-gray-300 px-8 py-3 rounded-2xl font-medium hover:bg-gray-50 transition-all mx-auto shadow-sm">
            Начать работу
            <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
              ↗
            </span>
          </button>
        </div>
      </div>

      <div className="relative w-full max-w-[700px] aspect-square flex items-center justify-center overflow-hidden">
        <div className="relative w-full h-full animate-slow-spin opacity-90">
          <Image 
            src="/image/image 180.png" 
            alt="World Map"
            fill
            className="object-contain scale-125"
          />
        </div>
        
        <div className="absolute inset-0 bg-radial-gradient from-red-500/10 to-transparent blur-3xl z-[-1] rounded-full" />
      </div>
    </section>
  );
};