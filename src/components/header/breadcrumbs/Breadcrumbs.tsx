import { Box, Breadcrumb, ChevronRightIcon } from '@chakra-ui/icons';
import { BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';

export const Breadcrumbs = () => (
    <Box pl='128px'>
        <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='black.000' />}>
            <BreadcrumbItem>
                <BreadcrumbLink href='#' fontSize='md'>
                    Главная
                </BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    </Box>
);
