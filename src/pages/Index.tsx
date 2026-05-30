import Icon from "@/components/ui/icon";

const menuCategories = [
  {
    id: "burgers",
    label: "Бургеры",
    icon: "🍔",
  },
  {
    id: "sides",
    label: "Гарниры",
    icon: "🍟",
  },
  {
    id: "drinks",
    label: "Напитки",
    icon: "🥤",
  },
  {
    id: "desserts",
    label: "Десерты",
    icon: "🍦",
  },
];

const menuItems = {
  burgers: [
    {
      name: "Классик Смэш",
      desc: "Двойная мраморная говядина, чеддер, фирменный соус, маринованные огурцы, бриошь",
      price: "1 400 ₽",
      tag: "Хит",
      tagColor: "var(--primary)",
    },
    {
      name: "Барбекю Блэкаут",
      desc: "Говядина, бекон, карамелизированный лук, BBQ-соус, соус колслоу",
      price: "1 600 ₽",
      tag: null,
      tagColor: null,
    },
    {
      name: "Чили Чиз",
      desc: "Говядина, острый чили, белый чеддер, халапеньо, майонез с чесноком",
      price: "1 500 ₽",
      tag: "Огонь",
      tagColor: "var(--secondary)",
    },
    {
      name: "Мушрум Трюфель",
      desc: "Говядина, жареные грибы, трюфельный майонез, рукола, пармезан",
      price: "1 700 ₽",
      tag: "Шеф",
      tagColor: "var(--accent)",
    },
    {
      name: "Дабл Вестерн",
      desc: "Тройная говядина, двойной бекон, три вида сыра, фирменный соус",
      price: "2 100 ₽",
      tag: null,
      tagColor: null,
    },
    {
      name: "Вегги Делюкс",
      desc: "Бургер из нута и киноа, авокадо, томаты, соус тахини, цельнозерновая булочка",
      price: "1 200 ₽",
      tag: "Веган",
      tagColor: "#22c55e",
    },
  ],
  sides: [
    {
      name: "Картофель Фри",
      desc: "Хрустящий картофель, морская соль, фирменный соус для макания",
      price: "450 ₽",
      tag: null,
      tagColor: null,
    },
    {
      name: "Луковые Кольца",
      desc: "Золотистые кольца в пивном кляре, соус ранч",
      price: "550 ₽",
      tag: "Хит",
      tagColor: "var(--primary)",
    },
    {
      name: "Чили Чизи Фри",
      desc: "Картофель фри, сырный соус, острый чили, зелёный лук",
      price: "650 ₽",
      tag: "Остро",
      tagColor: "var(--secondary)",
    },
    {
      name: "Колслоу",
      desc: "Хрустящая капуста, морковь, фирменная кремовая заправка",
      price: "350 ₽",
      tag: null,
      tagColor: null,
    },
  ],
  drinks: [
    {
      name: "Классический Шейк",
      desc: "Ваниль, шоколад или клубника — на выбор. На натуральном молоке и мороженом",
      price: "600 ₽",
      tag: "Топ",
      tagColor: "var(--primary)",
    },
    {
      name: "Лимонад Дайнер",
      desc: "Свежевыжатый лимон, мята, газировка, тростниковый сахар",
      price: "450 ₽",
      tag: null,
      tagColor: null,
    },
    {
      name: "Крем-Сода Ретро",
      desc: "Ванильный сироп, газировка, шарик мороженого прямо в стакане",
      price: "500 ₽",
      tag: "Ретро",
      tagColor: "var(--accent)",
    },
    {
      name: "Колд Брю Кофе",
      desc: "Холодный концентрат, молоко на выбор, карамельный или шоколадный сироп",
      price: "400 ₽",
      tag: null,
      tagColor: null,
    },
  ],
  desserts: [
    {
      name: "Яблочный Пай",
      desc: "Тёплый пирог по классическому американскому рецепту, ванильное мороженое",
      price: "650 ₽",
      tag: "Классика",
      tagColor: "var(--primary)",
    },
    {
      name: "Брауни Делюкс",
      desc: "Горячий шоколадный брауни, карамельный соус, взбитые сливки",
      price: "700 ₽",
      tag: null,
      tagColor: null,
    },
    {
      name: "Бананы Фостер",
      desc: "Карамелизированные бананы, ром, корица, ванильное мороженое",
      price: "750 ₽",
      tag: "Шеф",
      tagColor: "var(--secondary)",
    },
  ],
};

