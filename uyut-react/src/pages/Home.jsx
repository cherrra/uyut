import { useEffect } from "react";
import "../styles/home.css";

function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll("h1, p, .btn, .chair");

    elements.forEach((el, i) => {
      el.style.opacity = 0;
      el.style.transform = "translateY(20px)";

      setTimeout(() => {
        el.style.transition = "all 1s ease";
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
      }, i * 300);
    });
  }, []);

  return (
    <>
      <main className="hero">
        <div className="hero-left">
          <h1>
            Тишина формы.<br />
            Тепло дерева.
          </h1>
          <p>
            Мебель, в которой скандинавская простота
            встречается с японской философией пространства.
          </p>
          <button className="btn">Смотреть каталог</button>
        </div>

        <div className="hero-center">
          <img src="/images/sofa.jpg" className="chair" alt="Chair" />
        </div>

        <div className="hero-right">
          <div className="decor">
            <div className="decor-line"></div>
            <div className="decor-line"></div>
            <div className="decor-line"></div>
            <div className="decor-circle"></div>
          </div>
        </div>
      </main>

      <div className="horizon"></div>

<div className="philosophy-grid">

  <div className="philosophy-card">
    <div className="philosophy-icon"></div>
    <h3>Минимализм</h3>
    <p>
      Каждая линия мебели продумана так,
      чтобы пространство оставалось свободным
      и спокойным.
    </p>
  </div>

  <div className="philosophy-card">
    <div className="philosophy-icon"></div>
    <h3>Натуральные материалы</h3>
    <p>
      Мы используем натуральное дерево,
      сохраняя текстуру и характер каждого изделия.
    </p>
  </div>

  <div className="philosophy-card">
    <div className="philosophy-icon"></div>
    <h3>Тактильность</h3>
    <p>
      Мебель должна быть не только красивой,
      но и приятной на ощупь.
    </p>
  </div>

</div>
    </>
  );
}

export default Home;