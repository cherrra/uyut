import { useState } from "react";
import "../styles/collections.css";

function Collections() {
    const [activeCollection, setActiveCollection] = useState(null);

    const collections = [
        {
            id: 1,
            name: "Хюгге",
            description: "Тепло и уют скандинавского дома",
            fullDescription: "Коллекция, вдохновленная датской философией уюта. Мягкие линии, натуральные ткани, приглушенные тона создают атмосферу защищенности и покоя. Каждый предмет дышит спокойствием и приглашает к неторопливым разговорам за чашкой чая.",
            image: "/images/collection-1.jpg",
            items: 12,
            color: "Песочный, серый, бежевый",
            materials: "Лен, хлопок, дуб"
        },
        {
            id: 2,
            name: "Ваби-саби",
            description: "Красота несовершенства",
            fullDescription: "Японская эстетика в каждой детали. Намеренная простота, фактурные поверхности, ручная работа. Предметы этой коллекции несут в себе душу мастера и рассказывают истории о времени и природе материалов.",
            image: "/images/collection-2.jpg",
            items: 8,
            color: "Природный, терракота, графит",
            materials: "Керамика, состаренный дуб, ротанг"
        },
        {
            id: 3,
            name: "Минимализм",
            description: "Форма следует функции",
            fullDescription: "Чистота линий и абсолютная функциональность. Ничего лишнего — только то, что действительно нужно. Коллекция для тех, кто ценит порядок и простор, где каждый предмет имеет своё место и значение.",
            image: "/images/collection-3.jpg",
            items: 15,
            color: "Белый, черный, натуральный",
            materials: "Металл, стекло, шпон"
        },
        {
            id: 4,
            name: "Эко-натураль",
            description: "Возвращение к истокам",
            fullDescription: "Мебель, которая дышит. Только природные материалы, минимум обработки, максимум текстуры. Коллекция создаёт ощущение единения с природой и наполняет дом живой энергией дерева и камня.",
            image: "/images/collection-4.jpg",
            items: 10,
            color: "Зеленый, древесный, камень",
            materials: "Массив дуба, пробка, камень"
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
            <section className="collections-hero">
                <div className="collections-hero-content">
                    <span className="collections-hero-tag">·  КОЛЛЕКЦИИ  ·</span>
                    <h1 className="collections-hero-title">
                        Истории в <span className="collections-hero-accent">дереве</span>
                    </h1>
                    <p className="collections-hero-subtitle">
                        Каждая коллекция — это история, рассказанная языком формы и материала.
                        Мы создаем не просто мебель, а атмосферу вашего дома.
                    </p>
                </div>
                <div className="collections-hero-shape"></div>
                <div className="collections-hero-decor">
                    <span className="decor-dot"></span>
                    <span className="decor-dot"></span>
                    <span className="decor-dot"></span>
                </div>
            </section>

            {/* FEATURES SECTION */}
            <section className="features-section">
                <div className="features-header">
                    <span className="features-label">ПРЕИМУЩЕСТВА</span>
                    <h2 className="features-title">Почему выбирают наши коллекции</h2>
                </div>
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div className="feature-card" key={index}>
                            <div className="feature-number">0{index + 1}</div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                            <div className="feature-line"></div>
                        </div>
                    ))}
                </div>
            </section>

            {/* COLLECTIONS GRID */}
            <section className="collections-grid-section">
                <div className="collections-header">
                    <span className="collections-label">НАШИ КОЛЛЕКЦИИ</span>
                    <h2 className="collections-main-title">Вдохновение в каждой детали</h2>
                </div>
                
                <div className="collections-grid">
                    {collections.map((collection) => (
                        <div 
                            className="collection-card" 
                            key={collection.id}
                            onMouseEnter={() => setActiveCollection(collection.id)}
                            onMouseLeave={() => setActiveCollection(null)}
                        >
                            <div className="collection-image-wrapper">
                                <img 
                                    src={collection.image} 
                                    alt={collection.name} 
                                    className="collection-image" 
                                />
                                <div className="collection-image-overlay"></div>
                                <div className={`collection-overlay-content ${activeCollection === collection.id ? 'active' : ''}`}>
                                    <button className="collection-btn">
                                        <span>Подробнее</span>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M4 8H12M12 8L8 4M12 8L8 12" stroke="currentColor" strokeWidth="1.2"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            
                            <div className="collection-info">
                                <span className="collection-number">0{collection.id}</span>
                                <h2 className="collection-name">{collection.name}</h2>
                                <p className="collection-description">{collection.description}</p>
                                
                                <div className="collection-details">
                                    <div className="collection-meta">
                                        <div className="meta-item">
                                            <span className="meta-label">Предметов</span>
                                            <span className="meta-value">{collection.items}</span>
                                        </div>
                                        <div className="meta-divider"></div>
                                        <div className="meta-item">
                                            <span className="meta-label">Материалы</span>
                                            <span className="meta-value">{collection.materials}</span>
                                        </div>
                                    </div>
                                    
                                    <p className="collection-full-description">
                                        {collection.fullDescription}
                                    </p>
                                    
                                    <div className="collection-tags">
                                        <span className="tag">Цвета: {collection.color}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
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

            {/* PROCESS SECTION */}
            <section className="process-section">
                <div className="process-header">
                    <span className="process-label">ПРОЦЕСС</span>
                    <h2 className="process-title">Как создаются коллекции</h2>
                </div>
                
                <div className="process-timeline">
                    <div className="process-step">
                        <div className="step-number">01</div>
                        <div className="step-content">
                            <h3 className="step-title">Идея и вдохновение</h3>
                            <p className="step-description">Изучаем мировые тренды, философию и потребности современного человека</p>
                            <div className="step-line"></div>
                        </div>
                    </div>
                    
                    <div className="process-step">
                        <div className="step-number">02</div>
                        <div className="step-content">
                            <h3 className="step-title">Эскизы и прототипы</h3>
                            <p className="step-description">Создаем десятки вариантов, ищем идеальную форму и пропорции</p>
                            <div className="step-line"></div>
                        </div>
                    </div>
                    
                    <div className="process-step">
                        <div className="step-number">03</div>
                        <div className="step-content">
                            <h3 className="step-title">Выбор материалов</h3>
                            <p className="step-description">Отбираем лучшие породы дерева и натуральные ткани</p>
                            <div className="step-line"></div>
                        </div>
                    </div>
                    
                    <div className="process-step">
                        <div className="step-number">04</div>
                        <div className="step-content">
                            <h3 className="step-title">Ручная работа</h3>
                            <p className="step-description">Мастера вкладывают душу в каждое изделие</p>
                            <div className="step-line"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="cta-section">
                <div className="cta-container">
                    <span className="cta-label">ГОТОВЫ ВЫБРАТЬ?</span>
                    <h2 className="cta-title">Ваша идеальная коллекция ждет</h2>
                    <p className="cta-text">
                        Приходите в наш шоурум или закажите консультацию дизайнера
                    </p>
                    <div className="cta-buttons">
                        <button className="cta-btn-primary">
                            <span>Записаться</span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="1.2"/>
                            </svg>
                        </button>
                        <button className="cta-btn-secondary">
                            <span>Смотреть каталог</span>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Collections;