import { useState } from "react";

export default function Index() {
  const [activeCategory, setActiveCategory] = useState("burgers");

  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">AMERICAN*DINER</div>
        <nav>
          <a href="#menu">Меню</a>
          <a href="#about">О нас</a>
          <a href="#hours">Часы</a>
          <a href="#contacts">Контакты</a>
        </nav>
        <button className="btn-cta">Забронировать</button>
      </header>

      <main>
        {/* Hero */}
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              НАСТОЯЩИЙ
              <br />
              АМЕРИКАНСКИЙ <span>ВКУС</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Классика дайнеров 70-х в сердце города. Сочные бургеры, хрустящий фри и атмосфера, которую не забыть.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <a href="#menu">
                <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                  Смотреть меню
                </button>
              </a>
              <button className="btn-cta" style={{ background: "white" }}>
                Забронировать стол
              </button>
            </div>
          </div>
          <div className="hero-img" style={{ background: "var(--dark)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "24px", padding: "40px" }}>
            <div className="sticker">
              СВЕЖАК
              <br />
              КАЖДЫЙ ДЕНЬ
            </div>
            {/* Декоративные плашки вместо фото */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", width: "100%" }}>
              {[
                { emoji: "🍔", label: "Смэш-бургеры" },
                { emoji: "🍟", label: "Хрустящий фри" },
                { emoji: "🥤", label: "Крем-шейки" },
                { emoji: "🍦", label: "Домашний пай" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "var(--border)",
                    borderColor: "rgba(255,255,255,0.2)",
                    padding: "20px 12px",
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  <div style={{ fontSize: "36px", marginBottom: "8px" }}>{item.emoji}</div>
                  <div style={{ fontWeight: 800, textTransform: "uppercase", fontSize: "12px", letterSpacing: "1px" }}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #AMERICANA
            </div>
          </div>
        </section>

        {/* Marquee */}
        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * СМЭШ-БУРГЕРЫ НА РАСКАЛЁННОЙ ПЛИТЕ * РУЧНЫЕ МОЛОЧНЫЕ ШЕЙКИ * ХРУСТЯЩИЙ ФРИ * ОТКРЫТЫ ДО 2:00 * ЛУЧШИЙ ДАЙНЕР В ГОРОДЕ *
            СМЭШ-БУРГЕРЫ НА РАСКАЛЁННОЙ ПЛИТЕ * РУЧНЫЕ МОЛОЧНЫЕ ШЕЙКИ * ХРУСТЯЩИЙ ФРИ * ОТКРЫТЫ ДО 2:00 * ЛУЧШИЙ ДАЙНЕР В ГОРОДЕ
          </div>
        </div>

        {/* Menu */}
        <section className="section-padding" id="menu">
          <div className="section-header">
            <h2 className="section-title">МЕНЮ</h2>
          </div>

          {/* Category tabs */}
          <div style={{ display: "flex", gap: "12px", marginBottom: "40px", flexWrap: "wrap" }}>
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="btn-cta"
                style={{
                  background: activeCategory === cat.id ? "var(--primary)" : "white",
                  color: activeCategory === cat.id ? "white" : "var(--dark)",
                  borderColor: activeCategory === cat.id ? "var(--dark)" : "var(--dark)",
                  fontSize: "13px",
                }}
              >
                {cat.icon} {cat.label}
              </button>
            ))}
          </div>

          {/* Menu items grid */}
          <div className="menu-grid">
            {menuItems[activeCategory as keyof typeof menuItems].map((item) => (
              <div key={item.name} className="menu-card" style={{ position: "relative" }}>
                {item.tag && (
                  <span
                    className="menu-tag"
                    style={{
                      background: item.tagColor || "var(--primary)",
                      color: item.tagColor === "var(--accent)" ? "var(--dark)" : "white",
                    }}
                  >
                    {item.tag}
                  </span>
                )}
                {/* Emoji placeholder instead of image */}
                <div
                  style={{
                    background: "var(--dark)",
                    height: "160px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "64px",
                    borderBottom: "var(--border)",
                  }}
                >
                  {menuCategories.find((c) => c.id === activeCategory)?.icon}
                </div>
                <div className="menu-card-body">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <h3>{item.name}</h3>
                    <span className="price">{item.price}</span>
                  </div>
                  <p style={{ fontSize: "14px", color: "#666" }}>{item.desc}</p>
                  <button
                    className="btn-cta"
                    style={{ marginTop: "16px", width: "100%", background: "var(--accent)", color: "var(--dark)" }}
                  >
                    В корзину
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section className="retro-vibe" id="about">
          <div>
            <h2 className="vibe-title">МЫ — ЭТО АМЕРИКА.</h2>
            <p className="vibe-text">
              Дайнер открылся в 2024, но ощущается как 1974. Хромированные стойки, красные диваны, музыка на виниле и запах бургеров, 
              который ни с чем не спутаешь. Мы не просто кормим — мы возвращаем во времена, когда еда была простой и честной.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              Наша история
            </button>
          </div>
          <div
            className="vibe-img"
            style={{
              background: "var(--dark)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: "16px",
              padding: "40px",
            }}
          >
            <div style={{ fontSize: "80px" }}>🎵</div>
            <div
              style={{
                fontFamily: "Unbounded, sans-serif",
                color: "white",
                fontSize: "20px",
                fontWeight: 800,
                textAlign: "center",
                textTransform: "uppercase",
                lineHeight: 1.2,
              }}
            >
              ХРום, ВИНИЛ
              <br />
              <span style={{ color: "var(--primary)" }}>И ГОВЯДИНА</span>
            </div>
            <div style={{ display: "flex", gap: "12px", marginTop: "16px" }}>
              {["🍔", "🎸", "🍟", "🥤"].map((e) => (
                <div
                  key={e}
                  style={{
                    width: "50px",
                    height: "50px",
                    background: "rgba(255,255,255,0.1)",
                    border: "2px solid rgba(255,255,255,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "24px",
                  }}
                >
                  {e}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hours & Contacts */}
        <section className="section-padding" id="hours" style={{ borderTop: "var(--border)" }}>
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            ЧАСЫ РАБОТЫ
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "0",
              border: "var(--border)",
            }}
          >
            {[
              { day: "Понедельник — Четверг", hours: "12:00 — 00:00" },
              { day: "Пятница — Суббота", hours: "12:00 — 02:00" },
              { day: "Воскресенье", hours: "12:00 — 23:00" },
              { day: "Кухня закрывается", hours: "за 1 час до закрытия" },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "30px",
                  borderRight: i < 3 ? "var(--border)" : "none",
                  borderBottom: "var(--border)",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "13px", color: "#888", textTransform: "uppercase", fontWeight: 700, marginBottom: "8px" }}>
                  {item.day}
                </div>
                <div
                  style={{
                    fontFamily: "Unbounded, sans-serif",
                    fontSize: "20px",
                    fontWeight: 800,
                    color: "var(--primary)",
                  }}
                >
                  {item.hours}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer id="contacts">
        <div>
          <div className="footer-logo">AMERICAN*DINER</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Твоё место для честной американской еды и ретро-атмосферы. С 2024, но ощущается как 1974.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li><a href="#menu" style={{ color: "inherit", textDecoration: "none" }}>Меню</a></li>
            <li><a href="#about" style={{ color: "inherit", textDecoration: "none" }}>О нас</a></li>
            <li><a href="#hours" style={{ color: "inherit", textDecoration: "none" }}>Часы работы</a></li>
            <li><a href="#contacts" style={{ color: "inherit", textDecoration: "none" }}>Контакты</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Контакты</h4>
          <ul>
            <li>+7 (999) 123-45-67</li>
            <li>info@americandiner.ru</li>
            <li>ул. Центральная, 1</li>
          </ul>
        </div>
      </footer>
    </>
  );
}
