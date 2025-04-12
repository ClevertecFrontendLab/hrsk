import { Box, Image, useMediaQuery } from '@chakra-ui/react';

import logo_text from '~/assets/header/logo_text.svg';
import pot from '~/assets/header/pot.svg';

export const HeaderLogo = () => {
    const [isVisible] = useMediaQuery('(min-width: 361px)');

    return (
        <Box display='flex' alignItems='center' maxWidth='135px' maxHeight='32px'>
            <Image boxSize='32px' src={pot} alt='pot' objectFit='cover' />
            <Image
                width='96px'
                src={logo_text}
                alt='logo text - yee daa'
                objectFit='cover'
                visibility={isVisible ? 'visible' : 'hidden'}
            />
        </Box>
    );
};
