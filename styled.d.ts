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
        };

        input: Record<Variant, Input>;
        label: Record<Variant, Label>;
        button: Record<Variant, Button>;
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

    export type Variant = 'sm' | 'md' | 'lg';
}
