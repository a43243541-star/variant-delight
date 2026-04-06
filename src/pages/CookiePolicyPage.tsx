import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CookiePolicyPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 pt-32 pb-20 max-w-3xl">
        <h1 className="font-display text-3xl md:text-4xl font-extrabold text-deep mb-8">
          Уведомление об использовании cookies
        </h1>

        <div className="prose prose-lg max-w-none text-foreground/80 space-y-6">
          <h2 className="font-display text-xl font-bold text-deep">1. Что такое cookies?</h2>
          <p>
            Cookies (куки) — это небольшие текстовые файлы, которые сохраняются на вашем устройстве
            (компьютере, планшете, смартфоне) при посещении сайта. Они позволяют сайту запоминать
            информацию о вашем визите, что делает последующие посещения более удобными.
          </p>

          <h2 className="font-display text-xl font-bold text-deep">2. Какие cookies мы используем</h2>
          <p>На нашем сайте используются следующие типы cookies:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Необходимые cookies</strong> — обеспечивают базовую функциональность сайта
              (навигация, доступ к защищённым разделам). Без них сайт не может работать корректно.
            </li>
            <li>
              <strong>Аналитические cookies</strong> — помогают нам понять, как пользователи
              взаимодействуют с сайтом, собирая анонимную статистику посещений.
            </li>
            <li>
              <strong>Функциональные cookies</strong> — запоминают ваши предпочтения (например, язык
              или регион), чтобы обеспечить персонализированный опыт.
            </li>
          </ul>

          <h2 className="font-display text-xl font-bold text-deep">3. Цели использования</h2>
          <p>Мы используем cookies для:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Обеспечения корректной работы сайта;</li>
            <li>Анализа посещаемости и улучшения функциональности;</li>
            <li>Запоминания пользовательских настроек;</li>
            <li>Обеспечения безопасности.</li>
          </ul>

          <h2 className="font-display text-xl font-bold text-deep">4. Управление cookies</h2>
          <p>
            Вы можете управлять cookies через настройки вашего браузера. Большинство браузеров
            позволяют:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Просматривать установленные cookies;</li>
            <li>Удалять отдельные или все cookies;</li>
            <li>Блокировать cookies от определённых сайтов;</li>
            <li>Блокировать установку всех cookies;</li>
            <li>Получать уведомление перед установкой cookie.</li>
          </ul>
          <p>
            Обратите внимание: отключение cookies может повлиять на работу отдельных функций сайта.
          </p>

          <h2 className="font-display text-xl font-bold text-deep">5. Срок хранения</h2>
          <p>
            Cookies хранятся на вашем устройстве в течение различных периодов времени в зависимости
            от их типа. Сессионные cookies удаляются после закрытия браузера. Постоянные cookies
            сохраняются в течение определённого периода или до момента их ручного удаления.
          </p>

          <h2 className="font-display text-xl font-bold text-deep">6. Согласие</h2>
          <p>
            Продолжая использование нашего сайта, вы соглашаетесь с использованием cookies в
            соответствии с настоящим уведомлением. Вы можете отозвать своё согласие в любое время,
            изменив настройки вашего браузера.
          </p>

          <h2 className="font-display text-xl font-bold text-deep">7. Контакты</h2>
          <p>
            Если у вас есть вопросы относительно использования cookies, пожалуйста, свяжитесь
            с нами по адресу: г. Саратов, ул. Чернышевского, 104.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicyPage;
