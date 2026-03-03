import { Building2, User2, CheckCircle2 } from "lucide-react";

export default function Step1AccountType({ selected, onSelect }: any) {
  const types = [
    { id: 'company', title: 'Компания', desc: 'Подходит, если у вас зарегистрирована компания.', icon: <Building2 size={40} /> },
    { id: 'individual', title: 'Индивидуальный', desc: 'Подходит для фрилансеров и индивидуальных предпринимателей.', icon: <User2 size={40} /> }
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <h1 className="text-2xl font-bold text-center mb-10">Выберите тип учетной записи</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {types.map((t) => (
          <div 
            key={t.id}
            onClick={() => onSelect(t.id)}
            className={`relative flex flex-col items-center p-10 rounded-[32px] cursor-pointer transition-all border-2 ${
              selected === t.id ? "border-[#BC1818] bg-white shadow-lg" : "border-gray-100 bg-gray-50 hover:border-red-100"
            }`}
          >
            <div className={`p-4 rounded-2xl mb-6 ${selected === t.id ? "bg-red-50 text-[#BC1818]" : "bg-white text-gray-400"}`}>
              {t.icon}
            </div>
            <h3 className="text-lg font-bold mb-2">{t.title}</h3>
            <p className="text-gray-400 text-sm text-center leading-relaxed">{t.desc}</p>
            {selected === t.id && <CheckCircle2 className="absolute top-4 right-4 text-[#BC1818]" size={24} />}
          </div>
        ))}
      </div>
    </div>
  );
}