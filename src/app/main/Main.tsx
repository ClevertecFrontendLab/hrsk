import { Box, Container, Divider, Flex, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';

import { AppRoutes } from '~/app/AppRoutes';
import { Bookmarks } from '~/components/bookmarks/Bookmarks';
import { Footer } from '~/components/footer/Footer';
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
            height='1120xpx'
            padding={0}
            margin={0}
        >
            <Header onOpen={onOpen} />
            <Flex as='main' maxWidth='100%' height='1040px' position='relative' flexDirection='row'>
                <Box
                    paddingTop='24px'
                    maxWidth='100%'
                    width={{ sm: '344px', lg: '256px', xl: '256px' }}
                    height='1040px'
                    position='fixed'
                    display={{ sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }}
                    flexDirection='row'
                >
                    <HamburgerMenu
                        isActive={isActive}
                        setActive={setActive}
                        isOpen={isOpen}
                        onClose={onClose}
                    />
                    <Footer />
                </Box>
                <Divider
                    orientation='vertical'
                    height='1040px'
                    borderLeft='1px'
                    position='absolute'
                    left='256px'
                    borderColor='blackAlpha.400'
                    display={{ sm: 'none', lg: 'flex' }}
                />
                <Box
                    display='flex'
                    height='1040px'
                    flexDirection='column'
                    position='absolute'
                    left={{ lg: '256px' }}
                    alignItems='center'
                    px={{ sm: 0, md: 0, lg: '24px', xl: '24px' }}
                >
                    <AppRoutes isActive={isActive} setActive={setActive} />
                </Box>
                <Bookmarks />
                <WriteRecipe />
                <MainFooter />
            </Flex>
        </Container>
    );
};
