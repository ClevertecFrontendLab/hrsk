import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    colors: {
        'lime.500': '#FFFFD3',
        'black.000': '#000',
        'blackAlpha.700': 'rgba(0, 0, 0, 0.64)',
        'blackAlpha.400': 'rgba(0, 0, 0, 0.24)',
    },
    shadows: {
        customShadow: '0px 4px 4px rgba(0, 0, 0, 0.3)',
    },
});

export { theme };
