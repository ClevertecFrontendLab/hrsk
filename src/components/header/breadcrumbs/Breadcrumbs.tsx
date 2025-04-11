import { Breadcrumb, ChevronRightIcon } from '@chakra-ui/icons';
import { BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { Link, useLocation, useSearchParams } from 'react-router';

import { breadcrumbsObj } from '~/components/header/breadcrumbs/BreadcrumbsObj';

type Props = {
    setActive?: (isActive: string | undefined) => void;
};

export const Breadcrumbs = ({ setActive }: Props) => {
    const location = useLocation();
    const paths = location.pathname.split('/').filter(Boolean);

    const [searchParams] = useSearchParams();
    const tab = searchParams.get('tab');

    if (tab) {
        paths.push(tab);
    }

    return (
        <Breadcrumb
            display={{ sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }}
            alignItems='center'
            pl='128px'
            spacing='8px'
            separator={<ChevronRightIcon color='black.000' />}
        >
            <BreadcrumbItem>
                <BreadcrumbLink
                    as={Link}
                    to='/'
                    color='blackAlpha.700'
                    fontSize='16px'
                    fontWeight={400}
                >
                    Главная
                </BreadcrumbLink>
            </BreadcrumbItem>
            {paths.map((path, index) => {
                const isLast = index === paths.length - 1;

                const to = '/' + paths.slice(0, index + 1).join('/');
                return (
                    <BreadcrumbItem>
                        <BreadcrumbLink
                            as={Link}
                            to={to}
                            color={isLast ? 'black.000' : 'blackAlpha.700'}
                            fontSize='16px'
                            fontWeight={400}
                            onClick={() => {
                                if (setActive) {
                                    setActive('snacks');
                                }
                            }}
                        >
                            {breadcrumbsObj[path] || path}
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                );
            })}
        </Breadcrumb>
    );
};
