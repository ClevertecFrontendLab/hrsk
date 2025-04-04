import { Image } from '@chakra-ui/react';

import logo from '~/assets/header/logo.svg';

export const HeaderLogo = () => (
    <Image
        src={logo}
        alt='pot'
        width='100%'
        height='100%'
        maxWidth='134px'
        maxHeight='32px'
        marginY='24px'
        objectFit='cover'
    />
);
