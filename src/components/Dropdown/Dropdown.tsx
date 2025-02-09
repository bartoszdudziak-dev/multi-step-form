import { useState } from 'react';
import { DropdownProps, DropdownValue } from './type';
import { List, ListItem, StyledDropdown } from './Dropdown.styled';
import Button from '../Button';

function Dropdown({
    variant = 'md',
    style,
    items,
    value,
    placeholder = 'Dropdown',
    onChoice,
}: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setIsActive] = useState<string | number>(value);

    const handleChoice = (value: DropdownValue) => {
        setIsActive(value);
        setIsOpen(false);

        if (onChoice) {
            onChoice(value);
        }
    };

    const getItemName = (value: DropdownValue): string => {
        const item = items.find((item) => item.value === value);
        return item?.name || '';
    };

    return (
        <StyledDropdown $variant={variant}>
            <Button
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    ...style,
                }}
                type="button"
                variant={variant}
                onClick={() => setIsOpen((open) => !open)}
            >
                <span style={{ marginInline: 'auto' }}>{getItemName(active) || placeholder}</span>
                {isOpen ? <span>&#9650;</span> : <span>&#9660;</span>}
            </Button>
            <List $isOpen={isOpen} $variant={variant}>
                {items.map(({ value, name }) => (
                    <ListItem
                        key={value}
                        onClick={() => handleChoice(value)}
                        $isActive={value === active}
                    >
                        {name}
                    </ListItem>
                ))}
            </List>
        </StyledDropdown>
    );
}

export default Dropdown;
