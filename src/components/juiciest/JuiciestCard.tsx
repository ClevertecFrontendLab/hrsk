import { CardBody } from '@chakra-ui/icons';
import { Badge, Box, Button, Card, Heading, HStack, Image, Text } from '@chakra-ui/react';

import { Reactions } from '~/components/juiciest/Reactions';
import { SpriteIcon } from '~/components/sprite_icon/SpriteIcon';

type PropsType = {
    title?: string;
    description?: string;
    spritePath?: string;
    spriteId?: string;
    imageSrc?: string;
    badgeText?: string;
    badgeColor?: string;
    bookmarksCount?: number;
    likesCount?: number;
    altText?: string;
    viewBox?: string;
    boxSize?: string;
    isRecommend?: boolean;
    recommendBadgeColor?: string;
    recommendBadgeText?: string;
    badgeImageSrc?: string;
};

export const JuiciestCard = (props: PropsType) => {
    const {
        title,
        description,
        spritePath,
        spriteId: id,
        imageSrc,
        badgeText,
        bookmarksCount,
        likesCount,
        altText,
        badgeColor,
        viewBox = '4',
        boxSize = '16px',
        isRecommend = false,
        recommendBadgeColor = 'lime.150',
        recommendBadgeText,
        badgeImageSrc,
    } = props;

    return (
        <Card
            width={{ sm: '328px', md: '356px', lg: '880px', xl: '668px' }}
            height={{ sm: '128px', lg: '244px' }}
            borderRadius='8px'
            border='1px'
            borderColor='blackAlpha.200'
            overflow='hidden'
            display='flex'
            flexDirection='row'
        >
            <Box position='relative'>
                <Image
                    src={imageSrc}
                    alt={altText}
                    objectFit='cover'
                    maxWidth={{ sm: '158px', lg: '346px' }}
                    height='100%'
                />
                {isRecommend && (
                    <Badge
                        position='absolute'
                        display={{ sm: 'none', lg: 'flex' }}
                        flexDirection='row'
                        bgColor={recommendBadgeColor}
                        width='fit-content'
                        height='24px'
                        padding='2px 8px'
                        borderRadius='4px'
                        alignItems='center'
                        gap='8px'
                        left={{ md: '8px', xl: '24px' }}
                        bottom='20px'
                        fontWeight={{ sm: 600 }}
                        fontSize={{ sm: '12px' }}
                        textTransform='inherit'
                    >
                        <Image src={badgeImageSrc} maxWidth='16px' maxHeight='16px' />
                        {recommendBadgeText}
                    </Badge>
                )}
            </Box>
            <CardBody
                padding={{ sm: '8px 8px 4px 8px', lg: '20px 24px 20px 24px' }}
                display='flex'
                flexDirection='column'
                justifyContent='space-between'
            >
                <HStack
                    display='flex'
                    justifyContent='space-between'
                    margin={{ sm: '0 4px' }}
                    marginBottom={{ lg: '24px' }}
                >
                    <Badge
                        display='flex'
                        flexDirection='row'
                        bgColor={badgeColor}
                        minWidth='fit-content'
                        height='24px'
                        padding='2px 8px'
                        borderRadius='4px'
                        alignItems='center'
                        fontSize={{ sm: '14px' }}
                        fontWeight={{ sm: 400 }}
                        gap='8px'
                        position={{ sm: 'absolute', lg: 'unset' }}
                        top={{ sm: '8px' }}
                        left={{ sm: '8px' }}
                        textTransform='none'
                    >
                        <SpriteIcon
                            boxSize={boxSize}
                            viewBox={viewBox}
                            spritePath={spritePath}
                            spriteId={id}
                        />
                        {badgeText}
                    </Badge>
                    <Reactions likesCount={likesCount} bookmarksCount={bookmarksCount} />
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
                <Box display='flex' justifyContent='flex-end' mt={{ sm: 0, lg: '24px' }} gap='8px'>
                    <Box
                        as='button'
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
                    </Box>
                    <Box
                        as='button'
                        width={{ sm: '24px' }}
                        padding={{ sm: '0px 6px' }}
                        height='24px'
                        color='alphaBlack.800'
                        border='1px solid rgba(0, 0, 0, 0.48)'
                        borderRadius='6px'
                        bg='none'
                        display={{ sm: 'flex', lg: 'none' }}
                        justifyContent='center'
                        alignItems='center'
                        fontWeight={600}
                    >
                        <svg
                            width='12'
                            height='12'
                            viewBox='0 0 12 12'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                fill-rule='evenodd'
                                clip-rule='evenodd'
                                d='M5.99985 3.3075C7.0401 2.23875 9.64035 4.11 5.99985 6.51525C2.35935 4.11 4.9596 2.2395 5.99985 3.309V3.3075Z'
                                fill='black'
                            />
                            <path
                                d='M1.5 1.5C1.5 1.10218 1.65804 0.720644 1.93934 0.43934C2.22064 0.158035 2.60218 0 3 0L9 0C9.39782 0 9.77936 0.158035 10.0607 0.43934C10.342 0.720644 10.5 1.10218 10.5 1.5V11.625C10.5 11.6928 10.4815 11.7594 10.4467 11.8176C10.4118 11.8758 10.3618 11.9234 10.302 11.9554C10.2422 11.9874 10.1748 12.0026 10.1071 11.9994C10.0393 11.9961 9.97372 11.9746 9.91725 11.937L6 9.82575L2.08275 11.937C2.02628 11.9746 1.96067 11.9961 1.89292 11.9994C1.82516 12.0026 1.7578 11.9874 1.698 11.9554C1.6382 11.9234 1.5882 11.8758 1.55334 11.8176C1.51847 11.7594 1.50004 11.6928 1.5 11.625V1.5ZM3 0.75C2.80109 0.75 2.61032 0.829018 2.46967 0.96967C2.32902 1.11032 2.25 1.30109 2.25 1.5V10.9245L5.79225 9.063C5.8538 9.02204 5.92607 9.00019 6 9.00019C6.07393 9.00019 6.1462 9.02204 6.20775 9.063L9.75 10.9245V1.5C9.75 1.30109 9.67098 1.11032 9.53033 0.96967C9.38968 0.829018 9.19891 0.75 9 0.75H3Z'
                                fill='black'
                            />
                        </svg>
                    </Box>
                    <Button
                        color='white'
                        backgroundColor='black.000'
                        width={{ sm: '70px', lg: ' 87px' }}
                        padding={{ sm: '0px 8px', lg: '0px 12px' }}
                        fontSize={{ sm: '12px', lg: '14px' }}
                        height={{ sm: '24px', lg: '32px' }}
                    >
                        Готовить
                    </Button>
                </Box>
            </CardBody>
        </Card>
    );
};
