import { nanoid } from '@reduxjs/toolkit';

import garlic_potatoes from '~/assets/the_juiciest/garlic_potatoes.png';
import lavash from '~/assets/the_juiciest/lavash.png';
import meatballs from '~/assets/the_juiciest/meatballs.png';
import potato from '~/assets/the_juiciest/potato.png';
import rolls from '~/assets/the_juiciest/potato_rolls.png';
import puri from '~/assets/the_juiciest/puri.png';
import tom_yum from '~/assets/the_juiciest/tom_yum.png';

type JuiciestCardType = {
    id: string;
    title: string;
    description: string;
    imageSrc: string;
    altText: string;
    badgeText: string;
    badgeColor: string;
    bookmarksCount: number;
    likesCount: number;
    spriteId: string;
    isRecommend: boolean;
    recommendBadgeText: string;
    badgeImageSrc: string;
};

export const veganCards: Partial<JuiciestCardType>[] = [
    {
        id: nanoid(),
        title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
        description:
            'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день. Фасоль в данном случае заменяет  мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.',
        imageSrc: potato,
        altText: '',
        badgeText: 'Вторые блюда',
        badgeColor: 'lime.50',
        bookmarksCount: 120,
        likesCount: 180,
        spriteId: 'Вторые блюда',
    },
    {
        id: nanoid(),
        title: 'Картофельные рулетики с грибами',
        description:
            'Рекомендую всем приготовить постное блюдо из картофеля и грибов.  Готовится это блюдо без яиц, без мяса и без сыра, из самых простых  ингредиентов, а получается очень вкусно и сытно. Постный рецепт  картофельных рулетиков с грибами, в томатном соусе, - на обед, ужин и  даже на праздничный стол!',
        imageSrc: rolls,
        altText: '',
        badgeText: 'Детские блюда',
        badgeColor: 'lime.50',
        bookmarksCount: 85,
        likesCount: 180,
        spriteId: 'Детские блюда',
    },
    {
        id: nanoid(),
        title: 'Том-ям с капустой кимчи\n',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        imageSrc: tom_yum,
        altText: '',
        badgeText: 'Национальные',
        badgeColor: 'lime.50',
        bookmarksCount: 124,
        likesCount: 324,
        spriteId: 'Национальные блюда',
    },
    {
        id: nanoid(),
        title: 'Овощная лазанья из лаваша',
        description:
            'Большое, сытное блюдо для ценителей блюд без мяса! Такая лазанья  готовится с овощным соусом и соусом бешамель, а вместо листов для  лазаньи используется тонкий лаваш.',
        imageSrc: lavash,
        altText: '',
        badgeText: 'Блюда на гриле',
        badgeColor: 'lime.50',
        bookmarksCount: 85,
        likesCount: 152,
        spriteId: 'Блюда на гриле',
    },
    {
        id: nanoid(),
        title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
        description:
            'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят  для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
        imageSrc: meatballs,
        altText: '',
        badgeText: 'Вторые блюда',
        badgeColor: 'lime.50',
        bookmarksCount: 85,
        likesCount: 150,
        spriteId: 'Вторые блюда',
    },
    {
        id: nanoid(),
        title: 'Тефтели из булгура и чечевицы, запечённые в томатном соусе',
        description:
            'Тефтели из булгура и чечевицы – яркие и питательные, отлично подходят  для постного и вегетарианского меню. Тефтели получаются нежными, а также сочными и ароматными благодаря использованию томатного соуса и душистых пряностей.',
        imageSrc: meatballs,
        altText: '',
        badgeText: 'Вторые блюда',
        badgeColor: 'lime.50',
        bookmarksCount: 85,
        likesCount: 150,
        spriteId: 'Вторые блюда',
    },
    {
        id: nanoid(),
        title: 'Чесночная картошка',
        description:
            'Такая картошечка украсит любой семейный обед! Все будут в полном  восторге, очень вкусно!' +
            'Аромат чеснока, хрустящая корочка на картошечке - просто объедение! Отличная идея для обеда или ужина, готовится просто!',
        imageSrc: garlic_potatoes,
        altText: '',
        badgeText: 'Национальные',
        badgeColor: 'lime.50',
        bookmarksCount: 124,
        likesCount: 324,
        spriteId: 'Национальные блюда',
    },
    {
        id: nanoid(),
        title: 'Пури',
        description:
            'Пури - это индийские жареные лепешки, которые готовятся из пресного  теста.' +
            'Рецепт лепешек пури требует самых доступных ингредиентов,и  времени на приготовление хрустящих лепешек уйдет мало.',
        imageSrc: puri,
        altText: '',
        badgeText: 'Вторые блюда',
        badgeColor: 'lime.50',
        bookmarksCount: 85,
        likesCount: 150,
        spriteId: 'Вторые блюда',
    },
];
