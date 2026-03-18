// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useState, useEffect, useRef } from "react";

// function Header() {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const [isScrolled, setIsScrolled] = useState(false);
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     const [isSearchOpen, setIsSearchOpen] = useState(false);
//     const [searchQuery, setSearchQuery] = useState("");
//     const searchInputRef = useRef(null);

//     useEffect(() => {
//         const handleScroll = () => {
//             setIsScrolled(window.scrollY > 50);
//         };
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     // Фокус на поле поиска при открытии
//     useEffect(() => {
//         if (isSearchOpen && searchInputRef.current) {
//             searchInputRef.current.focus();
//         }
//     }, [isSearchOpen]);

//     // Закрытие поиска при нажатии Escape
//     useEffect(() => {
//         const handleEsc = (e) => {
//             if (e.key === 'Escape') {
//                 setIsSearchOpen(false);
//                 setSearchQuery("");
//             }
//         };
//         window.addEventListener('keydown', handleEsc);
//         return () => window.removeEventListener('keydown', handleEsc);
//     }, []);

//     // Закрытие поиска при клике вне
//     useEffect(() => {
//         const handleClickOutside = (e) => {
//             if (!e.target.closest('.header-search') && !e.target.closest('.search-icon')) {
//                 setIsSearchOpen(false);
//                 setSearchQuery("");
//             }
//         };
//         document.addEventListener('click', handleClickOutside);
//         return () => document.removeEventListener('click', handleClickOutside);
//     }, []);

//     const handleSearch = (e) => {
//         e.preventDefault();
//         if (searchQuery.trim()) {
//             // Переходим на страницу каталога с параметром поиска
//             navigate(`/catalog?search=${encodeURIComponent(searchQuery)}`);
//             setIsSearchOpen(false);
//             setSearchQuery("");
//         }
//     };

//     return (
//         <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
//             {/* Декоративные элементы */}
//             <div className="header-decor-elements">
//                 <div className="header-decor header-decor-1"></div>
//                 <div className="header-decor header-decor-2"></div>
//                 <div className="header-decor header-decor-3"></div>
//             </div>

//             {/* Логотип */}
//             <Link to="/" className="logo">
//                 <span className="logo-text">УЮТ</span>
//                 <span className="logo-dot"></span>
//             </Link>

//             {/* Навигация */}
//             <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
//                 <Link 
//                     to="/catalog" 
//                     className={location.pathname === '/catalog' ? 'active' : ''}
//                     onClick={() => setIsMobileMenuOpen(false)}
//                 >
//                     <span className="nav-text">Каталог</span>
//                     <span className="nav-hover-effect"></span>
//                 </Link>
//                 <Link 
//                     to="/collections"
//                     className={location.pathname === '/collections' ? 'active' : ''}
//                     onClick={() => setIsMobileMenuOpen(false)}
//                 >
//                     <span className="nav-text">Коллекции</span>
//                     <span className="nav-hover-effect"></span>
//                 </Link>
//                 <Link 
//                     to="/about"
//                     className={location.pathname === '/about' ? 'active' : ''}
//                     onClick={() => setIsMobileMenuOpen(false)}
//                 >
//                     <span className="nav-text">О нас</span>
//                     <span className="nav-hover-effect"></span>
//                 </Link>
//                 <Link 
//                     to="/contacts"
//                     className={location.pathname === '/contacts' ? 'active' : ''}
//                     onClick={() => setIsMobileMenuOpen(false)}
//                 >
//                     <span className="nav-text">Контакты</span>
//                     <span className="nav-hover-effect"></span>
//                 </Link>
//             </nav>

//             {/* Дополнительные действия */}
//             <div className="header-actions">
//                 <div className="header-search-wrapper">
//                     <button 
//                         className={`action-btn ${isSearchOpen ? 'active' : ''}`} 
//                         aria-label="Поиск"
//                         onClick={() => setIsSearchOpen(!isSearchOpen)}
//                     >
//                         <span className="action-icon search-icon"></span>
//                         <span className="action-tooltip">Поиск</span>
//                     </button>
                    
