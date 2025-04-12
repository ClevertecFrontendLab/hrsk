import { Box, Flex, HStack, Text } from '@chakra-ui/react';

import { CustomCard } from '~/components/latest_recipes/CustomCard';
import { LatestRecipesCards } from '~/components/latest_recipes/LatestCards';

export const LatestRecipes = () => (
    <Flex
        flexDirection='column'
        height='100%'
        width={{ sm: '328px', md: '728px', lg: '880px', xl: '1360px' }}
        maxWidth='100%'
    >
        <Text
            lineHeight='1'
            fontWeight='500'
            fontSize={{ sm: '24px', lg: '36px', xl: '48px' }}
            color='black'
            pb={{ sm: '12px', lg: '24px' }}
        >
            Новые рецепты
        </Text>

        <HStack
            spacing={{ sm: '12px', xl: '24px' }}
            position='relative'
            width='100%'
            overflowX='hidden'
        >
            <Box
                as='button'
                bgColor='black.000'
                borderRadius='6px'
                padding='0px 12px'
                width='48px'
                height='48px'
                position='absolute'
                left='-8px'
                zIndex={1}
                marginBottom='35px'
                color='white'
                display={{ sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }}
                alignItems='center'
            >
                <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M22.4999 12C22.4999 11.8011 22.4209 11.6103 22.2802 11.4697C22.1396 11.329 21.9488 11.25 21.7499 11.25H4.06038L8.78088 6.531C8.85061 6.46127 8.90592 6.37849 8.94366 6.28738C8.9814 6.19627 9.00082 6.09862 9.00082 6C9.00082 5.90139 8.9814 5.80374 8.94366 5.71263C8.90592 5.62152 8.85061 5.53873 8.78088 5.469C8.71114 5.39927 8.62836 5.34396 8.53725 5.30622C8.44614 5.26848 8.34849 5.24905 8.24988 5.24905C8.15126 5.24905 8.05361 5.26848 7.9625 5.30622C7.87139 5.34396 7.78861 5.39927 7.71888 5.469L1.71888 11.469C1.64903 11.5387 1.59362 11.6214 1.55581 11.7126C1.518 11.8037 1.49854 11.9014 1.49854 12C1.49854 12.0987 1.518 12.1963 1.55581 12.2875C1.59362 12.3786 1.64903 12.4613 1.71888 12.531L7.71888 18.531C7.78861 18.6007 7.87139 18.656 7.9625 18.6938C8.05361 18.7315 8.15126 18.7509 8.24988 18.7509C8.34849 18.7509 8.44614 18.7315 8.53725 18.6938C8.62836 18.656 8.71114 18.6007 8.78088 18.531C8.85061 18.4613 8.90592 18.3785 8.94366 18.2874C8.9814 18.1963 9.00082 18.0986 9.00082 18C9.00082 17.9014 8.9814 17.8037 8.94366 17.7126C8.90592 17.6215 8.85061 17.5387 8.78088 17.469L4.06038 12.75H21.7499C21.9488 12.75 22.1396 12.671 22.2802 12.5303C22.4209 12.3897 22.4999 12.1989 22.4999 12Z'
                        fill='#FFFFD3'
                    />
                </svg>
            </Box>
            {LatestRecipesCards.map((card, index) => (
                <CustomCard
                    key={card.id}
                    title={card.title}
                    description={card.description}
                    imageSrc={card.image}
                    badgeText={card.badge}
                    badgeColor={card.badgeColor}
                    bookmarksCount={card.bookmarksCount}
                    likesCount={card.likesCount}
                    viewBox='4'
                    boxSize='16px'
                    display={card.display}
                    spriteId={card.spriteId}
                    position={{
                        md: index === LatestRecipesCards.length - 1 ? 'absolute' : undefined,
                    }}
                />
            ))}
            <Box
                as='button'
                bgColor='black.000'
                borderRadius='6px'
                padding='0px 12px'
                width='48px'
                height='48px'
                right='-8px'
                position='absolute'
                display={{ sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }}
                alignItems='center'
                marginBottom='35px'
                color='white'
            >
                <svg
                    width='22'
                    height='14'
                    viewBox='0 0 22 14'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M0.5 7C0.5 6.80109 0.579018 6.61032 0.71967 6.46967C0.860322 6.32902 1.05109 6.25 1.25 6.25H18.9395L14.219 1.531C14.0782 1.39017 13.9991 1.19916 13.9991 1C13.9991 0.800838 14.0782 0.609831 14.219 0.469001C14.3598 0.328171 14.5508 0.249054 14.75 0.249054C14.9492 0.249054 15.1402 0.328171 15.281 0.469001L21.281 6.469C21.3508 6.53867 21.4063 6.62143 21.4441 6.71255C21.4819 6.80367 21.5013 6.90135 21.5013 7C21.5013 7.09865 21.4819 7.19633 21.4441 7.28745C21.4063 7.37857 21.3508 7.46133 21.281 7.531L15.281 13.531C15.1402 13.6718 14.9492 13.7509 14.75 13.7509C14.5508 13.7509 14.3598 13.6718 14.219 13.531C14.0782 13.3902 13.9991 13.1992 13.9991 13C13.9991 12.8008 14.0782 12.6098 14.219 12.469L18.9395 7.75H1.25C1.05109 7.75 0.860322 7.67098 0.71967 7.53033C0.579018 7.38968 0.5 7.19891 0.5 7Z'
                        fill='#FFFFD3'
                    />
                </svg>
            </Box>
        </HStack>
    </Flex>
);
