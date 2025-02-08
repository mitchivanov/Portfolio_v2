import React from "react";
import "./home.css";
import Header from "../components/header";
import SpiralRibbon from "../components/SpiralRibbon";
import { Link } from "react-router-dom";

function Home() {
  return (
    <body>
      <div>
        <Header />
        <main>
          <section className="hero">
            <div className="hero-image"></div>

            {/* Оборачиваем текст в общий контейнер c классом .hero-text 
                и добавляем класс fade-in-up элементам, которые нужно анимировать */}
            <div className="hero-text">
              <h1 className="fade-in-up">Привет👋,</h1>
              <p className="fade-in-up">
                я Александр, fullstack разработчик
              </p>
              <span className="text-hero fade-in-up">
                Создавая решения, которые вдохновляют.
              </span>
              
              <Link to="/about" className="about-me-link fade-in-up">
                <div className="about-me">
                  <div>
                    <p>Обо мне</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 184 24"
                      fill="#d3d3d365"
                      width="184px"
                      height="20px"
                    >
                      <path d="M48 6L24 22 0 6 4 2 24 18 44 2z" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </section>
          <SpiralRibbon />
        </main>
      </div>
    </body>
  );
}

export default Home;
