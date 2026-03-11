import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Header() {
    const location = useLocation();

    return (
        <header className="header">
            {/* Декоративные элементы */}
            <div className="header-decor-elements">
                <div className="header-decor header-decor-1"></div>
                <div className="header-decor header-decor-2"></div>
            </div>

            {/* Логотип */}
            <Link to="/" className="logo">
                УЮТ
            </Link>

            {/* Навигация */}
            <nav className="nav">
                <Link 
                    to="/catalog" 
                    className={location.pathname === '/catalog' ? 'active' : ''}
                >
                    Каталог
                </Link>
                <Link 
                    to="/collections"
                    className={location.pathname === '/collections' ? 'active' : ''}
                >
                    Коллекции
                </Link>
                <Link 
                    to="/about"
                    className={location.pathname === '/about' ? 'active' : ''}
                >
                    О нас
                </Link>
                <Link 
                    to="/contacts"
                    className={location.pathname === '/contacts' ? 'active' : ''}
                >
                    Контакты
                </Link>
            </nav>

            {/* Дополнительные действия */}
            <div className="header-actions">
                <button aria-label="Поиск">
                    <span className="action-icon search-icon"></span>
                </button>
                <button aria-label="Корзина">
                    <span className="action-icon cart-icon"></span>
                </button>
            </div>

            {/* Кнопка мобильного меню */}
            <button className="mobile-menu-toggle" aria-label="Меню">
                <span></span>
                <span></span>
                <span></span>
            </button>

            {/* Декоративная линия под хедером */}
            <div className="header-decoration"></div>
        </header>
    );
}

export default Header;