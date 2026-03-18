// import { useState, useEffect, useMemo } from "react";
// import { useNavigate } from "react-router-dom";
// import { products } from "../data/products";
// import "../styles/catalog.css";

// function Catalog() {
//     const navigate = useNavigate();
//     const [category, setCategory] = useState("all");
//     const [search, setSearch] = useState("");
//     const [visibleProducts, setVisibleProducts] = useState([]);

//     // Используем useMemo чтобы избежать лишних пересчетов
//     const filtered = useMemo(() => {
//         return products.filter((p) => {
//             const matchCategory = category === "all" || p.category === category;
//             const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
//                                (p.description && p.description.toLowerCase().includes(search.toLowerCase()));
//             return matchCategory && matchSearch;
//         });
//     }, [category, search]);

//     // Анимация появления карточек
//     useEffect(() => {
//         setVisibleProducts([]);
//         const timers = [];
        
//         filtered.forEach((p, i) => {
//             const timer = setTimeout(() => {
//                 setVisibleProducts((prev) => {
//                     if (!prev.some(product => product.id === p.id)) {
//                         return [...prev, p];
//                     }
//                     return prev;
//                 });
//             }, i * 100);
//             timers.push(timer);
//         });

//         return () => {
//             timers.forEach(timer => clearTimeout(timer));
//         };
//     }, [filtered]);

//     // Функция для определения бейджей
//     const getProductBadge = (product) => {
//         if (product.isNew) return 'Новинка';
//         if (product.isHit) return 'Хит';
//         if (product.discount) return `-${product.discount}%`;
//         return '';
//     };

//     // Функция для получения описания
//     const getProductDescription = (product) => {
//         if (product.description) return product.description;
        
//         // Стандартные описания в зависимости от категории
//         const descriptions = {
//             chair: 'Удобный стул из натурального дерева. Идеально подходит для кухни или столовой.',
//             table: 'Прочный стол из массива дерева. Прекрасно впишется в любой интерьер.',
//             sofa: 'Мягкий диван с деревянным каркасом. Создает уют в вашем доме.',
//             bed: 'Удобная кровать из массива дерева. Обеспечивает здоровый сон.',
//             wardrobe: 'Вместительный шкаф из натурального дерева. Множество отделений.',
//             shelf: 'Стильная полка из дерева. Идеально для книг и декора.'
//         };
        
//         return descriptions[product.category] || 'Мебель из натурального дерева ручной работы';
//     };

//     return (
//         <>
//             <div className="catalog-hero">
//                 <div className="catalog-hero-content">
//                     <span className="catalog-hero-tag">·  НАТУРАЛЬНАЯ МЕБЕЛЬ  ·</span>
//                     <h1 className="catalog-hero-title">
//                         Каталог <span className="catalog-hero-accent">изделий</span>
//                     </h1>
//                     <p className="catalog-hero-subtitle">
//                         Диваны, стулья, столы из натурального дерева
//                     </p>
//                 </div>
//                 <div className="catalog-hero-shape"></div>
//             </div>

//             <div className="catalog-controls-wrapper">
//                 <div className="catalog-controls">
//                     <div className="filters">
//                         {["all", "chair", "table", "sofa", "bed", "wardrobe", "shelf"].map((cat) => (
//                             <button
//                                 key={cat}
//                                 className={category === cat ? "active" : ""}
//                                 onClick={() => setCategory(cat)}
//                             >
//                                 {cat === "all" ? "Все" :
//                                  cat === "chair" ? "Стулья" :
//                                  cat === "table" ? "Столы" :
//                                  cat === "sofa" ? "Диваны" :
//                                  cat === "bed" ? "Кровати" :
//                                  cat === "wardrobe" ? "Шкафы" :
//                                  "Полки"}
//                             </button>
//                         ))}
//                     </div>

//                     <div className="search-wrapper">
//                         <input
//                             type="text"
//                             placeholder="Поиск..."
//                             value={search}
//                             onChange={(e) => setSearch(e.target.value)}
//                             className="search-input"
//                         />
//                         <span className="search-icon"></span>
//                     </div>
//                 </div>
//             </div>

//             <div className="catalog-stats">
//                 <div className="stats-info">
//                     <div className="stats-item">
//                         <span className="stats-number">{filtered.length}</span>
//                         <span className="stats-label">товаров</span>
//                     </div>
//                     <div className="stats-item">
//                         <span className="stats-number">
//                             {category === "all" ? "все" : 
//                              category === "chair" ? "стулья" :
//                              category === "table" ? "столы" :
//                              category === "sofa" ? "диваны" :
//                              category === "bed" ? "кровати" :
//                              category === "wardrobe" ? "шкафы" : "полки"}
//                         </span>
//                         <span className="stats-label">категория</span>
//                     </div>
//                 </div>
//                 {(category !== "all" || search) && (
//                     <button 
//                         className="stats-reset"
//                         onClick={() => {
//                             setCategory("all");
//                             setSearch("");
//                         }}
//                     >
//                         Сбросить
//                     </button>
//                 )}
//             </div>

