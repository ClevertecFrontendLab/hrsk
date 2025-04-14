import { IconButton } from '@chakra-ui/react';

type Props = {
    onOpen: () => void;
};

export const HamburgerButton = (props: Props) => {
    const { onOpen } = props;

    return (
        <IconButton
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
