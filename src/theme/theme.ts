import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    styles: {
        global: {
            html: {
                height: '100%',
            },
            body: {
                height: '100vh',
                margin: 0,
                padding: 0,
            },
            '#root': {
                height: '100%',
            },
        },
    },
    colors: {
        'lime.50': '#ffffd3',
        'lime.100': '#eaffc7',
        'lime.150': '#d7ff94',
        'lime.300': '#c4ff61',
        'lime.400': '#b1ff2e',
        'lime.500': '#FFFFD3',
        'lime.600': '#2db100',
        'lime.800': '#134d00',
        'black.000': '#000',
        'blackAlpha.50': 'rgba(0, 0, 0, 0.04)',
        'blackAlpha.200': 'rgba(0, 0, 0, 0.08)',
        'blackAlpha.300': 'rgba(0, 0, 0, 0.16)',
        'blackAlpha.700': 'rgba(0, 0, 0, 0.64)',
        'blackAlpha.400': 'rgba(0, 0, 0, 0.24)',
        'blackAlpha.600': 'rgba(0, 0, 0, 0.48)',
        'blackAlpha.800': 'rgba(0, 0, 0, 0.8)',
        'blackAlpha.900': 'rgba(0, 0, 0, 0.92)',
    },
    shadows: {
        cardsShadow: '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
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
