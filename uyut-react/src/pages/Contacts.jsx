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

    // Состояния для управления UI
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formStatus, setFormStatus] = useState({ type: "", message: "" });

    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyYQbyvCjNynCjyNLx2fzbdnI9lL8cVPoqePC3Q1PwwRzgoyHF5Lf62nU2N5V0n_BrB2Q/exec';

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
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Валидация
    const validateForm = () => {
        if (!formData.name || !formData.phone || !formData.email) {
            setFormStatus({ type: "error", message: "Пожалуйста, заполните обязательные поля" });
            return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setFormStatus({ type: "error", message: "Введите корректный Email" });
            return false;
        }
        if (formData.phone.replace(/\D/g, '').length < 10) {
            setFormStatus({ type: "error", message: "Введите корректный номер телефона" });
            return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);
        setFormStatus({ type: "", message: "" });

        const payload = new FormData();
        payload.append('name', formData.name);
        payload.append('phone', formData.phone);
        payload.append('email', formData.email);
        payload.append('message', formData.message);

        fetch(SCRIPT_URL, {
            method: 'POST',
            body: payload,
            mode: 'no-cors'
        })
        .then(() => {
            setFormStatus({ type: "success", message: "Спасибо! Ваша заявка отправлена." });
            setFormData({ name: "", phone: "", email: "", message: "" });
        })
        .catch(error => {
            console.error('Error:', error);
            setFormStatus({ type: "error", message: "Ошибка при отправке. Попробуйте позже." });
        })
        .finally(() => {
            setIsSubmitting(false);
            setTimeout(() => setFormStatus({ type: "", message: "" }), 5000);
        });
    };

    // Данные для рендеринга (исправленные с учетом Ростова)
    const contacts = [
        { id: 1, type: "Адрес магазина", value: "г. Ростов-на-Дону, ул. Большая Садовая, 45", icon: "📍", details: "ТЦ «Мебель Град», 1 этаж" },
        { id: 2, type: "Телефон", value: "+7 (863) 123-45-67", icon: "📞", details: "Ежедневно с 10:00 до 21:00" },
        { id: 3, type: "Email", value: "info@uyut-mebel.ru", icon: "✉️", details: "Ответим в течение 2 часов" }
    ];

    // Улучшенная секция FAQ с ответами для Ростова
    const faq = [
        { 
            question: "Где находится ваш магазин в Ростове-на-Дону?", 
            answer: "Наш магазин расположен в центре города по адресу: ул. Большая Садовая, 45, ТЦ «Мебель Град», 1 этаж. Это в 5 минутах ходьбы от Пушкинской улицы и в 10 минутах от Соборной площади." 
        },
        { 
            question: "Есть ли доставка по Ростову и области?", 
            answer: "Да, мы доставляем мебель по всему Ростову-на-Дону. Стоимость доставки по городу — 500 рублей. В пределах 30 км от города — 1000 рублей. При заказе от 50 000 рублей доставка по городу бесплатно." 
        },
        { 
            question: "Можно ли заказать доставку в другой город?", 
            answer: "Да, мы отправляем мебель по всей России транспортными компаниями (Деловые Линии, ПЭК, СДЭК). Стоимость рассчитывается индивидуально в зависимости от веса и объема заказа." 
        },
        { 
            question: "Как добраться до магазина на общественном транспорте?", 
            answer: "До ТЦ «Мебель Град» можно доехать на автобусах №3, 7, 22 до остановки «Большая Садовая». Также рядом находится остановка трамвая №1, 4, 5 «Центральный рынок»." 
        },
        { 
            question: "Есть ли парковка у магазина?", 
            answer: "Да, у ТЦ «Мебель Град» есть бесплатная парковка для посетителей. Въезд со стороны переулка Семашко." 
        },
        { 
            question: "Какие способы оплаты вы принимаете?", 
            answer: "Мы принимаем наличные, банковские карты (Visa, Mastercard, МИР), а также безналичный расчет для юридических лиц. Возможна оплата по счету." 
        }
    ];

    return (
        <>
            {/* HERO SECTION */}
            <section className="contacts-hero">
                <div className="contacts-hero-content">
                    <span className="contacts-hero-tag">· КОНТАКТЫ ·</span>
                    <h1 className="contacts-hero-title">Всегда на <span className="contacts-hero-accent">связи</span></h1>
                    <p className="contacts-hero-subtitle">
                        Приезжайте в наш магазин в центре Ростова-на-Дону
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
                    <div className="map-wrapper contacts-animate">
                        <div className="map-placeholder">
                            {/* Замените XXX на реальный конструктор карты */}
                            <iframe 
                                src="https://yandex.ru/map-widget/v1/?um=constructor%3AXXX&source=constructor"
                                width="100%" 
                                height="100%" 
                                style={{ border: 0 }} 
                                loading="lazy" 
                                title="Карта"
                                className="map-iframe"
                            ></iframe>
                        </div>
                    </div>

                    <div className="form-wrapper contacts-animate">
                        <span className="form-label">· НАПИШИТЕ НАМ ·</span>
                        <h2 className="form-title">Остались вопросы?</h2>
                        <p className="form-subtitle">
                            Заполните форму и мы свяжемся с вами в ближайшее время
                        </p>

                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <input type="text" name="name" placeholder="Ваше имя" value={formData.name} onChange={handleChange} className="form-input" required />
                                <span className="input-focus-line"></span>
                            </div>

                            <div className="form-group">
                                <input type="tel" name="phone" placeholder="Телефон" value={formData.phone} onChange={handleChange} className="form-input" required />
                                <span className="input-focus-line"></span>
                            </div>

                            <div className="form-group">
                                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="form-input" required />
                                <span className="input-focus-line"></span>
                            </div>

                            <div className="form-group">
                                <textarea name="message" placeholder="Сообщение" value={formData.message} onChange={handleChange} rows="4" className="form-textarea"></textarea>
                                <span className="input-focus-line"></span>
                            </div>

                            <button type="submit" className="form-submit-btn" disabled={isSubmitting}>
                                <span>{isSubmitting ? 'Отправка...' : 'Отправить'}</span>
                                {!isSubmitting && (
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="1.2"/>
                                    </svg>
                                )}
                            </button>

                            {/* Вывод сообщений статуса */}
                            {formStatus.message && (
                                <div className={`form-status-message ${formStatus.type}`}>
                                    {formStatus.type === 'success' ? '✓ ' : '⚠ '}
                                    {formStatus.message}
                                </div>
                            )}

                            <p className="form-privacy">
                                Нажимая на кнопку, вы соглашаетесь с <a href="/privacy" className="privacy-link">политикой конфиденциальности</a>
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

            {/* FAQ SECTION - УЛУЧШЕННАЯ */}
            <section className="faq-section">
                <div className="faq-container">
                    <div className="faq-header">
                        <span className="faq-label">·  ЧАСТЫЕ ВОПРОСЫ  ·</span>
                        <h2 className="faq-title">Ответы на популярные вопросы</h2>
                        <p className="faq-subtitle">о нашем магазине в Ростове-на-Дону</p>
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
                    <h2 className="cta-title">Ждем вас в Ростове-на-Дону</h2>
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