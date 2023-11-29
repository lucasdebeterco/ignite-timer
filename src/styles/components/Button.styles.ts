import styled from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface IButtonContainer {
    variant: ButtonVariant
}

export const ButtonContainer = styled.button<IButtonContainer>`
    height: 80px;
    background: ${props => props.theme.secondary};
`