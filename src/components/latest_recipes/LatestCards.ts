import { CardProps } from '@chakra-ui/icons';
import { nanoid } from '@reduxjs/toolkit';

import kotleti from '~/assets/latest_recipes/kotleti.png';
import oladi from '~/assets/latest_recipes/oladi.png';
import salat from '~/assets/latest_recipes/salat.png';
import solyanka from '~/assets/latest_recipes/solyanka.png';

type LatestRecipesCard = {
    id: string;
    title: string;
    description: string;
    badge?: string;
    bookmarksCount?: number;
    likesCount?: number;
    image?: string;
    display?: CardProps['display'];
};

export const LatestRecipesCards: LatestRecipesCard[] = [
    {
        id: nanoid(),
        title: 'Солянка с грибами',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        image: solyanka,
        badge: 'Первые блюда',
        bookmarksCount: 1,
        likesCount: 0,
        display: { sm: 'block', md: 'block', lg: 'block', xl: 'block' },
    },
    {
        id: nanoid(),
        title: 'Капустные котлеты',
        description:
            'Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.',
        image: kotleti,
        badge: 'Веганская кухня',
        bookmarksCount: 2,
        likesCount: 1,
        display: { sm: 'block', md: 'block', lg: 'block', xl: 'block' },
    },
    {
        id: nanoid(),
        title: `Оладьи на кефире "Пышные"`,
        description:
            'Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак.',
        image: oladi,
        badge: 'Десерты, выпечка',
        bookmarksCount: 0,
        likesCount: 1,
        display: { sm: 'none', md: 'block', lg: 'block', xl: 'block' },
    },
    {
        id: nanoid(),
        title: `Салат "Здоровье"`,
        description:
            'Сельдерей очень полезен для здоровья, пора набираться витаминов. Не  салат, а сплошное удовольствие:) Вкусный, необычный, а главное быстрый.',
        image: salat,
        badge: 'Салаты',
        bookmarksCount: 0,
        likesCount: 0,
        display: { sm: 'none', md: 'block', lg: 'none', xl: 'block' },
    },
    {
        id: nanoid(),
        title: `Оладьи на кефире "Пышные"`,
        description:
            'Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак.',
        image: oladi,
        badge: 'Десерты, выпечка',
        bookmarksCount: 0,
        likesCount: 1,
        display: { sm: 'none', md: 'block', lg: 'none', xl: 'none' },
    },
];
