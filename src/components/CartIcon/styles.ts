import styled from 'styled-components'

export const CartIconContainer = styled.button`
  background: ${(props) => props.theme['yellow-light']};
  border: 0;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 8px;
  position: relative;

  align-items: center;
  justify-content: center;

  cursor: pointer;

  svg {
    fill: 'red';
  }

  padding: 0.5rem;

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
