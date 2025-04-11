import { Breadcrumb, ChevronRightIcon } from '@chakra-ui/icons';
import {
    Box,
    BreadcrumbItem,
    BreadcrumbLink,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerOverlay,
    Flex,
    VStack,
} from '@chakra-ui/react';
import { Link, useLocation } from 'react-router';

import { Footer } from '~/components/footer/Footer';
import { breadcrumbsObj } from '~/components/header/breadcrumbs/BreadcrumbsObj';
import { Navigation } from '~/components/navigation/Navigation';

type Props = {
    onClose: () => void;
    isOpen: boolean;
    isActive: string | undefined;
    setActive: (isActive: string | undefined) => void;
};
export const HamburgerMenu = ({ onClose, isOpen, isActive, setActive }: Props) => {
    const location = useLocation();
    const paths = location.pathname.split('/').filter(Boolean);

    return (
        <Flex
            direction='column'
            height='644px'
            width={{ sm: '344px', lg: '256px' }}
            overflowY='scroll'
            alignItems='center'
            sx={{
                scrollbarWidth: 'none',
                '&::-webkit-scrollbar': {
                    display: 'none',
                },
            }}
        >
            <Drawer placement='left' onClose={onClose} isOpen={isOpen} size='xs'>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerBody>
                        <VStack align='start' spacing={4} width='100%'>
                            <Breadcrumb
                                display={{ sm: 'flex', md: 'flex', lg: 'none', xl: 'none' }}
                                spacing='8px'
                                separator={<ChevronRightIcon color='black.000' />}
                            >
                                <BreadcrumbItem>
                                    <BreadcrumbLink
                                        as={Link}
                                        to='/'
                                        fontSize='14px'
                                        fontWeight={400}
                                    >
                                        Главная
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                {paths.map((path, index) => {
                                    const lastKey = Object.keys(breadcrumbsObj).pop();
                                    const to = '/' + paths.slice(0, index + 1).join('/');
                                    return (
                                        <BreadcrumbItem>
                                            <BreadcrumbLink
                                                as={Link}
                                                to={to}
                                                fontSize='14px'
                                                fontWeight={400}
                                            >
                                                {breadcrumbsObj[path] || breadcrumbsObj[lastKey!]}
                                            </BreadcrumbLink>
                                        </BreadcrumbItem>
                                    );
                                })}
                            </Breadcrumb>
                            <Navigation isActive={isActive} setActive={setActive} />
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>

            <Box display={{ sm: 'none', lg: 'block' }}>
                <Navigation isActive={isActive} setActive={setActive} />
            </Box>

            <Footer />
        </Flex>
    );
};
