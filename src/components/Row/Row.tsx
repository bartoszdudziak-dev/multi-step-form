import { StyledRow } from './Row.styled';
import { RowProps } from './type';

function Row({ children }: RowProps) {
    return <StyledRow>{children}</StyledRow>;
}

export default Row;
