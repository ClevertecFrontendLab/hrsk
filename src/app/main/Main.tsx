import { Box, Container, Divider, Flex, Heading } from '@chakra-ui/react';

import { Footer } from '~/components/footer/Footer';
import { Header } from '~/components/header/Header';
import { Navigation } from '~/components/navigation/Navigation';

export const Main = () => (
    <Container position='relative' maxWidth='1920px' maxHeight='1120px' padding={0}>
        <Flex flexDirection='column' as='section'>
            <Header />
            <Flex as='section' position='relative' maxHeight='1040px'>
                <Box
                    marginTop='24px'
                    marginBottom='228px'
                    paddingX='10px'
                    paddingLeft='10px'
                    paddingRight='16px'
                    maxWidth='256px'
                    width='100%'
                    height='100%'
                >
                    <Navigation />
                    <Footer />
                </Box>
                <Divider
                    orientation='vertical'
                    height='100vh'
                    borderWidth='1px'
                    borderColor='gray.300'
                />
                <Box
                    width='100%'
                    height='100%'
                    maxWidth='1360px'
                    maxHeight='2054px'
                    marginLeft='24px'
                >
                    <Flex flexDirection='column' alignItems='center'>
                        <Heading
                            fontSize='5xl'
                            textShadow='0 4px 4px rgba(0, 0, 0, 0.25)'
                            fontWeight={700}
                        >
                            Приятного аппетита!
                        </Heading>
                    </Flex>
                </Box>
                <Box position='absolute' right={0}>
                    sidebarRight
                </Box>
            </Flex>
        </Flex>
    </Container>
);
