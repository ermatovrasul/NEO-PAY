import { InputField, SelectField, DateField } from "./FormElements";

export default function Representative() {
  return (
    <div className="animate-in slide-in-from-right-4 duration-500">
      <h1 className="text-2xl font-bold mb-8">Уполномоченный представитель</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField label="Имя" placeholder="Введите имя" />
        <InputField label="Фамилия" placeholder="Введите фамилию" />
        <DateField label="Дата рождения" />
        <SelectField label="Гражданство" options={["Кыргызстан", "Другое"]} />
        <InputField label="Должность" placeholder="Например: Директор" />
        <InputField label="Электронная почта" placeholder="email@example.com" />
      </div>
    </div>
  );
}