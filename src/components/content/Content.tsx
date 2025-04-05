import {
    Avatar,
    Badge,
    Box,
    Button,
    Card,
    Icon,
    Image,
    Input,
    InputGroup,
    InputRightElement,
    MenuItem,
    Select,
    Stack,
    Text,
} from '@chakra-ui/react';

export const Content = () => (
    <Stack justify='flex-start' align='center' spacing='24px' background='#FFFFFF'>
        <Stack
            paddingTop='32px'
            justify='flex-start'
            align='center'
            spacing='32px'
            width='898px'
            maxWidth='100%'
        >
            <Text
                fontFamily='Inter'
                lineHeight='1'
                fontWeight='700'
                fontSize='48px'
                color='black'
                alignSelf='stretch'
                textAlign='center'
            >
                Приятного аппетита!
            </Text>
            <Stack
                paddingBottom='32px'
                justify='flex-start'
                align='center'
                spacing='16px'
                alignSelf='stretch'
            >
                <Stack direction='row' justify='center' align='center' spacing='12px'>
                    <Stack
                        paddingX='12px'
                        height='48px'
                        direction='row'
                        justify='center'
                        align='center'
                        borderColor='blackAlpha.600'
                        borderStartWidth='1px'
                        borderEndWidth='1px'
                        borderTopWidth='1px'
                        borderBottomWidth='1px'
                    />
                    <InputGroup size='lg' width='458px' maxWidth='100%'>
                        <Input placeholder='Название или ингредиент...' size='lg' />
                        <InputRightElement>
                            <Icon as='svg' />
                        </InputRightElement>
                    </InputGroup>
                </Stack>
                <Stack
                    direction='row'
                    justify='flex-start'
                    align='center'
                    spacing='16px'
                    borderColor='#000000'
                    borderTopWidth='1px'
                    width='518px'
                    maxWidth='100%'
                >
                    <MenuItem background='#FFFFFF'>
                        <Stack
                            padding='2px'
                            width='34px'
                            height='20px'
                            direction='row'
                            justify='flex-start'
                            align='center'
                            spacing='0px'
                        />
                    </MenuItem>
                    <Stack height='40px' flex='1'>
                        <Select placeholder='Выберите из списка...' />
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
        <Stack justify='flex-start' align='flex-start' spacing='40px'>
            <Stack justify='flex-start' align='flex-start' spacing='40px'>
                <Stack
                    justify='flex-start'
                    align='flex-start'
                    spacing='24px'
                    width='1360px'
                    maxWidth='100%'
                >
                    <Text
                        fontFamily='Inter'
                        lineHeight='1'
                        fontWeight='500'
                        fontSize='48px'
                        color='black'
                    >
                        Новые рецепты
                    </Text>
                    <Stack
                        direction='row'
                        justify='flex-start'
                        align='center'
                        spacing='24px'
                        overflow='hidden'
                        width='1360px'
                        maxWidth='100%'
                    >
                        <Card size='Default'>
                            <Image
                                src='null'
                                alt='INSERT_ALT'
                                height='230px'
                                width='100%'
                                objectFit='cover'
                            />
                            <Stack
                                paddingX='24px'
                                paddingTop='16px'
                                paddingBottom='20px'
                                justify='flex-start'
                                align='flex-start'
                                spacing='24px'
                                width='322px'
                                maxWidth='100%'
                            >
                                <Stack justify='flex-start' align='flex-start' alignSelf='stretch'>
                                    <Text
                                        fontFamily='Inter'
                                        lineHeight='1.4'
                                        fontWeight='500'
                                        fontSize='20px'
                                        color='black'
                                        alignSelf='stretch'
                                    >
                                        Солянка с грибами
                                    </Text>
                                    <Text
                                        fontFamily='Inter'
                                        lineHeight='1.43'
                                        fontWeight='400'
                                        fontSize='14px'
                                        color='black'
                                        height='64px'
                                        alignSelf='stretch'
                                    >
                                        Как раз после праздников, когда мясные продукты еще
                                        остались, но никто их уже не хочет, время варить солянку.
                                    </Text>
                                </Stack>
                                <Stack
                                    direction='row'
                                    justify='space-between'
                                    align='center'
                                    spacing='34px'
                                    alignSelf='stretch'
                                >
                                    <Badge>
                                        <Stack width='16px' height='16px'>
                                            <Box width='16px' height='16px' />
                                        </Stack>
                                        <Text
                                            fontFamily='Inter'
                                            lineHeight='1.43'
                                            fontWeight='400'
                                            fontSize='14px'
                                            color='black'
                                        >
                                            Первые блюда
                                        </Text>
                                    </Badge>
                                    <Stack direction='row' justify='flex-start' align='center'>
                                        <Button>
                                            <Icon />
                                        </Button>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Card>
                        <Card size='Default'>
                            <Image
                                src='null'
                                alt='INSERT_ALT'
                                height='230px'
                                width='100%'
                                objectFit='cover'
                            />
                            <Stack
                                paddingX='24px'
                                paddingTop='16px'
                                paddingBottom='20px'
                                justify='flex-start'
                                align='flex-start'
                                spacing='24px'
                                width='322px'
                                maxWidth='100%'
                            >
                                <Stack justify='flex-start' align='flex-start' alignSelf='stretch'>
                                    <Text
                                        fontFamily='Inter'
                                        lineHeight='1.4'
                                        fontWeight='500'
                                        fontSize='20px'
                                        color='black'
                                        alignSelf='stretch'
                                    >
                                        Капустные котлеты
                                    </Text>
                                    <Text
                                        fontFamily='Inter'
                                        lineHeight='1.43'
                                        fontWeight='400'
                                        fontSize='14px'
                                        color='black'
                                        height='64px'
                                        alignSelf='stretch'
                                    >
                                        Капустные котлеты по этому рецепту получаются необычайно
                                        пышными и невероятно вкусными. Мягкий вкус и лёгкая пряная
                                        нотка наверняка помогут сделать эти чудесные котлеты из
                                        капусты одним из ваших любимых овощных блюд.
                                    </Text>
                                </Stack>
                                <Stack
                                    direction='row'
                                    justify='space-between'
                                    align='center'
                                    spacing='34px'
                                    alignSelf='stretch'
                                >
                                    <Badge>
                                        <Stack width='16px' height='16px'>
                                            <Box width='16px' height='16px' />
                                        </Stack>
                                        <Text
                                            fontFamily='Inter'
                                            lineHeight='1.43'
                                            fontWeight='400'
                                            fontSize='14px'
                                            color='black'
                                        >
                                            Веганские блюда
                                        </Text>
                                    </Badge>
                                    <Stack direction='row' justify='flex-start' align='center'>
                                        <Button>
                                            <Icon />
                                        </Button>
                                        <Button>
                                            <Icon />
                                        </Button>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Card>
                        <Card size='Default'>
                            <Image
                                src='null'
                                alt='INSERT_ALT'
                                height='230px'
                                width='100%'
                                objectFit='cover'
                            />
                            <Stack
                                paddingX='24px'
                                paddingTop='16px'
                                paddingBottom='20px'
                                justify='flex-start'
                                align='flex-start'
                                spacing='24px'
                                width='322px'
                                maxWidth='100%'
                            >
                                <Stack justify='flex-start' align='flex-start' alignSelf='stretch'>
                                    <Text
                                        fontFamily='Inter'
                                        lineHeight='1.4'
                                        fontWeight='500'
                                        fontSize='20px'
                                        color='black'
                                        alignSelf='stretch'
                                    >
                                        Оладьи на кефире "Пышные"
                                    </Text>
                                    <Text
                                        fontFamily='Inter'
                                        lineHeight='1.43'
                                        fontWeight='400'
                                        fontSize='14px'
                                        color='black'
                                        height='64px'
                                        alignSelf='stretch'
                                    >
                                        Очень вкусные и нежные оладьи на кефире. Настоятельно
                                        рекомендую пышные кефирные оладьи на завтрак.
                                    </Text>
                                </Stack>
                                <Stack
                                    direction='row'
                                    justify='space-between'
                                    align='center'
                                    spacing='34px'
                                    alignSelf='stretch'
                                >
                                    <Badge>
                                        <Stack width='16px' height='16px'>
                                            <Box width='16px' height='16px' />
                                        </Stack>
                                        <Text
                                            fontFamily='Inter'
                                            lineHeight='1.43'
                                            fontWeight='400'
                                            fontSize='14px'
                                            color='black'
                                        >
                                            Десерты, выпечка
                                        </Text>
                                    </Badge>
                                    <Stack direction='row' justify='flex-start' align='center'>
                                        <Button>
                                            <Icon />
                                        </Button>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Card>
                        <Card size='Default'>
                            <Image
                                src='null'
                                alt='INSERT_ALT'
                                height='230px'
                                width='100%'
                                objectFit='cover'
                            />
                            <Stack
                                paddingX='24px'
                                paddingTop='16px'
                                paddingBottom='20px'
                                justify='flex-start'
                                align='flex-start'
                                spacing='24px'
                                width='322px'
                                maxWidth='100%'
                            >
                                <Stack justify='flex-start' align='flex-start' alignSelf='stretch'>
                                    <Text
                                        fontFamily='Inter'
                                        lineHeight='1.4'
                                        fontWeight='500'
                                        fontSize='20px'
                                        color='black'
                                        alignSelf='stretch'
                                    >
                                        Салат "Здоровье"
                                    </Text>
                                    <Text
                                        fontFamily='Inter'
                                        lineHeight='1.43'
                                        fontWeight='400'
                                        fontSize='14px'
                                        color='black'
                                        height='64px'
                                        alignSelf='stretch'
                                    >
                                        Сельдерей очень полезен для здоровья, пора набираться
                                        витаминов. Не салат, а сплошное удовольствие:) Вкусный,
                                        необычный, а главное быстрый.
                                    </Text>
                                </Stack>
                                <Stack
                                    direction='row'
                                    justify='flex-start'
                                    align='center'
                                    spacing='34px'
                                    alignSelf='stretch'
                                >
                                    <Badge>
                                        <Stack width='16px' height='16px'>
                                            <Box width='16px' height='16px' />
                                        </Stack>
                                        <Text
                                            fontFamily='Inter'
                                            lineHeight='1.43'
                                            fontWeight='400'
                                            fontSize='14px'
                                            color='black'
                                        >
                                            Салаты
                                        </Text>
                                    </Badge>
                                </Stack>
                            </Stack>
                        </Card>
                        <Card size='Default'>
                            <Image
                                src='null'
                                alt='INSERT_ALT'
                                height='230px'
                                width='100%'
                                objectFit='cover'
                            />
                            <Stack
                                paddingX='24px'
                                paddingTop='16px'
                                paddingBottom='20px'
                                justify='flex-start'
                                align='flex-start'
                                spacing='24px'
                                width='322px'
                                maxWidth='100%'
                            >
                                <Stack justify='flex-start' align='flex-start' alignSelf='stretch'>
                                    <Text
                                        fontFamily='Inter'
                                        lineHeight='1.4'
                                        fontWeight='500'
                                        fontSize='20px'
                                        color='black'
                                        alignSelf='stretch'
                                    >
                                        Салат "Здоровье"
                                    </Text>
                                    <Text
                                        fontFamily='Inter'
                                        lineHeight='1.43'
                                        fontWeight='400'
                                        fontSize='14px'
                                        color='black'
                                        height='64px'
                                        alignSelf='stretch'
                                    >
                                        Сельдерей очень полезен для здоровья, пора набираться
                                        витаминов. Не салат, а сплошное удовольствие:) Вкусный,
                                        необычный, а главное быстрый.
                                    </Text>
                                </Stack>
                                <Stack
                                    direction='row'
                                    justify='flex-start'
                                    align='center'
                                    spacing='34px'
                                    alignSelf='stretch'
                                >
                                    <Badge>
                                        <Stack width='16px' height='16px'>
                                            <Box width='16px' height='16px' />
                                        </Stack>
                                        <Text
                                            fontFamily='Inter'
                                            lineHeight='1.43'
                                            fontWeight='400'
                                            fontSize='14px'
                                            color='black'
                                        >
                                            Салаты
                                        </Text>
                                    </Badge>
                                </Stack>
                            </Stack>
                        </Card>
                    </Stack>
                    <Stack
                        direction='row'
                        justify='space-between'
                        align='center'
                        spacing='1264px'
                        width='1376px'
                        maxWidth='100%'
                    >
                        <Stack
                            paddingX='12px'
                            height='48px'
                            direction='row'
                            justify='center'
                            align='center'
                        >
                            <Icon />
                        </Stack>
                        <Stack
                            paddingX='12px'
                            height='48px'
                            direction='row'
                            justify='center'
                            align='center'
                        >
                            <Icon />
                        </Stack>
                    </Stack>
                </Stack>
                <Stack
                    justify='flex-start'
                    align='flex-start'
                    spacing='24px'
                    width='1360px'
                    maxWidth='100%'
                >
                    <Stack
                        direction='row'
                        justify='space-between'
                        align='flex-end'
                        spacing='24px'
                        alignSelf='stretch'
                    >
                        <Text
                            fontFamily='Inter'
                            lineHeight='1'
                            fontWeight='500'
                            fontSize='48px'
                            color='black'
                        >
                            Самое сочное{' '}
                        </Text>
                        <Button>
                            <Icon />
                        </Button>
                    </Stack>
                    <Stack direction='row' justify='center' align='center' spacing='24px'>
                        <Card size='Default'>
                            <Image
                                src='null'
                                alt='INSERT_ALT'
                                height='244px'
                                width='100%'
                                objectFit='cover'
                            />
                            <Stack
                                paddingX='24px'
                                paddingY='20px'
                                justify='flex-start'
                                align='flex-start'
                                spacing='24px'
                                flex='1'
                            >
                                <Stack
                                    direction='row'
                                    justify='space-between'
                                    align='center'
                                    spacing='34px'
                                    alignSelf='stretch'
                                >
                                    <Badge>
                                        <Stack width='16px' height='16px'>
                                            <Box width='16px' height='16px' />
                                        </Stack>
                                        <Text
                                            fontFamily='Inter'
                                            lineHeight='1.43'
                                            fontWeight='400'
                                            fontSize='14px'
                                            color='black'
                                        >
                                            Вторые блюда
                                        </Text>
                                    </Badge>
                                    <Stack direction='row' justify='flex-start' align='center'>
                                        <Button>
                                            <Icon />
                                        </Button>
                                        <Button>
                                            <Icon />
                                        </Button>
                                    </Stack>
                                </Stack>
                                <Stack justify='flex-start' align='flex-start' alignSelf='stretch'>
                                    <Text
                                        fontFamily='Inter'
                                        lineHeight='1.4'
                                        fontWeight='500'
                                        fontSize='20px'
                                        color='black'
                                        alignSelf='stretch'
                                    >
                                        Кнели со спагетти
                                    </Text>
                                    <Text
                                        fontFamily='Inter'
                                        lineHeight='1.43'
                                        fontWeight='400'
                                        fontSize='14px'
                                        color='black'
                                        height='64px'
                                        alignSelf='stretch'
                                    >
                                        Как раз после праздников, когда мясные продукты еще
                                        остались, но никто их уже не хочет, время варить солянку.
                                    </Text>
                                </Stack>
                                <Stack
                                    direction='row'
                                    justify='flex-end'
                                    align='center'
                                    alignSelf='stretch'
                                >
                                    <Button>
                                        <Icon />
                                    </Button>
                                    <Button size='sm' colorScheme='black'>
                                        Готовить
                                    </Button>
                                </Stack>
                            </Stack>
                        </Card>
                        <Card size='Default'>
                            <Image
                                src='null'
                                alt='INSERT_ALT'
                                height='244px'
                                width='100%'
                                objectFit='cover'
                            />
                            <Stack
                                paddingX='24px'
                                paddingY='20px'
                                justify='flex-start'
                                align='flex-start'
                                spacing='24px'
                                flex='1'
                            >
                                <Stack
                                    direction='row'
                                    justify='space-between'
                                    align='center'
                                    spacing='34px'
                                    alignSelf='stretch'
                                >
                                    <Badge>
                                        <Stack width='16px' height='16px'>
                                            <Box width='16px' height='16px' />
                                        </Stack>
                                        <Text
                                            fontFamily='Inter'
                                            lineHeight='1.43'
                                            fontWeight='400'
                                            fontSize='14px'
                                            color='black'
                                        >
                                            Вторые блюда
                                        </Text>
                                    </Badge>
                                    <Stack direction='row' justify='flex-start' align='center'>
                                        <Button>
                                            <Icon />
                                        </Button>
                                        <Button>
                                            <Icon />
                                        </Button>
                                    </Stack>
                                </Stack>
                                <Stack justify='flex-start' align='flex-start' alignSelf='stretch'>
                                    <Text
                                        fontFamily='Inter'
                                        lineHeight='1.4'
                                        fontWeight='500'
                                        fontSize='20px'
                                        color='black'
                                        alignSelf='stretch'
                                    >
                                        Пряная ветчина по итальянски
                                    </Text>
                                    <Text
                                        fontFamily='Inter'
                                        lineHeight='1.43'
                                        fontWeight='400'
                                        fontSize='14px'
                                        color='black'
                                        height='64px'
                                        alignSelf='stretch'
                                    >
                                        Как раз после праздников, когда мясные продукты еще
                                        остались, но никто их уже не хочет, время варить солянку.
                                    </Text>
                                </Stack>
                                <Stack
                                    direction='row'
                                    justify='flex-end'
                                    align='center'
                                    alignSelf='stretch'
                                >
                                    <Button>
                                        <Icon />
                                    </Button>
                                    <Button size='sm' colorScheme='black'>
                                        Готовить
                                    </Button>
                                </Stack>
                            </Stack>
                            <Badge>
                                <Avatar name='TA' src=' ' size='xs' />
                                <Text
                                    fontFamily='Inter'
                                    lineHeight='1.43'
                                    fontWeight='400'
                                    fontSize='14px'
                                    color='black'
                                >
                                    Елена Высоцкая рекомендует
                                </Text>
                            </Badge>
                        </Card>
                    </Stack>
                    <Stack direction='row' justify='center' align='center' spacing='24px'>
                        <Card size='Default'>
                            <Image
                                src='null'
                                alt='INSERT_ALT'
                                height='244px'
                                width='100%'
                                objectFit='cover'
                            />
                            <Stack
                                paddingX='24px'
                                paddingY='20px'
                                justify='flex-start'
                                align='flex-start'
                                spacing='24px'
                                flex='1'
                            >
                                <Stack
                                    direction='row'
                                    justify='space-between'
                                    align='center'
                                    spacing='34px'
                                    alignSelf='stretch'
                                >
                                    <Badge>
                                        <Stack width='16px' height='16px'>
                                            <Box width='16px' height='16px' />
                                        </Stack>
                                        <Text
                                            fontFamily='Inter'
                                            lineHeight='1.43'
                                            fontWeight='400'
                                            fontSize='14px'
                                            color='black'
                                        >
                                            Вторые блюда
                                        </Text>
                                    </Badge>
                                    <Stack direction='row' justify='flex-start' align='center'>
                                        <Button>
                                            <Icon />
                                        </Button>
                                        <Button>
                                            <Icon />
                                        </Button>
                                    </Stack>
                                </Stack>
                                <Stack justify='flex-start' align='flex-start' alignSelf='stretch'>
                                    <Text
                                        fontFamily='Inter'
                                        lineHeight='1.4'
                                        fontWeight='500'
                                        fontSize='20px'
                                        color='black'
                                        alignSelf='stretch'
                                    >
                                        Лапша с курицей и шафраном
                                    </Text>
                                    <Text
                                        fontFamily='Inter'
                                        lineHeight='1.43'
                                        fontWeight='400'
                                        fontSize='14px'
                                        color='black'
                                        height='64px'
                                        alignSelf='stretch'
                                    >
                                        Как раз после праздников, когда мясные продукты еще
                                        остались, но никто их уже не хочет, время варить солянку.
                                    </Text>
                                </Stack>
                                <Stack
                                    direction='row'
                                    justify='flex-end'
                                    align='center'
                                    alignSelf='stretch'
                                >
                                    <Button>
                                        <Icon />
                                    </Button>
                                    <Button size='sm' colorScheme='black'>
                                        Готовить
                                    </Button>
                                </Stack>
                            </Stack>
                            <Badge>
                                <Avatar name='TA' src=' ' size='xs' />
                                <Text
                                    fontFamily='Inter'
                                    lineHeight='1.43'
                                    fontWeight='400'
                                    fontSize='14px'
                                    color='black'
                                >
                                    Alex Cook рекомендует
                                </Text>
                            </Badge>
                        </Card>
                        <Card size='Default'>
                            <Image
                                src='null'
                                alt='INSERT_ALT'
                                height='244px'
                                width='100%'
                                objectFit='cover'
                            />
                            <Stack
                                paddingX='24px'
                                paddingY='20px'
                                justify='flex-start'
                                align='flex-start'
                                spacing='24px'
                                flex='1'
                            >
                                <Stack
                                    direction='row'
                                    justify='space-between'
                                    align='center'
                                    spacing='34px'
                                    alignSelf='stretch'
                                >
                                    <Badge>
                                        <Stack width='16px' height='16px'>
                                            <Box width='16px' height='16px' />
                                        </Stack>
                                        <Text
                                            fontFamily='Inter'
                                            lineHeight='1.43'
                                            fontWeight='400'
                                            fontSize='14px'
                                            color='black'
                                        >
                                            Национальные
                                        </Text>
                                    </Badge>
                                    <Stack direction='row' justify='flex-start' align='center'>
                                        <Button>
                                            <Icon />
                                        </Button>
                                        <Button>
                                            <Icon />
                                        </Button>
                                    </Stack>
                                </Stack>
                                <Stack justify='flex-start' align='flex-start' alignSelf='stretch'>
                                    <Text
                                        fontFamily='Inter'
                                        lineHeight='1.4'
                                        fontWeight='500'
                                        fontSize='20px'
                                        color='black'
                                        alignSelf='stretch'
                                    >
                                        Том-ям с капустой кимчи
                                    </Text>
                                    <Text
                                        fontFamily='Inter'
                                        lineHeight='1.43'
                                        fontWeight='400'
                                        fontSize='14px'
                                        color='black'
                                        height='64px'
                                        alignSelf='stretch'
                                    >
                                        Как раз после праздников, когда мясные продукты еще
                                        остались, но никто их уже не хочет, время варить солянку.
                                    </Text>
                                </Stack>
                                <Stack
                                    direction='row'
                                    justify='flex-end'
                                    align='center'
                                    alignSelf='stretch'
                                >
                                    <Button>
                                        <Icon />
                                    </Button>
                                    <Button size='sm' colorScheme='black'>
                                        Готовить
                                    </Button>
                                </Stack>
                            </Stack>
                        </Card>
                    </Stack>
                </Stack>
                <Stack
                    padding='24px'
                    borderRadius='16px'
                    justify='flex-start'
                    align='flex-start'
                    spacing='24px'
                    width='1360px'
                    maxWidth='100%'
                    background='Lime.300'
                >
                    <Stack
                        direction='row'
                        justify='space-between'
                        align='flex-start'
                        spacing='24px'
                        alignSelf='stretch'
                    >
                        <Text
                            fontFamily='Inter'
                            lineHeight='1.11'
                            fontWeight='400'
                            fontSize='36px'
                            color='black'
                        >
                            Кулинарные блоги
                        </Text>
                        <Button>
                            <Icon />
                        </Button>
                    </Stack>
                    <Stack
                        direction='row'
                        justify='flex-start'
                        align='center'
                        spacing='16px'
                        alignSelf='stretch'
                    >
                        <Card size='Default' flex='1'>
                            <Stack
                                paddingX='24px'
                                paddingTop='24px'
                                paddingBottom='16px'
                                alignSelf='stretch'
                                direction='row'
                                justify='flex-start'
                                align='center'
                                spacing='12px'
                            >
                                <Avatar name='ЕВ' src=' ' />
                                <Stack justify='center' align='flex-start' spacing='0px' flex='1'>
                                    <Text
                                        fontFamily='Inter'
                                        lineHeight='1.56'
                                        fontWeight='500'
                                        fontSize='18px'
                                        color='black'
                                        alignSelf='stretch'
                                    >
                                        Елена Высоцкая
                                    </Text>
                                    <Text
                                        fontFamily='Inter'
                                        lineHeight='1.43'
                                        fontWeight='400'
                                        fontSize='14px'
                                        color='blackAlpha.700'
                                        alignSelf='stretch'
                                    >
                                        @elenapovar
                                    </Text>
                                </Stack>
                            </Stack>
                            <Stack
                                paddingX='24px'
                                paddingTop='12px'
                                paddingBottom='20px'
                                justify='flex-start'
                                align='flex-start'
                                spacing='24px'
                                alignSelf='stretch'
                            >
                                <Stack justify='flex-start' align='flex-start' alignSelf='stretch'>
                                    <Text
                                        fontFamily='Inter'
                                        lineHeight='1.43'
                                        fontWeight='400'
                                        fontSize='14px'
                                        color='black'
                                        height='64px'
                                        alignSelf='stretch'
                                    >
                                        Как раз после праздников, когда мясные продукты еще
                                        остались, но никто их уже не хочет, время варить солянку.
                                    </Text>
                                </Stack>
                            </Stack>
                        </Card>
                        <Card size='Default' flex='1'>
                            <Stack
                                paddingX='24px'
                                paddingTop='24px'
                                paddingBottom='16px'
                                alignSelf='stretch'
                                direction='row'
                                justify='flex-start'
                                align='center'
                                spacing='12px'
                            >
                                <Avatar name='ЕК' src=' ' />
                                <Stack justify='center' align='flex-start' spacing='0px' flex='1'>
                                    <Text
                                        fontFamily='Inter'
                                        lineHeight='1.56'
                                        fontWeight='500'
                                        fontSize='18px'
                                        color='black'
                                        alignSelf='stretch'
                                    >
                                        Alex Cook
                                    </Text>
                                    <Text
                                        fontFamily='Inter'
                                        lineHeight='1.43'
                                        fontWeight='400'
                                        fontSize='14px'
                                        color='blackAlpha.700'
                                        alignSelf='stretch'
                                    >
                                        @funtasticooking
                                    </Text>
                                </Stack>
                            </Stack>
                            <Stack
                                paddingX='24px'
                                paddingTop='12px'
                                paddingBottom='20px'
                                justify='flex-start'
                                align='flex-start'
                                spacing='24px'
                                alignSelf='stretch'
                            >
                                <Stack justify='flex-start' align='flex-start' alignSelf='stretch'>
                                    <Text
                                        fontFamily='Inter'
                                        lineHeight='1.43'
                                        fontWeight='400'
                                        fontSize='14px'
                                        color='black'
                                        height='64px'
                                        alignSelf='stretch'
                                    >
                                        Как раз после праздников, когда мясные продукты еще
                                        остались, но никто их уже не хочет, время варить солянку.
                                    </Text>
                                </Stack>
                            </Stack>
                        </Card>
                        <Card size='Default' flex='1'>
                            <Stack
                                paddingX='24px'
                                paddingTop='24px'
                                paddingBottom='16px'
                                alignSelf='stretch'
                                direction='row'
                                justify='flex-start'
                                align='center'
                                spacing='12px'
                            >
                                <Avatar name='ЕК' src=' ' />
                                <Stack justify='center' align='flex-start' spacing='0px' flex='1'>
                                    <Text
                                        fontFamily='Inter'
                                        lineHeight='1.56'
                                        fontWeight='500'
                                        fontSize='18px'
                                        color='black'
                                        alignSelf='stretch'
                                    >
                                        Екатерина Константинопольская
                                    </Text>
                                    <Text
                                        fontFamily='Inter'
                                        lineHeight='1.43'
                                        fontWeight='400'
                                        fontSize='14px'
                                        color='blackAlpha.700'
                                        alignSelf='stretch'
                                    >
                                        @bake_and_pie
                                    </Text>
                                </Stack>
                            </Stack>
                            <Stack
                                paddingX='24px'
                                paddingTop='12px'
                                paddingBottom='20px'
                                justify='flex-start'
                                align='flex-start'
                                spacing='24px'
                                alignSelf='stretch'
                            >
                                <Stack justify='flex-start' align='flex-start' alignSelf='stretch'>
                                    <Text
                                        fontFamily='Inter'
                                        lineHeight='1.43'
                                        fontWeight='400'
                                        fontSize='14px'
                                        color='black'
                                        height='64px'
                                        alignSelf='stretch'
                                    >
                                        Как раз после праздников, когда мясные продукты еще
                                        остались, но никто их уже не хочет, время варить солянку.
                                    </Text>
                                </Stack>
                            </Stack>
                        </Card>
                    </Stack>
                </Stack>
                <Stack
                    paddingTop='24px'
                    justify='flex-start'
                    align='flex-start'
                    spacing='24px'
                    borderColor='blackAlpha.200'
                    borderTopWidth='1px'
                    width='1360px'
                    maxWidth='100%'
                >
                    <Stack
                        direction='row'
                        justify='space-between'
                        align='flex-start'
                        spacing='12px'
                        alignSelf='stretch'
                    >
                        <Text
                            fontFamily='Inter'
                            lineHeight='1'
                            fontWeight='500'
                            fontSize='48px'
                            color='black'
                        >
                            Веганская кухня
                        </Text>
                        <Text
                            fontFamily='Inter'
                            lineHeight='1.5'
                            fontWeight='500'
                            fontSize='16px'
                            color='blackAlpha.700'
                            width='668px'
                            maxWidth='100%'
                        >
                            Интересны не только убеждённым вегетарианцам, но и тем, кто хочет
                            попробовать вегетарианскую диету и готовить вкусные вегетарианские
                            блюда.
                        </Text>
                    </Stack>
                    <Stack direction='row' justify='flex-start' align='flex-start' spacing='24px'>
                        <Stack direction='row' justify='center' align='center' spacing='24px'>
                            <Card size='Default'>
                                <Stack
                                    paddingX='24px'
                                    paddingTop='24px'
                                    paddingBottom='20px'
                                    justify='flex-start'
                                    align='flex-start'
                                    spacing='24px'
                                    flex='1'
                                >
                                    <Stack
                                        justify='flex-start'
                                        align='flex-start'
                                        alignSelf='stretch'
                                    >
                                        <Text
                                            fontFamily='Inter'
                                            lineHeight='1.4'
                                            fontWeight='500'
                                            fontSize='20px'
                                            color='black'
                                            alignSelf='stretch'
                                        >
                                            Картошка, тушенная с болгарским перцем и фасолью в
                                            томатном соусе
                                        </Text>
                                        <Text
                                            fontFamily='Inter'
                                            lineHeight='1.43'
                                            fontWeight='400'
                                            fontSize='14px'
                                            color='black'
                                            height='64px'
                                            alignSelf='stretch'
                                        >
                                            Картошка, тушенная с болгарским перцем, фасолью,
                                            морковью и луком, - вариант сытного блюда на каждый
                                            день. Фасоль в данном случае заменяет мясо, делая рагу
                                            сытным и питательным. Чтобы сократить время
                                            приготовления, возьмём консервированную фасоль. Блюдо
                                            хоть и простое, но в полной мере наполнено ароматами и
                                            имеет выразительный вкус за счёт добавления томатной
                                            пасты.
                                        </Text>
                                    </Stack>
                                    <Stack
                                        direction='row'
                                        justify='space-between'
                                        align='center'
                                        spacing='34px'
                                        alignSelf='stretch'
                                    >
                                        <Badge>
                                            <Stack width='16px' height='16px'>
                                                <Box width='16px' height='16px' />
                                            </Stack>
                                            <Text
                                                fontFamily='Inter'
                                                lineHeight='1.43'
                                                fontWeight='400'
                                                fontSize='14px'
                                                color='black'
                                            >
                                                Вторые блюда
                                            </Text>
                                        </Badge>
                                        <Stack direction='row' justify='flex-start' align='center'>
                                            <Button>
                                                <Icon />
                                            </Button>
                                            <Button>
                                                <Icon />
                                            </Button>
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </Card>
                        </Stack>
                        <Card size='Default'>
                            <Stack
                                paddingX='24px'
                                paddingTop='24px'
                                paddingBottom='20px'
                                justify='flex-start'
                                align='flex-start'
                                spacing='24px'
                                flex='1'
                            >
                                <Stack justify='flex-start' align='flex-start' alignSelf='stretch'>
                                    <Text
                                        fontFamily='Inter'
                                        lineHeight='1.4'
                                        fontWeight='500'
                                        fontSize='20px'
                                        color='black'
                                        alignSelf='stretch'
                                    >
                                        Капустные котлеты
                                    </Text>
                                    <Text
                                        fontFamily='Inter'
                                        lineHeight='1.43'
                                        fontWeight='400'
                                        fontSize='14px'
                                        color='black'
                                        height='64px'
                                        alignSelf='stretch'
                                    >
                                        Капустные котлеты по этому рецепту получаются необычайно
                                        пышными и невероятно вкусными. Мягкий вкус и лёгкая пряная
                                        нотка наверняка помогут сделать эти чудесные котлеты из
                                        капусты одним из ваших любимых овощных блюд.
                                    </Text>
                                </Stack>
                                <Stack
                                    direction='row'
                                    justify='space-between'
                                    align='center'
                                    spacing='34px'
                                    alignSelf='stretch'
                                >
                                    <Badge>
                                        <Stack width='16px' height='16px'>
                                            <Box width='16px' height='16px' />
                                        </Stack>
                                        <Text
                                            fontFamily='Inter'
                                            lineHeight='1.43'
                                            fontWeight='400'
                                            fontSize='14px'
                                            color='black'
                                        >
                                            Вторые блюда
                                        </Text>
                                    </Badge>
                                    <Stack direction='row' justify='flex-start' align='center'>
                                        <Button>
                                            <Icon />
                                        </Button>
                                        <Button>
                                            <Icon />
                                        </Button>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Card>
                        <Stack
                            justify='flex-start'
                            align='center'
                            spacing='12px'
                            alignSelf='stretch'
                        >
                            <Card size='Default' width='668px' flex='1' maxWidth='100%'>
                                <Stack
                                    padding='24px'
                                    direction='row'
                                    justify='flex-start'
                                    align='center'
                                    spacing='12px'
                                    flex='1'
                                    alignSelf='stretch'
                                >
                                    <Stack width='24px' height='24px'>
                                        <Box width='24px' height='24px' />
                                    </Stack>
                                    <Stack justify='flex-start' align='flex-start' flex='1'>
                                        <Text
                                            fontFamily='Inter'
                                            lineHeight='1.4'
                                            fontWeight='500'
                                            fontSize='20px'
                                            color='black'
                                            alignSelf='stretch'
                                        >
                                            Стейк для вегетарианцев
                                        </Text>
                                    </Stack>
                                    <Stack direction='row' justify='flex-end' align='center'>
                                        <Button size='sm' variant='outline' colorScheme='Lime'>
                                            Готовить
                                        </Button>
                                    </Stack>
                                </Stack>
                            </Card>
                            <Card size='Default' width='668px' flex='1' maxWidth='100%'>
                                <Stack
                                    padding='24px'
                                    direction='row'
                                    justify='flex-start'
                                    align='center'
                                    spacing='12px'
                                    flex='1'
                                    alignSelf='stretch'
                                >
                                    <Stack width='24px' height='24px'>
                                        <Box width='24px' height='24px' />
                                    </Stack>
                                    <Stack justify='flex-start' align='flex-start' flex='1'>
                                        <Text
                                            fontFamily='Inter'
                                            lineHeight='1.4'
                                            fontWeight='500'
                                            fontSize='20px'
                                            color='black'
                                            alignSelf='stretch'
                                        >
                                            Котлеты из гречки и фасоли
                                        </Text>
                                    </Stack>
                                    <Stack direction='row' justify='flex-end' align='center'>
                                        <Button size='sm' variant='outline' colorScheme='Lime'>
                                            Готовить
                                        </Button>
                                    </Stack>
                                </Stack>
                            </Card>
                            <Card size='Default' width='668px' flex='1' maxWidth='100%'>
                                <Stack
                                    padding='24px'
                                    direction='row'
                                    justify='flex-start'
                                    align='center'
                                    spacing='12px'
                                    flex='1'
                                    alignSelf='stretch'
                                >
                                    <Stack width='24px' height='24px'>
                                        <Box width='24px' height='24px' />
                                    </Stack>
                                    <Stack justify='flex-start' align='flex-start' flex='1'>
                                        <Text
                                            fontFamily='Inter'
                                            lineHeight='1.4'
                                            fontWeight='500'
                                            fontSize='20px'
                                            color='black'
                                            alignSelf='stretch'
                                        >
                                            Сырный суп с лапшой и брокколи
                                        </Text>
                                    </Stack>
                                    <Stack direction='row' justify='flex-end' align='center'>
                                        <Button size='sm' variant='outline' colorScheme='Lime'>
                                            Готовить
                                        </Button>
                                    </Stack>
                                </Stack>
                            </Card>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    </Stack>
);
