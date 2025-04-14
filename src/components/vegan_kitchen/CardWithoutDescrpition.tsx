import { CardBody } from '@chakra-ui/icons';
import { Button, Card, Heading, HStack } from '@chakra-ui/react';

import { SpriteIcon } from '~/components/sprite_icon/SpriteIcon';

type Props = {
    title?: string;
    spritePath?: string;
    spriteId?: string;
};

export const CardWithoutDescription = (props: Props) => {
    const { title, spritePath, spriteId } = props;

    return (
        <Card
            width='100%'
            height='100%'
            borderRadius='8px'
            border='1px'
            overflow='hidden'
            borderColor='blackAlpha.200'
            display='flex'
            flexDirection='row'
            alignItems='center'
            _hover={{ boxShadow: 'cardsShadow' }}
        >
            <CardBody padding={{ sm: '14px', md: '12px', xl: '14px 24px 14px 24px' }} width='100%'>
                <HStack
                    display='flex'
                    flexDirection='row'
                    alignItems='center'
                    gap={{ sm: '8px', xl: '12px' }}
                    position='relative'
                >
                    <SpriteIcon
                        boxSize='24px'
                        viewBox='24px 24px'
                        spritePath={spritePath}
                        spriteId={spriteId}
                    />
                    <Heading
                        fontSize={{ lg: '18px', xl: '20px' }}
                        fontWeight={500}
                        lineHeight={1.5}
                        isTruncated
                        maxWidth={{ sm: '194px', md: '106px', lg: '148px', xl: '485px' }}
                    >
                        {title}
                    </Heading>
                    <Button
                        variant='outlined'
                        borderWidth='1px'
                        borderColor='lime.600'
                        fontSize={{ sm: '12px' }}
                        color='lime.600'
                        position='absolute'
                        padding={{ sm: '0 8px' }}
                        right='0'
                        width={{ sm: '70px', xl: '87px' }}
                        height={{ sm: '32px' }}
                    >
                        Готовить
                    </Button>
                </HStack>
            </CardBody>
        </Card>
    );
};
