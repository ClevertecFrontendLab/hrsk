import { SearchIcon, Switch } from '@chakra-ui/icons';
import {
    Box,
    Container,
    Divider,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    Select,
    VStack,
} from '@chakra-ui/react';

import { Blogs } from '~/components/blogs/Blogs';
import { Bookmarks } from '~/components/bookmarks/Bookmarks';
import { Footer } from '~/components/footer/Footer';
import { MainFooter } from '~/components/footer/MainFooter';
import { Header } from '~/components/header/Header';
import { Juiciest } from '~/components/juiciest/Juiciest';
import { LatestRecipes } from '~/components/latest_recipes/LatestRecipes';
import { Navigation } from '~/components/navigation/Navigation';
import { VeganKitchen } from '~/components/vegan_kitchen/VeganKitchen';
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
        <Flex as='section' maxWidth={{ xl: '1360px' }} width='100%' maxHeight='100%'>
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
            <Box height='1040px' paddingBottom='48px'>
                <Flex
                    flexDirection='column'
                    alignItems={{ sm: 'flex-start', md: 'center' }}
                    px={{ sm: '16px', md: '20px', lg: '24px', xl: '24px' }}
                    width={{ sm: '360px', md: '768px', lg: '880px', xl: '1360px' }}
                    height='100%'
                    overflowY='scroll'
                    sx={{
                        scrollbarWidth: 'none',
                        '&::-webkit-scrollbar': {
                            display: 'none',
                        },
                    }}
                >
                    <VStack
                        mb={{ sm: '32px', lg: '24px' }}
                        display='flex'
                        flexDirection='column'
                        alignItems='center'
                        maxWidth='898px'
                        maxHeight='248px'
                    >
                        <Heading
                            py={{ sm: '16px', lg: '32px' }}
                            fontSize={{ sm: '24px', lg: '48px' }}
                            textShadow={{ lg: '0 4px 4px rgba(0, 0, 0, 0.25)' }}
                            fontWeight={700}
                            lineHeight='1'
                            color='black'
                            alignSelf='stretch'
                            textAlign='center'
                        >
                            Приятного аппетита!
                        </Heading>
                        <HStack spacing='12px' width={{ sm: '328px', md: '448px', lg: '518px' }}>
                            <Box as='button'>
                                <IconButton
                                    bg='none'
                                    aria-label='Search database'
                                    border='1px solid rgba(0, 0, 0, 0.48)'
                                    borderRadius='6px'
                                    width={{ sm: '32px', lg: '48px' }}
                                    height={{ sm: '32px', lg: '48px' }}
                                    padding={{ sm: '0 9px', lg: '0 12px' }}
                                >
                                    <svg
                                        width='24px'
                                        height='24px'
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path
                                            d='M9 15.75C9 15.5511 9.07902 15.3603 9.21967 15.2197C9.36032 15.079 9.55109 15 9.75 15H14.25C14.4489 15 14.6397 15.079 14.7803 15.2197C14.921 15.3603 15 15.5511 15 15.75C15 15.9489 14.921 16.1397 14.7803 16.2803C14.6397 16.421 14.4489 16.5 14.25 16.5H9.75C9.55109 16.5 9.36032 16.421 9.21967 16.2803C9.07902 16.1397 9 15.9489 9 15.75ZM6 11.25C6 11.0511 6.07902 10.8603 6.21967 10.7197C6.36032 10.579 6.55109 10.5 6.75 10.5H17.25C17.4489 10.5 17.6397 10.579 17.7803 10.7197C17.921 10.8603 18 11.0511 18 11.25C18 11.4489 17.921 11.6397 17.7803 11.7803C17.6397 11.921 17.4489 12 17.25 12H6.75C6.55109 12 6.36032 11.921 6.21967 11.7803C6.07902 11.6397 6 11.4489 6 11.25ZM3 6.75C3 6.55109 3.07902 6.36032 3.21967 6.21967C3.36032 6.07902 3.55109 6 3.75 6H20.25C20.4489 6 20.6397 6.07902 20.7803 6.21967C20.921 6.36032 21 6.55109 21 6.75C21 6.94891 20.921 7.13968 20.7803 7.28033C20.6397 7.42098 20.4489 7.5 20.25 7.5H3.75C3.55109 7.5 3.36032 7.42098 3.21967 7.28033C3.07902 7.13968 3 6.94891 3 6.75Z'
                                            fill='black'
                                        />
                                    </svg>
                                </IconButton>
                            </Box>
                            <InputGroup>
                                <Input
                                    placeholder='Название или ингредиент...'
                                    border='1px solid rgba(0, 0, 0, 0.48)'
                                    borderRadius='6px'
                                    padding='0px 48px 0px 16px'
                                    fontSize={{ sm: '14px', lg: '18px' }}
                                    fontWeight={400}
                                    display='flex'
                                    alignItems='center'
                                    height={{ sm: '32px', lg: '48px' }}
                                />
                                <InputRightElement
                                    width={{ sm: '32px', lg: '48px' }}
                                    height={{ sm: '32px', lg: '48px' }}
                                >
                                    <IconButton
                                        aria-label='Search database'
                                        bg='none'
                                        icon={<SearchIcon />}
                                    />
                                </InputRightElement>
                            </InputGroup>
                        </HStack>

                        <HStack
                            width='100%'
                            spacing='16px'
                            display={{ sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }}
                            flexDirection='row'
                        >
                            <FormControl
                                maxWidth='268px'
                                maxHeight='36px'
                                display='flex'
                                alignItems='center'
                            >
                                <FormLabel
                                    htmlFor='allergenToggle'
                                    padding='6px 12px 6px 8px'
                                    margin={0}
                                >
                                    Исключить мои аллергены
                                </FormLabel>
                                <Switch id='allergenToggle' />
                            </FormControl>
                            <Select
                                maxWidth='234px'
                                maxHeight='40px'
                                placeholder='Выберите из списка...'
                            />
                        </HStack>
                    </VStack>
                    <LatestRecipes />
                    <Juiciest />
                    <Blogs />
                    <VeganKitchen
                        description={`Интересны не только убеждённым вегетарианцам, но и тем, кто хочет \n попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.`}
                    />
                    <MainFooter />
                </Flex>
            </Box>
            <Bookmarks />
            <WriteRecipe />
        </Flex>
    </Container>
);
