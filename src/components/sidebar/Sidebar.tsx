import { Box, Flex } from '@chakra-ui/react';
import { useState } from 'react';

import { Navigation } from '~/components/navigation/Navigation';

type Props = {
    // onClose: () => void;
    // isOpen: boolean;
    isActive: string | undefined;
    setActive: (isActive: string | undefined) => void;
};
export const Sidebar = ({ isActive, setActive }: Props) => {
    // const location = useLocation();
    // const paths = location.pathname.split('/').filter(Boolean);

    // const recipe = recipes[Number(paths[2])];

    const [isOpenAcc, setIsOpen] = useState(false);

    return (
        <Flex
            direction='column'
            height={{ sm: '712px', md: '868px' }}
            width={{ sm: '344px', lg: '256px' }}
            overflowY={isOpenAcc ? 'scroll' : 'hidden'}
            alignItems='center'
            boxShadow={
                isOpenAcc
                    ? '0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    : 'none'
            }
            borderRadius={isOpenAcc ? '0 0 12px 12px' : 0}
            overflowX='hidden'
            // sx={{
            //     '&::-webkit-scrollbar': {
            //         width: '8px',
            //         height: '854px',
            //     },
            //     '&::-webkit-scrollbar-thumb': {
            //         borderRadius: 'full',
            //         background: 'blackAlpha.300',
            //     },
            //     '&::-webkit-scrollbar-track': {
            //         background: 'transparent',
            //         backgroundColor: 'blackAlpha.50',
            //         borderRadius: '8px',
            //     },
            // }}
        >
            <Box display={{ sm: 'none', lg: 'block' }} height={isOpenAcc ? '872px' : '644px'}>
                <Navigation
                    isOpen={isOpenAcc}
                    setIsOpen={setIsOpen}
                    isActive={isActive}
                    setActive={setActive}
                />
            </Box>

            {/*<Footer />*/}
        </Flex>
    );
};