//             <div className="catalog-grid-wrapper">
//                 <div className="products-grid">
//                     {visibleProducts.length > 0 ? (
//                         visibleProducts.map((p) => {
//                             const badge = getProductBadge(p);
//                             const description = getProductDescription(p);
//                             return (
//                                 <div className="product-card" key={p.id}>
//                                     {badge && (
//                                         <span className="product-badge">{badge}</span>
//                                     )}
//                                     <div className="product-img-wrapper">
//                                         <img src={p.image} alt={p.name} className="product-img" />
//                                         <div className="product-img-overlay"></div>
//                                     </div>
//                                     <div className="product-info">
//                                         <h3 className="product-title">{p.name}</h3>
//                                         <p className="product-description">{description}</p>
//                                         <div className="product-price-row">
//                                             <span className="product-price">{p.price} ₽</span>
//                                             <span className="product-category">
//                                                 {p.category === "chair" ? "Стул" : 
//                                                  p.category === "table" ? "Стол" :
//                                                  p.category === "sofa" ? "Диван" :
//                                                  p.category === "bed" ? "Кровать" :
//                                                  p.category === "wardrobe" ? "Шкаф" : "Полка"}
//                                             </span>
//                                         </div>
//                                     </div>
//                                     <button 
//                                         className="product-card-btn"
//                                         onClick={() => navigate(`/product/${p.id}`)}
//                                     >
//                                         <span>Подробнее</span>
//                                         <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//                                             <path d="M4 8H12M12 8L8 4M12 8L8 12" stroke="currentColor" strokeWidth="1.2"/>
//                                         </svg>
//                                     </button>
//                                     <div className="product-card-line"></div>
//                                 </div>
//                             );
//                         })
//                     ) : (
//                         <div className="empty-state">
//                             <div className="empty-state-icon"></div>
//                             <p>По вашему запросу ничего не найдено</p>
//                             <button 
//                                 className="empty-state-btn"
//                                 onClick={() => {
//                                     setCategory("all");
//                                     setSearch("");
//                                 }}
//                             >
//                                 Сбросить фильтры
//                             </button>
//                         </div>
//                     )}
//                 </div>
//             </div>