//                     {/* Выпадающее поле поиска */}
//                     <div className={`header-search ${isSearchOpen ? 'open' : ''}`}>
//                         <form onSubmit={handleSearch}>
//                             <input
//                                 ref={searchInputRef}
//                                 type="text"
//                                 placeholder="Поиск мебели..."
//                                 value={searchQuery}
//                                 onChange={(e) => setSearchQuery(e.target.value)}
//                                 className="search-input-header"
//                             />
//                             <button type="submit" className="search-submit">
//                                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//                                     <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.2"/>
//                                     <path d="M11 11L15 15" stroke="currentColor" strokeWidth="1.2"/>
//                                 </svg>
//                             </button>
//                         </form>
//                     </div>
//                 </div>
//             </div>

//             {/* Кнопка мобильного меню */}
//             <button 
//                 className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`} 
//                 aria-label="Меню"
//                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             >
//                 <span></span>
//                 <span></span>
//                 <span></span>
//             </button>

//             {/* Декоративная линия под хедером */}
//             <div className="header-decoration">
//                 <div className="decoration-line"></div>
//                 <div className="decoration-glow"></div>
//             </div>
//         </header>
//     );
// }

// export default Header;

// Header.jsx
// Header.jsx
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const searchInputRef = useRef(null);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Фокус на поле поиска при открытии
    useEffect(() => {
        if (isSearchOpen && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [isSearchOpen]);

    // Закрытие поиска при нажатии Escape
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') {
                setIsSearchOpen(false);
                setSearchQuery("");
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    // Закрытие поиска при клике вне
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!e.target.closest('.header-search') && !e.target.closest('.search-icon')) {
                setIsSearchOpen(false);
                setSearchQuery("");
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    // Блокировка скролла при открытом мобильном меню
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    // Закрытие меню при нажатии Escape
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape' && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [isMobileMenuOpen]);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/catalog?search=${encodeURIComponent(searchQuery)}`);
            setIsSearchOpen(false);
            setSearchQuery("");
        }
    };

    const closeMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
            {/* Декоративные элементы */}
            <div className="header-decor-elements">
                <div className="header-decor header-decor-1"></div>
                <div className="header-decor header-decor-2"></div>
                <div className="header-decor header-decor-3"></div>
            </div>

            {/* Логотип */}
            <Link to="/" className="logo" onClick={closeMenu}>
                <span className="logo-text">УЮТ</span>
                <span className="logo-dot"></span>
            </Link>

            {/* Навигация */}
            <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`} ref={menuRef}>
                {/* Добавляем ссылку на главную в начало списка */}
                <Link 
                    to="/" 
                    className={location.pathname === '/' ? 'active' : ''}
                    onClick={closeMenu}
                >
                    <span className="nav-text">Главная</span>
                    <span className="nav-hover-effect"></span>
                </Link>
                <Link 
                    to="/catalog" 
                    className={location.pathname === '/catalog' ? 'active' : ''}
                    onClick={closeMenu}
                >
                    <span className="nav-text">Каталог</span>
                    <span className="nav-hover-effect"></span>
                </Link>
                <Link 
                    to="/collections"
                    className={location.pathname === '/collections' ? 'active' : ''}
                    onClick={closeMenu}
                >
                    <span className="nav-text">Коллекции</span>
                    <span className="nav-hover-effect"></span>
                </Link>
                <Link 
                    to="/about"
                    className={location.pathname === '/about' ? 'active' : ''}
                    onClick={closeMenu}
                >
                    <span className="nav-text">О нас</span>
                    <span className="nav-hover-effect"></span>
                </Link>
                <Link 
                    to="/contacts"
                    className={location.pathname === '/contacts' ? 'active' : ''}
                    onClick={closeMenu}
                >
                    <span className="nav-text">Контакты</span>
                    <span className="nav-hover-effect"></span>
                </Link>
            </nav>

            {/* Дополнительные действия */}
            <div className="header-actions">
                <div className="header-search-wrapper">
                    <button 
                        className={`action-btn ${isSearchOpen ? 'active' : ''}`} 
                        aria-label="Поиск"
                        onClick={() => setIsSearchOpen(!isSearchOpen)}
                    >
                        <span className="action-icon search-icon"></span>
                        <span className="action-tooltip">Поиск</span>
                    </button>
                    
                    {/* Выпадающее поле поиска */}
                    <div className={`header-search ${isSearchOpen ? 'open' : ''}`}>
                        <form onSubmit={handleSearch}>
                            <input
                                ref={searchInputRef}
                                type="text"
                                placeholder="Поиск мебели..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="search-input-header"
                            />
                            <button type="submit" className="search-submit">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.2"/>
                                    <path d="M11 11L15 15" stroke="currentColor" strokeWidth="1.2"/>
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
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