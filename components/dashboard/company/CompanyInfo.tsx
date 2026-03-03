import { DateField, InputField, SelectField } from "@/components/dashboard/FormElements";
export default function Step2CompanyInfo() {
  return (
    <div className="animate-in slide-in-from-right-4 duration-500 space-y-8">
      <h1 className="text-2xl font-bold">Информация о компании</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField label="Название компании" placeholder="Название компании" />
        <SelectField label="Тип бизнеса" options={["Выберите тип"]} />
        <SelectField label="Страна регистрации" options={["Выберите страну"]} />
        <InputField label="Адрес регистрации" placeholder="Адрес регистрации" />
        <InputField label="Город" placeholder="Город" />
        <InputField label="Почтовый индекс" placeholder="Город" />
      </div>
      
      <div className="space-y-3">
        <p className="text-sm font-bold text-gray-700">Ваш главный офис находится в другой стране, чем там где зарегистрирован бизнес?</p>
        <div className="flex gap-4">
          <label className="flex items-center gap-2 text-sm"><input type="radio" name="office" className="accent-red-600" /> Да</label>
          <label className="flex items-center gap-2 text-sm"><input type="radio" name="office" className="accent-red-600" defaultChecked /> Нет</label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField label="Электронная почта компании" placeholder="Электронная почта компании" />
        <InputField label="Номер телефона" placeholder="+996" />
        <InputField label="Веб-сайт компании" placeholder="Веб-сайт компании" />
        <DateField label="Дата регистрации" />
      </div>
    </div>
  );
}