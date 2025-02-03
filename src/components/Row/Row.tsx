import { StyledRow } from './Row.styled';
import { RowProps } from './type';

function Row({ children, style }: RowProps) {
    return <StyledRow style={style}>{children}</StyledRow>;
}

export default Row;
