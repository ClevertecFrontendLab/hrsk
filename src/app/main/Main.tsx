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
import { Header } from '~/components/header/Header';
import { Juiciest } from '~/components/juiciest/Juiciest';
import { LatestRecipes } from '~/components/latest_recipes/LatestRecipes';
import { Navigation } from '~/components/navigation/Navigation';
import { VeganKitchen } from '~/components/vegan_kitchen/VeganKitchen';
import { WriteRecipe } from '~/components/write_recipe/WriteRecipe';

export const Main = () => (
    <Container
        position='relative'
        maxWidth='1920px'
        minHeight='1120px'
        maxHeight='100vh'
        padding={0}
    >
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
                <Flex
                    flexDirection='column'
                    alignItems='center'
                    width='100%'
                    height='100%'
                    maxWidth='1360px'
                    maxHeight='2054px'
                    marginLeft='24px'
                >
                    <Heading
                        my='32px'
                        fontSize='5xl'
                        textShadow='0 4px 4px rgba(0, 0, 0, 0.25)'
                        fontWeight={700}
                        lineHeight='1'
                        color='black'
                        alignSelf='stretch'
                        textAlign='center'
                        marginBottom='32px'
                    >
                        Приятного аппетита!
                    </Heading>
                    <VStack
                        display='flex'
                        flexDirection='column'
                        alignItems='center'
                        maxWidth='898px'
                        maxHeight='248px'
                    >
                        <HStack spacing='12px'>
                            <Box as='button'>
                                <IconButton
                                    bg='none'
                                    aria-label='Search database'
                                    border='1px solid rgba(0, 0, 0, 0.48)'
                                    borderRadius='6px'
                                    padding='0 12px'
                                    width='48px'
                                    height='48px'
                                >
                                    <svg
                                        width='24'
                                        height='24'
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
                            <InputGroup size='lg' width='458px' maxWidth='100%'>
                                <Input
                                    placeholder='Название или ингредиент...'
                                    size='lg'
                                    border='1px solid rgba(0, 0, 0, 0.48)'
                                    borderRadius='6px'
                                    padding='0px 48px 0px 16px'
                                    width='458px'
                                    height='48px'
                                />
                                <InputRightElement>
                                    <IconButton
                                        aria-label='Search database'
                                        bg='none'
                                        icon={<SearchIcon />}
                                    />
                                </InputRightElement>
                            </InputGroup>
                        </HStack>

                        <HStack width='100%' spacing='16px'>
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
                </Flex>
                <Bookmarks />
                <WriteRecipe />
            </Flex>
        </Flex>
    </Container>
);
