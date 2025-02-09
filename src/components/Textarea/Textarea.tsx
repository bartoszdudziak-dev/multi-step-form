import { forwardRef } from 'react';
import { StyledTextarea } from './Textarea.styled';
import { TextareaProps } from './type';

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
    return <StyledTextarea {...props} ref={ref} />;
});

export default Textarea;
