import { CardBody } from '@chakra-ui/icons';
import {
    Badge,
    Box,
    Button,
    Card,
    CardFooter,
    Heading,
    HStack,
    Image,
    Stack,
    Text,
} from '@chakra-ui/react';
import { Link } from 'react-router';

import { breadcrumbsObj } from '~/components/header/breadcrumbs/BreadcrumbsObj';
import { Reactions } from '~/components/juiciest/Reactions';
import { SpriteIcon } from '~/components/sprite_icon/SpriteIcon';

type PropsType = {
    id: string;
    title: string;
    description: string;
    category: string;
    subcategory: string;
    image: string;
    bookmarks: number;
    likes: number;
    spritePath?: string;
    badgeColor?: string;
    badges: string[];
};

export const DraftCard = (props: PropsType) => {
    const {
        id,
        title,
        description,
        image,
        bookmarks,
        likes,
        category,
        subcategory,
        spritePath = '/sprite.svg',
        // spriteId,
        badgeColor = 'lime.50',
        badges,
    } = props;

    if (badges)
        return (
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                width={{ sm: '328px', md: '356px', lg: '880px', xl: '668px' }}
                height={{ sm: '128px', lg: '244px' }}
                borderRadius='8px'
                border='1px'
                borderColor='blackAlpha.200'
                display='flex'
                flexDirection='row'
                _hover={{ boxShadow: 'cardsShadow' }}
                position='relative'
            >
                <Image
                    src={image}
                    alt={title}
                    objectFit='cover'
                    maxWidth={{ sm: '158px', lg: '346px' }}
                    height='100%'
                />
                <Box
                    display='flex'
                    flexDirection='column'
                    position='absolute'
                    left='4px'
                    top='4px'
                    gap='4px'
                >
                    {badges.map((badge) => (
                        <Badge
                            display='flex'
                            bgColor={badgeColor}
                            fontWeight={400}
                            fontSize={{ sm: '14px' }}
                            minWidth='fit-content'
                            height='24px'
                            padding='2px 8px'
                            borderRadius='4px'
                            alignItems='center'
                            textTransform='none'
                        >
                            <SpriteIcon
                                boxSize='16px'
                                viewBox='16px 16px'
                                spritePath={spritePath}
                                spriteId={breadcrumbsObj[badge]}
                            />
                            {breadcrumbsObj[badge]}
                        </Badge>
                    ))}
                </Box>

                <Stack>
                    <CardBody
                        padding={{ sm: '8px 8px 4px 8px', lg: '20px 24px 20px 24px' }}
                        display='flex'
                        flexDirection='column'
                        justifyContent='space-between'
                    >
                        <HStack
                            display='flex'
                            alignItems='center'
                            justifyContent='flex-end'
                            position='relative'
                        >
                            <Reactions likesCount={likes} bookmarksCount={bookmarks} />
                        </HStack>
                        <Box>
                            <Heading
                                fontSize={{ sm: '16px', lg: '20px' }}
                                maxHeight='fit-content'
                                height='100%'
                                fontWeight={500}
                                lineHeight={1.4}
                                mb={{ sm: '20px', lg: '8px' }}
                                textAlign='left'
                                noOfLines={{ sm: 2, lg: 1 }}
                            >
                                {title}
                            </Heading>
                            <Box display={{ sm: 'none', lg: 'flex' }}>
                                <Text
                                    fontWeight={400}
                                    fontSize='14px'
                                    textAlign='left'
                                    sx={{
                                        overflow: 'hidden',
                                        display: '-webkit-box',
                                        WebkitBoxOrient: 'vertical',
                                        WebkitLineClamp: 3,
                                    }}
                                >
                                    {description}
                                </Text>
                            </Box>
                        </Box>
                    </CardBody>

                    <CardFooter
                        display='flex'
                        justifyContent='flex-end'
                        padding={{ sm: '8px 8px 4px 8px', lg: '20px 24px 20px 24px' }}
                        // mt={{sm: 0, lg: '24px'}}
                        gap='8px'
                    >
                        <Button
                            variant='outlined'
                            width={{ sm: '70px', lg: ' 122px' }}
                            padding={{ sm: '0px 8px', lg: '0px 12px' }}
                            height='32px'
                            color='alphaBlack.800'
                            border='1px solid rgba(0, 0, 0, 0.48)'
                            borderRadius='6px'
                            bg='none'
                            display={{ sm: 'none', lg: 'flex' }}
                            justifyContent='center'
                            alignItems='center'
                            fontWeight={600}
                            fontSize={{ sm: '12px', lg: '14px' }}
                            gap='8px'
                        >
                            <svg
                                width='14'
                                height='14'
                                viewBox='0 0 14 14'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    fill-rule='evenodd'
                                    clip-rule='evenodd'
                                    d='M6.99983 3.85875C8.21345 2.61187 11.2471 4.795 6.99983 7.60112C2.75258 4.795 5.7862 2.61275 6.99983 3.8605V3.85875Z'
                                    fill='black'
                                />
                                <path
                                    d='M1.75 1.75C1.75 1.28587 1.93437 0.840752 2.26256 0.512563C2.59075 0.184374 3.03587 0 3.5 0L10.5 0C10.9641 0 11.4092 0.184374 11.7374 0.512563C12.0656 0.840752 12.25 1.28587 12.25 1.75V13.5625C12.25 13.6416 12.2285 13.7193 12.1878 13.7872C12.1471 13.855 12.0888 13.9106 12.019 13.948C11.9492 13.9853 11.8706 14.0031 11.7916 13.9993C11.7125 13.9955 11.636 13.9703 11.5701 13.9265L7 11.4634L2.42987 13.9265C2.36399 13.9703 2.28745 13.9955 2.20841 13.9993C2.12936 14.0031 2.05077 13.9853 1.981 13.948C1.91123 13.9106 1.8529 13.855 1.81222 13.7872C1.77155 13.7193 1.75004 13.6416 1.75 13.5625V1.75ZM3.5 0.875C3.26794 0.875 3.04538 0.967187 2.88128 1.13128C2.71719 1.29538 2.625 1.51794 2.625 1.75V12.7452L6.75763 10.5735C6.82943 10.5257 6.91375 10.5002 7 10.5002C7.08625 10.5002 7.17057 10.5257 7.24238 10.5735L11.375 12.7452V1.75C11.375 1.51794 11.2828 1.29538 11.1187 1.13128C10.9546 0.967187 10.7321 0.875 10.5 0.875H3.5Z'
                                    fill='black'
                                />
                            </svg>
                            Сохранить
                        </Button>
                        <Button
                            as={Link}
                            to={`/${category}/${subcategory}/${id}`}
                            variant='contained'
                            color='white'
                            backgroundColor='black.000'
                            width={{ sm: '70px', lg: ' 87px' }}
                            padding={{ sm: '0px 8px', lg: '0px 12px' }}
                            fontSize={{ sm: '12px', lg: '14px' }}
                            height={{ sm: '24px', lg: '32px' }}
                            data-test-id={`card-link-${id}`}
                        >
                            Готовить
                        </Button>
                    </CardFooter>
                </Stack>
            </Card>
        );
};
