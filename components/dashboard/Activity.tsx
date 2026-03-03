import {  SelectField } from "@/components/dashboard/FormElements";

export default function Step3Activity() {
  return (
    <div className="animate-in slide-in-from-right-4 duration-500 space-y-8">
      <h1 className="text-2xl font-bold">Деятельность компании</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SelectField label="Основной сектор/промышленность" options={["Выберите сектор"]} />
        <SelectField label="Чистый оборот, последние 12 месяцев (EUR)" options={["Выберите оборот"]} />
      </div>
      <div className="space-y-2">
        <label className="text-xs font-bold text-gray-500">Краткое описание основной деятельности</label>
        <textarea className="w-full bg-[#F8F9FA] border border-gray-100 p-4 rounded-xl h-32 outline-none focus:border-red-200" placeholder="Краткое описание" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SelectField label="Ожидаемый ежемесячный объем транзакций" options={["Выберите объем"]} />
        <SelectField label="Количество сотрудников" options={["Выберите количество"]} />
      </div>
    </div>
  );
}