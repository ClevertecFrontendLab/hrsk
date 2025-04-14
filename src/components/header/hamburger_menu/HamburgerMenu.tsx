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
import { useState } from 'react';
import { Link, useLocation } from 'react-router';

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

    const [isOpenAcc, setIsOpen] = useState(false);

    return (
        <Flex
            direction='column'
            height='872px'
            width={{ sm: '344px', lg: '256px' }}
            overflowY={isOpenAcc ? 'scroll' : 'hidden'}
            alignItems='center'
            boxShadow={
                isOpenAcc
                    ? '0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    : 'none'
            }
            borderRadius={isOpenAcc ? '0 0 12px 12px' : 0}
            overflowX='hidden'
            sx={{
                '&::-webkit-scrollbar': {
                    width: '8px',
                    height: '854px',
                },
                '&::-webkit-scrollbar-thumb': {
                    borderRadius: 'full',
                    background: 'blackAlpha.300',
                },
                '&::-webkit-scrollbar-track': {
                    background: 'transparent',
                    backgroundColor: 'blackAlpha.50',
                    borderRadius: '8px',
                },
            }}
        >
            <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent
                    w='344px'
                    maxWidth='344px'
                    maxHeight='880px'
                    borderRadius='0 0 12px 12px'
                >
                    <DrawerBody maxWidth='100%' padding={0}>
                        <VStack align='start' spacing={4}>
                            <Breadcrumb
                                display={{ sm: 'flex', md: 'flex', lg: 'none', xl: 'none' }}
                                spacing='8px'
                                padding='16px 20px 12px '
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
                            <Box
                                maxHeight='660px'
                                overflow='auto'
                                sx={{
                                    '&::-webkit-scrollbar': {
                                        width: '8px',
                                        height: '644px',
                                    },
                                    '&::-webkit-scrollbar-thumb': {
                                        borderRadius: 'full',
                                        background: 'blackAlpha.300',
                                    },
                                    '&::-webkit-scrollbar-track': {
                                        background: 'transparent',
                                        backgroundColor: 'blackAlpha.50',
                                    },
                                }}
                            >
                                <Navigation
                                    isOpen={isOpenAcc}
                                    setIsOpen={setIsOpen}
                                    isActive={isActive}
                                    setActive={setActive}
                                />
                            </Box>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>

            <Box display={{ sm: 'none', lg: 'block' }} height={isOpenAcc ? '872px' : '644px'}>
                <Navigation
                    isOpen={isOpenAcc}
                    setIsOpen={setIsOpen}
                    isActive={isActive}
                    setActive={setActive}
                />
            </Box>

            {/*<Footer />*/}
        </Flex>
    );
};
