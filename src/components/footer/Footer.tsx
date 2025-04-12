import { Box, Stack, Text } from '@chakra-ui/react';

import { SpriteIcon } from '~/components/sprite_icon/SpriteIcon';

export const Footer = () => (
    <Stack
        // data-test-id='footer'
        as='aside'
        spacing='16px'
        maxWidth='256px'
        position='absolute'
        left={0}
        bottom={0}
        paddingX='24px'
        paddingBottom='32px'
    >
        <Text fontSize='xs' color='blackAlpha.400' fontWeight={500}>
            Версия программы 03.25
        </Text>
        <Text fontSize='xs' color='blackAlpha.700' fontWeight={400}>
            Все права защищены, ученический файл, ©Клевер Технолоджи, 2025
        </Text>
        <Box
            as='button'
            paddingY='2px'
            display='flex'
            flexDirection='row'
            alignItems='center'
            justifyItems='center'
            maxWidth='208px'
            maxHeight='16px'
        >
            <SpriteIcon viewBox='12px 12px' boxSize='12px' spriteId='Выйти' />
            <Text paddingLeft='6px' fontSize='xs' fontWeight={600} lineHeight={1.3}>
                Выйти
            </Text>
        </Box>
    </Stack>
);
