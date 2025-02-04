import { HeadingProps } from './types';
import { H1, H2, H3 } from './Heading.styled';

function Heading({ children, as = 'h1', center = false }: HeadingProps) {
    if (as === 'h1') return <H1 $center={center}>{children}</H1>;
    if (as === 'h2') return <H2 $center={center}>{children}</H2>;
    if (as === 'h3') return <H3 $center={center}>{children}</H3>;
}

export default Heading;
