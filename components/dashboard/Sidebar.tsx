"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, CreditCard, Send, FileText, 
  MapPin, Settings, LifeBuoy, Menu, X, ChevronDown 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { name: "Панель управления", icon: <LayoutDashboard size={20} />, href: "/dashboard" },
  { name: "Счета", icon: <CreditCard size={20} />, href: "/accounts" },
  { name: "Платежи", icon: <Send size={20} />, href: "/payments" },
  { 
    name: "Счета-фактуры", 
    icon: <FileText size={20} />, 
    href: "/invoices",
    isAccordion: true,
    subMenu: [
      { name: "Список", href: "/invoices/list" },
      { name: "Добавить новый", href: "/invoices/new" },
      { name: "Клиенты", href: "/invoices/clients" },
    ]
  },
  { name: "Точки продаж", icon: <MapPin size={20} />, href: "/pos" },
  { name: "Настройки", icon: <Settings size={20} />, href: "/settings" },
  { name: "Поддержка", icon: <LifeBuoy size={20} />, href: "/helps" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  useEffect(() => {
    if (pathname.includes("/invoices")) {
      setOpenAccordion("Счета-фактуры");
    }
  }, [pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const activeClass = "bg-gradient-to-r from-[#EF4444] to-[#FF8E8E] text-white shadow-md shadow-red-200";
  const inactiveClass = "text-gray-500 hover:bg-gray-50 hover:text-gray-900";

  return (
    <>
      {!isOpen && (
        <button 
          onClick={toggleMenu}
          className="lg:hidden fixed top-4 left-4 z-[70] p-2 bg-[#BC1818] text-white rounded-xl shadow-lg"
        >
          <Menu size={24} />
        </button>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleMenu}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[80] lg:hidden"
          />
        )}
      </AnimatePresence>

      <aside className={`
        fixed inset-y-0 left-0 z-[90] w-[280px] bg-white border-r border-gray-100 flex flex-col transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:static lg:h-screen lg:sticky lg:top-0 lg:z-0
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}>
        
        <div className="p-6 flex justify-between items-center">
          <div className="text-2xl font-black text-[#BC1818] tracking-tighter italic uppercase">
            Neo Pay
          </div>
          <button onClick={toggleMenu} className="lg:hidden p-2 text-gray-400">
            <X size={24} />
          </button>
        </div>
        
        <nav className="flex-1 px-4 space-y-1 overflow-y-auto custom-scrollbar">
          {menuItems.map((item) => {
            const isSubMenuActive = item.subMenu?.some(sub => pathname === sub.href);
            const isActive = pathname === item.href || isSubMenuActive;
            const isAccOpen = openAccordion === item.name;

            if (item.isAccordion) {
              return (
                <div key={item.name} className="flex flex-col">
                  <button
                    onClick={() => setOpenAccordion(isAccOpen ? null : item.name)}
                    className={`flex items-center justify-between gap-3 px-4 py-3 rounded-xl transition-all ${
                      isActive ? activeClass : inactiveClass
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {item.icon}
                      <span className="text-sm font-medium">{item.name}</span>
                    </div>
                    <ChevronDown size={16} className={`transition-transform duration-300 ${isAccOpen ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {isAccOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden flex flex-col mt-1 gap-1"
                      >
                        {item.subMenu?.map((sub) => {
                          const isCurrentSub = pathname === sub.href;
                          return (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              onClick={() => setIsOpen(false)}
                              className={`flex items-center py-2.5 px-10 rounded-xl text-[13px] transition-all ${
                                isCurrentSub 
                                  ? "bg-[#FFEBEB] text-[#000000] font-bold" 
                                  : "text-gray-400 hover:text-gray-900"
                              }`}
                            >
                              {sub.name}
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)} 
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium ${
                  isActive ? activeClass : inactiveClass
                }`}
              >
                {item.icon}
                <span className="text-sm">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-6 border-t border-gray-50 mt-auto">
           <div className="text-gray-400 text-[10px] font-medium leading-tight opacity-70 italic">
              © 2026 NEO PAY. <br />Все права защищены.
           </div>
        </div>
      </aside>
    </>
  );
}