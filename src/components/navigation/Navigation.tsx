import { menuItems } from '~/components/header/hamburger_menu/MenuItems';
import { MultipleAccordion } from '~/components/navigation/accordion/MultipleAccordion';

export const Navigation = () =>
    Object.entries(menuItems).map(([category, items]) => (
        <MultipleAccordion key={category} category={category} items={items} />
    ));
