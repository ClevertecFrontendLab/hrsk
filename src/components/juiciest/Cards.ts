import { nanoid } from '@reduxjs/toolkit';

import alex from '~/assets/avatars/alex.png';
import elena from '~/assets/avatars/elena.png';
import lapsha from '~/assets/the_juiciest/lapsha.png';
import lavash from '~/assets/the_juiciest/lavash.png';
import meatballs from '~/assets/the_juiciest/meatballs.png';
import potato from '~/assets/the_juiciest/potato.png';
import rolls from '~/assets/the_juiciest/potato_rolls.png';
import spaghetti from '~/assets/the_juiciest/spaghetti.png';
import tom_yum from '~/assets/the_juiciest/tom_yum.png';
import vetchina from '~/assets/the_juiciest/vetchina.png';

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

export const juiciestCards: Partial<JuiciestCardType>[] = [
    {
        id: nanoid(),
        title: 'Кнели со спагетти\n',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.\n' +
            '\n',
        imageSrc: spaghetti,
        altText: '',
        badgeText: 'Вторые блюда',
        badgeColor: 'lime.50',
        bookmarksCount: 124,
        likesCount: 231,
        spriteId: 'Вторые блюда',
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
        spriteId: 'Национальные',
    },
    {
        id: nanoid(),
        title: 'Пряная ветчина по итальянски',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        imageSrc: vetchina,
        altText: '',
        badgeText: 'Вторые блюда',
        badgeColor: 'lime.50',
        bookmarksCount: 159,
        likesCount: 257,
        spriteId: 'Вторые блюда',
        isRecommend: true,
        recommendBadgeText: 'Елена Высоцкая рекомендует',
        badgeImageSrc: elena,
    },
    {
        id: nanoid(),
        title: 'Лапша с курицей и шафраном',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        imageSrc: lapsha,
        altText: '',
        badgeText: 'Вторые блюда',
        badgeColor: 'lime.50',
        bookmarksCount: 258,
        likesCount: 342,
        spriteId: 'Вторые блюда',
        isRecommend: true,
        recommendBadgeText: 'Alex Cook рекомендует',
        badgeImageSrc: alex,
    },
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
];