//             {/* Декоративные элементы */}
//             <div className="catalog-decor">
//                 <div className="decor-circle"></div>
//                 <div className="decor-line"></div>
//                 <div className="decor-dots">
//                     <span></span>
//                     <span></span>
//                     <span></span>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Catalog;
// Catalog.jsx
import { useState, useEffect, useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { products } from "../data/products";
import "../styles/catalog.css";

function Catalog() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [category, setCategory] = useState("all");
    const [search, setSearch] = useState("");
    const [visibleProducts, setVisibleProducts] = useState([]);

    // Получаем поисковый запрос из URL при загрузке
    useEffect(() => {
        const searchQuery = searchParams.get('search');
        if (searchQuery) {
            setSearch(searchQuery);
        }
    }, [searchParams]);

    // Используем useMemo чтобы избежать лишних пересчетов
    const filtered = useMemo(() => {
        return products.filter((p) => {
            const matchCategory = category === "all" || p.category === category;
            const matchSearch = search === "" || 
                p.name.toLowerCase().includes(search.toLowerCase()) ||
                (p.description && p.description.toLowerCase().includes(search.toLowerCase())) ||
                (p.category && p.category.toLowerCase().includes(search.toLowerCase()));
            return matchCategory && matchSearch;
        });
    }, [category, search]);

    // Анимация появления карточек
    useEffect(() => {
        setVisibleProducts([]);
        const timers = [];
        
        filtered.forEach((p, i) => {
            const timer = setTimeout(() => {
                setVisibleProducts((prev) => {
                    if (!prev.some(product => product.id === p.id)) {
                        return [...prev, p];
                    }
                    return prev;
                });
            }, i * 100);
            timers.push(timer);
        });

        return () => {
            timers.forEach(timer => clearTimeout(timer));
        };
    }, [filtered]);

    // Функция для определения бейджей
    const getProductBadge = (product) => {
        if (product.isNew) return 'Новинка';
        if (product.isHit) return 'Хит';
        if (product.discount) return `-${product.discount}%`;
        return '';
    };

    // Функция для получения описания
    const getProductDescription = (product) => {
        if (product.description) return product.description;
        
        // Стандартные описания в зависимости от категории
        const descriptions = {
            chair: 'Удобный стул из натурального дерева. Идеально подходит для кухни или столовой.',
            table: 'Прочный стол из массива дерева. Прекрасно впишется в любой интерьер.',
            sofa: 'Мягкий диван с деревянным каркасом. Создает уют в вашем доме.',
            bed: 'Удобная кровать из массива дерева. Обеспечивает здоровый сон.',
            wardrobe: 'Вместительный шкаф из натурального дерева. Множество отделений.',
            shelf: 'Стильная полка из дерева. Идеально для книг и декора.'
        };
        
        return descriptions[product.category] || 'Мебель из натурального дерева ручной работы';
    };

    // Подсветка найденного текста
    const highlightText = (text, highlight) => {
        if (!highlight.trim()) return text;
        
        const regex = new RegExp(`(${highlight})`, 'gi');
        const parts = text.split(regex);
        
        return parts.map((part, i) => 
            regex.test(part) ? 
                <span key={i} className="search-highlight">{part}</span> : 
                part
        );
    };

    return (
        <>
            <div className="catalog-hero">
                <div className="catalog-hero-content">
                    <span className="catalog-hero-tag">·  НАТУРАЛЬНАЯ МЕБЕЛЬ  ·</span>
                    <h1 className="catalog-hero-title">
                        Каталог <span className="catalog-hero-accent">изделий</span>
                    </h1>
                    <p className="catalog-hero-subtitle">
                        {search ? `Результаты поиска: "${search}"` : "Диваны, стулья, столы из натурального дерева"}
                    </p>
                </div>
                <div className="catalog-hero-shape"></div>
            </div>

            <div className="catalog-controls-wrapper">
                <div className="catalog-controls">
                    <div className="filters">
                        {["all", "chair", "table", "sofa", "bed", "wardrobe", "shelf"].map((cat) => (
                            <button
                                key={cat}
                                className={category === cat ? "active" : ""}
                                onClick={() => setCategory(cat)}
                            >
                                {cat === "all" ? "Все" :
                                 cat === "chair" ? "Стулья" :
                                 cat === "table" ? "Столы" :
                                 cat === "sofa" ? "Диваны" :
                                 cat === "bed" ? "Кровати" :
                                 cat === "wardrobe" ? "Шкафы" :
                                 "Полки"}
                            </button>
                        ))}
                    </div>

                    <div className="search-wrapper">
                        <input
                            type="text"
                            placeholder="Поиск..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="search-input"
                        />
                        <span className="search-icon"></span>
                        {search && (
                            <button 
                                className="search-clear"
                                onClick={() => setSearch("")}
                            >
                                ×
                            </button>
                        )}
                    </div>
                </div>
            </div>

            <div className="catalog-stats">
                <div className="stats-info">
                    <div className="stats-item">
                        <span className="stats-number">{filtered.length}</span>
                        <span className="stats-label">товаров</span>
                    </div>
                    <div className="stats-item">
                        <span className="stats-number">
                            {category === "all" ? "все" : 
                             category === "chair" ? "стулья" :
                             category === "table" ? "столы" :
                             category === "sofa" ? "диваны" :
                             category === "bed" ? "кровати" :
                             category === "wardrobe" ? "шкафы" : "полки"}
                        </span>
                        <span className="stats-label">категория</span>
                    </div>
                </div>
                {(category !== "all" || search) && (
                    <button 
                        className="stats-reset"
                        onClick={() => {
                            setCategory("all");
                            setSearch("");
                        }}
                    >
                        Сбросить фильтры
                    </button>
                )}
            </div>

            <div className="catalog-grid-wrapper">
                <div className="products-grid">
                    {visibleProducts.length > 0 ? (
                        visibleProducts.map((p) => {
                            const badge = getProductBadge(p);
                            const description = getProductDescription(p);
                            return (
                                <div className="product-card" key={p.id}>
                                    {badge && (
                                        <span className="product-badge">{badge}</span>
                                    )}
                                    <div className="product-img-wrapper">
                                        <img src={p.image} alt={p.name} className="product-img" />
                                        <div className="product-img-overlay"></div>
                                    </div>
                                    <div className="product-info">
                                        <h3 className="product-title">
                                            {search ? highlightText(p.name, search) : p.name}
                                        </h3>
                                        <p className="product-description">
                                            {search ? highlightText(description, search) : description}
                                        </p>
                                        <div className="product-price-row">
                                            <span className="product-price">{p.price} ₽</span>
                                            <span className="product-category">
                                                {p.category === "chair" ? "Стул" : 
                                                 p.category === "table" ? "Стол" :
                                                 p.category === "sofa" ? "Диван" :
                                                 p.category === "bed" ? "Кровать" :
                                                 p.category === "wardrobe" ? "Шкаф" : "Полка"}
                                            </span>
                                        </div>
                                    </div>
                                    <button 
                                        className="product-card-btn"
                                        onClick={() => navigate(`/product/${p.id}`)}
                                    >
                                        <span>Подробнее</span>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M4 8H12M12 8L8 4M12 8L8 12" stroke="currentColor" strokeWidth="1.2"/>
                                        </svg>
                                    </button>
                                    <div className="product-card-line"></div>
                                </div>
                            );
                        })
                    ) : (
                        <div className="empty-state">
                            <div className="empty-state-icon">🔍</div>
                            <p>По вашему запросу "{search}" ничего не найдено</p>
                            <p className="empty-state-hint">Попробуйте изменить запрос или сбросить фильтры</p>
                            <button 
                                className="empty-state-btn"
                                onClick={() => {
                                    setCategory("all");
                                    setSearch("");
                                }}
                            >
                                Сбросить фильтры
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Декоративные элементы */}
            <div className="catalog-decor">
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

export default Catalog;