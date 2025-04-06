import { Flex, HStack, Stack, Text, VStack } from '@chakra-ui/react';

import { CardWithoutDescription } from '~/components/vegan_kitchen/CardWithoutDescrpition';
import { VeganCard } from '~/components/vegan_kitchen/VeganCard';

type VeganKitchenProps = {
    description: string;
};

export const VeganKitchen = (props: VeganKitchenProps) => {
    const { description } = props;

    return (
        <Stack
            marginTop='40px'
            justify='flex-start'
            align='flex-start'
            spacing='24px'
            borderColor='blackAlpha.200'
            borderTopWidth='1px'
            width='1360px'
            maxWidth='100%'
        >
            <Flex width='100%' justifyContent='space-between' alignItems='center' paddingTop='24px'>
                <Text
                    fontFamily='Inter'
                    lineHeight='1'
                    fontWeight='500'
                    fontSize='48px'
                    color='black'
                    textAlign='center'
                >
                    Веганская кухня
                </Text>
                <Text maxWidth='668px' whiteSpace='pre-line'>
                    {description}
                </Text>
            </Flex>
            <HStack display='flex' flexDirection='row' spacing='24px'>
                <VeganCard
                    spriteId='Вторые блюда'
                    badgeColor='lime.50'
                    badgeText='Вторые блюда'
                    bookmarksCount={1}
                    likesCount={1}
                    title='Картошка, тушенная с болгарским перцем и фасолью в томатном соусе'
                    description={
                        '' +
                        'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, -  вариант сытного блюда на каждый день.' +
                        'Фасоль в данном случае заменяет мясо, делая рагу сытным и питательным. Чтобы сократить время  приготовления, возьмём консервированную фасоль.' +
                        'Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт  добавления томатной пасты.'
                    }
                />
                <VeganCard
                    spriteId='Вторые блюда'
                    badgeColor='lime.50'
                    badgeText='Вторые блюда'
                    bookmarksCount={2}
                    likesCount={1}
                    title='Капустные котлеты'
                    description={
                        'Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными.' +
                        'Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.'
                    }
                />
                <VStack maxWidth='668px'>
                    <CardWithoutDescription
                        title='Стейк для вегетарианцев'
                        spriteId='Вторые блюда'
                    />
                    <CardWithoutDescription
                        title='Котлеты из гречки и фасоли'
                        spriteId='Вторые блюда'
                    />
                    <CardWithoutDescription
                        title='Сырный суп с лапшой и брокколи'
                        spriteId='Первые блюда'
                    />
                </VStack>
            </HStack>
        </Stack>
    );
};
