import styled from 'styled-components'

export const CartIconBase = styled.button`
  border: 0;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 8px;
  position: relative;
  padding: 0.5rem;

  align-items: center;
  justify-content: center;

  cursor: pointer;
`

export const CartIconContainer = styled(CartIconBase)`
  background: ${(props) => props.theme['yellow-light']};

  svg {
    fill: 'red';
  }

  span {
    background: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.white};
    font-weight: bold;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;

    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
  }
`
