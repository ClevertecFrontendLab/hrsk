import { IconButton } from '@chakra-ui/react';

type Props = {
    onOpen: () => void;
    onClose: () => void;
    isOpen: boolean;
};

export const HamburgerButton = (props: Props) => {
    const { onOpen, onClose, isOpen } = props;

    return isOpen ? (
        <IconButton
            data-test-id='close-icon'
            as='button'
            border='none'
            aria-label='Close menu'
            onClick={onClose}
            position='absolute'
            width='48px'
            height='48px'
            right='20px'
            color='gray.700'
            borderRadius='6px'
            bg='none'
            _hover='none'
            display={{ sm: 'flex', md: 'flex', lg: 'none', xl: 'none' }}
        >
            <svg
                width='32'
                height='32'
                viewBox='0 0 32 32'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    d='M16 14.6669L20.6669 10L22 11.3331L17.3331 16L22 20.6669L20.6669 22L16 17.3331L11.3331 22L10 20.6669L14.6669 16L10 11.3331L11.3331 10L16 14.6669Z'
                    fill='#2D3748'
                />
            </svg>
        </IconButton>
    ) : (
        <IconButton
            data-test-id='hamburger-icon'
            as='button'
            border='none'
            aria-label='Open menu'
            onClick={onOpen}
            position='absolute'
            width='48px'
            height='48px'
            right='20px'
            bg='none'
            _hover='none'
            display={{ sm: 'flex', md: 'flex', lg: 'none', xl: 'none' }}
        >
            <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path d='M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z' fill='black' />
            </svg>
        </IconButton>
    );
};
