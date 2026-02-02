export const Footer = () => {
  const footerSections = [
    {
      title: "О нас",
      links: [
        "О NEO PAY",
        "Почему NEO?",
        "Доказательство доверия",
        "Верификация NEO PAY",
        "Центр прозрачности NEO PAY",
        "Сообщество NEO PAY",
        "Карта событий NEO PAY",
        "NEO PAY Ventures",
        "Фонд NEO PAY",
        "Свяжитесь с нами",
      ],
    },
    {
      title: "Продукты",
      links: [
        "0 комиссии NEO PAY",
        "Спот",
        "Фьючерсы",
        "Бот сеточной торговли на фьючерсах",
        "Фьючерсный прогноз",
        "Фьючерсы на акции",
        "DEX+",
        "P2P",
        "Конвертировать",
        "Премаркет",
        "Копи-трейдинг",
        "Демо-трейдинг",
      ],
    },
    {
      title: "Партнеры",
      links: [
        "О NEO PAY",
        "Почему NEO PAY?",
        "Доказательство доверия",
        "Верификация NEO PAY",
        "Центр прозрачности NEO PAY",
        "Сообщество NEO PAY",
        "Карта событий NEO PAY",
        "NEO PAY Ventures",
        "Фонд NEO PAY",
        "Свяжитесь с нами",
      ],
    },
    {
      title: "Правовые вопросы и соответствие требованиям",
      links: [
        "О NEO PAY",
        "Почему NEO PAY?",
        "Доказательство доверия",
        "Верификация NEO PAY",
        "Центр прозрачности NEO PAY",
        "Сообщество NEO PAY",
        "Карта событий NEO PAY",
        "NEO PAY Ventures",
        "Фонд NEO PAY",
        "Свяжитесь с нами",
      ],
    },
  ];

  return (
    <footer className="px-6 md:px-12 py-16 border-t border-gray-100 bg-white">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
        {footerSections.map((section) => (
          <div key={section.title} className="flex flex-col">
            <h4 className="font-bold text-[#1A1A1A] text-sm md:text-base mb-2 min-h-[40px]">
              {section.title}
            </h4>
            <ul className="flex flex-col gap-1">
              {section.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-[#E34234] text-[13px] md:text-sm transition-colors duration-200 leading-snug inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-20 pt-8 border-t border-gray-100">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
             <p className="text-gray-400 text-sm font-medium">
               © 2026 NEO PAY. Все права защищены.
             </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-[13px]">
            <a href="#" className="hover:text-[#1A1A1A] transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-[#1A1A1A] transition-colors">Условия пользования</a>
            <a href="#" className="hover:text-[#1A1A1A] transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};