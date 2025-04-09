import { Flex, Stack, Text, VStack } from '@chakra-ui/react';

import { CardWithoutDescription } from '~/components/vegan_kitchen/CardWithoutDescrpition';
import { VeganCard } from '~/components/vegan_kitchen/VeganCard';

type VeganKitchenProps = {
    description?: string;
};

export const VeganKitchen = (props: VeganKitchenProps) => {
    const { description } = props;

    return (
        <Flex
            marginTop='40px'
            direction='column'
            alignItems='center'
            gap='24px'
            borderColor='blackAlpha.200'
            borderTopWidth='1px'
            width={{ sm: '328px', md: '728px', lg: '880px', xl: '1360px' }}
            maxWidth='100%'
        >
            <Flex
                width='100%'
                display={{ sm: 'column', lg: 'flex' }}
                alignItems='center'
                justifyContent={{ xl: 'space-between' }}
                paddingTop='24px'
            >
                <Text
                    lineHeight='1'
                    fontWeight='500'
                    fontSize={{ sm: '24px', lg: '36px', xl: '48px' }}
                    color='black'
                    textAlign='left'
                    paddingBottom={{ sm: '12px' }}
                >
                    Веганская кухня
                </Text>
                <Text fontSize={{ lg: '16px' }} lineHeight={1.5} whiteSpace={{ sm: 'pre-line' }}>
                    {description}
                </Text>
            </Flex>
            <Stack
                display='flex'
                flexDirection={{ sm: 'column', md: 'row' }}
                spacing={{ md: 3, lg: 4, xl: 6 }}
                width='100%'
                gap={{ sm: '12px' }}
            >
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
                <VStack maxWidth={{ md: '240px', lg: '282px', xl: '668px' }} width='100%'>
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
            </Stack>
        </Flex>
    );
};
