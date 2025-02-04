import { useState } from 'react';
import { DropdownItemProps, DropdownProps } from './type';
import { List, ListItem, StyledDropdown } from './Dropdown.styled';
import Button from '../Button';

function Dropdown({ variant = 'md', items, placeholder = 'Dropdown', onChoice }: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setIsActive] = useState<DropdownItemProps | null>(null);

    const handleChoice = (item: DropdownItemProps) => {
        setIsActive(item);
        setIsOpen(false);

        if (onChoice) {
            onChoice(item.value);
        }
    };

    return (
        <StyledDropdown $variant={variant}>
            <Button
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1rem',
                }}
                type="button"
                variant={variant}
                onClick={() => setIsOpen((open) => !open)}
            >
                <span>{active?.name || placeholder}</span>
                {isOpen ? <span>&#9650;</span> : <span>&#9660;</span>}
            </Button>
            <List $isOpen={isOpen} $variant={variant}>
                {items.map((item) => (
                    <ListItem
                        key={item.value}
                        onClick={() => handleChoice(item)}
                        $isActive={item.value === active?.value}
                    >
                        {item.name}
                    </ListItem>
                ))}
            </List>
        </StyledDropdown>
    );
}

export default Dropdown;
