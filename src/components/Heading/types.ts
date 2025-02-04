import { ReactNode } from 'react';

type HeadingType = 'h1' | 'h2' | 'h3';

export type HeadingProps = {
    children: ReactNode;
    as?: HeadingType;
    center?: boolean;
};
