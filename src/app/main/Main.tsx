import { Box, useDisclosure } from '@chakra-ui/react';
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
        <>
            <Header onOpen={onOpen} />
            <Box
                position='fixed'
                top='80px'
                left='0'
                bottom='0'
                zIndex={999}
                paddingTop='24px'
                maxWidth='100%'
                width={{ sm: '344px', lg: '256px', xl: '256px' }}
                height='1040px'
                display={{ sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }}
                flexDirection='row'
                borderRight='1px'
                borderColor='blackAlpha.400'
            >
                <HamburgerMenu
                    isActive={isActive}
                    setActive={setActive}
                    isOpen={isOpen}
                    onClose={onClose}
                />
                <Footer />
            </Box>
            <Box
                display='flex'
                minHeight='100vh'
                flexDirection='column'
                position='absolute'
                left={{ lg: '256px' }}
                alignItems='center'
                px={{ sm: 0, md: 0, lg: '24px', xl: '24px' }}
                as='main'
                pt='80px'
                pb='100px'
            >
                <AppRoutes isActive={isActive} setActive={setActive} />
            </Box>
            <Bookmarks />
            <WriteRecipe />
            <MainFooter />
        </>
    );
};
