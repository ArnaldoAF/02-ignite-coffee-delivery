import styled from 'styled-components'

export const CartCoffeeCardContainer = styled.div`
  padding: 1.25rem 0;
  width: 100%;

  display: flex;
  justify-content: space-between;

  main {
    display: flex;
    gap: 1.25rem;
    flex: 5;

    > div {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      > div {
        display: flex;
        gap: 0.5rem;
      }
    }
  }

  img {
    width: 4rem;
    height: 4rem;
  }

  .bold {
    font-weight: bold;
  }
`

export const RemoveButton = styled.button`
  background: ${(props) => props.theme['base-button']};
  border: 1px solid ${(props) => props.theme['base-button']};

  padding: 0.5rem;
  border-radius: 6px;
  font-size: 0.75rem;
  color: ${(props) => props.theme['base-text']};
  font-family: 'Roboto', sans-serif;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  flex: 1;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    filter: brightness(95%);
    transition: 0.15s;
  }

  &.active {
    background: ${(props) => props.theme['purple-light']};
    border: 1px solid ${(props) => props.theme.purple};
  }
`
