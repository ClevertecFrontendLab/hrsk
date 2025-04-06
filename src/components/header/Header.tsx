import { Box, Flex, HStack, IconButton, Text } from '@chakra-ui/react';

import { Breadcrumbs } from '~/components/header/breadcrumbs/Breadcrumbs';
import { HeaderLogo } from '~/components/header/header_logo/HeaderLogo';
import { ProfileInfo } from '~/components/header/profile_info/ProfileInfo';
import { SpriteIcon } from '~/components/sprite_icon/SpriteIcon';

export const Header = () => (
    <Flex
        as='header'
        data-test-id='header'
        position='sticky'
        zIndex='sticky'
        top={0}
        backgroundColor='lime.500'
        width='100%'
        pl={{
            sm: 4,
            md: 5,
            lg: 4,
            xl: 4,
        }}
        pr={{ sm: 4, md: 5, lg: 14, xl: 14 }}
        py={{ sm: 4, md: 4, lg: 4, xl: 4 }}
        border='1px'
        boxShadow='customShadow'
        alignItems='center'
    >
        <HeaderLogo />
        <Breadcrumbs />
        <ProfileInfo />
        <HStack
            position='absolute'
            right='68px'
            maxWidth='203px'
            maxHeight='24px'
            display={{ sm: 'flex', md: 'flex', lg: 'none', xl: 'none' }}
            alignItems='center'
            justifyContent='center'
            px={{ sm: 2, md: 4 }}
        >
            <Box
                as='button'
                display='flex'
                alignItems='center'
                maxWidth='57px'
                maxHeight='24px'
                borderRadius='6px'
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
                    fontSize={{ sm: '12px', md: '12px' }}
                    color='lime.600'
                >
                    185
                </Text>
            </Box>
            <Box
                as='button'
                display='flex'
                alignItems='center'
                maxWidth='57px'
                maxHeight='24px'
                borderRadius='6px'
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
                    fontSize={{ sm: '12px', md: '12px' }}
                    color='lime.600'
                >
                    589
                </Text>
            </Box>
            <Box
                as='button'
                display='flex'
                alignItems='center'
                maxWidth='57px'
                maxHeight='24px'
                borderRadius='6px'
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
                    fontSize={{ sm: '12px', md: '12px' }}
                    color='lime.600'
                >
                    587
                </Text>
            </Box>
        </HStack>
        <IconButton
            as='button'
            border='none'
            aria-label='Open menu'
            onClick={() => {}}
            position='absolute'
            width='48px'
            height='48px'
            right='20px'
            bg='none'
            _hover='none'
            display={{ sm: 'flex', md: 'flex', lg: 'none', xl: 'none' }}
        >
            <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path d='M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z' fill='black' />
            </svg>
        </IconButton>
        {/*</Flex>*/}
    </Flex>
);
