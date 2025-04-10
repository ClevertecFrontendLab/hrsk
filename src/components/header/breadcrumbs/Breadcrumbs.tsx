import { Breadcrumb, ChevronRightIcon } from '@chakra-ui/icons';
import { BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router';

import { breadcrumbsObj } from '~/components/header/breadcrumbs/BreadcrumbsObj';

export const Breadcrumbs = () => {
    const location = useLocation();
    const paths = location.pathname.split('/').filter(Boolean);

    return (
        <Breadcrumb
            display={{ sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }}
            alignItems='center'
            pl='128px'
            spacing='8px'
            separator={<ChevronRightIcon color='black.000' />}
        >
            <BreadcrumbItem>
                <BreadcrumbLink as={Link} to='/' fontSize='14px' fontWeight={400}>
                    Главная
                </BreadcrumbLink>
            </BreadcrumbItem>
            {paths.map((path, index) => {
                const lastKey = Object.keys(breadcrumbsObj).pop();
                const to = '/' + paths.slice(0, index + 1).join('/');
                console.log(to);
                return (
                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink as={Link} to={to} fontSize='14px' fontWeight={400}>
                            {/*{path.charAt(0) + path.slice(1)}*/}
                            {breadcrumbsObj[path] || breadcrumbsObj[lastKey!]}
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                );
            })}
        </Breadcrumb>
    );
};
