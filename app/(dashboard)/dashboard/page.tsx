"use client";

import { useState } from "react";
import { FileText, Globe, Briefcase, Users, Activity as ActivityIcon } from "lucide-react";
import AccountType from "@/components/dashboard/account/AccountType";
import CompanyInfo from "@/components/dashboard/company/CompanyInfo";
import Activity from "@/components/dashboard/Activity";
import Representative from "@/components/dashboard/Representative"; 
import FinalStep from "@/components/dashboard/FinalStep";

const STEPS = [
  { id: 1, label: "Тип счета", icon: <FileText size={18} /> },
  { id: 2, label: "Инфо о компании", icon: <Globe size={18} /> },
  { id: 3, label: "Деятельность", icon: <Briefcase size={18} /> },
  { id: 4, label: "Представитель", icon: <Users size={18} /> },
  { id: 5, label: "Активность", icon: <ActivityIcon size={18} /> },
];

export default function AccountRegistration() {
  const [currentStep, setCurrentStep] = useState(1);
  const [accountType, setAccountType] = useState("company");

  return (
    <div className=" mx-auto py-6 px-4">
      

      <div className="bg-white rounded-[32px] p-8 md:p-6 shadow-sm border border-gray-50 min-h-[500px] flex flex-col justify-between">
        <div className="grid grid-cols-5 gap-2 mb-10">
        {STEPS.map((step) => {
          const isActive = step.id <= currentStep;
          return (
            <div key={step.id} className="flex flex-col items-center gap-3 ">
              <div className="w-full flex items-center">
              </div>
              <div className={`flex items-center border border-gray-100 p-3 px-4 rounded-[10px] gap-2 ${isActive ? "text-gray-900" : "text-gray-300"}`}>
                <span className={isActive ? "text-[#BC1818]" : ""}>{step.icon}</span>
                <span className="text-[10px]  font-black uppercase tracking-wider hidden lg:block">
                  {step.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
        <div className="w-full">
          {currentStep === 1 && <AccountType selected={accountType} onSelect={setAccountType} />}
          {currentStep === 2 && <CompanyInfo />}
          {currentStep === 3 && <Activity />}
          {currentStep === 4 && <Representative />}
          {currentStep === 5 && <FinalStep />}
        </div>

       <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-12 pt-8 border-t border-gray-100">
  <button 
    onClick={() => setCurrentStep(prev => prev + 1)}
    className="w-full md:w-auto order-1 md:order-2 px-10 py-4 rounded-2xl bg-[#BC1818] text-white font-bold hover:bg-red-700 shadow-lg shadow-red-200 transition-all active:scale-95 text-sm md:text-base"
  >
    {currentStep === 5 ? "Завершить" : "Следующий"}
  </button>

  <button 
    onClick={() => setCurrentStep(prev => prev - 1)}
    disabled={currentStep === 1}
    className="w-full md:w-auto order-2 md:order-1 px-10 py-4 rounded-2xl bg-gray-100 text-gray-500 font-bold hover:bg-gray-200 disabled:opacity-30 disabled:hover:bg-gray-100 transition-all text-sm md:text-base"
  >
    Предыдущий
  </button>
</div>
      </div>
    </div>
  );
}