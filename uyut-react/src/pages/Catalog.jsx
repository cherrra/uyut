import { useState, useEffect, useMemo } from "react";
import { products } from "../data/products";
import "../styles/catalog.css";

function Catalog() {
    const [category, setCategory] = useState("all");
    const [search, setSearch] = useState("");
    const [visibleProducts, setVisibleProducts] = useState([]);

    // Используем useMemo чтобы избежать лишних пересчетов
    const filtered = useMemo(() => {
        return products.filter((p) => {
            const matchCategory = category === "all" || p.category === category;
            const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
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
                    // Проверяем, нет ли уже такого продукта
                    if (!prev.some(product => product.id === p.id)) {
                        return [...prev, p];
                    }
                    return prev;
                });
            }, i * 100);
            timers.push(timer);
        });

        // Очищаем таймеры при размонтировании
        return () => {
            timers.forEach(timer => clearTimeout(timer));
        };
    }, [filtered]); // Зависимость от filtered, а не от category и search по отдельности

    // Функция для определения бейджей на основе свойств товара
    const getProductBadge = (product) => {
        // Можно добавить логику на основе свойств товара
        // Например, если есть поле isNew или isHit в данных
        if (product.isNew) return 'Новинка';
        if (product.isHit) return 'Хит';
        if (product.discount) return 'Скидка';
        return '';
    };

    return (
        <>
            <section className="catalog-header">
                <h1>Каталог мебели</h1>

                <div className="catalog-controls">
                    <div className="filters">
                        {["all", "chair", "table", "sofa"].map((cat) => (
                            <button
                                key={cat}
                                className={category === cat ? "active" : ""}
                                onClick={() => setCategory(cat)}
                            >
                                {cat === "all"
                                    ? "Все"
                                    : cat === "chair"
                                    ? "Стулья"
                                    : cat === "table"
                                    ? "Столы"
                                    : "Диваны"}
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
                    </div>
                </div>
            </section>

            <section className="catalog">
                <div className="products-grid">
                    {visibleProducts.length > 0 ? (
                        visibleProducts.map((p) => {
                            const badge = getProductBadge(p);
                            return (
                                <div className="product-card" key={p.id}>
                                    {badge && (
                                        <span className="product-badge">{badge}</span>
                                    )}
                                    <div className="product-img-wrapper">
                                        <img src={p.image} alt={p.name} className="product-img" />
                                        <span className="quick-view">Быстрый просмотр</span>
                                    </div>
                                    <div className="product-title">{p.name}</div>
                                    <div className="product-price">{p.price} ₽</div>
                                    <span className="product-category-tag">
                                        {p.category === "chair" ? "Стул" : 
                                         p.category === "table" ? "Стол" : "Диван"}
                                    </span>
                                </div>
                            );
                        })
                    ) : (
                        <div className="empty-state">
                            <div className="empty-state-icon"></div>
                            <p>По вашему запросу ничего не найдено</p>
                            <button 
                                className="reset-button"
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

                {/* Визуальный акцент справа */}
                <div className="catalog-decor">
                    <div className="decor-line"></div>
                    <div className="decor-line"></div>
                    <div className="decor-circle"></div>
                </div>
            </section>
        </>
    );
}

export default Catalog;