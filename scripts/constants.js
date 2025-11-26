const projectsData = {
  "1": {
    title: "Личный сайт",
    description: "Простой личный сайт-визитка с использованием HTML и CSS. Включает основные разделы: главная, проекты, дневник и контакты.",
    tags: ["HTML", "CSS", "JavaScript"],
    screenshots: [
      {
        src400: "../assets/images/resume_main-foto-400.png",
        src1200: "../assets/images/resume_main-foto.png",
        alt: "Главный экран личного сайта"
      }
    ],
    features: [
      "Адаптивный дизайн",
      "Семантическая верстка",
      "Доступность (a11y)",
      "Оптимизация изображений",
      "Кроссбраузерная совместимость"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript ES6+", "Responsive Design"],
    links: {
      demo: "../index.html",
      github: "https://github.com/TanKisTHaChiLe/personal-website"
    }
  },
  "2": {
    title: "VK-contest-movie-app",
    description: "Приложение для просмотра информации о фильмах с использованием React и TypeScript. Интеграция с API кинопоиска.",
    tags: ["React", "TypeScript", "CRA"],
    screenshots: [
      {
        src400: "../assets/images/vk_film-information--screen-400.png",
        src1200: "../assets/images/vk_film-information--screen.png",
        alt: "Экран информации о фильме VK"
      }
    ],
    features: [
      "Поиск фильмов",
      "Детальная информация о фильмах",
      "Рейтинги и отзывы",
      "Избранное",
      "Адаптивный интерфейс"
    ],
    technologies: ["React", "TypeScript", "CRA", "REST API", "CSS Modules"],
    links: {
      demo: "https://vk-movie-app-demo.netlify.app",
      github: "https://github.com/TanKisTHaChiLe/vk-movie-app"
    }
  },
  "3": {
    title: "stellar-burgers",
    description: "Сервис для заказа бургеров с конструктором ингредиентов. Реализован на React с TypeScript и Webpack.",
    tags: ["React", "TypeScript", "Webpack"],
    screenshots: [
      {
        src400: "../assets/images/stellar-burgers_feed-screen-400.png",
        src1200: "../assets/images/stellar-burgers_feed-screen.png",
        alt: "Лента заказов Stellar Burgers"
      }
    ],
    features: [
      "Конструктор бургеров",
      "Drag & Drop ингредиентов",
      "История заказов",
      "Авторизация",
      "WebSocket для live-обновлений"
    ],
    technologies: ["React", "TypeScript", "Webpack", "Redux", "WebSocket", "Jest"],
    links: {
      demo: "https://stellar-burgers-demo.netlify.app",
      github: "https://github.com/TanKisTHaChiLe/stellar-burgers"
    }
  },
  "4": {
    title: "Портфолио",
    description: "Адаптивное портфолио с использованием Bootstrap. Включает галерею проектов, блог и контактную форму.",
    tags: ["Bootstrap", "HTML", "CSS", "JavaScript"],
    screenshots: [
      {
        src400: "../assets/images/portfolio_main-screen-400.png",
        src1200: "../assets/images/portfolio_main-screen.png",
        alt: "Главный экран портфолио"
      }
    ],
    features: [
      "Bootstrap 5",
      "Адаптивная сетка",
      "Анимации",
      "Форма обратной связи",
      "Оптимизация производительности"
    ],
    technologies: ["Bootstrap 5", "HTML5", "CSS3", "JavaScript", "jQuery"],
    links: {
      demo: "../index.html",
      github: "https://github.com/TanKisTHaChiLe/portfolio-bootstrap"
    }
  }
};