import { FormProps } from './type';
import { StyledForm } from './Form.styled';

function Form({ children }: FormProps) {
    return <StyledForm>{children}</StyledForm>;
}

export default Form;
