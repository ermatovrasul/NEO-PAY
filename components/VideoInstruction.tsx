"use client";

import { useState } from "react";
import Image from "next/image";

export const VideoInstruction = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="px-6 md:px-12 py-16">
      
      <div className="bg-[#F7F7F7] rounded-[48px] p-8 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
        
        <div className="flex flex-col flex-[1] text-center md:text-left">
          <div className="mb-8 md:mb-12"> {/* Бул жерде баш сөз менен параграфтын ортосундагы отступ */}
            <h4 className="text-gray-400 text-[14px] md:text-[16px] font-medium tracking-widest uppercase mb-3">
              Легко и безопасно!
            </h4>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] leading-[1.15]">
              Сделайте все по <br className="hidden md:block" /> инструкции
            </h2>
          </div>

          {/* Астынкы параграф */}
          <p className="text-gray-500 text-base md:text-xl max-w-[380px] leading-relaxed mx-auto md:mx-0">
            Посмотрите это видео и вам будет все понятно.
          </p>
        </div>

        <div className="flex-[1.2] relative w-full group">
          <div className="relative rounded-[32px] md:rounded-[40px] overflow-hidden bg-black aspect-video flex items-center justify-center shadow-sm">
            
            {!isPlaying ? (
              <>
                <Image 
                  src="/image/video-preview.png" 
                  alt="Video Preview"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <button 
                  onClick={() => setIsPlaying(true)}
                  className="absolute z-10 w-16 h-16 md:w-24 md:h-24 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/40 hover:bg-[#E34234] hover:border-[#E34234] transition-all duration-300 group-active:scale-95"
                >
                  <div className="w-0 h-0 border-t-[10px] md:border-t-[15px] border-t-transparent border-l-[18px] md:border-l-[25px] border-l-white border-b-[10px] md:border-b-[15px] border-b-transparent ml-2"></div>
                </button>
              </>
            ) : (
              <iframe
                className="max-w-[748px] h-[563px]"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1" 
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>          

          <div className="absolute -bottom-10 -right-10 w-40 h-40 z-[-1] opacity-10">
             <Image src="/image/image 178.png" alt="decoration" width={160} height={160} />
          </div>
        </div>

      </div>
    </section>
  );
};