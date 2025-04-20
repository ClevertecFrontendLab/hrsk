import { Breadcrumb, ChevronRightIcon } from '@chakra-ui/icons';
import {
    Box,
    BreadcrumbItem,
    BreadcrumbLink,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerOverlay,
    Stack,
    Text,
    VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router';

import { breadcrumbsObj } from '~/components/header/breadcrumbs/BreadcrumbsObj';
import { Navigation } from '~/components/navigation/Navigation';
import { SpriteIcon } from '~/components/sprite_icon/SpriteIcon';
import { recipes } from '~/components/vegan_kitchen/recipes';

type Props = {
    onClose: () => void;
    isOpen: boolean;
    isActive: string | undefined;
    setActive: (isActive: string | undefined) => void;
};
export const HamburgerMenu = ({ onClose, isOpen, isActive, setActive }: Props) => {
    const location = useLocation();
    const paths = location.pathname.split('/').filter(Boolean);

    const recipe = recipes[Number(paths[2])];

    const [isOpenAcc, setIsOpen] = useState(false);

    return (
        <Box data-test-id='nav'>
            <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay
                    zIndex={1100}
                    mt='64px'
                    pl={{ sm: '8px' }}
                    mr={{ sm: '8px', md: '12px' }}
                    boxShadow='0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                />
                <DrawerContent
                    zIndex={1000}
                    mt='64px'
                    mr={{ sm: '8px', md: '12px' }}
                    w='344px'
                    maxWidth='344px'
                    maxHeight={{ sm: '712px', md: '876px' }}
                    borderRadius='0 0 12px 12px'
                    padding='16px 0 0 0'
                >
                    {/*<DrawerCloseButton />*/}
                    <DrawerBody maxWidth='100%' padding={0}>
                        <VStack align='start' spacing={4}>
                            <Breadcrumb
                                display={{ sm: 'flex', md: 'flex', lg: 'none', xl: 'none' }}
                                spacing='8px'
                                padding='16px 20px 12px '
                                w='344px'
                                flexWrap='wrap'
                                whiteSpace='normal'
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
                                    // const lastKey = Object.keys(breadcrumbsObj).pop();
                                    const to = '/' + paths.slice(0, index + 1).join('/');
                                    return (
                                        <BreadcrumbItem>
                                            <BreadcrumbLink
                                                as={Link}
                                                to={to}
                                                fontSize='14px'
                                                fontWeight={400}
                                            >
                                                {breadcrumbsObj[path] || recipe.title}
                                            </BreadcrumbLink>
                                        </BreadcrumbItem>
                                    );
                                })}
                            </Breadcrumb>
                            <Box
                                height='444px'
                                overflow='auto'
                                sx={{
                                    '&::-webkit-scrollbar': {
                                        width: '8px',
                                        height: '584px',
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
                                <Navigation
                                    isOpen={isOpenAcc}
                                    setIsOpen={setIsOpen}
                                    isActive={isActive}
                                    setActive={setActive}
                                />
                            </Box>
                        </VStack>
                    </DrawerBody>
                    <Stack
                        // data-test-id='footer'
                        as='aside'
                        spacing='16px'
                        maxWidth='344px'
                        height='144px'
                        padding='16px 24px 32px 24px'
                        // paddingBottom='32px'
                    >
                        <Text fontSize='xs' color='blackAlpha.400' fontWeight={500}>
                            Версия программы 03.25
                        </Text>
                        <Text fontSize='xs' color='blackAlpha.700' fontWeight={400}>
                            Все права защищены, ученический файл, ©Клевер Технолоджи, 2025
                        </Text>
                        <Box
                            as='button'
                            paddingY='2px'
                            display='flex'
                            flexDirection='row'
                            alignItems='center'
                            justifyItems='center'
                            maxWidth='208px'
                            maxHeight='16px'
                        >
                            <SpriteIcon viewBox='12px 12px' boxSize='12px' spriteId='Выйти' />
                            <Text paddingLeft='6px' fontSize='xs' fontWeight={600} lineHeight={1.3}>
                                Выйти
                            </Text>
                        </Box>
                    </Stack>
                </DrawerContent>
            </Drawer>
        </Box>
    );
};
