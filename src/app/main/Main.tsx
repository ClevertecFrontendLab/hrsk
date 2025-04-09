import { Box, Container, Divider, Flex } from '@chakra-ui/react';

import { AppRoutes } from '~/app/AppRoutes';
import { Bookmarks } from '~/components/bookmarks/Bookmarks';
import { Footer } from '~/components/footer/Footer';
import { MainFooter } from '~/components/footer/MainFooter';
import { Header } from '~/components/header/Header';
import { Navigation } from '~/components/navigation/Navigation';
import { WriteRecipe } from '~/components/write_recipe/WriteRecipe';

export const Main = () => (
    <Container
        width={{ sm: '360px', md: '768px', lg: '1440px', xl: '1920px' }}
        maxWidth='100%'
        height='1040px'
        padding={0}
        margin={0}
        position='relative'
    >
        <Header />
        <Flex
            as='section'
            maxWidth='100%'
            // width={{ xl: '1360px' }}
            width={{ sm: '360px', md: '768px', lg: '880px', xl: '1360px' }}
            // maxHeight='100%'
            paddingBottom='100px'
        >
            <Box
                marginTop='24px'
                marginBottom='228px'
                paddingX='10px'
                paddingLeft='10px'
                paddingRight='16px'
                maxWidth='100%'
                width={{ lg: '256px', xl: '256px' }}
                height='100%'
                display={{ sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }}
                flexDirection='column'
            >
                <Navigation />
                <Footer />
            </Box>
            <Divider
                orientation='vertical'
                height='1040px'
                borderWidth='1px'
                borderColor='blackAlpha.400'
            />
            <Box
                display='flex'
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
