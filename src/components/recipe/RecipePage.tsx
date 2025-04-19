import { NumberIncrementStepper, NumberInputStepper } from '@chakra-ui/icons';
import {
    Avatar,
    Badge,
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Flex,
    Heading,
    HStack,
    Image,
    NumberDecrementStepper,
    NumberInput,
    NumberInputField,
    SimpleGrid,
    Table,
    TableContainer,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useParams } from 'react-router';

import sergey from '~/assets/avatars/avatar-sergey.png';
import lapshaChiken from '~/assets/recipe-images/lapsha-chiken.png';
import { Reactions } from '~/components/common/Reactions';
import { breadcrumbsObj } from '~/components/header/breadcrumbs/BreadcrumbsObj';
import { LatestRecipes } from '~/components/latest_recipes/LatestRecipes';
import { SpriteIcon } from '~/components/sprite_icon/SpriteIcon';
import { recipes } from '~/components/vegan_kitchen/recipes';

type Params = {
    recipeId: string;
};
export const RecipePage = () => {
    const [portionCount, setPortionCount] = useState<number>(1);

    const params = useParams<Params>();
    console.log(params);

    const { recipeId } = params;

    const recipe = recipes.find((r) => r.id === recipeId);

    const values = {
        calories: { title: 'Калории', unit: 'ккал' },
        proteins: { title: 'Белки', unit: 'грамм' },
        fats: { title: 'Жиры', unit: 'грамм' },
        carbohydrates: { title: 'Углеводы', unit: 'грамм' },
    };

    const onChangeHandler = (_valueAsString: string, valueAsNumber: number) => {
        setPortionCount(valueAsNumber);
    };

    if (!recipe) {
        return;
    }

    return (
        <Flex
            flexDirection='column'
            alignItems='center'
            width={{ sm: '360px', md: '768px', lg: '880px', xl: '1360px' }}
            height='100%'
            marginTop='56px'
        >
            <Flex
                marginBottom='32px'
                flexDirection='column'
                alignItems='center'
                gap='40px'
                // maxWidth='783px'
            >
                <HStack gap={6} width='100%'>
                    <Image src={lapshaChiken} />
                    <Flex height='410px' width='100%' flexDirection='column' position='relative'>
                        <HStack
                            display='flex'
                            width='100%'
                            height='32px'
                            alignItems='center'
                            justifyContent='space-between'
                        >
                            <Box display='flex' flexDirection='row' gap='16px'>
                                {recipe.category.map((badge) => (
                                    <Badge
                                        display='flex'
                                        flexDirection='row'
                                        bgColor='lime.50'
                                        maxWidth='146px'
                                        height='24px'
                                        padding='2px 8px'
                                        borderRadius='4px'
                                        alignItems='center'
                                        fontSize={{ sm: '14px' }}
                                        fontWeight={{ sm: 400 }}
                                        gap='8px'
                                        textTransform='none'
                                    >
                                        <SpriteIcon
                                            boxSize='16px'
                                            viewBox='16px 16px'
                                            spritePath='/sprite.svg'
                                            spriteId={breadcrumbsObj[badge]}
                                        />
                                        {breadcrumbsObj[badge]}
                                    </Badge>
                                ))}
                            </Box>
                            <Reactions
                                likesCount={recipe.likes}
                                bookmarksCount={recipe.bookmarks}
                            />
                        </HStack>
                        <Box
                            display='flex'
                            flexDirection='column'
                            alignItems='left'
                            width='100%'
                            paddingTop='32px'
                        >
                            <Heading
                                fontWeight={700}
                                fontSize='48px'
                                lineHeight={1}
                                paddingTop='32px'
                                paddingBottom='24px'
                                width='437px'
                                isTruncated
                            >
                                {recipe.title}
                            </Heading>
                            <Text width='528px' fontWeight={400} fontSize='14px' lineHeight={1.4}>
                                {recipe.description}
                            </Text>
                        </Box>
                        <Flex
                            width='783px'
                            height='48px'
                            justifyContent='space-between'
                            position='absolute'
                            bottom={0}
                        >
                            <Box
                                display='flex'
                                flexDirection='column'
                                alignItems='center'
                                justifyContent='flex-end'
                            >
                                <Badge
                                    width='104px'
                                    height='24px'
                                    padding='2px 8px'
                                    borderRadius='4px'
                                    bgColor='blackAlpha.100'
                                    display='flex'
                                    alignItems='center'
                                    gap='8px'
                                    fontSize={{ sm: '14px' }}
                                    fontWeight={{ sm: 400 }}
                                    textTransform='none'
                                >
                                    <SpriteIcon
                                        boxSize='16px'
                                        viewBox='16px 16px'
                                        spritePath='/spriteRightSide.svg'
                                        spriteId='clock'
                                    />
                                    {recipe.time}
                                </Badge>
                            </Box>
                            <Box display='flex' gap='16px' alignItems='center'>
                                <Button
                                    width='219px'
                                    height='48px'
                                    borderRadius='6px'
                                    padding='0 24px'
                                    variant='outlined'
                                    border='1px solid rgba(0, 0, 0, 0.48)'
                                    gap='8px'
                                    fontSize={{ sm: '18px' }}
                                    fontWeight={{ sm: 600 }}
                                >
                                    <SpriteIcon
                                        boxSize='16px'
                                        viewBox='16px 16px'
                                        spritePath='/spriteRightSide.svg'
                                        spriteId='emoji'
                                    />
                                    Оценить рецепт
                                </Button>
                                <Button
                                    width='273px'
                                    height='48px'
                                    borderRadius='6px'
                                    padding='0 24px'
                                    variant='contained'
                                    gap='8px'
                                    bgColor='lime.400'
                                    fontSize={{ sm: '18px' }}
                                    fontWeight={{ sm: 600 }}
                                >
                                    <SpriteIcon
                                        boxSize='16px'
                                        viewBox='16px 16px'
                                        spritePath='/spriteRightSide.svg'
                                        spriteId='bookmark'
                                    />
                                    Сохранить в закладки
                                </Button>
                            </Box>
                        </Flex>
                    </Flex>
                </HStack>
                <Flex
                    width='668px'
                    height='176px'
                    paddingTop='40px'
                    position='relative'
                    display='flex'
                    flexDirection='column'
                    justifyContent='flex-end'
                >
                    <Text
                        fontWeight={400}
                        fontSize='14px'
                        lineHeight={1.4}
                        color='blackAlpha.800'
                        position='absolute'
                        top={0}
                        left={0}
                    >
                        * Калорийность на 1 порцию
                    </Text>
                    <SimpleGrid spacing={6} columns={4}>
                        {Object.entries(recipe.nutritionValue).map(([key, value]) => {
                            const { title, unit } = values[key as keyof typeof values] || {
                                title: key,
                                unit: '',
                            };
                            const totalNutrition = value * portionCount;

                            return (
                                <Card
                                    key={key}
                                    width='149px'
                                    height='136px'
                                    borderRadius='16px'
                                    padding='16px'
                                    variant='outlined'
                                    border='1px'
                                    borderColor='blackAlpha.200'
                                    display='flex'
                                    flexDirection='column'
                                    alignItems='center'
                                >
                                    <CardHeader padding={0}>
                                        <Text
                                            fontSize={{ sm: '14px' }}
                                            fontWeight={{ sm: 400 }}
                                            textTransform='lowercase'
                                            color='blackAlpha.600'
                                        >
                                            {title}
                                        </Text>
                                    </CardHeader>
                                    <CardBody padding={0}>
                                        <Text
                                            fontSize={{ sm: '36px' }}
                                            fontWeight={{ sm: 500 }}
                                            textTransform='none'
                                            color='lime.800'
                                        >
                                            {totalNutrition}
                                        </Text>
                                    </CardBody>
                                    <CardFooter padding={0}>
                                        <Text
                                            fontSize={{ sm: '14px' }}
                                            fontWeight={{ sm: 600 }}
                                            textTransform='uppercase'
                                            color='blackAlpha.900'
                                        >
                                            {unit}
                                        </Text>
                                    </CardFooter>
                                </Card>
                            );
                        })}
                    </SimpleGrid>
                </Flex>
                <TableContainer>
                    <Table variant='simple' width='668px'>
                        <Thead>
                            <Tr>
                                <Th
                                    padding='20px 24px 20px 24px'
                                    height='56px'
                                    fontWeight={700}
                                    fontSize='12px'
                                    color='lime.600'
                                    textTransform='uppercase'
                                >
                                    Ингридиенты
                                </Th>
                                <Th
                                    padding='20px 0 20px 0'
                                    height='56px'
                                    fontWeight={700}
                                    fontSize='12px'
                                    color='lime.600'
                                    textTransform='uppercase'
                                    display='flex'
                                    alignItems='center'
                                    justifyContent='flex-end'
                                    gap='16px'
                                >
                                    Порций
                                    <NumberInput
                                        width='90px'
                                        height='40px'
                                        fontWeight={400}
                                        fontSize='16px'
                                        lineHeight={1.5}
                                        color='black.000'
                                        defaultValue={portionCount}
                                        step={1}
                                        allowMouseWheel
                                        onChange={onChangeHandler}
                                    >
                                        <NumberInputField />
                                        <NumberInputStepper>
                                            <NumberIncrementStepper data-test-id='increment-stepper' />
                                            <NumberDecrementStepper data-test-id='decrement-stepper' />
                                        </NumberInputStepper>
                                    </NumberInput>
                                </Th>
                            </Tr>
                        </Thead>
                        <Tbody color='blackAlpha.900'>
                            {recipe.ingredients.map((item, index) => {
                                const ingredientAmount = Number(item.count) * portionCount;

                                return (
                                    <Tr
                                        key={index}
                                        _odd={{ bg: 'blackAlpha.100' }}
                                        _even={{ bg: 'white' }}
                                    >
                                        <Td height='52px'>{item.title}</Td>
                                        <Td
                                            isNumeric
                                            height='52px'
                                            data-test-id={`ingredient-quantity-${index}`}
                                        >
                                            {ingredientAmount > 0 && ingredientAmount}{' '}
                                            {item.measureUnit}
                                        </Td>
                                    </Tr>
                                );
                            })}
                        </Tbody>
                    </Table>
                </TableContainer>
                <VStack
                    flexDirection='column'
                    alignItems='flex-start'
                    width='668px'
                    paddingTop='40px'
                    gap='20px'
                >
                    <Text fontWeight={500} fontSize='48px'>
                        Шаги приготовления
                    </Text>
                    {recipe.steps.map((step) => {
                        const isImageMissing = step.image;
                        return isImageMissing ? (
                            <Card
                                border='1px'
                                direction='row'
                                variant='outlined'
                                borderColor='blackAlpha.100'
                                width='100%'
                                height='244px'
                            >
                                <Image
                                    objectFit='cover'
                                    width='100%'
                                    maxWidth='346px'
                                    src={step.image}
                                    alt={step.description}
                                />

                                <CardBody padding='20px 24px'>
                                    <Badge
                                        marginBottom='16px'
                                        display='flex'
                                        alignItems='center'
                                        textTransform='none'
                                        fontSize='14px'
                                        fontWeight={400}
                                        width='fit-content'
                                        height='24px'
                                        bgColor='blackAlpha.100'
                                        padding='2px 8px'
                                        borderRadius='4px'
                                    >
                                        Шаг {step.stepNumber}
                                    </Badge>

                                    <Text>{step.description}</Text>
                                </CardBody>
                            </Card>
                        ) : (
                            <Card
                                border='1px'
                                borderColor='blackAlpha.100'
                                variant='outlined'
                                width='100%'
                                height='100px'
                            >
                                <CardBody padding='20px 24px'>
                                    <Badge
                                        marginBottom='16px'
                                        display='flex'
                                        alignItems='center'
                                        textTransform='none'
                                        fontSize='14px'
                                        fontWeight={400}
                                        width='fit-content'
                                        height='24px'
                                        bgColor='blackAlpha.100'
                                        padding='2px 8px'
                                        borderRadius='4px'
                                    >
                                        Шаг {step.stepNumber}
                                    </Badge>

                                    <Text>{step.description}</Text>
                                </CardBody>
                            </Card>
                        );
                    })}
                </VStack>
                <Card
                    borderRadius='8px'
                    padding='24px'
                    height='144px'
                    variant='filled'
                    bgColor='lime.300'
                    width='668px'
                >
                    <CardBody
                        display='flex'
                        alignItems='center'
                        flexDirection='row'
                        gap='16px'
                        padding={0}
                    >
                        <Avatar width='96px' height='96px' src={sergey} />
                        <VStack height='96px' width='508px'>
                            <Box
                                width='100%'
                                position='relative'
                                display='flex'
                                flexDirection='column'
                                alignItems='flex-start'
                                justifyContent='center'
                                gap='4px'
                                height='56px'
                            >
                                <Text fontWeight={700} fontSize='24px' color='blackAlpha.900'>
                                    Сергей Разумов
                                </Text>
                                <Text fontWeight={400} fontSize='14px' color='blackAlpha.600'>
                                    @serge25
                                </Text>
                                <Text
                                    fontWeight={400}
                                    fontSize='14px'
                                    color='black'
                                    position='absolute'
                                    top={0}
                                    right={0}
                                >
                                    Автор рецепта
                                </Text>
                            </Box>
                            <HStack
                                width='100%'
                                display='flex'
                                justifyContent='space-between'
                                paddingTop='16px'
                            >
                                <Button
                                    borderRadius='6px'
                                    padding='0 8px'
                                    bgColor='blackAlpha.900'
                                    color='white'
                                    width='114px'
                                    height='24px'
                                    fontWeight={600}
                                    fontSize='12px'
                                    gap='6px'
                                >
                                    <svg
                                        width='12'
                                        height='12'
                                        viewBox='0 0 12 12'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path
                                            d='M0.75 10.5C0.75 10.5 0 10.5 0 9.75C0 9 0.75 6.75 4.5 6.75C8.25 6.75 9 9 9 9.75C9 10.5 8.25 10.5 8.25 10.5H0.75ZM4.5 6C5.09674 6 5.66903 5.76295 6.09099 5.34099C6.51295 4.91903 6.75 4.34674 6.75 3.75C6.75 3.15326 6.51295 2.58097 6.09099 2.15901C5.66903 1.73705 5.09674 1.5 4.5 1.5C3.90326 1.5 3.33097 1.73705 2.90901 2.15901C2.48705 2.58097 2.25 3.15326 2.25 3.75C2.25 4.34674 2.48705 4.91903 2.90901 5.34099C3.33097 5.76295 3.90326 6 4.5 6V6Z'
                                            fill='white'
                                        />
                                        <path
                                            fill-rule='evenodd'
                                            clip-rule='evenodd'
                                            d='M10.125 3.75C10.2245 3.75 10.3198 3.78951 10.3902 3.85984C10.4605 3.93016 10.5 4.02554 10.5 4.125V5.25H11.625C11.7245 5.25 11.8198 5.28951 11.8902 5.35984C11.9605 5.43016 12 5.52554 12 5.625C12 5.72446 11.9605 5.81984 11.8902 5.89016C11.8198 5.96049 11.7245 6 11.625 6H10.5V7.125C10.5 7.22446 10.4605 7.31984 10.3902 7.39017C10.3198 7.46049 10.2245 7.5 10.125 7.5C10.0255 7.5 9.93016 7.46049 9.85983 7.39017C9.78951 7.31984 9.75 7.22446 9.75 7.125V6H8.625C8.52554 6 8.43016 5.96049 8.35983 5.89016C8.28951 5.81984 8.25 5.72446 8.25 5.625C8.25 5.52554 8.28951 5.43016 8.35983 5.35984C8.43016 5.28951 8.52554 5.25 8.625 5.25H9.75V4.125C9.75 4.02554 9.78951 3.93016 9.85983 3.85984C9.93016 3.78951 10.0255 3.75 10.125 3.75Z'
                                            fill='white'
                                        />
                                    </svg>
                                    Подписаться
                                </Button>
                                <Box
                                    padding='0 4px'
                                    width='47px'
                                    borderRadius='6px'
                                    height='24px'
                                    display='flex'
                                    alignItems='center'
                                    gap='6px'
                                >
                                    <svg
                                        width='12'
                                        height='12'
                                        viewBox='0 0 12 12'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path
                                            d='M11.25 10.5C11.25 10.5 12 10.5 12 9.75C12 9 11.25 6.75 8.25 6.75C5.25 6.75 4.5 9 4.5 9.75C4.5 10.5 5.25 10.5 5.25 10.5H11.25ZM5.2665 9.75C5.26096 9.74924 5.25545 9.74824 5.25 9.747C5.25075 9.549 5.37525 8.9745 5.82 8.457C6.234 7.97175 6.9615 7.5 8.25 7.5C9.53775 7.5 10.2652 7.9725 10.68 8.457C11.1247 8.9745 11.2485 9.54975 11.25 9.747L11.244 9.7485C11.2405 9.74909 11.237 9.74959 11.2335 9.75H5.2665V9.75ZM8.25 5.25C8.64782 5.25 9.02936 5.09196 9.31066 4.81066C9.59196 4.52936 9.75 4.14782 9.75 3.75C9.75 3.35218 9.59196 2.97064 9.31066 2.68934C9.02936 2.40804 8.64782 2.25 8.25 2.25C7.85218 2.25 7.47064 2.40804 7.18934 2.68934C6.90804 2.97064 6.75 3.35218 6.75 3.75C6.75 4.14782 6.90804 4.52936 7.18934 4.81066C7.47064 5.09196 7.85218 5.25 8.25 5.25ZM10.5 3.75C10.5 4.04547 10.4418 4.33806 10.3287 4.61104C10.2157 4.88402 10.0499 5.13206 9.84099 5.34099C9.63206 5.54992 9.38402 5.71566 9.11104 5.82873C8.83806 5.9418 8.54547 6 8.25 6C7.95453 6 7.66194 5.9418 7.38896 5.82873C7.11598 5.71566 6.86794 5.54992 6.65901 5.34099C6.45008 5.13206 6.28434 4.88402 6.17127 4.61104C6.0582 4.33806 6 4.04547 6 3.75C6 3.15326 6.23705 2.58097 6.65901 2.15901C7.08097 1.73705 7.65326 1.5 8.25 1.5C8.84674 1.5 9.41903 1.73705 9.84099 2.15901C10.2629 2.58097 10.5 3.15326 10.5 3.75V3.75ZM5.202 6.96C4.90199 6.86553 4.59273 6.80343 4.2795 6.77475C4.1035 6.75801 3.92679 6.74975 3.75 6.75C0.75 6.75 0 9 0 9.75C0 10.2502 0.24975 10.5 0.75 10.5H3.912C3.80082 10.2659 3.74537 10.0092 3.75 9.75C3.75 8.9925 4.03275 8.2185 4.5675 7.572C4.74975 7.3515 4.962 7.14525 5.202 6.96ZM3.69 7.5C3.24612 8.16695 3.00633 8.94886 3 9.75H0.75C0.75 9.555 0.873 8.9775 1.32 8.457C1.72875 7.98 2.439 7.515 3.69 7.50075V7.5ZM1.125 4.125C1.125 3.52826 1.36205 2.95597 1.78401 2.53401C2.20597 2.11205 2.77826 1.875 3.375 1.875C3.97174 1.875 4.54403 2.11205 4.96599 2.53401C5.38795 2.95597 5.625 3.52826 5.625 4.125C5.625 4.72174 5.38795 5.29403 4.96599 5.71599C4.54403 6.13795 3.97174 6.375 3.375 6.375C2.77826 6.375 2.20597 6.13795 1.78401 5.71599C1.36205 5.29403 1.125 4.72174 1.125 4.125V4.125ZM3.375 2.625C2.97718 2.625 2.59564 2.78304 2.31434 3.06434C2.03304 3.34564 1.875 3.72718 1.875 4.125C1.875 4.52282 2.03304 4.90436 2.31434 5.18566C2.59564 5.46696 2.97718 5.625 3.375 5.625C3.77282 5.625 4.15436 5.46696 4.43566 5.18566C4.71696 4.90436 4.875 4.52282 4.875 4.125C4.875 3.72718 4.71696 3.34564 4.43566 3.06434C4.15436 2.78304 3.77282 2.625 3.375 2.625Z'
                                            fill='black'
                                        />
                                    </svg>
                                    <Text fontWeight={600} fontSize='12px' color='lime.600'>
                                        125
                                    </Text>
                                </Box>
                            </HStack>
                        </VStack>
                    </CardBody>
                </Card>
            </Flex>
            <LatestRecipes />
        </Flex>
    );
};
