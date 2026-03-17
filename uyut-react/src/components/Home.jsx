import { useEffect, useRef, useState } from "react";
import "../styles/home.css";
import { useNavigate, Link } from "react-router-dom";
import Modal from "./Modal"; // Убедитесь, что файл Modal.jsx лежит в той же папке или укажите верный путь

function Home() {
  const textRef = useRef(null);
  const navigate = useNavigate();
  
  // Состояние для управления модальным окном
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (textRef.current) {
        textRef.current.style.transform = `translateY(${scrolled * 0.2}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Модальное окно (рендерится вне основного потока, когда isModalOpen === true) */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <div className="hero-wrapper">
        <div className="hero-minimal">
          <div className="hero-content">
            <span className="hero-tag">·  МЕБЕЛЬ С ДУШОЙ  ·</span>
            <h1 className="hero-title">
              Где <span className="hero-accent">простота</span><br />встречает <span className="hero-accent">тепло</span>
            </h1>
            <p className="hero-subtitle">
              Диваны, стулья, столы — из натурального дерева
            </p>
            <button className="hero-btn" onClick={() => navigate("/catalog")}>
              <span>Смотреть каталог</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="1.2"/>
              </svg>
            </button>
          </div>
          
          <div className="hero-visual" ref={textRef}>
            <div className="hero-image-container">
              <img src="/images/sofa.jpg" alt="Sofa" className="hero-image" />
              <div className="hero-image-overlay"></div>
            </div>
            <div className="hero-shape"></div>
          </div>
        </div>
      </div>

      <div className="marquee">
        <div className="marquee-content">
          <span>· ДИВАНЫ · СТУЛЬЯ · СТОЛЫ · КРОВАТИ · ШКАФЫ · КОМОДЫ ·</span>
          <span>· ДИВАНЫ · СТУЛЬЯ · СТОЛЫ · КРОВАТИ · ШКАФЫ · КОМОДЫ ·</span>
        </div>
      </div>

      <div className="values-wrapper">
        <div className="values-header">
          <span className="values-label">О НАС</span>
          <h2 className="values-title">Почему нам<br />доверяют</h2>
        </div>

        <div className="values-grid">
          <div className="value-item">
            <div className="value-number">01</div>
            <h3 className="value-name">Просто и понятно</h3>
            <p className="value-desc">
              Ничего лишнего — только удобная мебель, 
              которой приятно пользоваться каждый день.
            </p>
            <div className="value-line"></div>
          </div>

          <div className="value-item">
            <div className="value-number">02</div>
            <h3 className="value-name">Натуральное дерево</h3>
            <p className="value-desc">
              Сосна, дуб, ясень. Каждое изделие 
              сохраняет текстуру и рисунок дерева.
            </p>
            <div className="value-line"></div>
          </div>

          <div className="value-item">
            <div className="value-number">03</div>
            <h3 className="value-name">Уют в каждой детали</h3>
            <p className="value-desc">
              Мягкие подушки, тёплое дерево, 
              плавные линии — как дома.
            </p>
            <div className="value-line"></div>
          </div>
        </div>
      </div>

      <div className="timeline-wrapper">
        <div className="timeline-header">
          <span className="timeline-label">ПРОЦЕСС</span>
          <h2 className="timeline-title">Как создается<br />ваша мебель</h2>
        </div>

        <div className="timeline">
          <div className="timeline-line"></div>
          
          <div className="timeline-item left">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-number">01</span>
              <h3 className="timeline-step-title">Выбор дерева</h3>
              <p className="timeline-desc">Только сухая древесина из северных лесов. Каждая доска проверяется вручную мастерами.</p>
              <div className="timeline-tag">🌲 Древесина</div>
            </div>
          </div>

          <div className="timeline-item right">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-number">02</span>
              <h3 className="timeline-step-title">Раскрой</h3>
              <p className="timeline-desc">Точный раскрой с учётом текстуры. Минимум отходов — максимум качества и красоты.</p>
              <div className="timeline-tag">✂️ Точность</div>
            </div>
          </div>

          <div className="timeline-item left">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-number">03</span>
              <h3 className="timeline-step-title">Сборка</h3>
              <p className="timeline-desc">Ручная сборка на старинных шиповых соединениях. Никаких гвоздей и скоб — только дерево.</p>
              <div className="timeline-tag">🔨 Мастерство</div>
            </div>
          </div>

          <div className="timeline-item right">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-number">04</span>
              <h3 className="timeline-step-title">Шлифовка</h3>
              <p className="timeline-desc">Многоступенчатая шлифовка до идеальной гладкости. Поверхность становится шелковой на ощупь.</p>
              <div className="timeline-tag">✨ Гладкость</div>
            </div>
          </div>

          <div className="timeline-item left">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-number">05</span>
              <h3 className="timeline-step-title">Отделка</h3>
              <p className="timeline-desc">Натуральное масло и воск. Сохраняем тепло и текстуру дерева на долгие годы.</p>
              <div className="timeline-tag">🕯️ Защита</div>
            </div>
          </div>
        </div>
      </div>

      <div className="cta-wrapper">
        <div className="cta-container">
          <div className="cta-content">
            <span className="cta-label">ГОТОВЫ СОЗДАТЬ УЮТ?</span>
            <h2 className="cta-title">Воплотим ваши идеи<br />в натуральном дереве</h2>
            <p className="cta-text">
              Индивидуальное изготовление мебели по вашим размерам и эскизам. 
              Работаем с частными заказчиками и дизайнерами.
            </p>
            
            <div className="cta-buttons">
              {/* <button className="cta-btn-primary" onClick={() => navigate("/catalog")}>
                <span>Перейти в каталог</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="1.2"/>
                </svg>
              </button> */}
              <button className="cta-btn-secondary" onClick={() => setIsModalOpen(true)}>
                <span>Связаться с нами</span>
              </button>
            </div>
            
            <div className="cta-links">
              <Link to="/catalog" className="cta-link">Диваны</Link>
              <span className="cta-link-dot">•</span>
              <Link to="/catalog" className="cta-link">Стулья</Link>
              <span className="cta-link-dot">•</span>
              <Link to="/catalog" className="cta-link">Столы</Link>
              <span className="cta-link-dot">•</span>
              <Link to="/catalog" className="cta-link">Кровати</Link>
              <span className="cta-link-dot">•</span>
              <Link to="/catalog" className="cta-link">Шкафы</Link>
            </div>
          </div>
          
          <div className="cta-decoration">
            <div className="cta-line"></div>
            <div className="cta-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;