import styled from 'styled-components'

export const CoffeeTagContainer = styled.button`
  padding: 0.25rem 0.75rem;
  border-radius: 500px;
  background: ${(props) => props.theme.white};
  color: ${(props) => props.theme['yellow-dark']};
  border: 1px solid ${(props) => props.theme['yellow-dark']};

  font-family: 'Roboto', sans-serif;
  font-size: 0.7rem;
  font-weight: bold;
  text-transform: uppercase;

  &:active {
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme['yellow-dark']};
  }
`
