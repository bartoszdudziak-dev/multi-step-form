import { FormHTMLAttributes, ReactNode } from 'react';

export type FormStepProps = {
    children?: ReactNode;
    title: string;
} & FormHTMLAttributes<HTMLFormElement>;
