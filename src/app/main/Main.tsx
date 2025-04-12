import { Box, Container, Divider, Flex, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';

import { AppRoutes } from '~/app/AppRoutes';
import { Bookmarks } from '~/components/bookmarks/Bookmarks';
import { MainFooter } from '~/components/footer/MainFooter';
import { HamburgerMenu } from '~/components/header/hamburger_menu/HamburgerMenu';
import { Header } from '~/components/header/Header';
import { WriteRecipe } from '~/components/write_recipe/WriteRecipe';

export const Main = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [isActive, setActive] = useState<string | undefined>('');

    return (
        <Container
            width={{ sm: '360px', md: '768px', lg: '1440px', xl: '1920px' }}
            maxWidth='100%'
            height='100vh'
            // minHeight='1040px'
            padding={0}
            margin={0}
            scrollMarginTop='80px'
            // position='relative'
        >
            <Box minHeight='1040px' position='relative' display='flex' flexDirection='column'>
                <Header onOpen={onOpen} />
                <Flex
                    as='section'
                    maxWidth='100%'
                    width={{ sm: '360px', md: '768px', lg: '880px', xl: '1360px' }}
                    // paddingBottom='100px'
                    // paddingTop='80px'
                >
                    <Box
                        marginTop='24px'
                        // marginBottom='228px'
                        maxWidth='100%'
                        width={{ sm: '344px', lg: '256px', xl: '256px' }}
                        height='100%'
                        display={{ sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }}
                        flexDirection='column'
                    >
                        <HamburgerMenu
                            isActive={isActive}
                            setActive={setActive}
                            isOpen={isOpen}
                            onClose={onClose}
                        />
                    </Box>
                    <Divider
                        orientation='vertical'
                        height='1040px'
                        borderWidth='1px'
                        borderColor='blackAlpha.400'
                        display={{ sm: 'none', lg: 'flex' }}
                    />
                    <Box
                        display='flex'
                        height='1040px'
                        flexDirection='column'
                        alignItems='center'
                        px={{ sm: 0, md: 0, lg: '24px', xl: '24px' }}
                    >
                        <AppRoutes isActive={isActive} setActive={setActive} />
                    </Box>
                    <Bookmarks />
                    <WriteRecipe />
                </Flex>
                <MainFooter />
            </Box>
        </Container>
    );
};
