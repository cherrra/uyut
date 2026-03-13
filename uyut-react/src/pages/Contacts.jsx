// Contacts.jsx
import { useEffect, useState } from "react";
import "../styles/contacts.css";

function Contacts() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: ""
    });
    
    const [formSubmitted, setFormSubmitted] = useState(false);

    // Анимация появления элементов при скролле
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("contacts-animate-in");
                    }
                });
            },
            { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
        );

        document.querySelectorAll(".contacts-animate").forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Здесь будет отправка формы
        setFormSubmitted(true);
        setTimeout(() => setFormSubmitted(false), 3000);
    };

    const contacts = [
        {
            id: 1,
            type: "Адрес магазина",
            value: "г. Москва, ул. Строителей, 15",
            icon: "📍",
            details: "ТЦ «Мебельный», 2 этаж"
        },
        {
            id: 2,
            type: "Телефон",
            value: "+7 (495) 123-45-67",
            icon: "📞",
            details: "Ежедневно с 10:00 до 21:00"
        },
        {
            id: 3,
            type: "Email",
            value: "info@uyut-mebel.ru",
            icon: "✉️",
            details: "Ответим в течение 2 часов"
        }
    ];

    const faq = [
        {
            question: "Как добраться до магазина?",
            answer: "Мы находимся в ТЦ «Мебельный» на 2 этаже. От метро «Строителей» 5 минут пешком или 2 остановки на автобусе."
        },
        {
            question: "Есть ли доставка?",
            answer: "Да, доставляем мебель по Москве и области. Стоимость доставки рассчитывается индивидуально в зависимости от адреса и объема заказа."
        },
        {
            question: "Можно ли заказать доставку в другой город?",
            answer: "Да, мы отправляем мебель по всей России транспортными компаниями. Помогаем с оформлением и отслеживанием груза."
        },
        {
            question: "Как происходит оплата?",
            answer: "Принимаем наличные, банковские карты, а также безналичный расчет для юридических лиц. Возможна оплата по счету."
        }
    ];

    return (
        <>
            {/* HERO SECTION */}
            <section className="contacts-hero">
                <div className="contacts-hero-content">
                    <span className="contacts-hero-tag">·  КОНТАКТЫ  ·</span>
                    <h1 className="contacts-hero-title">
                        Всегда на <span className="contacts-hero-accent">связи</span>
                    </h1>
                    <p className="contacts-hero-subtitle">
                        Ответим на вопросы, поможем с выбором и оформим заказ
                    </p>
                </div>
                <div className="contacts-hero-shape"></div>
                <div className="contacts-hero-decor">
                    <span className="decor-dot"></span>
                    <span className="decor-dot"></span>
                    <span className="decor-dot"></span>
                </div>
            </section>

            {/* CONTACT CARDS SECTION */}
            <section className="contact-cards-section">
                <div className="contact-cards-grid">
                    {contacts.map((contact) => (
                        <div className="contact-card contacts-animate" key={contact.id}>
                            <div className="contact-card-icon">{contact.icon}</div>
                            <h3 className="contact-card-title">{contact.type}</h3>
                            <p className="contact-card-value">{contact.value}</p>
                            <p className="contact-card-details">{contact.details}</p>
                            <div className="contact-card-line"></div>
                        </div>
                    ))}
                </div>
            </section>

            {/* MAP & FORM SECTION */}
            <section className="map-form-section">
                <div className="map-form-container">
                    {/* Карта */}
                    <div className="map-wrapper contacts-animate">
                        <div className="map-placeholder">
                            <div className="map-overlay">
                                <div className="map-marker">
                                    <span className="marker-pin"></span>
                                    <span className="marker-label">Мы здесь</span>
                                </div>
                                <div className="map-address">
                                    <span className="address-icon">📍</span>
                                    <span>ул. Строителей, 15</span>
                                </div>
                            </div>
                            <iframe 
                                src="https://yandex.ru/map-widget/v1/?um=constructor%3AXXX&source=constructor"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                title="Карта магазина"
                                className="map-iframe"
                            ></iframe>
                        </div>
                    </div>

                    {/* Форма обратной связи */}
                    <div className="form-wrapper contacts-animate">
                        <span className="form-label">·  НАПИШИТЕ НАМ  ·</span>
                        <h2 className="form-title">Остались вопросы?</h2>
                        <p className="form-subtitle">
                            Заполните форму и мы свяжемся с вами в ближайшее время
                        </p>

                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Ваше имя"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                />
                                <span className="input-focus-line"></span>
                            </div>

                            <div className="form-group">
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Телефон"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                />
                                <span className="input-focus-line"></span>
                            </div>

                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="form-input"
                                />
                                <span className="input-focus-line"></span>
                            </div>

                            <div className="form-group">
                                <textarea
                                    name="message"
                                    placeholder="Сообщение"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="form-textarea"
                                ></textarea>
                                <span className="input-focus-line"></span>
                            </div>

                            <button type="submit" className="form-submit-btn">
                                <span>Отправить</span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="1.2"/>
                                </svg>
                            </button>

                            {formSubmitted && (
                                <div className="form-success">
                                    <span className="success-icon">✓</span>
                                    <span>Сообщение отправлено</span>
                                </div>
                            )}

                            <p className="form-privacy">
                                Нажимая на кнопку, вы соглашаетесь с 
                                <a href="/privacy" className="privacy-link"> политикой конфиденциальности</a>
                            </p>
                        </form>
                    </div>
                </div>
            </section>

            {/* WORK HOURS SECTION */}
            <section className="hours-section">
                <div className="hours-container">
                    <div className="hours-header">
                        <span className="hours-label">·  РЕЖИМ РАБОТЫ  ·</span>
                        <h2 className="hours-title">Магазин открыт ежедневно</h2>
                    </div>

                    <div className="hours-card contacts-animate">
                        <div className="hours-day">Понедельник — Воскресенье</div>
                        <div className="hours-time">10:00 — 21:00</div>
                        <div className="hours-note">Без выходных и перерывов</div>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="faq-section">
                <div className="faq-container">
                    <div className="faq-header">
                        <span className="faq-label">·  ЧАСТЫЕ ВОПРОСЫ  ·</span>
                        <h2 className="faq-title">Ответы на популярные вопросы</h2>
                    </div>

                    <div className="faq-grid">
                        {faq.map((item, index) => (
                            <div className="faq-item contacts-animate" key={index}>
                                <div className="faq-question">
                                    <span className="faq-number">0{index + 1}</span>
                                    <h3>{item.question}</h3>
                                </div>
                                <p className="faq-answer">{item.answer}</p>
                                <div className="faq-line"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="contacts-cta">
                <div className="cta-container">
                    <span className="cta-label">·  ПРИХОДИТЕ  ·</span>
                    <h2 className="cta-title">Ждем вас в нашем магазине</h2>
                    <p className="cta-text">
                        Посмотрите мебель вживую, выберите материалы и получите консультацию
                    </p>
                    <div className="cta-buttons">
                        <button className="cta-btn-primary">
                            <span>Проложить маршрут</span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="1.2"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="cta-decor"></div>
            </section>

            {/* DECOR ELEMENTS */}
            <div className="contacts-decor">
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

export default Contacts;