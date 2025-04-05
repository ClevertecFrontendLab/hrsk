import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    colors: {
        'lime.150': '#d7ff94',
        'lime.500': '#FFFFD3',
        'lime.600': '#2db100',
        'black.000': '#000',
        'blackAlpha.200': 'rgba(0, 0, 0, 0.08)',
        'blackAlpha.700': 'rgba(0, 0, 0, 0.64)',
        'blackAlpha.400': 'rgba(0, 0, 0, 0.24)',
    },
    shadows: {
        customShadow: '0px 4px 4px rgba(0, 0, 0, 0.3)',
    },
    background: {
        writeButtonBg: 'radial-gradient(circle at center, #c4ff61 0%, rgba(255, 255, 255, 0) 100%)',
    },
});

export { theme };
