import { Badge, Box, Button, Flex, Heading, HStack, Image, Text } from '@chakra-ui/react';
import { useParams } from 'react-router';

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
    const params = useParams<Params>();
    console.log(params);

    const { recipeId } = params;

    const recipe = recipes.find((r) => r.id === recipeId);

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
            <Flex marginBottom='32px'>
                <HStack gap={6}>
                    <Image src={lapshaChiken} />
                    <Flex
                        maxWidth='783px'
                        height='410px'
                        width='100%'
                        flexDirection='column'
                        justifyContent='space-between'
                    >
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
                        <Box display='flex' flexDirection='column' alignItems='left' width='100%'>
                            <Heading
                                fontWeight={700}
                                fontSize='48px'
                                lineHeight={1}
                                paddingTop='32px'
                                paddingBottom='24px'
                                width='437px'
                            >
                                {recipe.title}
                            </Heading>
                            <Text width='528px' fontWeight={400} fontSize='14px' lineHeight={1.4}>
                                {recipe.description}
                            </Text>
                        </Box>
                        <Flex width='783px' height='48px' justifyContent='space-between'>
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
            </Flex>
            <LatestRecipes />
        </Flex>
    );
};
