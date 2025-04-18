import { SimpleGrid } from '@chakra-ui/icons';
import { Box, Flex, Link, Text } from '@chakra-ui/react';

import alex from '~/assets/avatars/alex.png';
import ekaterina from '~/assets/avatars/ekaterina.png';
import elena from '~/assets/avatars/elena.png';
import { BlogCard } from '~/components/blogs/BlogCard';

export const Blogs = () => (
    <Flex
        maxWidth='100%'
        width={{ sm: '328px', md: '728px', lg: '880px', xl: '1360px' }}
        height={{ sm: '600px', md: '272px', lg: '264px', xl: '304px' }}
        mt='40px'
        flexDirection='column'
        alignItems='center'
        bgColor='lime.300'
        padding={{ sm: '12px', md: '24px' }}
        gap={{ sm: '12px' }}
        borderRadius='16px'
    >
        <Flex
            width='100%'
            justifyContent='space-between'
            alignItems='center'
            paddingBottom={{ sm: '12px', lg: '16px', xl: '24px' }}
        >
            <Text
                lineHeight='1'
                fontWeight='500'
                fontSize={{ sm: '24px', lg: '36px', xl: '48px' }}
                color='black'
                textAlign='center'
            >
                Кулинарные блоги
            </Text>
            <Link
                _hover='none'
                borderRadius='6px'
                gap='8px'
                padding={{ lg: '0 16px', xl: '0px 24px' }}
                width={{ sm: '149px', lg: '176px' }}
                height={{ sm: '40px', lg: '48px' }}
                display={{ sm: 'none', md: 'flex' }}
                flexDirection='row'
                alignItems='center'
                justifyContent='center'
                fontWeight={600}
                fontSize={{ lg: '16px', xl: '18px' }}
                lineHeight={1.5}
            >
                Все авторы
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
            </Link>
        </Flex>
        <SimpleGrid
            width='100%'
            columns={{ base: 3, md: 3, sm: 1 }}
            spacing={{ sm: 3, lg: 4, xl: 6 }}
        >
            <BlogCard
                name='Елена Высоцкая'
                userName='@elenapovar'
                postText='Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.'
                avatarSrc={elena}
            />
            <BlogCard
                name='Alex Cook'
                userName='@funtasticooking'
                postText='Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.'
                avatarSrc={alex}
            />
            <BlogCard
                name='Екатерина Константинопольская'
                userName='@bake_and_pie'
                postText='Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.'
                avatarSrc={ekaterina}
            />
        </SimpleGrid>

        <Box
            as='button'
            _hover='none'
            borderRadius='6px'
            gap='8px'
            padding={{ sm: '0 16px', xl: '0px 24px' }}
            width={{ sm: '149px', md: '197px' }}
            height={{ sm: '40px', md: '48px' }}
            display={{ sm: 'flex', md: 'none' }}
            flexDirection='row'
            alignItems='center'
            justifyContent='center'
            fontWeight={600}
            fontSize='16px'
            lineHeight={1.5}
        >
            Все авторы
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
);
