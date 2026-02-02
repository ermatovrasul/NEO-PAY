"use client";

import { useState } from "react";
import Image from "next/image";

export const VideoInstruction = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="px-4 md:px-12 py-10 md:py-20">
      <div className="bg-[#F7F7F7] rounded-[32px] md:rounded-[60px] p-6 sm:p-10 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
        
        <div className="flex flex-col flex-1 text-center lg:text-left order-1">
          <div className="mb-6 md:mb-10"> 
            <h4 className="text-gray-400 text-[12px] md:text-[14px] font-bold tracking-[0.2em] uppercase mb-3 md:mb-5">
              Легко и безопасно!
            </h4>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1A1A1A] leading-[1.1]">
              Сделайте все по <br className="hidden lg:block" /> инструкции
            </h2>
          </div>
          <p className="text-gray-500 text-base md:text-xl max-w-[420px] leading-relaxed mx-auto lg:mx-0">
            Посмотрите это видео и вам будет все понятно. Мы подготовили краткий обзор.
          </p>
        </div>

        <div className="flex-[1.3] relative w-full order-2 group">
          <div className="relative rounded-[24px] md:rounded-[40px] overflow-hidden bg-black aspect-video flex items-center justify-center shadow-2xl">
            
            {!isPlaying ? (
              <>
                <Image 
                  src="/image/image 177.png" 
                  alt="Video Preview"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <button 
                  onClick={() => setIsPlaying(true)}
                  className="absolute z-10 w-16 h-16 md:w-24 md:h-24 bg-white/20 backdrop-blur-2xl rounded-full flex items-center justify-center border border-white/30 hover:bg-[#E34234] hover:border-[#E34234] transition-all duration-500 shadow-2xl group-active:scale-90"
                  aria-label="Play video"
                >
                  <div className="w-0 h-0 border-t-[10px] md:border-t-[15px] border-t-transparent border-l-[18px] md:border-l-[25px] border-l-white border-b-[10px] md:border-b-[15px] border-b-transparent ml-1.5 md:ml-2"></div>
                </button>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
              </>
            ) : (
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1" 
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>          

          <div className="hidden md:block absolute -bottom-8 -right-8 w-32 h-32 lg:w-48 lg:h-48 z-[-1] opacity-20">
             <Image src="/image/image 178.png" alt="decoration" width={200} height={200} className="object-contain" />
          </div>
        </div>

      </div>
    </section>
  );
};