import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Header() {
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
            {/* Декоративные элементы */}
            <div className="header-decor-elements">
                <div className="header-decor header-decor-1"></div>
                <div className="header-decor header-decor-2"></div>
                <div className="header-decor header-decor-3"></div>
            </div>

            {/* Логотип */}
            <Link to="/" className="logo">
                <span className="logo-text">УЮТ</span>
                <span className="logo-dot"></span>
            </Link>

            {/* Навигация */}
            <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
                <Link 
                    to="/catalog" 
                    className={location.pathname === '/catalog' ? 'active' : ''}
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    <span className="nav-text">Каталог</span>
                    <span className="nav-hover-effect"></span>
                </Link>
                <Link 
                    to="/collections"
                    className={location.pathname === '/collections' ? 'active' : ''}
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    <span className="nav-text">Коллекции</span>
                    <span className="nav-hover-effect"></span>
                </Link>
                <Link 
                    to="/about"
                    className={location.pathname === '/about' ? 'active' : ''}
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    <span className="nav-text">О нас</span>
                    <span className="nav-hover-effect"></span>
                </Link>
                <Link 
                    to="/contacts"
                    className={location.pathname === '/contacts' ? 'active' : ''}
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    <span className="nav-text">Контакты</span>
                    <span className="nav-hover-effect"></span>
                </Link>
            </nav>

            {/* Дополнительные действия */}
            <div className="header-actions">
                <button className="action-btn" aria-label="Поиск">
                    <span className="action-icon search-icon"></span>
                    <span className="action-tooltip">Поиск</span>
                </button>
                <button className="action-btn cart-btn" aria-label="Корзина">
                    <span className="action-icon cart-icon"></span>
                    <span className="cart-badge">0</span>
                    <span className="action-tooltip">Корзина</span>
                </button>
            </div>

            {/* Кнопка мобильного меню */}
            <button 
                className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`} 
                aria-label="Меню"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            {/* Декоративная линия под хедером */}
            <div className="header-decoration">
                <div className="decoration-line"></div>
                <div className="decoration-glow"></div>
            </div>
        </header>
    );
}

export default Header;