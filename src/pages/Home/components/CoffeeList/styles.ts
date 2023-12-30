import styled from 'styled-components'

export const CoffeeListContainer = styled.div`
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3.5rem;

    div {
      display: flex;
      gap: 0.5rem;
    }
  }
  section {
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    > * {
      width: calc(100% / 4);
    }
  }
`
