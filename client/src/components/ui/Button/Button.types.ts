import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    className?: string,
    color?: 'green' | 'white',
    size: 'big' | 'medium' | 'small',
    text: string,
}