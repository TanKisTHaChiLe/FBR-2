const projectsData = {
  1: {
    title: "Сайт-визитка",
    description:
      "Личный сайт-визитка, разработанный с использованием современных технологий HTML5 и CSS3. Сайт полностью адаптивен и корректно отображается на всех устройствах. Проект демонстрирует навыки семантической верстки и кроссбраузерной совместимости.",
    tags: ["HTML", "CSS"],
    features: [
      "Адаптивный дизайн для всех устройств",
      "Семантическая верстка",
      "Кроссбраузерная совместимость",
    ],
    technologies: ["HTML5", "CSS3", "Flexbox", "Grid", "Responsive Design"],
    screenshots: [
      {
        src400: "../assets/images/resume_main-foto-400.png",
        src1200: "../assets/images/resume_main-foto.png",
        alt: "Главный экран личного сайта",
      },
      {
        src400: "../assets/images/visitka_mobile-screen-400.png",
        src1200: "../assets/images/visitka_mobile-screen.png",
        alt: "Мобильная версия сайта",
      },
    ],
    links: {
      demo: "https://example.com/personal-site",
      github: "https://github.com/username/personal-site",
    },
  },
  2: {
    title: "VK-contest-movie-app",
    description:
      "Веб-приложение для просмотра информации о фильмах(VK-contest-movieapp на гитхабе). В этом проекте я использовал: React/Ts, стейт менеджер MobX, REST API(Axios), реализовал:  поиск по названию, фильтрация по жанрам и годам, пагинация, а также добавление в избранное (с сохранением в localStorage)",
    tags: ["TypeScript", "React", "LocalStorage", "Web App"],
    features: [
      "Поиск",
      "Добавление в избранное",
      "Фильтраци",
      "Сохранение данных в LocalStorage",
      "Адаптивный интерфейс",
      "Валидация ввода",
    ],
    technologies: ["TypeScript", "LocalStorage", "CSS3", "HTML5", "React"],
    screenshots: [
      {
        src400: "../assets/images/vk_film-information--screen-400.png",
        src1200: "../assets/images/vk_film-information--screen.png",
        alt: "Экран информации о фильме",
      },
      {
        src400: "../assets/images/vk_like-screen-400.png",
        src1200: "../assets/images/vk_like-screen.png",
        alt: "Экран избранных фильмов",
      },
    ],
    links: {
      demo: "https://example.com/todo-demo",
      github: "https://github.com/TanKisTHaChiLe/VK-contest-movie-app",
    },
  },
  3: {
    title: "stellar-burgers",
    description:
      "Веб-приложение «Stellar Burgers» представляет собой сервис для заказа бургеров, разработанный на современном стеке технологий: React/TypeScript, стейт-менеджер Redux Toolkit для управления состоянием и React Router для клиентской маршрутизации с взаимодействием через REST API.",
    tags: ["React", "Redux", "API", "Webpack"],
    features: [
      "Конструктор бургеров",
      "Лента заказов",
      "Система авторизации",
      "История заказов",
      "Адаптивный дизайн",
    ],
    technologies: [
      "React",
      "Redux Toolkit",
      "React Router",
      "Styled Components",
      "REST API",
    ],
    screenshots: [
      {
        src400: "../assets/images/stellar-burgers_feed-screen-400.png",
        src1200: "../assets/images/stellar-burgers_feed-screen.png",
        alt: "Лента заказов",
      },
      {
        src400: "../assets/images/stellar-burgers_login-screen-400.png",
        src1200: "../assets/images/stellar-burgers_login-screen.png",
        alt: "Экран авторизации",
      },
      {
        src400: "../assets/images/stellar-burgers_registration-screen-400.png",
        src1200: "../assets/images/stellar-burgers_registration-screen.png",
        alt: "Экран регистрации",
      },
    ],
    links: {
      demo: "https://example.com/store-demo",
      github: "https://github.com/TanKisTHaChiLe/stellar-burgers",
    },
  },
  4: {
    title: "Интернет магазин",
    description:
      "Полнофункциональный интернет-магазин с системой управления состоянием, корзиной покупок и имитацией работы с API. Проект демонстрирует навыки работы с React и современными подходами к разработке веб-приложений",
    tags: ["Bootstrap", "HTML", "CSS"],
    features: [
      "Полностью адаптивный дизайн",
      "Оптимизированная производительность",
      "Плавные анимации",
    ],
    technologies: ["Bootstrap 5", "HTML5", "CSS3", "JavaScript"],
    screenshots: [
      {
        src400: "../assets/images/portfolio_main-screen-400.png",
        src1200: "../assets/images/portfolio_main-screen.png",
        alt: "Главный экран магазина",
      },
      {
        src400: "../assets/images/portfolio_contacts-screen-400.png",
        src1200: "../assets/images/portfolio_contacts-screen.png",
        alt: "Страница контактов",
      },
    ],
    links: {
      demo: "https://example.com/portfolio-demo",
      github: "https://github.com/TanKisTHaChiLe/frontend-and-backend-practice",
    },
  },
};
