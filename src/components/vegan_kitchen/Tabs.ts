import { nanoid } from '@reduxjs/toolkit';

export const tabs = [
    { id: nanoid(), path: 'snacks', title: 'Закуски' },
    { id: nanoid(), path: 'courses', title: 'Первые блюда' },
    { id: nanoid(), path: 'main-courses', title: 'Вторые блюда' },
    { id: nanoid(), path: 'said-dishes', title: 'Гарниры' },
    { id: nanoid(), path: 'deserts', title: 'Десерты' },
    { id: nanoid(), path: 'bakery', title: 'Выпечка' },
    { id: nanoid(), path: 'raw-food', title: 'Сыроедческие блюда' },
    { id: nanoid(), path: 'drinks', title: 'Напитки' },
];
