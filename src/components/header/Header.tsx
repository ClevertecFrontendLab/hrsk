import { Box, Flex } from '@chakra-ui/react';

import { Breadcrumbs } from '~/components/header/breadcrumbs/Breadcrumbs';
import { HeaderLogo } from '~/components/header/header_logo/HeaderLogo';
import { ProfileInfo } from '~/components/header/profile_info/ProfileInfo';

export const Header = () => (
    <Box
        as='header'
        data-test-id='header'
        position='sticky'
        zIndex={1000}
        top={0}
        backgroundColor='lime.500'
        paddingLeft='16px'
        paddingRight='56px'
        border='1px'
        boxShadow='customShadow'
    >
        <Flex alignItems='center'>
            <HeaderLogo />
            <Breadcrumbs />
            <ProfileInfo />
        </Flex>
    </Box>
);
