import { Box, Text } from '@chakra-ui/react';

import { SpriteIcon } from '~/components/sprite_icon/SpriteIcon';

export const WriteRecipe = () => (
    <Box
        position='absolute'
        as='button'
        right={0}
        bottom={0}
        maxHeight='208px'
        maxWidth='208px'
        width='100%'
        height='100%'
        display={{ sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }}
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        bg='radial-gradient(50% 50% at 50% 50%, #c4ff61 0%, rgba(255, 255, 255, 0) 70%)'
    >
        <SpriteIcon
            viewBox='48px 48px'
            boxSize='48px'
            spritePath='/spriteRightSide.svg'
            spriteId='write'
        />
        <Text
            fontSize='xs'
            color='blackAlpha.700'
            fontWeight={400}
            lineHeight={1.3}
            paddingTop='12px'
        >
            Записать рецепт
        </Text>
    </Box>
);
