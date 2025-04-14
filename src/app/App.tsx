import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router';

import { Main } from '~/app/main/Main';
import { theme } from '~/theme/theme';

function App() {
    return (
        <>
            <ChakraProvider theme={theme}>
                <BrowserRouter>
                    <Main />
                </BrowserRouter>
            </ChakraProvider>
        </>
    );
}

export default App;
