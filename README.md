# ПетроЭнергоМаш - Лазерная резка

Корпоративный сайт компании лазерной резки металлов в Санкт-Петербурге.

## Технологии

- React 18 + TypeScript
- Vite
- Tailwind CSS + Material-UI
- React Router
- React Hook Form + Yup
- OpenReplay Analytics

## Установка

```bash
git clone https://github.com/NtQзuilty/PEM_lazer.git
cd PEM_lazer
npm install
```

## Запуск

```bash
npm run dev
npm run build
npm run preview
```

## Скрипты

| Команда    | Описание            |
| ---------- | ------------------- |
| `dev`      | Сервер разработки   |
| `build`    | Сборка проекта      |
| `lint`     | Проверка кода       |
| `lint:fix` | Исправление ошибок  |
| `format`   | Форматирование кода |
| `test`     | Запуск тестов       |

## Структура

```
src/
├── components/     # React компоненты
├── contexts/       # Контексты (OrderForm)
├── hooks/          # Пользовательские хуки
├── analytics/      # OpenReplay настройки
├── config.ts       # Конфигурация
└── index.css       # Глобальные стили
```

## Основные страницы

- `/` - Главная
- `/laser-cutting` - Лазерная резка
- `/portfolio` - Портфолио
- `/about` - О компании
- `/contacts` - Контакты
- `/help` - FAQ
