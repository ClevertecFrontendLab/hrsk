import { Breadcrumb, ChevronRightIcon } from '@chakra-ui/icons';
import { BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';

export const Breadcrumbs = () => (
    <Breadcrumb
        display={{ sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }}
        alignItems='center'
        pl='128px'
        spacing='8px'
        separator={<ChevronRightIcon color='black.000' />}
    >
        <BreadcrumbItem>
            <BreadcrumbLink href='#' fontSize='md'>
                Главная
            </BreadcrumbLink>
        </BreadcrumbItem>
    </Breadcrumb>
);
