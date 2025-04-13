import { Box, Flex, HStack, Text, useMediaQuery } from '@chakra-ui/react';

import { Breadcrumbs } from '~/components/header/breadcrumbs/Breadcrumbs';
import { HamburgerButton } from '~/components/header/hamburger_menu/HamburgerButton';
import { HeaderLogo } from '~/components/header/header_logo/HeaderLogo';
import { ProfileInfo } from '~/components/header/profile_info/ProfileInfo';
import { SpriteIcon } from '~/components/sprite_icon/SpriteIcon';

type Props = {
    onOpen: () => void;
};

export const Header = ({ onOpen }: Props) => {
    const [isVisible] = useMediaQuery('(min-width: 769px)');

    return (
        <Flex
            as='header'
            data-test-id='header'
            position='fixed'
            zIndex={1000}
            left={0}
            right={0}
            top={0}
            backgroundColor='lime.500'
            height='80px'
            pl={{
                sm: 4,
                md: 5,
                lg: 4,
                xl: 4,
            }}
            pr={{ sm: 4, md: 5, lg: 14, xl: 14 }}
            py={{ sm: 4, md: 4, lg: 4, xl: 4 }}
            // boxShadow='customShadow'
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
                visibility={isVisible ? 'hidden' : 'visible'}
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
            <HamburgerButton onOpen={onOpen} />
        </Flex>
    );
};
