// import { HamburgerIcon } from '@chakra-ui/icons';
import { ChakraProvider } from '@chakra-ui/react';

// import {
//     Box,
//     Button,
//     Drawer,
//     DrawerBody,
//     DrawerCloseButton,
//     DrawerContent,
//     DrawerHeader,
//     DrawerOverlay,
//     Flex,
//     IconButton,
//     Text,
//     useDisclosure,
//     VStack,
// } from '@chakra-ui/react';
import { Main } from '~/app/main/Main';
import { theme } from '~/theme/theme';

function App() {
    // const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <ChakraProvider theme={theme}>
                {/*<Flex direction='column' minH='100vh'>*/}
                {/*    /!* Header *!/*/}
                {/*    <Flex*/}
                {/*        as='header'*/}
                {/*        bg='teal.500'*/}
                {/*        color='white'*/}
                {/*        p={4}*/}
                {/*        justify='space-between'*/}
                {/*        align='center'*/}
                {/*        display={{ base: 'flex', md: 'none' }}*/}
                {/*    >*/}
                {/*        <Text fontWeight='bold'>Juicy Landing</Text>*/}
                {/*        <IconButton*/}
                {/*            icon={<HamburgerIcon />}*/}
                {/*            aria-label='Open menu'*/}
                {/*            variant='outline'*/}
                {/*            onClick={onOpen}*/}
                {/*            color='white'*/}
                {/*            borderColor='white'*/}
                {/*        />*/}
                {/*    </Flex>*/}

                {/*    /!* Sidebar / Drawer *!/*/}
                {/*    <Drawer placement='left' onClose={onClose} isOpen={isOpen} size='xs'>*/}
                {/*        <DrawerOverlay />*/}
                {/*        <DrawerContent>*/}
                {/*            <DrawerCloseButton />*/}
                {/*            <DrawerHeader>Меню</DrawerHeader>*/}
                {/*            <DrawerBody>*/}
                {/*                <VStack align='start' spacing={4}>*/}
                {/*                    <Button variant='ghost'>Главная</Button>*/}
                {/*                    <Button variant='ghost'>О нас</Button>*/}
                {/*                    <Button variant='ghost'>Контакты</Button>*/}
                {/*                </VStack>*/}
                {/*            </DrawerBody>*/}
                {/*        </DrawerContent>*/}
                {/*    </Drawer>*/}

                {/*    <Flex flex='1'>*/}
                {/*        /!* Sidebar для десктопа *!/*/}
                {/*        <Box w='250px' bg='gray.100' p={4} display={{ base: 'none', md: 'block' }}>*/}
                {/*            <VStack align='start' spacing={4}>*/}
                {/*                <Text fontWeight='bold'>Меню</Text>*/}
                {/*                <Button variant='ghost'>Главная</Button>*/}
                {/*                <Button variant='ghost'>О нас</Button>*/}
                {/*                <Button variant='ghost'>Контакты</Button>*/}
                {/*            </VStack>*/}
                {/*        </Box>*/}

                {/*        /!* Main content *!/*/}
                {/*        <Box flex='1' p={6}>*/}
                {/*            <Text fontSize='3xl' mb={4}>*/}
                {/*                Добро пожаловать!*/}
                {/*            </Text>*/}
                {/*            <Text>*/}
                {/*                Это мини-лендинг с адаптивной вёрсткой: боковое меню превращается в*/}
                {/*                бургер при сжатии, а контент масштабируется.*/}
                {/*            </Text>*/}
                {/*        </Box>*/}
                {/*    </Flex>*/}

                {/*    /!* Footer *!/*/}
                {/*    <Box as='footer' bg='gray.200' p={4} textAlign='center'>*/}
                {/*        <Text fontSize='sm'>© 2025 Juicy Co. Все права защищены.</Text>*/}
                {/*    </Box>*/}
                {/*</Flex>*/}
                <Main />
            </ChakraProvider>
        </>
    );
}

export default App;
