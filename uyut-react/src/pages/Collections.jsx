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
                    <h1>Наши коллекции</h1>
                    <p>
                        Каждая коллекция — это история, рассказанная языком формы и материала.
                        Мы создаем не просто мебель, а атмосферу вашего дома.
                    </p>
                </div>
                <div className="collections-hero-decor">
                    <span className="decor-dot"></span>
                    <span className="decor-dot"></span>
                    <span className="decor-dot"></span>
                </div>
            </section>

            {/* FEATURES SECTION */}
            <section className="features-section">

                <div className="features-grid">

                    {features.map((feature, index) => (

                        <div className="feature-card" key={index}>

                            <div className="feature-circle"></div>

                            <h3>{feature.title}</h3>

                            <p>{feature.description}</p>

                        </div>

                    ))}

                </div>

            </section>

            {/* COLLECTIONS GRID */}
            <section className="collections-grid-section">
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
                                <div className={`collection-overlay ${activeCollection === collection.id ? 'active' : ''}`}>
                                    <button className="collection-btn">Подробнее</button>
                                </div>
                            </div>
                            
                            <div className="collection-info">
                                <h2>{collection.name}</h2>
                                <p className="collection-description">{collection.description}</p>
                                
                                <div className="collection-meta">
                                    <span className="meta-item">{collection.items} предметов</span>
                                    <span className="meta-divider">•</span>
                                    <span className="meta-item">{collection.materials}</span>
                                </div>
                                
                                <div className="collection-full-description">
                                    {collection.fullDescription}
                                </div>
                                
                                <div className="collection-tags">
                                    <span className="tag">Цвета: {collection.color}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* QUOTE SECTION */}
            <section className="quote-section">
                <div className="quote-container">
                    <div className="quote-mark">"</div>
                    <p className="quote-text">
                        Мебель — это не просто предметы интерьера. 
                        Это то, что создаёт настроение вашего дома, 
                        хранит тепло ваших рук и молчаливо сопровождает 
                        важные моменты жизни.
                    </p>
                    <div className="quote-author">— Основатель бренда «Уют»</div>
                </div>
            </section>

            {/* PROCESS SECTION */}
            <section className="process-section">
                <h2 className="process-title">Как создаются коллекции</h2>
                
                <div className="process-timeline">
                    <div className="process-step">
                        <div className="step-number">01</div>
                        <div className="step-content">
                            <h3>Идея и вдохновение</h3>
                            <p>Изучаем мировые тренды, философию и потребности современного человека</p>
                        </div>
                    </div>
                    
                    <div className="process-step">
                        <div className="step-number">02</div>
                        <div className="step-content">
                            <h3>Эскизы и прототипы</h3>
                            <p>Создаем десятки вариантов, ищем идеальную форму и пропорции</p>
                        </div>
                    </div>
                    
                    <div className="process-step">
                        <div className="step-number">03</div>
                        <div className="step-content">
                            <h3>Выбор материалов</h3>
                            <p>Отбираем лучшие породы дерева и натуральные ткани</p>
                        </div>
                    </div>
                    
                    <div className="process-step">
                        <div className="step-number">04</div>
                        <div className="step-content">
                            <h3>Ручная работа</h3>
                            <p>Мастера вкладывают душу в каждое изделие</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="cta-section">
                <div className="cta-container">
                    <h2>Готовы выбрать свою коллекцию?</h2>
                    <p>Приходите в наш шоурум или закажите консультацию дизайнера</p>
                    <div className="cta-buttons">
                        <button className="btn btn-primary">Записаться</button>
                        <button className="btn btn-secondary">Смотреть каталог</button>
                    </div>
                </div>
            </section>

            <div className="horizon"></div>
        </>
    );
}

export default Collections;