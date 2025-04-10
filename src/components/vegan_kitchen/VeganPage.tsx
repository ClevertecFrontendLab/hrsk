import { SimpleGrid } from '@chakra-ui/icons';
import { Box, Flex, Stack, Tab, TabIndicator, TabList, Tabs, Text, VStack } from '@chakra-ui/react';

import { JuiciestCard } from '~/components/juiciest/JuiciestCard';
import { CardWithoutDescription } from '~/components/vegan_kitchen/CardWithoutDescrpition';
import { tabs } from '~/components/vegan_kitchen/Tabs';
import { VeganCard } from '~/components/vegan_kitchen/VeganCard';
import { veganCards } from '~/components/vegan_kitchen/VeganCards';

import { Header } from '../common/Header';

export const VeganPage = () => (
    <Flex
        flexDirection='column'
        alignItems={{ sm: 'center', md: 'center' }}
        width={{ sm: '360px', md: '768px', lg: '880px', xl: '1360px' }}
        height='100%'
        overflowY='scroll'
        sx={{
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
                display: 'none',
            },
        }}
    >
        <Flex
            width='100%'
            height={{ sm: '644px', md: '368px', lg: '1080px', xl: '584px' }}
            flexDirection='column'
            alignItems='center'
            position='relative'
        >
            <Header title='Веганская кухня' />
            <Tabs paddingBottom='12px'>
                <TabList
                    borderBottom='1px'
                    borderColor='rgba(0, 0, 0, 0.08)'
                    width='1006px'
                    height='42px'
                >
                    {tabs.map((tab) => (
                        <Tab
                            width='fit-content'
                            _selected={{ color: 'lime.600' }}
                            fontSize='16px'
                            fontWeight={500}
                            key={tab.id}
                        >
                            {tab.title}
                        </Tab>
                    ))}
                </TabList>
                <TabIndicator mt='-1.5px' height='2px' bg='lime.600' borderRadius='1px' />
            </Tabs>
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 1, xl: 2 }} spacing={{ sm: 3, lg: 4, xl: 6 }}>
                {veganCards.map((card) => (
                    <JuiciestCard
                        key={card.id}
                        title={card.title}
                        description={card.description}
                        imageSrc={card.imageSrc}
                        altText={card.altText}
                        badgeText={card.badgeText}
                        badgeColor={card.badgeColor}
                        bookmarksCount={card.bookmarksCount}
                        likesCount={card.likesCount}
                        spriteId={card.spriteId}
                        isRecommend={card.isRecommend}
                        badgeImageSrc={card.badgeImageSrc}
                        recommendBadgeText={card.recommendBadgeText}
                    />
                ))}
            </SimpleGrid>
            <Box
                backgroundColor='lime.400'
                as='button'
                borderRadius='6px'
                padding={{ sm: '16px' }}
                width={{ sm: '152px' }}
                height={{ sm: '40px' }}
                display={{ sm: 'flex' }}
                alignItems='center'
                fontWeight={600}
                fontSize='16px'
                lineHeight={1.5}
                marginTop='16px'
            >
                Загурзить еще
            </Box>
            <Deserts
                title='Десерты и выпечка'
                description='Без них невозможно представить себе ни современную, ни традиционную
                кулинарию. Пироги и печенья, блины, пончики, вареники и, конечно, хлеб -
                рецепты изделий из теста многообразны и невероятно популярны.'
            />
        </Flex>
    </Flex>
);

type Props = {
    title: string;
    description: string;
};

export const Deserts = (props: Props) => {
    const { title, description } = props;

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
                    {title}
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
                    badgeText='Детские блюда'
                    bookmarksCount={1}
                    likesCount={1}
                    title='Бананово-молочное желе'
                    description='Молочное желе – это просто, вкусно и полезно, ведь для его приготовления в качестве основы используется молоко.'
                />
                <VeganCard
                    spriteId='Вторые блюда'
                    badgeColor='lime.50'
                    badgeText='Детские блюда'
                    bookmarksCount={2}
                    likesCount={1}
                    title='Нежный сливочно-сырный крем для кексов
'
                    description={
                        'Сливочно-сырным кремом можно украсить кексы, либо другую выпечку,' +
                        'а также этим кремом можно наполнить заварные пирожные.'
                    }
                />
                <VStack maxWidth={{ md: '240px', lg: '282px', xl: '668px' }} width='100%'>
                    <CardWithoutDescription
                        title='Домашние сырные палочки'
                        spriteId='Детские блюда'
                    />
                    <CardWithoutDescription title='Панкейки' spriteId='Национальные' />
                    <CardWithoutDescription
                        title='Воздушное банановое печенье на сковороде'
                        spriteId='Веганская кухня'
                    />
                </VStack>
            </Stack>
        </Flex>
    );
};
