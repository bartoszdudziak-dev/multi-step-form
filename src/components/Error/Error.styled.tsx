import styled from "styled-components";

const StyledError = styled.span`
    line-height: 1;
    font-size: 0.875rem;
    min-height: 0.875rem;
    color: ${(props) => props.theme.color.accent};
`; 

export { StyledError }