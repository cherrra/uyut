// About.jsx
import { useEffect, useState } from "react";
import "../styles/about.css";

function About() {
    const [activeStep, setActiveStep] = useState(null);

    // Анимация появления элементов при скролле
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("about-animate-in");
                    }
                });
            },
            { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
        );

        document.querySelectorAll(".about-animate").forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const collections = [
        {
            id: 1,
            name: "Хюгге",
            description: "Тепло и уют скандинавского дома",
            image: "/images/collection-1.jpg",
            color: "Песочный, серый, бежевый",
            materials: "Лен, хлопок, дуб"
        },
        {
            id: 2,
            name: "Ваби-саби",
            description: "Красота несовершенства",
            image: "/images/collection-2.jpg",
            color: "Природный, терракота",
            materials: "Состаренный дуб, ротанг"
        },
        {
            id: 3,
            name: "Эко-натураль",
            description: "Возвращение к истокам",
            image: "/images/collection-3.jpg",
            color: "Зеленый, древесный",
            materials: "Массив дуба, пробка"
        }
    ];

    const features = [
        {
            title: "Экологичность",
            description: "Только натуральные материалы и безопасные покрытия"
        },
        {
            title: "Ручная работа",
            description: "Каждое изделие создается с вниманием к деталям"
        },
        {
            title: "На века",
            description: "Классический дизайн, который не теряет актуальности"
        },
        {
            title: "Индивидуальность",
            description: "Возможность кастомизации под ваш интерьер"
        }
    ];

    return (
        <>
            {/* HERO SECTION */}
            <section className="about-hero">
                <div className="about-hero-content">
                    <span className="about-hero-tag">·  ИСТОРИЯ УЮТА  ·</span>
                    <h1 className="about-hero-title">
                        О нас и нашем <span className="about-hero-accent">деле</span>
                    </h1>
                    <p className="about-hero-subtitle">
                        Создаем мебель, которая делает дом теплее уже 8 лет
                    </p>
                </div>
                <div className="about-hero-shape"></div>
                <div className="about-hero-decor">
                    <span className="decor-dot"></span>
                    <span className="decor-dot"></span>
                    <span className="decor-dot"></span>
                </div>
            </section>

            {/* FEATURES SECTION */}
            <section className="features-section">
                <div className="features-header">
                    <span className="features-label">ПРЕИМУЩЕСТВА</span>
                    <h2 className="features-title">Почему выбирают нас</h2>
                </div>
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div className="feature-card about-animate" key={index}>
                            <div className="feature-number">0{index + 1}</div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                            <div className="feature-line"></div>
                        </div>
                    ))}
                </div>
            </section>

            {/* PHILOSOPHY SECTION */}
            <section className="philosophy-section">
                <div className="philosophy-container">
                    <div className="philosophy-grid">
                        <div className="philosophy-content about-animate">
                            <span className="philosophy-label">·  НАША ФИЛОСОФИЯ  ·</span>
                            <h2 className="philosophy-title">Мебель с душой из натурального дерева</h2>
                            <p className="philosophy-text">
                                Мы верим, что настоящий уют начинается с природных материалов. 
                                Каждое изделие создается вручную, сохраняя тепло и энергию дерева.
                            </p>
                            <p className="philosophy-text">
                                Наша мебель — это не просто предметы интерьера, это история, 
                                которая будет с вами долгие годы, становясь только лучше со временем.
                            </p>
                            
                            <div className="philosophy-stats">
                                <div className="stat-item">
                                    <span className="stat-number">8+</span>
                                    <span className="stat-label">лет опыта</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">500+</span>
                                    <span className="stat-label">проектов</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">100%</span>
                                    <span className="stat-label">натуральное дерево</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="philosophy-image about-animate">
                            <div className="image-frame">
                                <div className="image-placeholder">
                                    <span className="placeholder-icon">🪵</span>
                                </div>
                            </div>
                            <div className="image-decor"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROCESS SECTION - УЛУЧШЕННАЯ ВЕРСИЯ */}
            <section className="process-creative-section">
                <div className="process-header">
                    <span className="process-label">·  ПРОЦЕСС  ·</span>
                    <h2 className="process-title">От дерева до вашего дома</h2>
                </div>

                <div className="process-creative-container">
                    {/* Основная изогнутая линия (волна) */}
                    <svg className="process-svg" viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid meet">
                        {/* Декоративный фон - текстура дерева */}
                        <defs>
                            <pattern id="woodPattern" patternUnits="userSpaceOnUse" width="100" height="100">
                                <path d="M0 50 Q 25 40, 50 50 T 100 50" stroke="#7ec4ae" strokeWidth="0.5" fill="none" opacity="0.1"/>
                                <path d="M0 60 Q 30 70, 60 60 T 120 60" stroke="#7ec4ae" strokeWidth="0.5" fill="none" opacity="0.1"/>
                            </pattern>
                            
                            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#7ec4ae" stopOpacity="0.3"/>
                                <stop offset="30%" stopColor="#7ec4ae" stopOpacity="0.8"/>
                                <stop offset="70%" stopColor="#7ec4ae" stopOpacity="0.8"/>
                                <stop offset="100%" stopColor="#7ec4ae" stopOpacity="0.3"/>
                            </linearGradient>
                        </defs>

                        {/* Основная изогнутая линия */}
                        <path 
                            d="M100,200 
                               C200,120 300,280 400,200 
                               C500,120 600,280 700,200 
                               C800,120 900,280 1000,200 
                               C1050,160 1100,180 1100,200" 
                            stroke="url(#lineGradient)" 
                            strokeWidth="4" 
                            fill="none"
                            strokeDasharray="8 8"
                            className="process-main-line"
                        />
                        
                        {/* Вторая линия для эффекта толщины (тень) */}
                        <path 
                            d="M100,202 
                               C200,122 300,282 400,202 
                               C500,122 600,282 700,202 
                               C800,122 900,282 1000,202 
                               C1050,162 1100,182 1100,202" 
                            stroke="#1a332e" 
                            strokeWidth="2" 
                            fill="none"
                            opacity="0.1"
                        />

                        {/* Декоративные листья на изгибах */}
                        <g className="process-leaf" transform="translate(250,150)">
                            <path d="M0,0 Q10,-15 20,0 Q10,15 0,0" fill="#7ec4ae" opacity="0.3"/>
                        </g>
                        <g className="process-leaf" transform="translate(550,250)">
                            <path d="M0,0 Q10,-15 20,0 Q10,15 0,0" fill="#7ec4ae" opacity="0.3"/>
                        </g>
                        <g className="process-leaf" transform="translate(850,150)">
                            <path d="M0,0 Q10,-15 20,0 Q10,15 0,0" fill="#7ec4ae" opacity="0.3"/>
                        </g>
                    </svg>

                    {/* Точки на линии (узлы) - вынесены отдельно для интерактива */}
                    <div className="process-nodes">
                        <div 
                            className={`process-node node-1 ${activeStep === 1 ? 'active' : ''}`}
                            onMouseEnter={() => setActiveStep(1)}
                            onMouseLeave={() => setActiveStep(null)}
                        >
                            <div className="node-dot"></div>
                            <span className="node-number">01</span>
                        </div>
                        
                        <div 
                            className={`process-node node-2 ${activeStep === 2 ? 'active' : ''}`}
                            onMouseEnter={() => setActiveStep(2)}
                            onMouseLeave={() => setActiveStep(null)}
                        >
                            <div className="node-dot"></div>
                            <span className="node-number">02</span>
                        </div>
                        
                        <div 
                            className={`process-node node-3 ${activeStep === 3 ? 'active' : ''}`}
                            onMouseEnter={() => setActiveStep(3)}
                            onMouseLeave={() => setActiveStep(null)}
                        >
                            <div className="node-dot"></div>
                            <span className="node-number">03</span>
                        </div>
                        
                        <div 
                            className={`process-node node-4 ${activeStep === 4 ? 'active' : ''}`}
                            onMouseEnter={() => setActiveStep(4)}
                            onMouseLeave={() => setActiveStep(null)}
                        >
                            <div className="node-dot"></div>
                            <span className="node-number">04</span>
                        </div>
                        
                        <div 
                            className={`process-node node-5 ${activeStep === 5 ? 'active' : ''}`}
                            onMouseEnter={() => setActiveStep(5)}
                            onMouseLeave={() => setActiveStep(null)}
                        >
                            <div className="node-dot"></div>
                            <span className="node-number">05</span>
                        </div>
                    </div>

                    {/* Карточки этапов - появляются при наведении на узлы */}
                    <div className="process-cards">
                        {/* Шаг 1 - Идея */}
                        <div className={`process-card card-1 ${activeStep === 1 ? 'visible' : ''}`}>
                            <div className="card-content">
                                <div className="card-icon">💡</div>
                                <h3 className="card-title">Идея и вдохновение</h3>
                                <p className="card-description">
                                    Изучаем ваши пожелания, разрабатываем эскизы с учетом эргономики и стиля вашего дома
                                </p>
                                <div className="card-details">
                                    <span>Индивидуальный подход</span>
                                    <span>3D визуализация</span>
                                </div>
                            </div>
                        </div>

                        {/* Шаг 2 - Материал */}
                        <div className={`process-card card-2 ${activeStep === 2 ? 'visible' : ''}`}>
                            <div className="card-content">
                                <div className="card-icon">🌲</div>
                                <h3 className="card-title">Выбор материала</h3>
                                <p className="card-description">
                                    Отбираем лучшие сорта древесины, учитывая текстуру, возраст и характеристики каждой партии
                                </p>
                                <div className="card-details">
                                    <span>Дуб, ясень, орех</span>
                                    <span>Эко-сертификация</span>
                                </div>
                            </div>
                        </div>

                        {/* Шаг 3 - Ручная работа */}
                        <div className={`process-card card-3 ${activeStep === 3 ? 'visible' : ''}`}>
                            <div className="card-content">
                                <div className="card-icon">🛠️</div>
                                <h3 className="card-title">Ручная работа</h3>
                                <p className="card-description">
                                    Мастера с 15-летним опытом воплощают проект, уделяя внимание каждой детали и стыку
                                </p>
                                <div className="card-details">
                                    <span>Столярные соединения</span>
                                    <span>Ручная шлифовка</span>
                                </div>
                            </div>
                        </div>

                        {/* Шаг 4 - Финишная отделка */}
                        <div className={`process-card card-4 ${activeStep === 4 ? 'visible' : ''}`}>
                            <div className="card-content">
                                <div className="card-icon">✨</div>
                                <h3 className="card-title">Финишная отделка</h3>
                                <p className="card-description">
                                    Покрываем натуральными маслами и восками, подчеркивая природную красоту дерева
                                </p>
                                <div className="card-details">
                                    <span>Натуральные составы</span>
                                    <span>3 слоя покрытия</span>
                                </div>
                            </div>
                        </div>

                        {/* Шаг 5 - Доставка */}
                        <div className={`process-card card-5 ${activeStep === 5 ? 'visible' : ''}`}>
                            <div className="card-content">
                                <div className="card-icon">🏡</div>
                                <h3 className="card-title">Доставка и установка</h3>
                                <p className="card-description">
                                    Аккуратно доставляем специальным транспортом и помогаем с размещением в вашем доме
                                </p>
                                <div className="card-details">
                                    <span>Сборка на месте</span>
                                    <span>Гарантия 5 лет</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* COLLECTIONS SHOWCASE */}
            <section className="collections-showcase">
                <div className="showcase-header">
                    <span className="showcase-label">·  НАШИ КОЛЛЕКЦИИ  ·</span>
                    <h2 className="showcase-title">Вдохновение в каждой детали</h2>
                </div>

                <div className="showcase-grid">
                    {collections.map((collection, index) => (
                        <div className="showcase-card about-animate" key={collection.id}>
                            <div className="showcase-image">
                                <div className="showcase-placeholder"></div>
                                <div className="showcase-number">0{index + 1}</div>
                            </div>
                            <div className="showcase-content">
                                <h3 className="showcase-card-title">{collection.name}</h3>
                                <p className="showcase-description">{collection.description}</p>
                                <div className="showcase-tags">
                                    <span className="showcase-tag">{collection.color}</span>
                                    <span className="showcase-tag">{collection.materials}</span>
                                </div>
                                <button className="showcase-btn">
                                    <span>Подробнее</span>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M4 8H12M12 8L8 4M12 8L8 12" stroke="currentColor" strokeWidth="1.2"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* TEAM SECTION */}
            <section className="team-section">
                <div className="team-header">
                    <span className="team-label">·  КОМАНДА  ·</span>
                    <h2 className="team-title">Мастера своего дела</h2>
                </div>

                <div className="team-grid">
                    <div className="team-card about-animate">
                        <div className="team-image">
                            <div className="team-placeholder">👨‍🦰</div>
                        </div>
                        <h3 className="team-name">Алексей Петров</h3>
                        <p className="team-role">Основатель, мастер по дереву</p>
                        <div className="team-line"></div>
                    </div>

                    <div className="team-card about-animate">
                        <div className="team-image">
                            <div className="team-placeholder">👩‍🦰</div>
                        </div>
                        <h3 className="team-name">Елена Иванова</h3>
                        <p className="team-role">Дизайнер интерьеров</p>
                        <div className="team-line"></div>
                    </div>

                    <div className="team-card about-animate">
                        <div className="team-image">
                            <div className="team-placeholder">👨‍🦱</div>
                        </div>
                        <h3 className="team-name">Дмитрий Соколов</h3>
                        <p className="team-role">Мастер по отделке</p>
                        <div className="team-line"></div>
                    </div>
                </div>
            </section>

            {/* QUOTE SECTION */}
            <section className="quote-section">
                <div className="quote-container">
                    <span className="quote-label">ФИЛОСОФИЯ</span>
                    <div className="quote-mark">"</div>
                    <p className="quote-text">
                        Мебель — это не просто предметы интерьера. 
                        Это то, что создаёт настроение вашего дома, 
                        хранит тепло ваших рук и молчаливо сопровождает 
                        важные моменты жизни.
                    </p>
                    <div className="quote-author">— Основатель бренда «Уют»</div>
                </div>
                <div className="quote-shape"></div>
            </section>

            {/* DECOR ELEMENTS */}
            <div className="about-decor">
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

export default About;