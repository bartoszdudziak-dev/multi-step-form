import { StyledRadio } from './Radio.styled';
import { RadioProps } from './type';

function Radio({ variant, label, id, name, value }: RadioProps) {
    return <StyledRadio variant={variant} label={label} id={id} name={name} value={value} />;
}

export default Radio;
