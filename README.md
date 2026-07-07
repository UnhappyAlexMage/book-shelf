# Book shelf

Проект реализован как Frontend-приложение с использованием MSW для эмуляции backend API и построен с упором на архитектуру, масштабируемость и бизнес-логику.

---
# 1. Как запустить проект:

## Локальный запуск

Чтобы запустить проект локально, выполните следующие команды в директории `book-shelf`:

```bash
# Установка зависимостей:
npm install

# Запуск dev-сервера:
npm run dev
```

### Отсановка проекта:
```txt
Ctrl + C
```

# 2. Используемый стек:

## Frontend:

- TailwindCSS
- TypeScript
- Axios
- React
- Vite
- React Icons
- React Router
- TanStack Query
- Zustand
- Yup + React Hook Form
- OpenLayers

---

## Mock Backend

- MSW (Mock Service Worker)

---

# 3. Описание архитектуры:

```bash
src/
├── api/              # Слой работы с API: Axios + TanStack Query.
├── assets/           # Статические ресурсы приложения.
├── components/       # Переиспользуемые UI-компоненты.
├── entities/         # Бизнес-сущности и типы приложения.
├── hooks/            # Кастомные React hooks: дребезг для поиска и получение роли
├── mocks/            # Mock backend на базе mock data, MSW: handlers, fake API endpoints
├── pages/            # Страницы приложения: основные блоки для использования в routes
├── routes/           # Конфигурация маршрутизации приложения: React Router routes, lazy loading.
├── shared/           # Общие утилиты и переиспользуемая логика: lib/ ("Псевдо-коллекици библиотек" для корректного отображения данных), ui/ (Переиспользуемые компоненты), validators/ (Для валидации данных).
├── store/            # Создание глобального клиентского хранилища и управление им, через астомные хуки.
```

---