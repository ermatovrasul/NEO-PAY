"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 
import { Menu, X } from 'lucide-react'; 

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Продукты', href: '/' },
    { name: 'Компания', href: '/company' },
    { name: 'Помощь', href: '/#' },
    { name: 'Цены', href: '/#' },
  ];

  return (
    <>
      <header className="flex justify-between items-center py-5 px-6 md:px-12 bg-white sticky top-0 z-50 border-b border-gray-50">
        <div className="text-2xl font-black text-[#E34234] tracking-tighter">NEO PAY</div>
        
        <nav className="hidden lg:flex gap-8 text-[14px] font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            
            return (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`transition-all duration-300 relative pb-1 ${
                  isActive 
                    ? 'text-[#E34234] font-bold'
                    : 'text-gray-500 hover:text-[#E34234]' 
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-3">
            <Link href='/login'><button className="border border-gray-300 px-5 py-2 rounded-lg text-[14px] font-semibold text-gray-600 hover:bg-gray-100 transition-colors">
              Войти
            </button></Link>
            <Link href='/register'><button className="bg-[#E34234] text-white px-5 py-2 rounded-lg text-[14px] font-semibold hover:bg-[#c9352a] transition-colors">
              Регистрация
            </button></Link>
          </div>

          <button className="lg:hidden p-2 text-gray-600" onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      <div 
        className={`fixed inset-0 z-[60] bg-black/20 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={toggleMenu}
      />

      <aside className={`fixed top-0 right-0 h-full w-[280px] bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-end mb-8">
            <button onClick={toggleMenu} className="p-2 text-gray-500">
              <X size={28} />
            </button>
          </div>

          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              
              return (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className={`text-xl font-semibold transition-colors ${isActive ? 'text-[#E34234]' : 'text-gray-800 hover:text-[#E34234]'}`}
                  onClick={toggleMenu}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto flex flex-col gap-4">
            <Link href='/login'>
              <button className="w-full border border-gray-300 px-5 py-3 rounded-xl text-[16px] font-semibold text-gray-600 hover:bg-gray-100 transition-colors">
                Войти
              </button>
            </Link>
            <Link href='/register'>
              <button className="w-full bg-[#E34234] text-white py-3 rounded-xl font-bold">Регистрация</button>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};