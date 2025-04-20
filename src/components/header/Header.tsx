import { Box, Flex, HStack, Text, useMediaQuery } from '@chakra-ui/react';
import { useState } from 'react';

import { Breadcrumbs } from '~/components/header/breadcrumbs/Breadcrumbs';
import { HamburgerButton } from '~/components/header/hamburger_menu/HamburgerButton';
import { HeaderLogo } from '~/components/header/header_logo/HeaderLogo';
import { ProfileInfo } from '~/components/header/profile_info/ProfileInfo';
import { SpriteIcon } from '~/components/sprite_icon/SpriteIcon';

type Props = {
    onOpen: () => void;
    onClose: () => void;
    isOpen: boolean;
};

export const Header = ({ onOpen, isOpen, onClose }: Props) => {
    const [isVisible] = useMediaQuery('(max-width: 769px)');
    console.log(isVisible);

    const [isLogged, setIsLogged] = useState<boolean>(true);
    console.log(isOpen);

    return (
        <Flex
            as='header'
            data-test-id='header'
            position='fixed'
            zIndex={1000}
            left={0}
            right={0}
            top={0}
            backgroundColor={isOpen ? '#FFF' : 'lime.500'}
            height={{ sm: '64px', lg: '80px' }}
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
            {isLogged ? (
                <ProfileInfo />
            ) : (
                <Box
                    as='button'
                    position='absolute'
                    visibility={isOpen ? 'hidden' : 'visible'}
                    top={{ sm: '16px', lg: '24px' }}
                    right={{ sm: '68px', lg: '58px' }}
                    onClick={() => setIsLogged(true)}
                    width='87px'
                    height='32px'
                    padding='0 12px'
                    borderRadius='6px'
                    fontWeight={600}
                    fontSize='14px'
                    display='flex'
                    gap='8px'
                    alignItems='center'
                >
                    Log in
                    <svg
                        width='14'
                        height='14'
                        viewBox='0 0 14 14'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            d='M7.58331 9.33268L10.5 6.99935L7.58331 4.66602V6.41602H2.33331V7.58268H7.58331V9.33268Z'
                            fill='black'
                        />
                        <path
                            d='M11.6667 1.75H6.41667C5.77325 1.75 5.25 2.27325 5.25 2.91667V5.25H6.41667V2.91667H11.6667V11.0833H6.41667V8.75H5.25V11.0833C5.25 11.7267 5.77325 12.25 6.41667 12.25H11.6667C12.3101 12.25 12.8333 11.7267 12.8333 11.0833V2.91667C12.8333 2.27325 12.3101 1.75 11.6667 1.75Z'
                            fill='black'
                        />
                    </svg>
                </Box>
            )}
            {/*<ProfileInfo />*/}
            {!isOpen && (
                <HStack
                    position='absolute'
                    display={isLogged && isVisible ? 'flex' : 'none'}
                    right='68px'
                    maxWidth='203px'
                    maxHeight='24px'
                    visibility={isLogged && isVisible ? 'visible' : 'hidden'}
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
            )}
            <HamburgerButton isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        </Flex>
    );
};
