import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    colors: {
        'lime.50': '#ffffd3',
        'lime.150': '#d7ff94',
        'lime.300': '#c4ff61',
        'lime.400': '#b1ff2e',
        'lime.500': '#FFFFD3',
        'lime.600': '#2db100',
        'lime.800': '#134d00',
        'black.000': '#000',
        'blackAlpha.200': 'rgba(0, 0, 0, 0.08)',
        'blackAlpha.700': 'rgba(0, 0, 0, 0.64)',
        'blackAlpha.400': 'rgba(0, 0, 0, 0.24)',
        'blackAlpha.600': 'rgba(255, 255, 255, 0.06)',
        'blackAlpha.800': 'rgba(0, 0, 0, 0.8)',
        'blackAlpha.900': 'rgba(0, 0, 0, 0.92)',
    },
    shadows: {
        customShadow: '0px 4px 4px rgba(0, 0, 0, 0.3)',
    },
    background: {
        writeButtonBg: 'radial-gradient(circle at center, #c4ff61 0%, rgba(255, 255, 255, 0) 100%)',
    },
    breakpoints: {
        sm: '360px',
        md: '768px',
        lg: '1440px',
        xl: '1920px',
    },
});

export { theme };
