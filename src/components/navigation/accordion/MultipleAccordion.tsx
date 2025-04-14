import {
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
} from '@chakra-ui/icons';
import { Accordion, Divider, List, ListItem } from '@chakra-ui/react';
import { useState } from 'react';
import { Link, useSearchParams } from 'react-router';

import { ItemType } from '~/components/header/hamburger_menu/MenuItems';
import { SpriteIcon } from '~/components/sprite_icon/SpriteIcon';

type Props = {
    category: string;
    items: ItemType[];
    isActive: string | undefined;
    setActive: (isActive: string | undefined) => void;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
};

export const MultipleAccordion = (props: Props) => {
    const [activeIndex, setActiveIndex] = useState<number | number[]>([]);

    const { category, items, isActive, setActive, isOpen, setIsOpen } = props;

    const [, setSearchParams] = useSearchParams();

    const handleAccordionChange = (index: number | number[]) => {
        const selected = Array.isArray(index) ? index[0] : index;
        setActiveIndex(selected);
        setActive('snacks');
        if (index !== null) {
            setIsOpen(!isOpen);
        }
    };

    return (
        <Accordion
            allowToggle
            display='flex'
            justifyContent='row'
            alignItems='center'
            allowMultiple={false}
            width={{ sm: '328px', lg: '256px', xl: '256px' }}
            maxWidth='100%'
            index={activeIndex}
            onChange={handleAccordionChange}
            paddingLeft='10px'
            paddingRight='16px'
            sx={{
                '&::-webkit-scrollbar': {
                    width: '8px',
                    height: isOpen ? '872px' : '644px',
                },
                '&::-webkit-scrollbar-thumb': {
                    borderRadius: '8px',
                    background: 'blackAlpha.300',
                },
                '&::-webkit-scrollbar-track': {
                    background: 'transparent',
                    backgroundColor: 'blackAlpha.50',
                    borderRadius: '8px',
                },
            }}
        >
            <AccordionItem border='none' width={{ sm: '302px', lg: '230px' }}>
                <AccordionButton
                    position='relative'
                    display='flex'
                    alignItems='center'
                    data-test-id={category === 'Веганская кухня' ? 'vegan-cuisine' : ''}
                    as={Link}
                    to={category === 'Веганская кухня' ? `/vegan-cuisine` : ''}
                    // padding={0}
                    // padding='12px 8px'
                    _hover={category && { backgroundColor: 'lime.50' }}
                    _expanded={category && { backgroundColor: 'lime.100' }}
                    // _activeLink={category && { backgroundColor: 'lime.100' }}
                    // _active={category && { backgroundColor: 'lime.100' }}
                    width='100%'
                    height='48px'
                    fontSize='16px'
                    fontWeight={500}
                >
                    <SpriteIcon spriteId={category} boxSize='24px' />
                    <Box
                        as='span'
                        textAlign='left'
                        fontSize='16px'
                        fontWeight='500'
                        color='black'
                        paddingX='12px'
                        whiteSpace='nowrap'
                        overflow='hidden'
                        // textOverflow='ellipsis'
                    >
                        {category}
                    </Box>
                    <AccordionIcon
                        boxSize='16px'
                        position='absolute'
                        right='0px'
                        // right={{ sm: '-10px', lg: 0 }}
                    />
                </AccordionButton>
                <AccordionPanel width={{ sm: '302px', lg: '230px' }} padding={0}>
                    <List>
                        {items?.map((item, index) => {
                            const isActiveItem = item.path === isActive;
                            return (
                                <ListItem
                                    key={item.id}
                                    width='100%'
                                    padding='6px 8px 6px 52px'
                                    _hover={{ bgColor: 'lime.50' }}
                                >
                                    <Box
                                        position='relative'
                                        role='group'
                                        as='button'
                                        display='flex'
                                        flexDirection='row'
                                        width='fit-content'
                                        whiteSpace='nowrap'
                                        alignItems='center'
                                        key={index}
                                        cursor='pointer'
                                        onClick={() => {
                                            setActive(item.path);
                                            if (item.path) {
                                                setSearchParams({ tab: item.path });
                                            }
                                        }}
                                        fontWeight={isActiveItem ? 700 : 500}
                                        fontSize='16px'
                                    >
                                        <Divider
                                            _groupHover={{ visibility: 'hidden' }}
                                            // borderLeft={isActiveItem ? '8px' : '1px'}
                                            bgColor='lime.300'
                                            width={isActiveItem ? '8px' : '1px'}
                                            position='absolute'
                                            // left='50%'
                                            transform='translateX(-100%)'
                                            maxWidth='8px'
                                            orientation='vertical'
                                            height='24px'
                                            transition='width 0.3s ease'
                                        />
                                        <Box
                                            paddingLeft='11px'
                                            my='6px'
                                            paddingRight='8px'
                                            display='flex'
                                            alignItems='center'
                                        >
                                            <Link to={`vegan-cuisine/${item.path}`}>
                                                {item.title}
                                            </Link>
                                        </Box>
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
