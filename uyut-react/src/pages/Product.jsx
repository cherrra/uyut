import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import "../styles/product.css";

function Product() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
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
        setSelectedImage(0);
        setQuantity(1);
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

    // Функция для увеличения количества
    const increaseQuantity = () => {
        setQuantity(prev => prev + 1);
    };

    // Функция для уменьшения количества
    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    };

    // Функция для добавления в корзину
    const addToCart = () => {
        // Здесь будет логика добавления в корзину
        alert(`Товар "${product.name}" в количестве ${quantity} шт. добавлен в корзину`);
    };

    // Создаем массив из 4 одинаковых изображений (для галереи)
    const productImages = product ? [
        product.image,
        product.image,
        product.image,
        product.image
    ] : [];

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
            {/* Хлебные крошки */}
            <div className="product-breadcrumbs">
                <div className="container">
                    <a href="/">Главная</a> / <a href="/catalog">Каталог</a> / <span>{product.name}</span>
                </div>
            </div>

            <div className="product-main container">
                {/* Левая колонка - изображения */}
                <div className="product-gallery">
                    <div className="product-main-image">
                        <img src={productImages[selectedImage]} alt={product.name} />
                        {product.isNew && <span className="product-badge product-badge-new">Новинка</span>}
                        {product.isHit && <span className="product-badge product-badge-hit">Хит</span>}
                        {product.discount && <span className="product-badge product-badge-discount">-{product.discount}%</span>}
                    </div>
                    <div className="product-thumbnails">
                        {productImages.map((img, index) => (
                            <div 
                                key={index} 
                                className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                                onClick={() => setSelectedImage(index)}
                            >
                                <img src={img} alt={`${product.name} - вид ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Правая колонка - информация */}
                <div className="product-info">
                    <span className="product-category-label">
                        {product.category === "chair" ? "Стулья" : 
                         product.category === "table" ? "Столы" :
                         product.category === "sofa" ? "Диваны" :
                         product.category === "bed" ? "Кровати" :
                         product.category === "wardrobe" ? "Шкафы" : "Полки"}
                    </span>
                    <h1 className="product-title-large">{product.name}</h1>
                    
                    <div className="product-rating">
                        <div className="stars">
                            ★★★★★
                        </div>
                        <span className="rating-count">12 отзывов</span>
                    </div>

                    <div className="product-price-large">
                        {product.price} ₽
                    </div>

                    <p className="product-short-desc">
                        {description}
                    </p>

                    {/* Характеристики кратко */}
                    <div className="product-specs-mini">
                        <div className="spec-item">
                            <span className="spec-label">Материал:</span>
                            <span className="spec-value">Массив дерева</span>
                        </div>
                        <div className="spec-item">
                            <span className="spec-label">Производство:</span>
                            <span className="spec-value">Россия</span>
                        </div>
                        <div className="spec-item">
                            <span className="spec-label">Гарантия:</span>
                            <span className="spec-value">24 мес.</span>
                        </div>
                    </div>

                    {/* Количество и кнопка */}
                    <div className="product-actions">
                        <div className="quantity-selector">
                            <button onClick={decreaseQuantity} className="quantity-btn">−</button>
                            <span className="quantity-value">{quantity}</span>
                            <button onClick={increaseQuantity} className="quantity-btn">+</button>
                        </div>
                        <button className="add-to-cart-btn" onClick={addToCart}>
                            <span>Добавить в корзину</span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="1.2"/>
                            </svg>
                        </button>
                    </div>

                    {/* Дополнительная информация */}
                    <div className="product-meta">
                        <div className="meta-item">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <circle cx="8" cy="8" r="6" stroke="#7ec4ae" strokeWidth="1.2"/>
                                <path d="M8 4V8L10 10" stroke="#7ec4ae" strokeWidth="1.2"/>
                            </svg>
                            <span>Готовность: <strong>в наличии</strong></span>
                        </div>
                        <div className="meta-item">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M2 5L8 2L14 5L8 8L2 5Z" stroke="#7ec4ae" strokeWidth="1.2"/>
                                <path d="M2 8L8 11L14 8" stroke="#7ec4ae" strokeWidth="1.2"/>
                            </svg>
                            <span>Доставка: <strong>от 2 дней</strong></span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Вкладки с подробной информацией */}
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
                    <button 
                        className={activeTab === 'reviews' ? 'active' : ''} 
                        onClick={() => setActiveTab('reviews')}
                    >
                        Отзывы (12)
                    </button>
                </div>

                <div className="tabs-content">
                    {activeTab === 'description' && (
                        <div className="tab-pane description-tab">
                            <div className="description-text">
                                <p>{description}</p>
                                <p>Каждое изделие проходит тщательный контроль качества. Мы используем только проверенные материалы и современные технологии обработки дерева. Наша мебель создается с заботой о вашем комфорте и здоровье.</p>
                                <p>Натуральное дерево сохраняет свою текстуру и рисунок, что делает каждое изделие уникальным. Покрытие безопасным маслом подчеркивает красоту древесины и защищает ее от внешних воздействий.</p>
                            </div>
                        </div>
                    )}

                    {activeTab === 'specifications' && (
                        <div className="tab-pane specifications-tab">
                            <table className="specs-table">
                                <tbody>
                                    {specifications.map((spec, index) => (
                                        <tr key={index}>
                                            <td>{spec.name}</td>
                                            <td>{spec.value}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {activeTab === 'delivery' && (
                        <div className="tab-pane delivery-tab">
                            <h3>Способы доставки</h3>
                            <ul>
                                <li>Курьером по Москве — 500 ₽ (1-2 дня)</li>
                                <li>Самовывоз из шоурума — бесплатно</li>
                                <li>Доставка по России — от 1500 ₽ (5-10 дней)</li>
                            </ul>
                            
                            <h3>Способы оплаты</h3>
                            <ul>
                                <li>Наличными курьеру</li>
                                <li>Банковской картой онлайн</li>
                                <li>Безналичный расчет для юридических лиц</li>
                            </ul>
                        </div>
                    )}

                    {activeTab === 'reviews' && (
                        <div className="tab-pane reviews-tab">
                            <div className="review">
                                <div className="review-header">
                                    <span className="review-author">Анна</span>
                                    <span className="review-date">12 марта 2026</span>
                                </div>
                                <div className="review-rating">★★★★★</div>
                                <p className="review-text">Отличный {product.category === "chair" ? "стул" : 
                                                                   product.category === "table" ? "стол" : 
                                                                   product.category === "sofa" ? "диван" :
                                                                   product.category === "bed" ? "кровать" :
                                                                   product.category === "wardrobe" ? "шкаф" : "полка"}! 
                                   Очень удобный, качество сборки на высоте. Дерево красивое, без сучков. Доставка быстрая. Спасибо!</p>
                            </div>
                            
                            <div className="review">
                                <div className="review-header">
                                    <span className="review-author">Михаил</span>
                                    <span className="review-date">5 марта 2026</span>
                                </div>
                                <div className="review-rating">★★★★★</div>
                                <p className="review-text">Покупал в новую квартиру. Прекрасно вписался в интерьер, очень доволен. Массив дерева выглядит солидно. Рекомендую!</p>
                            </div>
                            
                            <button className="review-btn">Оставить отзыв</button>
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
                                <div className="related-img-wrapper">
                                    <img src={p.image} alt={p.name} />
                                </div>
                                <div className="related-info">
                                    <h3>{p.name}</h3>
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