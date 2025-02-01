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

        input: Record<Size, Input>;
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

    export type Size = 'sm' | 'md' | 'lg';
}
