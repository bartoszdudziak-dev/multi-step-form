import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        fontFamily: string;

        color: {
            primary: string;
            secondary: string;
            background: string;
            text: string;
            accent: string;
            outline: string;
        };

        borderRadius: {
            sm: string;
            md: string;
            lg: string;
            full: string;
            checkbox: string;
        };

        input: Record<Variant, Input>;
        label: Record<Variant, Label>;
        button: Record<Variant, Button>;
        checkbox: Record<Variant, Checkbox>;
        radio: Record<Variant, Radio>;
        card: Record<Variant, Card>;
    }

    type BoxShadow = {
        distance: string;
        blur: string;
    };

    type Input = {
        fontSize: string;
        padding: string;
        boxShadow: BoxShadow;
    };

    type Label = {
        fontSize: string;
    };

    type Button = {
        fontSize: string;
        padding: string;
        boxShadow: BoxShadow;
    };

    type Checkbox = {
        fontSize: string;
        gap: string;
        checkmark: {
            width: string;
            height: string;
        };
        boxShadow: BoxShadow;
    };

    type Radio = Checkbox;

    type Card = {
        boxShadow: BoxShadow;
    };

    export type Variant = 'sm' | 'md' | 'lg';
}
