import { menuItems } from '~/components/header/hamburger_menu/MenuItems';
import { MultipleAccordion } from '~/components/navigation/accordion/MultipleAccordion';

type Props = {
    isActive: string | undefined;
    setActive: (isActive: string | undefined) => void;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
};

export const Navigation = ({ isActive, setActive, isOpen, setIsOpen }: Props) =>
    Object.entries(menuItems).map(([category, items]) => (
        <MultipleAccordion
            isActive={isActive}
            setActive={setActive}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            key={category}
            category={category}
            items={items}
        />
    ));
