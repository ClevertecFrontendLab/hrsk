import {
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
} from '@chakra-ui/icons';
import { Accordion, List, ListItem } from '@chakra-ui/react';
import { useState } from 'react';
import { Link, useSearchParams } from 'react-router';

import { ItemType } from '~/components/header/hamburger_menu/MenuItems';
import { SpriteIcon } from '~/components/sprite_icon/SpriteIcon';

type Props = {
    category: string;
    items: ItemType[];
    isActive: string | undefined;
    setActive: (isActive: string | undefined) => void;
};

export const MultipleAccordion = (props: Props) => {
    const [activeIndex, setActiveIndex] = useState<number | number[]>([]);

    const { category, items, isActive, setActive } = props;

    const [, setSearchParams] = useSearchParams();

    const handleAccordionChange = (index: number | number[]) => {
        const selected = Array.isArray(index) ? index[0] : index;
        setActiveIndex(selected);
        setActive('snacks');
    };

    return (
        <Accordion
            allowToggle
            alignContent='center'
            allowMultiple={false}
            width={{ sm: '328px', lg: '256px', xl: '256px' }}
            maxWidth='100%'
            paddingLeft={{ sm: '10px' }}
            paddingRight={{ sm: '16px' }}
            index={activeIndex}
            onChange={handleAccordionChange}
        >
            <AccordionItem border='none' width={{ lg: '230px' }}>
                <AccordionButton
                    position='relative'
                    _hover={{ backgroundColor: 'lime.50' }}
                    _expanded={{ backgroundColor: 'lime.100' }}
                    display='flex'
                    alignItems='center'
                    data-test-id={category === 'Веганская кухня' ? 'vegan-cuisine' : ''}
                    as={Link}
                    to={category === 'Веганская кухня' ? `/vegan-cuisine` : ''}
                    padding={0}
                    width='100%'
                    height='48px'
                    fontSize='16px'
                    fontWeight={500}
                >
                    <SpriteIcon spriteId={category} boxSize='24px' />
                    <Box
                        as='span'
                        textAlign='left'
                        fontSize='md'
                        fontWeight='500'
                        color='black'
                        paddingX='12px'
                    >
                        {category}
                    </Box>
                    <AccordionIcon
                        boxSize='16px'
                        position='absolute'
                        right={{ sm: '-10px', lg: 0 }}
                    />
                </AccordionButton>
                <AccordionPanel>
                    <List>
                        {items?.map((item, index) => {
                            const isActiveItem = item.path === isActive;
                            return (
                                <ListItem key={item.id} width='100%'>
                                    <Box
                                        as='button'
                                        py={1}
                                        px='16px'
                                        key={index}
                                        cursor='pointer'
                                        onClick={() => {
                                            setActive(item.path);
                                            if (item.path) {
                                                setSearchParams({ tab: item.path });
                                            }
                                        }}
                                        fontWeight={isActiveItem ? 700 : 500}
                                        borderLeft={isActiveItem ? '8px' : '1px'}
                                        borderColor='lime.300'
                                    >
                                        <Link to={`vegan-cuisine/${item.path}`}>{item.title}</Link>
                                    </Box>
                                </ListItem>
                            );
                        })}
                    </List>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
};
