import { ChakraProvider } from '@chakra-ui/react';

import { Main } from '~/app/main/Main';
import { theme } from '~/theme/theme';

function App() {
    return (
        <>
            <ChakraProvider theme={theme}>
                <Main />
            </ChakraProvider>
        </>
    );
}

export default App;
