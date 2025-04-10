import {
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
} from '@chakra-ui/icons';
import { Accordion, Flex, List, ListItem } from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router';

import { ItemType } from '~/components/header/hamburger_menu/MenuItems';
import { SpriteIcon } from '~/components/sprite_icon/SpriteIcon';

type Props = {
    category: string;
    items: ItemType[];
};

export const MultipleAccordion = ({ category, items }: Props) => {
    const [activeIndex, setActiveIndex] = useState<number | number[]>([]);
    const [activeSub, setActiveSub] = useState<string | null>(null);

    return (
        <Flex>
            <Accordion
                allowToggle
                alignContent='center'
                allowMultiple={false}
                width={{ lg: '256px', xl: '256px' }}
                maxWidth='100%'
                paddingLeft={{ lg: '10px' }}
                paddingRight={{ lg: '16px' }}
                index={activeIndex}
                onChange={setActiveIndex}
            >
                <AccordionItem border='none' width={{ sm: '230px' }}>
                    <AccordionButton
                        _hover={{ backgroundColor: 'lime.50' }}
                        _expanded={{ backgroundColor: 'lime.100' }}
                        data-test-id={category === 'Веганская кухня' ? 'vegan-cuisine' : ''}
                        as={Link}
                        to={category === 'Веганская кухня' ? '/vegan-cuisine' : ''}
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
                        <AccordionIcon boxSize='16px' />
                    </AccordionButton>
                    <AccordionPanel>
                        <List>
                            {items?.map((item, subIndex) => {
                                const isActive = item.title === activeSub;
                                return (
                                    <ListItem key={item.id} width='230px'>
                                        <Box
                                            as='button'
                                            py={1}
                                            px='16px'
                                            key={subIndex}
                                            cursor='pointer'
                                            onClick={() => setActiveSub(item.title)}
                                            fontWeight={isActive ? 700 : 500}
                                            borderLeft={isActive ? '8px' : '1px'}
                                            borderColor='lime.300'
                                        >
                                            <Link to='vegan-cuisine/main-course'>{item.title}</Link>
                                        </Box>
                                    </ListItem>
                                );
                            })}
                        </List>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Flex>
    );
};
