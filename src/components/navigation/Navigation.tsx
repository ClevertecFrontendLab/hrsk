import { menuItems } from '~/components/header/hamburger_menu/MenuItems';
import { MultipleAccordion } from '~/components/navigation/accordion/MultipleAccordion';

type Props = {
    isActive: string | undefined;
    setActive: (isActive: string | undefined) => void;
};

export const Navigation = ({ isActive, setActive }: Props) =>
    Object.entries(menuItems).map(([category, items]) => (
        <MultipleAccordion
            isActive={isActive}
            setActive={setActive}
            key={category}
            category={category}
            items={items}
        />
    ));
