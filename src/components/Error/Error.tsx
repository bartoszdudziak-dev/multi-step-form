import { StyledError } from "./Error.styled"
import { ErrorProps } from "./types"

function Error({children}: ErrorProps) {
    return (
        <StyledError>
            {children}
        </StyledError>
    )
}

export default Error
