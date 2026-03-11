import { useState, useEffect } from "react";
import "../styles/about.css";

function About() {
    const [activeTeam, setActiveTeam] = useState(null);
    const [activeValue, setActiveValue] = useState(null);

    useEffect(() => {
        const elements = document.querySelectorAll(".about-hero h1, .about-hero p, .about-hero .btn");
        
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

    const story = [
        {
            year: "2015",
            title: "Начало пути",
            description: "Маленькая мастерская в центре города, двое энтузиастов и мечта создавать мебель, которая будет согревать душу."
        },
        {
            year: "2018",
            title: "Первая коллекция",
            description: "Презентация коллекции «Хюгге», которая сразу нашла отклик в сердцах ценителей настоящего качества."
        },
        {
            year: "2020",
            title: "Собственное производство",
            description: "Открытие полноценной мастерской с командой опытных мастеров и дизайнеров."
        },
        {
            year: "2024",
            title: "Сегодня",
            description: "Мы создаём не просто мебель, а атмосферу уюта для тысяч домов по всей стране."
        }
    ];

    const values = [
        {
            id: 1,
            title: "Экологичность",
            description: "Используем только сертифицированную древесину и натуральные материалы. Наше производство безопасно для природы."
        },
        {
            id: 2,
            title: "Ручная работа",
            description: "Каждое изделие проходит через руки мастера. Мы не конвейер, мы создаём с душой."
        },
        {
            id: 3,
            title: "Вневременность",
            description: "Наша мебель не выходит из моды. Она остаётся актуальной через годы, как хорошая книга."
        },
        {
            id: 4,
            title: "Человечность",
            description: "Мы слышим каждого клиента и создаём мебель, которая отвечает именно вашим потребностям."
        }
    ];

    const team = [
        {
            id: 1,
            name: "Анна Соколова",
            role: "Основатель, дизайнер",
            quote: "Мебель должна быть продолжением человека, его тишиной и опорой.",
            image: "/images/team-1.jpg"
        },
        {
            id: 2,
            name: "Дмитрий Волков",
            role: "Главный мастер",
            quote: "В каждом стуле — частица моего сердца. Я чувствую дерево, как живое.",
            image: "/images/team-2.jpg"
        },
        {
            id: 3,
            name: "Елена Новикова",
            role: "Архитектор пространства",
            quote: "Помогаю людям найти гармонию через интерьер. Это магия, которую можно потрогать.",
            image: "/images/team-3.jpg"
        }
    ];

    const stats = [
        { number: "8", label: "лет опыта" },
        { number: "1500+", label: "счастливых семей" },
        { number: "24", label: "мастера" },
        { number: "6", label: "коллекций" }
    ];

    return (
        <>
            {/* HERO SECTION */}
            <section className="about-hero">
                <div className="about-hero-content">
                    <h1>О нас</h1>
                    <p>
                        Мы создаём пространство, в котором хочется жить, 
                        дышать и чувствовать. Каждая деталь — про любовь к дому.
                    </p>
                </div>

                <div className="about-hero-decor">
                    <div className="decor-line"></div>
                    <div className="decor-line"></div>
                    <div className="decor-line"></div>
                    <div className="decor-circle"></div>
                </div>
            </section>

            <div className="horizon"></div>

            {/* STORY SECTION */}
            <section className="story-section">
                <h2 className="section-title">История</h2>
                <p className="section-subtitle">Как всё начиналось и к чему мы пришли</p>

                <div className="story-timeline">
                    {story.map((item, index) => (
                        <div className="story-item" key={index}>
                            <div className="story-year">{item.year}</div>
                            <div className="story-content">
                                <div className="story-dot"></div>
                                <div className="story-card">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* VALUES SECTION */}
            <section className="values-section">
                <div className="values-bg"></div>
                <div className="values-container">
                    <h2 className="section-title">Ценности</h2>
                    <p className="section-subtitle">То, во что мы верим и чем руководствуемся</p>

                    <div className="values-grid">
                        {values.map((value) => (
                            <div 
                                className="value-card" 
                                key={value.id}
                                onMouseEnter={() => setActiveValue(value.id)}
                                onMouseLeave={() => setActiveValue(null)}
                            >
                                <div className="value-icon-wrapper">
                                    <div className={`value-icon-circle ${activeValue === value.id ? 'active' : ''}`}>
                                        <span className="value-icon">{value.icon}</span>
                                    </div>
                                </div>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                                <div className="value-decoration"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* STATS SECTION */}
            <section className="stats-section">
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div className="stat-item" key={index}>
                            <div className="stat-number">{stat.number}</div>
                            <div className="stat-label">{stat.label}</div>
                            <div className="stat-line"></div>
                        </div>
                    ))}
                </div>
            </section>

           
            {/* TEAM SECTION */}
            <section className="team-section">
                <h2 className="section-title">Команда</h2>
                <p className="section-subtitle">Люди, которые вкладывают душу в ваше пространство</p>

                <div className="team-grid">
                    {team.map((member) => (
                        <div 
                            className="team-card" 
                            key={member.id}
                            onMouseEnter={() => setActiveTeam(member.id)}
                            onMouseLeave={() => setActiveTeam(null)}
                        >
                            <div className="team-image-wrapper">
                                <img src={member.image} alt={member.name} className="team-image" />
                                <div className={`team-overlay ${activeTeam === member.id ? 'active' : ''}`}>
                                    <p className="team-quote">{member.quote}</p>
                                </div>
                            </div>
                            <div className="team-info">
                                <h3>{member.name}</h3>
                                <p>{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="about-cta">
                <div className="cta-container">
                    <h2>Приходите знакомиться</h2>
                    <p>
                        Мы всегда рады гостям в нашей мастерской. 
                        Посмотрите, как создаётся мебель, и выпейте с нами чаю.
                    </p>
                    <div className="cta-buttons">
                        <button className="btn btn-primary">Записаться на экскурсию</button>
                        <button className="btn btn-secondary">Связаться с нами</button>
                    </div>
                </div>
            </section>

            <div className="horizon"></div>
        </>
    );
}

export default About;