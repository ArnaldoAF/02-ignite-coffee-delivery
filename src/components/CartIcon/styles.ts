import styled from 'styled-components'

export const CartIconContainer = styled.button`
  background: ${(props) => props.theme['yellow-light']};
  border: 0;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 8px;

  align-items: center;
  justify-content: center;

  svg {
    fill: 'red';
  }

  padding: 0.5rem;
`
