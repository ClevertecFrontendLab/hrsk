import { AccordionItems } from '~/components/navigation/accordion/AccordionItems';
import { MultipleAccordion } from '~/components/navigation/accordion/MultipleAccordion';

export const Navigation = () =>
    AccordionItems.map((item) => <MultipleAccordion key={item.id} item={item} />);
