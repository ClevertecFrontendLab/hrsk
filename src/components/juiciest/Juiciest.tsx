import { SimpleGrid } from '@chakra-ui/icons';
import { Box, Flex, Text } from '@chakra-ui/react';

import alex from '~/assets/avatars/alex.png';
import elena from '~/assets/avatars/elena.png';
import lapsha from '~/assets/the_juiciest/lapsha.png';
import spaghetti from '~/assets/the_juiciest/spaghetti.png';
import tom_yum from '~/assets/the_juiciest/tom_yum.png';
import vetchina from '~/assets/the_juiciest/vetchina.png';
import { JuiciestCard } from '~/components/juiciest/JuiciestCard';

export const Juiciest = () => (
    <Flex height='100%' width='1360px' maxWidth='100%' mt='40px' flexDirection='column'>
        <Flex width='100%' justifyContent='space-between' alignItems='center' marginBottom='24px'>
            <Text
                fontFamily='Inter'
                lineHeight='1'
                fontWeight='500'
                fontSize='48px'
                color='black'
                textAlign='center'
            >
                Самое сочное
            </Text>
            <Box
                backgroundColor='lime.400'
                as='button'
                borderRadius='6px'
                padding='0px 24px'
                width='197px'
                height='48px'
                display='flex'
                alignItems='center'
                fontWeight={600}
                fontSize='16px'
                lineHeight={1.5}
                justifyContent='space-between'
                data-test-id='juiciest-link'
            >
                Вся подборка
                <svg
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M1 8.00001C1 7.8674 1.05268 7.74022 1.14645 7.64645C1.24021 7.55268 1.36739 7.50001 1.5 7.50001H13.293L10.146 4.35401C10.0521 4.26012 9.99937 4.13278 9.99937 4.00001C9.99937 3.86723 10.0521 3.73989 10.146 3.64601C10.2399 3.55212 10.3672 3.49937 10.5 3.49937C10.6328 3.49937 10.7601 3.55212 10.854 3.64601L14.854 7.64601C14.9006 7.69245 14.9375 7.74763 14.9627 7.80837C14.9879 7.86912 15.0009 7.93424 15.0009 8.00001C15.0009 8.06577 14.9879 8.13089 14.9627 8.19164C14.9375 8.25238 14.9006 8.30756 14.854 8.35401L10.854 12.354C10.7601 12.4479 10.6328 12.5006 10.5 12.5006C10.3672 12.5006 10.2399 12.4479 10.146 12.354C10.0521 12.2601 9.99937 12.1328 9.99937 12C9.99937 11.8672 10.0521 11.7399 10.146 11.646L13.293 8.50001H1.5C1.36739 8.50001 1.24021 8.44733 1.14645 8.35356C1.05268 8.25979 1 8.13261 1 8.00001V8.00001Z'
                        fill='black'
                    />
                </svg>
            </Box>
        </Flex>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            <JuiciestCard
                title='Кнели со спагетти'
                description={`Как раз после праздников, когда мясные продукты еще остались,
                           но никто их уже не хочет, время варить солянку.`}
                imageSrc={spaghetti}
                altText='Кнели со спагетти'
                badgeText='Вторые блюда'
                badgeColor='lime.50'
                bookmarksCount={85}
                likesCount={152}
                spriteId='Вторые блюда'
            />
            <JuiciestCard
                title='Пряная ветчина по итальянски'
                description='Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.'
                imageSrc={vetchina}
                altText='Пряная ветчина по итальянски'
                badgeText='Вторые блюда'
                badgeColor='lime.50'
                bookmarksCount={159}
                likesCount={257}
                spriteId='Вторые блюда'
                isRecommend={true}
                badgeImageSrc={elena}
                recommendBadgeText='Елена Высоцкая рекомендует'
            />
            <JuiciestCard
                title='Лапша с курицей и шафраном'
                description={`Как раз после праздников, когда мясные продукты еще остались,
                           но никто их уже не хочет, время варить солянку.`}
                imageSrc={lapsha}
                altText='Лапша с курицей и шафраном'
                badgeText='Вторые блюда'
                badgeColor='lime.50'
                bookmarksCount={258}
                likesCount={342}
                spriteId='Вторые блюда'
                isRecommend={true}
                recommendBadgeText='Alex Cook рекомендует'
                badgeImageSrc={alex}
            />
            <JuiciestCard
                title='Том-ям с капустой кимчи'
                description={`Как раз после праздников, когда мясные продукты еще остались,
                           но никто их уже не хочет, время варить солянку.`}
                imageSrc={tom_yum}
                altText='Кнели со спагетти'
                badgeText='Национальные'
                badgeColor='lime.50'
                bookmarksCount={124}
                likesCount={324}
                spriteId='Национальные'
            />
        </SimpleGrid>
    </Flex>
);
