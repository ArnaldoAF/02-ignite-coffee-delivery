import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 0 36px 0 36px;
  padding: 1.25rem;
  max-width: 16rem;

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
  }

  .nameCoffee {
    margin-bottom: 1rem;
  }

  .descriptionCoffee {
    margin-bottom: 1rem;
  }

  footer {
    display: flex;
  }
`
