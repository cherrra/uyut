// Product.jsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import "../styles/product.css";

function Product() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [activeTab, setActiveTab] = useState("description");

    // Похожие товары
    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
        // Находим товар по id
        const foundProduct = products.find(p => p.id === parseInt(id));
        if (foundProduct) {
            setProduct(foundProduct);
            
            // Находим похожие товары (той же категории)
            const related = products
                .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
                .slice(0, 3);
            setRelatedProducts(related);
        } else {
            // Если товар не найден, перенаправляем на каталог
            navigate("/catalog");
        }
        
        // Сброс состояния при смене товара
        setActiveTab("description");
        
        // Скролл наверх при открытии
        window.scrollTo(0, 0);
    }, [id, navigate]);

    // Функция для получения описания
    const getProductDescription = (product) => {
        if (product?.description) return product.description;
        
        const descriptions = {
            chair: 'Удобный стул из натурального дерева. Идеально подходит для кухни или столовой. Ручная работа, качественные материалы, комфорт и стиль.',
            table: 'Прочный стол из массива дерева. Прекрасно впишется в любой интерьер. Натуральная древесина, надежная конструкция, экологичность.',
            sofa: 'Мягкий диван с деревянным каркасом. Создает уют в вашем доме. Комфортные подушки, прочный каркас, стильный дизайн.',
            bed: 'Удобная кровать из массива дерева. Обеспечивает здоровый сон и комфортный отдых.',
            wardrobe: 'Вместительный шкаф из натурального дерева. Множество отделений для хранения вещей.',
            shelf: 'Стильная полка из дерева. Идеально подходит для книг, цветов и декоративных предметов.'
        };
        
        return descriptions[product?.category] || 'Мебель из натурального дерева ручной работы. Качество, проверенное временем.';
    };

    // Функция для получения характеристик
    const getSpecifications = (product) => {
        const specs = {
            chair: [
                { name: "Материал", value: "Массив дуба" },
                { name: "Габариты", value: "50 x 55 x 85 см" },
                { name: "Вес", value: "5.5 кг" },
                { name: "Цвет", value: "Натуральный" },
                { name: "Обивка", value: "Хлопок" },
                { name: "Гарантия", value: "24 месяца" }
            ],
            table: [
                { name: "Материал", value: "Массив ясеня" },
                { name: "Габариты", value: "120 x 80 x 75 см" },
                { name: "Вес", value: "25 кг" },
                { name: "Цвет", value: "Натуральный" },
                { name: "Покрытие", value: "Масло" },
                { name: "Гарантия", value: "36 месяцев" }
            ],
            sofa: [
                { name: "Материал", value: "Массив сосны" },
                { name: "Габариты", value: "200 x 90 x 85 см" },
                { name: "Вес", value: "45 кг" },
                { name: "Цвет", value: "Натуральный" },
                { name: "Обивка", value: "Велюр" },
                { name: "Гарантия", value: "36 месяцев" }
            ],
            bed: [
                { name: "Материал", value: "Массив дуба" },
                { name: "Габариты", value: "160 x 200 x 90 см" },
                { name: "Вес", value: "65 кг" },
                { name: "Цвет", value: "Натуральный" },
                { name: "Основание", value: "Ламели" },
                { name: "Гарантия", value: "36 месяцев" }
            ],
            wardrobe: [
                { name: "Материал", value: "Массив ясеня" },
                { name: "Габариты", value: "200 x 60 x 220 см" },
                { name: "Вес", value: "85 кг" },
                { name: "Цвет", value: "Натуральный" },
                { name: "Наполнение", value: "Полки, штанга" },
                { name: "Гарантия", value: "36 месяцев" }
            ],
            shelf: [
                { name: "Материал", value: "Массив сосны" },
                { name: "Габариты", value: "80 x 20 x 20 см" },
                { name: "Вес", value: "3.5 кг" },
                { name: "Цвет", value: "Натуральный" },
                { name: "Количество полок", value: "1" },
                { name: "Гарантия", value: "12 месяцев" }
            ]
        };
        
        return specs[product?.category] || [];
    };

    if (!product) {
        return (
            <div className="product-loading">
                <div className="loader"></div>
                <p>Загрузка...</p>
            </div>
        );
    }

    const description = getProductDescription(product);
    const specifications = getSpecifications(product);

    return (
        <div className="product-page">
            <div className="product-breadcrumbs">
                <div className="container">
                    <a href="/">Главная</a> / <a href="/catalog">Каталог</a> / <span>{product.name}</span>
                </div>
            </div>

            <div className="product-main container">
                {/* Изображение товара */}
                <div className="product-image-section">
                    <div className="product-main-image">
                        <img src={product.image} alt={product.name} />
                        {product.isNew && <span className="product-badge product-badge-new">Новинка</span>}
                        {product.isHit && <span className="product-badge product-badge-hit">Хит</span>}
                        {product.discount && <span className="product-badge product-badge-discount">-{product.discount}%</span>}
                    </div>
                </div>

                <div className="product-info-section">
                    <span className="product-category">
                        {product.category === "chair" ? "Стул" : 
                         product.category === "table" ? "Стол" :
                         product.category === "sofa" ? "Диван" :
                         product.category === "bed" ? "Кровать" :
                         product.category === "wardrobe" ? "Шкаф" : "Полка"}
                    </span>
                    <h1 className="product-name">{product.name}</h1>
                    
                    <div className="product-price-large">{product.price} ₽</div>

                    <p className="product-description-large">{description}</p>

                    <div className="product-features">
                        <div className="feature-item">
                            <span className="feature-label">Материал:</span>
                            <span className="feature-value">Массив дерева</span>
                        </div>
                        <div className="feature-item">
                            <span className="feature-label">Производство:</span>
                            <span className="feature-value">Россия</span>
                        </div>
                        <div className="feature-item">
                            <span className="feature-label">Наличие:</span>
                            <span className="feature-value in-stock">В наличии</span>
                        </div>
                    </div>

                    <div className="product-delivery">
                        <div className="delivery-item">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <circle cx="9" cy="9" r="7" stroke="#7ec4ae" strokeWidth="1.2"/>
                                <path d="M9 5V9L11 11" stroke="#7ec4ae" strokeWidth="1.2"/>
                            </svg>
                            <span>Доставка: <strong>1-3 дня</strong></span>
                        </div>
                        <div className="delivery-item">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path d="M3 6L9 3L15 6L9 9L3 6Z" stroke="#7ec4ae" strokeWidth="1.2"/>
                                <path d="M3 9L9 12L15 9" stroke="#7ec4ae" strokeWidth="1.2"/>
                            </svg>
                            <span>Самовывоз: <strong>сегодня</strong></span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Вкладки */}
            <div className="product-tabs container">
                <div className="tabs-header">
                    <button 
                        className={activeTab === 'description' ? 'active' : ''} 
                        onClick={() => setActiveTab('description')}
                    >
                        Описание
                    </button>
                    <button 
                        className={activeTab === 'specifications' ? 'active' : ''} 
                        onClick={() => setActiveTab('specifications')}
                    >
                        Характеристики
                    </button>
                    <button 
                        className={activeTab === 'delivery' ? 'active' : ''} 
                        onClick={() => setActiveTab('delivery')}
                    >
                        Доставка и оплата
                    </button>
                </div>

                <div className="tabs-content">
                    {activeTab === 'description' && (
                        <div className="tab-pane">
                            <p className="tab-text">{description}</p>
                            <p className="tab-text">
                                Каждое изделие изготавливается вручную из отборного массива дерева. 
                                Мы используем только натуральные масла для покрытия, которые подчеркивают 
                                текстуру древесины и делают ее более устойчивой к внешним воздействиям.
                            </p>
                        </div>
                    )}

                    {activeTab === 'specifications' && (
                        <div className="tab-pane">
                            <div className="specs-list">
                                {specifications.map((spec, index) => (
                                    <div className="spec-row" key={index}>
                                        <span className="spec-name">{spec.name}</span>
                                        <span className="spec-dots"></span>
                                        <span className="spec-value">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'delivery' && (
                        <div className="tab-pane">
                            <div className="delivery-info">
                                <h3 className="delivery-subtitle">Доставка по Ростову</h3>
                                <p className="delivery-text">
                                    Доставка курьером — 500 ₽ (1-2 рабочих дня)
                                </p>
                                <p className="delivery-text">
                                    Самовывоз из магазина — бесплатно (сегодня)
                                </p>
                                
                                <h3 className="delivery-subtitle">Доставка по России</h3>
                                <p className="delivery-text">
                                    Отправляем транспортными компаниями. Стоимость рассчитывается индивидуально.
                                </p>
                                
                                <h3 className="delivery-subtitle">Оплата</h3>
                                <p className="delivery-text">
                                    Наличными при получении, банковской картой на сайте или по счету для юрлиц.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Похожие товары */}
            {relatedProducts.length > 0 && (
                <div className="related-products container">
                    <h2 className="related-title">Похожие товары</h2>
                    <div className="related-grid">
                        {relatedProducts.map(p => (
                            <div className="related-card" key={p.id} onClick={() => navigate(`/product/${p.id}`)}>
                                <div className="related-image">
                                    <img src={p.image} alt={p.name} />
                                </div>
                                <div className="related-info">
                                    <h3 className="related-name">{p.name}</h3>
                                    <span className="related-price">{p.price} ₽</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Product;