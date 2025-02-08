import React from 'react';
import './Timeline.css';



const Timeline = () => {
  const timelineItems = [
    {
      year: '~2 года назад',
      title: 'Начал изучать HTML и CSS',
      description: 'Основы верстки, адаптивный дизайн, первые шаги в разработке',
    },
    {
      year: '~1.5 года назад',
      title: 'Создал первый проект',
      description: 'Небольшой сайт с использованием HTML/CSS и JavaScript',
    },
    {
      year: '~1 год назад',
      title: 'Изучение Django',
      description: 'Создание серверной логики, работа с базами данных и API',
    },
    {
      year: '~6 месяцев назад',
      title: 'Первый масштабный проект',
      description: 'Реализация сложного функционала, интеграция API',
    },
    {
      year: '~3 месяца назад',
      title: 'FastAPI и React',
      description: 'Начал изучать современные технологии для создания fullstack-приложений',
    },
  ];

  return (
    <section className="timeline">
      {timelineItems.map((item, index) => (
        <div key={index} className={`timeline-item timeline-item-${index}`}>
          <div className="timeline-content">
            <h3 className="timeline-title">{item.title}</h3>
            <p className="timeline-description">{item.description}</p>
          </div>
          <div className="timeline-year">{item.year}</div>
        </div>
      ))}
    </section>
  );
};

export default Timeline;
