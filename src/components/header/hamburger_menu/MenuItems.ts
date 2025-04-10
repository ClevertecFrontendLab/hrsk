import { nanoid } from '@reduxjs/toolkit';

export type ItemType = {
    id: string;
    title: string;
};

export const menuItems: Record<string, ItemType[]> = {
    ['Салаты']: [
        { id: nanoid(), title: 'Мясные салаты' },
        { id: nanoid(), title: 'Рыбные салаты' },
        { id: nanoid(), title: 'Овощные салаты' },
        { id: nanoid(), title: 'Теплые салаты' },
    ],
    ['Закуски']: [
        { id: nanoid(), title: 'Мясные закуски' },
        { id: nanoid(), title: 'Рыбные закуски' },
        { id: nanoid(), title: 'Овощные закуски' },
        { id: nanoid(), title: 'Теплые закуски' },
        { id: nanoid(), title: 'Бутерброды' },
        { id: nanoid(), title: 'Фастфуд' },
    ],
    ['Первые блюда']: [
        { id: nanoid(), title: 'Мясные супы' },
        { id: nanoid(), title: 'Овощные супы' },
        { id: nanoid(), title: 'Бульоны' },
        { id: nanoid(), title: 'Холодные супы' },
        { id: nanoid(), title: 'Диетические супы' },
    ],
    ['Вторые блюда']: [
        { id: nanoid(), title: 'Мясные' },
        { id: nanoid(), title: 'Рыбные' },
        { id: nanoid(), title: 'Овощные' },
        { id: nanoid(), title: 'Из птицы' },
        { id: nanoid(), title: 'Из грибов' },
        { id: nanoid(), title: 'Из субпродуктов' },
        { id: nanoid(), title: 'На пару' },
        { id: nanoid(), title: 'Пельмени, вареники' },
        { id: nanoid(), title: 'Мучные гарниры' },
        { id: nanoid(), title: 'Овощные гарниры' },
        { id: nanoid(), title: 'Пицца' },
        { id: nanoid(), title: 'Суши' },
    ],
    ['Десерты и выпечка']: [
        { id: nanoid(), title: 'Блины и оладьи' },
        { id: nanoid(), title: 'Пироги и пончики' },
        { id: nanoid(), title: 'Торты' },
        { id: nanoid(), title: 'Рулеты' },
        { id: nanoid(), title: 'Сырники и ватрушки' },
        { id: nanoid(), title: 'Кексы и маффины' },
        { id: nanoid(), title: 'Из слоеного теста' },
        { id: nanoid(), title: 'Из заварного теста' },
        { id: nanoid(), title: 'Из дрожжевого теста' },
        { id: nanoid(), title: 'Булочки и сдоба' },
        { id: nanoid(), title: 'Хлеб' },
        { id: nanoid(), title: 'Тесто на пиццу' },
        { id: nanoid(), title: 'Кремы' },
    ],
    ['Блюда на гриле']: [
        { id: nanoid(), title: 'Говядина' },
        { id: nanoid(), title: 'Свинина' },
        { id: nanoid(), title: 'Птица' },
        { id: nanoid(), title: 'Рыба' },
        { id: nanoid(), title: 'Грибы' },
        { id: nanoid(), title: 'Овощи' },
    ],
    ['Веганская кухня']: [
        { id: nanoid(), title: 'Закуски' },
        { id: nanoid(), title: 'Первые блюда' },
        { id: nanoid(), title: 'Вторые блюда' },
        { id: nanoid(), title: 'Гарниры' },
        { id: nanoid(), title: 'Десерты' },
        { id: nanoid(), title: 'Выпечка' },
        { id: nanoid(), title: 'Сыроедческие блюда' },
        { id: nanoid(), title: 'Напитки' },
    ],
    ['Детские блюда']: [
        { id: nanoid(), title: 'Первые блюда' },
        { id: nanoid(), title: 'Вторые блюда' },
        { id: nanoid(), title: 'Гарниры' },
        { id: nanoid(), title: 'Выпечка' },
        { id: nanoid(), title: 'Без глютена' },
        { id: nanoid(), title: 'Без сахара' },
        { id: nanoid(), title: 'Без аллергенов' },
        { id: nanoid(), title: 'Блюда для прикорма' },
    ],
    ['Лечебное питание']: [
        { id: nanoid(), title: 'Детская диета' },
        { id: nanoid(), title: 'Диета №1' },
        { id: nanoid(), title: 'Диета №2' },
        { id: nanoid(), title: 'Диета №3' },
        { id: nanoid(), title: 'Диета №4' },
        { id: nanoid(), title: 'Диета №5' },
        { id: nanoid(), title: 'Диета №6' },
        { id: nanoid(), title: 'Диета №7' },
        { id: nanoid(), title: 'Диета №8' },
        { id: nanoid(), title: 'Диета №9' },
        { id: nanoid(), title: 'Диета №10' },
        { id: nanoid(), title: 'Диета №11' },
        { id: nanoid(), title: 'Диета №12' },
        { id: nanoid(), title: 'Диета №13' },
        { id: nanoid(), title: 'Диета №14' },

        { id: nanoid(), title: 'Без глютена' },
        { id: nanoid(), title: 'Без аллергенов' },
    ],
    ['Национальные блюда']: [
        { id: nanoid(), title: 'Американская кухня' },
        { id: nanoid(), title: 'Армянская кухня' },
        { id: nanoid(), title: 'Греческая кухня' },
        { id: nanoid(), title: 'Грузинская кухня' },
        { id: nanoid(), title: 'Итальянская кухня' },
        { id: nanoid(), title: 'Испанская кухня' },
        { id: nanoid(), title: 'Китайская кухня' },
        { id: nanoid(), title: 'Мексиканская кухня' },
        { id: nanoid(), title: 'Паназиатская кухня' },
        { id: nanoid(), title: 'Русская кухня' },
        { id: nanoid(), title: 'Турецкая кухня' },
        { id: nanoid(), title: 'Французская кухня' },
        { id: nanoid(), title: 'Шведская кухня' },
        { id: nanoid(), title: 'Японская кухня' },
        { id: nanoid(), title: 'Другая кухня' },
    ],
    ['Соусы']: [
        { id: nanoid(), title: 'Соусы мясные' },
        { id: nanoid(), title: 'Соусы сырные' },
        { id: nanoid(), title: 'Маринады' },
    ],
    ['Домашние заготовки']: [
        { id: nanoid(), title: 'Мясные заготовки' },
        { id: nanoid(), title: 'Рыбные заготовки' },
        { id: nanoid(), title: 'Из огурцов' },
        { id: nanoid(), title: 'Из томатов' },
        { id: nanoid(), title: 'Из грибов' },
        { id: nanoid(), title: 'Овощные заготовки' },
        { id: nanoid(), title: 'Салаты, икра' },
        { id: nanoid(), title: 'Из фруктов и ягод' },
    ],
    ['Напитки']: [
        { id: nanoid(), title: 'Соки и фреши' },
        { id: nanoid(), title: 'Смузи' },
        { id: nanoid(), title: 'Компоты' },
        { id: nanoid(), title: 'Кисели' },
        { id: nanoid(), title: 'Кофе' },
        { id: nanoid(), title: 'Лечебный чай' },
        { id: nanoid(), title: 'Квас' },
        { id: nanoid(), title: 'Коктейли' },
        { id: nanoid(), title: 'Алкогольные' },
    ],
};
