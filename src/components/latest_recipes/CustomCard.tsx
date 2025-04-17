import { CardBody, CardProps } from '@chakra-ui/icons';
import {
    Badge,
    Box,
    Card,
    CardFooter,
    Heading,
    HStack,
    Image,
    Text,
    useMediaQuery,
} from '@chakra-ui/react';

import { Reactions } from '~/components/common/Reactions';
import { SpriteIcon } from '~/components/sprite_icon/SpriteIcon';

type PropsType = {
    title: string;
    description: string;
    spritePath?: string;
    spriteId?: string;
    imageSrc?: string;
    badgeText?: string;
    badgeColor?: string;
    boxSize?: string;
    viewBox: string;
    bookmarksCount?: number;
    likesCount?: number;
    display?: CardProps['display'];
    position?: CardProps['position'];
    zIndex?: CardProps['zIndex'];
};

export const CustomCard = ({
    title,
    description,
    spritePath = '/sprite.svg',
    spriteId: id,
    imageSrc,
    badgeText,
    bookmarksCount,
    likesCount,
    display,
    position,
    badgeColor,
    viewBox,
    boxSize,
    zIndex,
}: PropsType) => {
    const [isVisible] = useMediaQuery('(min-width: 769px)');

    return (
        <Card
            position={position}
            width={{
                sm: '158px',
                md: '158px',
                lg: '277px',
                xl: '322px',
            }}
            height={{ sm: '220px', lg: '402px', xl: '414px' }}
            borderRadius='8px'
            border='1px'
            borderColor='blackAlpha.200'
            display={display}
            right={{ md: position && '-110px', lg: position && '-264px' }}
            zIndex={zIndex}
            _hover={{ boxShadow: 'cardsShadow' }}
        >
            <CardBody padding={0} position='relative'>
                <Badge
                    display='flex'
                    visibility={isVisible ? 'hidden' : 'visible'}
                    flexDirection='row'
                    bgColor={badgeColor}
                    maxWidth='fit-content'
                    height='24px'
                    padding='2px 8px'
                    borderRadius='4px'
                    alignItems='center'
                    fontSize={{ sm: '14px' }}
                    fontWeight={{ sm: 400 }}
                    gap='8px'
                    position={{ sm: 'absolute' }}
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
                <Image src={imageSrc} alt='Солянка с грибами' objectFit='cover' />
            </CardBody>
            <CardFooter
                display='flex'
                flexDirection='column'
                padding={{ sm: '8px', md: '8px', lg: '12px', xl: '16px 24px 20px 24px' }}
            >
                <Heading
                    fontSize={{ sm: '16px', md: '16px', lg: '18px', xl: '20px' }}
                    fontWeight={500}
                    lineHeight={1.4}
                    whiteSpace={{
                        sm: 'break-spaces',
                        md: 'break-spaces',
                        lg: 'no-wrap',
                        xl: 'no-wrap',
                    }}
                    isTruncated
                    noOfLines={{ sm: 2, md: 2, lg: 1, xl: 1 }}
                >
                    {title}
                </Heading>
                <Box display={{ sm: 'none', md: 'none', lg: 'block', xl: 'block' }}>
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
                <HStack
                    display='flex'
                    pt={{ sm: '8px', md: '8px', lg: '24px', xl: '24px' }}
                    justifyContent='space-between'
                >
                    <Badge
                        display={{ sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }}
                        bgColor='lime.150'
                        minWidth='fit-content'
                        height='24px'
                        padding='2px 8px'
                        borderRadius='4px'
                        alignItems='center'
                    >
                        <SpriteIcon
                            boxSize='16px'
                            viewBox='16px 16px'
                            spritePath={spritePath}
                            spriteId={id}
                        />
                        {badgeText}
                    </Badge>
                    <Reactions likesCount={likesCount} bookmarksCount={bookmarksCount} />
                </HStack>
            </CardFooter>
        </Card>
    );
};
