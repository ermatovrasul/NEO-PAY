"use client";
import React, { useState, useMemo } from 'react';
import { Search, ChevronRight, X } from 'lucide-react';
import { articles, Article } from '@/type/data';
import Image from 'next/image';

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const filteredArticles = useMemo(() => {
    if (!searchQuery) return [];
    return articles.filter(a => 
      a.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const handleSelect = (article: Article) => {
    setSelectedArticle(article);
    setSearchQuery(article.title);
    setShowDropdown(false);
  };

  return (
    /* БУЛ ЖЕРГЕ bg-[#FBFBFB] ЖАНА min-h-screen КОШТУК */
    <div className="bg-[#FBFBFB] min-h-screen px-4 md:px-12 p-6 text-[#1A1A1A]">
      <div className="bg-[#BC1818] rounded-2xl p-12 text-center text-white mb-8 relative">
        <h1 className="text-3xl font-bold mb-6">Найдите ответы на свои вопросы</h1>
        
        <div className="relative max-w-xl mx-auto">
          <div className="flex items-center bg-white rounded-lg px-4 py-2 shadow-lg">
            <Search className="text-gray-400 w-5 h-5" />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowDropdown(true);
              }}
              placeholder="Задайте вопрос"
              className="w-full p-2 outline-none text-black"
            />
            {searchQuery && (
              <X className="text-gray-400 cursor-pointer w-5 h-5" onClick={() => setSearchQuery("")} />
            )}
          </div>

          {showDropdown && filteredArticles.length > 0 && (
            <div className="absolute top-full left-0 right-0 bg-white mt-1 rounded-lg shadow-2xl z-50 overflow-hidden border border-gray-100">
              {filteredArticles.map((art) => (
                <div 
                  key={art.id}
                  onClick={() => handleSelect(art)}
                  className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 cursor-pointer border-b last:border-0 transition-colors"
                >
                  <span className="text-gray-700 text-sm text-left">{art.title}</span>
                  <ChevronRight className="w-4 h-4 text-red-500" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {selectedArticle ? (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h2 className="text-2xl font-bold mb-4">{selectedArticle.title}</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">{selectedArticle.content}</p>
          
          {selectedArticle.steps?.map((step, idx) => (
            <div key={idx} className="mb-6">
              <h3 className="font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}

          <div className="relative rounded-xl max-w-2xl overflow-hidden shadow-xl cursor-pointer mb-8">
            <Image 
              src='/image/Rectangle 2855.png'
              alt="Video Preview"
              width={800}
              height={500}  
              className="w-full"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
               <div className="bg-white/90 p-4 rounded-full shadow-lg">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[15px] border-l-red-600 border-b-[10px] border-b-transparent ml-1"></div>
               </div>
            </div>
            <div className="absolute bottom-4 left-4 text-white font-bold text-xl uppercase drop-shadow-md">
              Как снимать видео инструкцию к товару
            </div>
          </div>
          
          <button 
            onClick={() => setSelectedArticle(null)}
            className="text-red-600 font-bold hover:underline"
          >
            ← Назад к списку вопросов
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {articles.map(art => (
            <div 
              key={art.id}
              onClick={() => setSelectedArticle(art)}
              className="flex items-center justify-between p-4 bg-white rounded-lg cursor-pointer hover:bg-gray-50 border border-gray-100 hover:border-red-100 transition-all shadow-sm"
            >
              <div className="flex items-center gap-3 text-gray-800">
                {art.title}
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}