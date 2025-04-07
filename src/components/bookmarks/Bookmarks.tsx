import { Box, Text, VStack } from '@chakra-ui/react';

import { SpriteIcon } from '~/components/sprite_icon/SpriteIcon';

export const Bookmarks = () => (
    <VStack
        position='absolute'
        top={0}
        right={0}
        width='100%'
        height='100%'
        maxWidth='208px'
        maxHeight='200px'
        display={{ sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }}
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        spacing='24px'
    >
        <Box
            as='button'
            display='flex'
            alignItems='center'
            maxWidth='85px'
            maxHeight='45px'
            borderRadius='6px'
            padding='0 16px'
        >
            <SpriteIcon
                viewBox='16px 16px'
                boxSize='16px'
                spritePath='/spriteRightSide.svg'
                spriteId='bookmark'
            />
            <Text
                paddingLeft='8px'
                lineHeight={1.5}
                fontWeight={600}
                fontSize='md'
                color='lime.600'
            >
                185
            </Text>
        </Box>
        <Box
            as='button'
            display='flex'
            alignItems='center'
            maxWidth='85px'
            maxHeight='45px'
            borderRadius='6px'
            padding='0 16px'
        >
            <SpriteIcon
                viewBox='16px'
                boxSize='16px'
                spritePath='/spriteRightSide.svg'
                spriteId='people'
            />
            <Text
                paddingLeft='8px'
                lineHeight={1.5}
                fontWeight={600}
                fontSize='md'
                color='lime.600'
            >
                589
            </Text>
        </Box>
        <Box
            as='button'
            display='flex'
            alignItems='center'
            maxWidth='85px'
            maxHeight='45px'
            borderRadius='6px'
            padding='0 16px'
        >
            <SpriteIcon
                viewBox='16px 16px'
                boxSize='16px'
                spritePath='/spriteRightSide.svg'
                spriteId='emoji'
            />
            <Text
                paddingLeft='8px'
                lineHeight={1.5}
                fontWeight={600}
                fontSize='md'
                color='lime.600'
            >
                587
            </Text>
        </Box>
    </VStack>
);
