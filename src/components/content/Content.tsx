import { SearchIcon, Switch } from '@chakra-ui/icons';
import {
    Box,
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
import { Juiciest } from '~/components/juiciest/Juiciest';
import { LatestRecipes } from '~/components/latest_recipes/LatestRecipes';
import { VeganKitchen } from '~/components/vegan_kitchen/VeganKitchen';

export const Content = () => (
    <Flex
        flexDirection='column'
        alignItems='center'
        width={{ sm: '360px', md: '768px', lg: '880px', xl: '1360px' }}
        height='100%'
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
                // textShadow={{ xl: '0 4px 4px rgba(0, 0, 0, 0.25)' }}
                fontWeight={700}
                lineHeight='1'
                color='black'
                alignSelf='stretch'
                textAlign='center'
            >
                Приятного аппетита!
            </Heading>
            <HStack spacing='12px' width={{ sm: '328px', md: '448px', lg: '518px' }}>
                <Box
                    as='button'
                    // bg='none'
                    display={{ sm: 'flex', md: 'flex', lg: 'none', xl: 'none' }}
                    alignItems='center'
                    justifyContent='center'
                    aria-label='Search database'
                    border='1px solid rgba(0, 0, 0, 0.48)'
                    borderRadius='6px'
                    width={{ sm: '32px' }}
                    height={{ sm: '32px' }}
                    padding={{ sm: '0 9px' }}
                >
                    <svg
                        width='15'
                        height='14'
                        viewBox='0 0 15 14'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            d='M5.75 9.1875C5.75 9.07147 5.79609 8.96019 5.87814 8.87814C5.96019 8.79609 6.07147 8.75 6.1875 8.75H8.8125C8.92853 8.75 9.03981 8.79609 9.12186 8.87814C9.20391 8.96019 9.25 9.07147 9.25 9.1875C9.25 9.30353 9.20391 9.41481 9.12186 9.49686C9.03981 9.57891 8.92853 9.625 8.8125 9.625H6.1875C6.07147 9.625 5.96019 9.57891 5.87814 9.49686C5.79609 9.41481 5.75 9.30353 5.75 9.1875ZM4 6.5625C4 6.44647 4.04609 6.33519 4.12814 6.25314C4.21019 6.17109 4.32147 6.125 4.4375 6.125H10.5625C10.6785 6.125 10.7898 6.17109 10.8719 6.25314C10.9539 6.33519 11 6.44647 11 6.5625C11 6.67853 10.9539 6.78981 10.8719 6.87186C10.7898 6.95391 10.6785 7 10.5625 7H4.4375C4.32147 7 4.21019 6.95391 4.12814 6.87186C4.04609 6.78981 4 6.67853 4 6.5625ZM2.25 3.9375C2.25 3.82147 2.29609 3.71019 2.37814 3.62814C2.46019 3.54609 2.57147 3.5 2.6875 3.5H12.3125C12.4285 3.5 12.5398 3.54609 12.6219 3.62814C12.7039 3.71019 12.75 3.82147 12.75 3.9375C12.75 4.05353 12.7039 4.16481 12.6219 4.24686C12.5398 4.32891 12.4285 4.375 12.3125 4.375H2.6875C2.57147 4.375 2.46019 4.32891 2.37814 4.24686C2.29609 4.16481 2.25 4.05353 2.25 3.9375Z'
                            fill='black'
                        />
                    </svg>
                </Box>
                <Box
                    as='button'
                    display={{ sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }}
                    alignItems='center'
                    justifyContent='center'
                    aria-label='Search database'
                    border='1px solid rgba(0, 0, 0, 0.48)'
                    borderRadius='6px'
                    width={{ lg: '48px' }}
                    height={{ lg: '48px' }}
                    padding={{ lg: '0 12px' }}
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
                        _placeholder={{ color: 'lime.800' }}
                    />
                    <InputRightElement
                        width={{ sm: '32px', lg: '48px' }}
                        height={{ sm: '32px', lg: '48px' }}
                    >
                        <IconButton aria-label='Search database' bg='none' icon={<SearchIcon />} />
                    </InputRightElement>
                </InputGroup>
            </HStack>

            <HStack
                width='100%'
                spacing='16px'
                display={{ sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }}
                flexDirection='row'
            >
                <FormControl maxWidth='268px' maxHeight='36px' display='flex' alignItems='center'>
                    <FormLabel htmlFor='allergenToggle' padding='6px 12px 6px 8px' margin={0}>
                        Исключить мои аллергены
                    </FormLabel>
                    <Switch id='allergenToggle' />
                </FormControl>
                <Select
                    maxWidth='234px'
                    maxHeight='40px'
                    placeholder='Выберите из списка...'
                    _placeholder={{ color: 'blackAlpha.700' }}
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
);
