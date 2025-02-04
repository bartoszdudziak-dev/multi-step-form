import { StyledTextarea } from './Textarea.styled';
import { TextareaProps } from './type';

function Textarea({ ...rest }: TextareaProps) {
    return <StyledTextarea {...rest} />;
}

export default Textarea;
