import { StyledColumn } from './Column.styled';
import { ColumnProps } from './type';

function Column({ children, style }: ColumnProps) {
    return <StyledColumn style={style}>{children}</StyledColumn>;
}

export default Column;
