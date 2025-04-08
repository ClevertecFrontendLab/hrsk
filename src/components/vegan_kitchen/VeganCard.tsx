import { CardBody } from '@chakra-ui/icons';
import { Badge, Card, Heading, HStack, Text } from '@chakra-ui/react';

import { Reactions } from '~/components/latest_recipes/CustomCard';
import { SpriteIcon } from '~/components/sprite_icon/SpriteIcon';

type PropsType = {
    title: string;
    description: string;
    spritePath?: string;
    spriteId?: string;
    imageSrc?: string;
    badgeText?: string;
    badgeColor?: string;
    bookmarksCount?: number;
    likesCount?: number;
};

export const VeganCard = ({
    title,
    description,
    spritePath,
    spriteId: id,
    badgeText,
    badgeColor,
    bookmarksCount,
    likesCount,
}: PropsType) => (
    <Card
        maxW='100%'
        maxWidth={{ md: '232px', lg: '282px', xl: '322px' }}
        height='100%'
        borderRadius='8px'
        border='1px'
        overflow='hidden'
        borderColor='blackAlpha.200'
    >
        <CardBody padding={{ sm: '12px', lg: '16px', xl: '24px 24px 20px 24px' }}>
            <Heading
                fontSize={{ md: '16px', lg: '20px' }}
                fontWeight={500}
                lineHeight={1.4}
                pb='8px'
                isTruncated
            >
                {title}
            </Heading>
            <Text
                fontWeight={400}
                fontSize='14px'
                sx={{
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 3,
                }}
            >
                {description}
            </Text>
            <HStack display='flex' pt='24px' justifyContent='space-between'>
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
                        spriteId={id}
                    />
                    {badgeText}
                </Badge>
                <Reactions likesCount={likesCount} bookmarksCount={bookmarksCount} />
            </HStack>
        </CardBody>
    </Card>
);
