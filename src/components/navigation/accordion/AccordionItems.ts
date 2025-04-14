import { nanoid } from '@reduxjs/toolkit';

export type MenuItemType = {
    id: string;
    title: string;
};

export type AccordionItemType = {
    id: string;
    title: string;
    menu?: MenuItemType[];
};

export const AccordionItems: AccordionItemType[] = [
    { id: nanoid(), title: 'Салаты' },
    { id: nanoid(), title: 'Закуски' },
    { id: nanoid(), title: 'Первые блюда' },
    { id: nanoid(), title: 'Вторые блюда' },
    { id: nanoid(), title: 'Десерты, выпечка' },
    { id: nanoid(), title: 'Блюда на гриле' },
    {
        id: nanoid(),
        title: 'Веганская кухня',
        menu: [
            { id: nanoid(), title: 'Закуски' },
            { id: nanoid(), title: 'Первые блюда' },
            { id: nanoid(), title: 'Вторе блюда' },
            { id: nanoid(), title: 'Гарниры' },
            { id: nanoid(), title: 'Десерты' },
            { id: nanoid(), title: 'Выпечка' },
            { id: nanoid(), title: 'Сыроедческие блюда' },
            { id: nanoid(), title: 'Напитки' },
        ],
    },
    { id: nanoid(), title: 'Детские блюда' },
    { id: nanoid(), title: 'Лечебное питание' },
    { id: nanoid(), title: 'Национальные' },
    { id: nanoid(), title: 'Соусы' },
    { id: nanoid(), title: 'Напитки' },
    { id: nanoid(), title: 'Заготовки' },
];
