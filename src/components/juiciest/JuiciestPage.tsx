import { SimpleGrid } from '@chakra-ui/icons';
import { Box, Flex } from '@chakra-ui/react';

import { juiciestCards } from '~/components/juiciest/Cards';
import { JuiciestCard } from '~/components/juiciest/JuiciestCard';
import { VeganKitchen } from '~/components/vegan_kitchen/VeganKitchen';

import { Header } from '../common/Header';

export const JuiciestPage = () => (
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
            <Header title='Самое сочное' />
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 1, xl: 2 }} spacing={{ sm: 3, lg: 4, xl: 6 }}>
                {juiciestCards.map((card) => (
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
            <VeganKitchen
                description='Интересны не только убеждённым вегетарианцам, но и тем,
                кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.'
            />
        </Flex>
    </Flex>
);
