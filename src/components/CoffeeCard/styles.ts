import styled from 'styled-components'
import { CartIconBase } from '../CartIcon/styles'

export const CoffeeCardContainer = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 0 36px 0 36px;
  padding: 1.25rem;
  max-width: 16rem;
  height: 21rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  img {
    width: 7rem;
    height: 7rem;
    margin: -2.5rem auto 1rem auto;
  }

  .tagList {
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.25rem;

    span {
      padding: 0.25rem 0.75rem;
      border-radius: 500px;
      background: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};

      font-family: 'Roboto', sans-serif;
      font-size: 0.65rem;
      font-weight: bold;
      text-transform: uppercase;
    }
  }

  .nameCoffee {
    margin-bottom: 1rem;
  }

  .descriptionCoffee {
    margin-bottom: 2.1rem;
    color: ${(props) => props.theme['base-label']};
  }

  footer {
    display: flex;
    flex: 1;
    align-items: end;

    span {
      display: flex;
      flex: 1;
      align-content: flex-end;
      align-items: center;
      gap: 0.4rem;
    }
  }
`

export const CartButton = styled(CartIconBase)`
  background: ${(props) => props.theme['purple-dark']};
  width: 2.3rem;
  height: 2.3rem;
  margin-left: 0.5rem;
`
