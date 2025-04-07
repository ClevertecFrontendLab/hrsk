import {
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
} from '@chakra-ui/icons';
import { Accordion, Button, List, ListItem } from '@chakra-ui/react';

import { AccordionItemType } from '~/components/navigation/accordion/AccordionItems';
import { SpriteIcon } from '~/components/sprite_icon/SpriteIcon';

type Props = {
    item: AccordionItemType;
};

export const MultipleAccordion = ({ item }: Props) => {
    const { title: sectionTitle } = item;

    return (
        <Accordion
            defaultIndex={[1]}
            allowMultiple
            alignContent='center'
            width={{ lg: '256px', xl: '256px' }}
            maxWidth='100%'
        >
            <AccordionItem border='none' width='100%'>
                <AccordionButton
                    data-test-id={sectionTitle === 'Веганская кухня' ? 'vegan-cuisine' : ''}
                    padding={0}
                    width='100%'
                    height='48px'
                >
                    <SpriteIcon spriteId={sectionTitle} boxSize='24px' />
                    <Box
                        as='span'
                        flex='1'
                        textAlign='left'
                        fontSize='md'
                        fontWeight='500'
                        color='black'
                        paddingX='12px'
                    >
                        {sectionTitle}
                    </Box>
                    <AccordionIcon boxSize='16px' />
                </AccordionButton>
                <AccordionPanel pb={4}>
                    <List spacing={1}>
                        {item.menu?.map((item) => (
                            <ListItem>
                                <Button key={item.id} colorScheme='teal' variant='link'>
                                    {item.title}
                                </Button>
                            </ListItem>
                        ))}
                    </List>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    );
};
