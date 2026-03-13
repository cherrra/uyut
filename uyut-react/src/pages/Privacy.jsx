// Privacy.jsx
import { useEffect } from "react";
import "../styles/privacy.css";

function Privacy() {
    // Анимация появления элементов при скролле
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("privacy-animate-in");
                    }
                });
            },
            { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
        );

        document.querySelectorAll(".privacy-animate").forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    // Данные для навигации по странице
    const sections = [
        { id: "general", title: "Общие положения" },
        { id: "collection", title: "Сбор персональных данных" },
        { id: "usage", title: "Использование данных" },
        { id: "protection", title: "Защита информации" },
        { id: "cookies", title: "Файлы cookie" },
        { id: "rights", title: "Права пользователей" },
        { id: "changes", title: "Изменения политики" },
        { id: "contacts", title: "Контакты" }
    ];

    return (
        <>
            {/* HERO SECTION */}
            <section className="privacy-hero">
                <div className="privacy-hero-content">
                    <span className="privacy-hero-tag">·  ДОКУМЕНТЫ  ·</span>
                    <h1 className="privacy-hero-title">
                        Политика <span className="privacy-hero-accent">конфиденциальности</span>
                    </h1>
                    <p className="privacy-hero-subtitle">
                        Как мы собираем, используем и защищаем ваши персональные данные
                    </p>
                    <div className="privacy-hero-date">
                        Последнее обновление: 15 марта 2024 года
                    </div>
                </div>
                <div className="privacy-hero-shape"></div>
                <div className="privacy-hero-decor">
                    <span className="decor-dot"></span>
                    <span className="decor-dot"></span>
                    <span className="decor-dot"></span>
                </div>
            </section>

            {/* CONTENT SECTION */}
            <section className="privacy-content">
                <div className="privacy-container">
                    {/* Боковая навигация */}
                    <div className="privacy-sidebar privacy-animate">
                        <div className="sidebar-sticky">
                            <h3 className="sidebar-title">Содержание</h3>
                            <ul className="sidebar-nav">
                                {sections.map((section) => (
                                    <li key={section.id}>
                                        <a href={`#${section.id}`} className="sidebar-link">
                                            <span className="link-dot"></span>
                                            {section.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <div className="sidebar-line"></div>
                            <div className="sidebar-note">
                                <p>Версия документа: 1.2</p>
                            </div>
                        </div>
                    </div>

                    {/* Основной контент */}
                    <div className="privacy-main">
                        <div className="privacy-intro privacy-animate">
                            <p className="intro-text">
                                Настоящая Политика конфиденциальности описывает, как интернет-магазин «Уют» (далее — «мы», «наш» или «Компания») собирает, использует и защищает информацию, которую вы предоставляете при использовании нашего сайта и услуг.
                            </p>
                            <p className="intro-text">
                                Используя наш сайт, вы соглашаетесь с условиями данной Политики конфиденциальности. Если вы не согласны с этими условиями, пожалуйста, не используйте наш сайт.
                            </p>
                        </div>

                        {/* Секция 1 */}
                        <div id="general" className="privacy-section privacy-animate">
                            <h2 className="section-title">
                                <span className="section-number">01</span>
                                1. Общие положения
                            </h2>
                            <div className="section-content">
                                <p className="section-text">
                                    1.1. Настоящая Политика конфиденциальности является официальным документом ООО «Уют» (ИНН 1234567890) и определяет порядок обработки и защиты информации о физических лицах, использующих сайт uyut-mebel.ru и его сервисы.
                                </p>
                                <p className="section-text">
                                    1.2. Отношения, связанные со сбором, хранением, распространением и защитой информации пользователей, регулируются настоящей Политикой и действующим законодательством Российской Федерации.
                                </p>
                                <p className="section-text">
                                    1.3. Администрация сайта не проверяет достоверность персональных данных, предоставляемых пользователями, и не осуществляет контроль за их дееспособностью. Однако исходит из того, что пользователь предоставляет достоверные и достаточные персональные данные.
                                </p>
                                <div className="section-highlight">
                                    <p>
                                        <span className="highlight-icon">📌</span>
                                        Политика распространяется на все данные, которые мы можем получить о вас во время использования сайта.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Секция 2 */}
                        <div id="collection" className="privacy-section privacy-animate">
                            <h2 className="section-title">
                                <span className="section-number">02</span>
                                2. Сбор персональных данных
                            </h2>
                            <div className="section-content">
                                <p className="section-text">
                                    2.1. Мы собираем только те данные, которые необходимы для выполнения ваших заказов и предоставления качественного сервиса.
                                </p>
                                
                                <h3 className="subsection-title">2.2. Какие данные мы собираем:</h3>
                                <ul className="section-list">
                                    <li>Имя и фамилия</li>
                                    <li>Контактный телефон</li>
                                    <li>Адрес электронной почты</li>
                                    <li>Адрес доставки</li>
                                    <li>История заказов</li>
                                </ul>

                                <h3 className="subsection-title">2.3. Как мы собираем данные:</h3>
                                <ul className="section-list">
                                    <li>При оформлении заказа на сайте</li>
                                    <li>При заполнении форм обратной связи</li>
                                    <li>При подписке на новостную рассылку</li>
                                    <li>При регистрации личного кабинета</li>
                                    <li>При обращении в службу поддержки</li>
                                </ul>

                                <div className="section-note">
                                    <p>
                                        Мы не собираем данные, которые не относятся к оказанию наших услуг, включая информацию о расовой или этнической принадлежности, политических взглядах, религиозных или философских убеждениях.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Секция 3 */}
                        <div id="usage" className="privacy-section privacy-animate">
                            <h2 className="section-title">
                                <span className="section-number">03</span>
                                3. Использование персональных данных
                            </h2>
                            <div className="section-content">
                                <p className="section-text">
                                    3.1. Ваши данные используются для:
                                </p>
                                <ul className="section-list">
                                    <li>Оформления и доставки заказов</li>
                                    <li>Связи с вами по вопросам заказа</li>
                                    <li>Информирования о статусе заказа</li>
                                    <li>Предоставления технической поддержки</li>
                                    <li>Улучшения качества обслуживания</li>
                                    <li>Проведения маркетинговых исследований (с вашего согласия)</li>
                                </ul>
                                <p className="section-text">
                                    3.2. Мы не передаем ваши персональные данные третьим лицам, за исключением:
                                </p>
                                <ul className="section-list">
                                    <li>Служб доставки (для выполнения заказа)</li>
                                    <li>Платежных систем (для обработки оплаты)</li>
                                    <li>Случаев, предусмотренных законодательством РФ</li>
                                </ul>
                            </div>
                        </div>

                        {/* Секция 4 */}
                        <div id="protection" className="privacy-section privacy-animate">
                            <h2 className="section-title">
                                <span className="section-number">04</span>
                                4. Защита информации
                            </h2>
                            <div className="section-content">
                                <p className="section-text">
                                    4.1. Мы принимаем все необходимые меры для защиты ваших персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения.
                                </p>
                                <div className="protection-grid">
                                    <div className="protection-item">
                                        <span className="protection-icon">🔒</span>
                                        <h4>SSL-шифрование</h4>
                                        <p>Все данные передаются по защищенному протоколу HTTPS</p>
                                    </div>
                                    <div className="protection-item">
                                        <span className="protection-icon">🛡️</span>
                                        <h4>Регулярные проверки</h4>
                                        <p>Мы проводим аудит систем безопасности</p>
                                    </div>
                                    <div className="protection-item">
                                        <span className="protection-icon">🔐</span>
                                        <h4>Ограниченный доступ</h4>
                                        <p>К данным имеют доступ только уполномоченные сотрудники</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Секция 5 */}
                        <div id="cookies" className="privacy-section privacy-animate">
                            <h2 className="section-title">
                                <span className="section-number">05</span>
                                5. Файлы cookie
                            </h2>
                            <div className="section-content">
                                <p className="section-text">
                                    5.1. Наш сайт использует файлы cookie для:
                                </p>
                                <ul className="section-list">
                                    <li>Сохранения ваших предпочтений</li>
                                    <li>Анализа поведения пользователей</li>
                                    <li>Улучшения работы сайта</li>
                                    <li>Запоминания товаров в корзине</li>
                                </ul>
                                <p className="section-text">
                                    5.2. Вы можете отключить cookie в настройках браузера, но это может повлиять на функциональность сайта.
                                </p>
                                <div className="cookies-banner">
                                    <p>
                                        Продолжая использовать наш сайт, вы соглашаетесь с использованием cookie-файлов.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Секция 6 */}
                        <div id="rights" className="privacy-section privacy-animate">
                            <h2 className="section-title">
                                <span className="section-number">06</span>
                                6. Права пользователей
                            </h2>
                            <div className="section-content">
                                <p className="section-text">
                                    6.1. Вы имеете право:
                                </p>
                                <ul className="section-list">
                                    <li>Получить информацию о хранящихся у нас данных</li>
                                    <li>Требовать исправления неточных данных</li>
                                    <li>Отозвать согласие на обработку данных</li>
                                    <li>Требовать удаления ваших данных</li>
                                    <li>Получить копию ваших данных в структурированном формате</li>
                                </ul>
                                <div className="section-highlight">
                                    <p>
                                        Для реализации ваших прав отправьте запрос на email: privacy@uyut-mebel.ru
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Секция 7 */}
                        <div id="changes" className="privacy-section privacy-animate">
                            <h2 className="section-title">
                                <span className="section-number">07</span>
                                7. Изменения политики конфиденциальности
                            </h2>
                            <div className="section-content">
                                <p className="section-text">
                                    7.1. Мы оставляем за собой право вносить изменения в настоящую Политику конфиденциальности.
                                </p>
                                <p className="section-text">
                                    7.2. Новая версия Политики вступает в силу с момента ее размещения на сайте, если иное не предусмотрено новой версией.
                                </p>
                                <p className="section-text">
                                    7.3. Актуальная версия Политики всегда доступна по адресу: uyut-mebel.ru/privacy
                                </p>
                            </div>
                        </div>

                        {/* Секция 8 */}
                        <div id="contacts" className="privacy-section privacy-animate">
                            <h2 className="section-title">
                                <span className="section-number">08</span>
                                8. Контактная информация
                            </h2>
                            <div className="section-content">
                                <p className="section-text">
                                    По всем вопросам, связанным с обработкой персональных данных, вы можете обратиться:
                                </p>
                                
                                <div className="contacts-block">
                                    <div className="contact-row">
                                        <span className="contact-label">Email:</span>
                                        <a href="mailto:privacy@uyut-mebel.ru" className="contact-value">privacy@uyut-mebel.ru</a>
                                    </div>
                                    <div className="contact-row">
                                        <span className="contact-label">Телефон:</span>
                                        <a href="tel:+74951234567" className="contact-value">+7 (495) 123-45-67</a>
                                    </div>
                                    <div className="contact-row">
                                        <span className="contact-label">Адрес:</span>
                                        <span className="contact-value">г. Москва, ул. Строителей, 15</span>
                                    </div>
                                    <div className="contact-row">
                                        <span className="contact-label">ООО «Уют»:</span>
                                        <span className="contact-value">ИНН 1234567890, ОГРН 1234567890123</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Подпись */}
                        <div className="privacy-footer privacy-animate">
                            <div className="footer-line"></div>
                            <p className="footer-text">
                                © 2024 Интернет-магазин «Уют». Все права защищены.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* DECOR ELEMENTS */}
            <div className="privacy-decor">
                <div className="decor-circle"></div>
                <div className="decor-line"></div>
                <div className="decor-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </>
    );
}

export default Privacy;