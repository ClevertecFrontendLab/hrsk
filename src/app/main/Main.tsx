import { Box, Container, Divider, Flex, useDisclosure } from '@chakra-ui/react';

import { AppRoutes } from '~/app/AppRoutes';
import { Bookmarks } from '~/components/bookmarks/Bookmarks';
import { MainFooter } from '~/components/footer/MainFooter';
import { HamburgerMenu } from '~/components/header/hamburger_menu/HamburgerMenu';
import { Header } from '~/components/header/Header';
import { WriteRecipe } from '~/components/write_recipe/WriteRecipe';

export const Main = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Container
            width={{ sm: '360px', md: '768px', lg: '1440px', xl: '1920px' }}
            maxWidth='100%'
            height='100vh'
            padding={0}
            margin={0}
            position='relative'
        >
            <Header onOpen={onOpen} />
            <Flex
                as='section'
                maxWidth='100%'
                width={{ sm: '360px', md: '768px', lg: '880px', xl: '1360px' }}
                paddingBottom='100px'
                paddingTop='80px'
            >
                <Box
                    marginTop='24px'
                    marginBottom='228px'
                    maxWidth='100%'
                    width={{ lg: '256px', xl: '256px' }}
                    height='100%'
                    display={{ sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }}
                    flexDirection='column'
                >
                    <HamburgerMenu isOpen={isOpen} onClose={onClose} />
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
                    <AppRoutes />
                </Box>
                <Bookmarks />
                <WriteRecipe />
            </Flex>
            <MainFooter />
        </Container>
    );
};
