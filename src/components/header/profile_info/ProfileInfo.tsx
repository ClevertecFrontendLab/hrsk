import { Avatar, Box, Flex, Text, useMediaQuery } from '@chakra-ui/react';

import user_avatar from '~/assets/header/Avatar.svg';

export const ProfileInfo = () => {
    const [isVisible] = useMediaQuery('(min-width: 1440px)');

    return (
        <Flex
            marginY='16px'
            position='absolute'
            right='0px'
            width='100%'
            height='100%'
            maxWidth='432px'
            maxHeight='48px'
            gap='12px'
            paddingLeft='53px'
            visibility={isVisible ? 'visible' : 'hidden'}
        >
            <Avatar src={user_avatar} boxSize='48px' />
            <Box paddingLeft='12px' paddingRight='24px'>
                <Text fontSize='md' color='black.000'>
                    Екатерина Константинопольская
                </Text>
                <Text fontSize='sm' color='gray.500'>
                    @bake_and_pie
                </Text>
            </Box>
        </Flex>
    );
};
