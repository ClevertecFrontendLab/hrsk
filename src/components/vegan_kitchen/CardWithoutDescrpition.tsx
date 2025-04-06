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
            width='668px'
            maxHeight='56px'
            height='100%'
            borderRadius='8px'
            border='1px'
            overflow='hidden'
            borderColor='blackAlpha.200'
            display='flex'
            flexDirection='row'
            alignItems='center'
        >
            <CardBody padding='14px 24px 14px 24px' width='100%' position='relative'>
                <HStack display='flex' flexDirection='row' alignItems='center' gap='12px'>
                    <SpriteIcon
                        boxSize='24px'
                        viewBox='24px 24px'
                        spritePath={spritePath}
                        spriteId={spriteId}
                    />
                    <Heading fontSize='20px' fontWeight={500} lineHeight={1.4}>
                        {title}
                    </Heading>
                    <Button
                        borderWidth='1px'
                        borderColor='lime.600'
                        color='lime.600'
                        position='absolute'
                        right='14px'
                    >
                        Готовить
                    </Button>
                </HStack>
            </CardBody>
        </Card>
    );
};
