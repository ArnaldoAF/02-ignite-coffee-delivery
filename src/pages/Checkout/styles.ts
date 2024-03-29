import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  margin-top: 2.5rem;

  form {
    display: flex;
    gap: 2rem;
    > main {
      width: 60%;

      article {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        margin-top: 1rem;

        section {
          padding: 2.5rem;
          background: ${(props) => props.theme['base-card']};
          border-radius: 6px;

          header {
            display: flex;
            gap: 0.5rem;
            margin-bottom: 2rem;
          }

          > div {
            display: flex;
            gap: 1rem;
          }
        }
      }
    }
  }

  margin-bottom: 5rem;
`

export const PaymentOptionButton = styled.div`
  background: ${(props) => props.theme['base-button']};
  border: 1px solid ${(props) => props.theme['base-button']};

  padding: 1rem;
  border-radius: 6px;
  font-size: 0.8rem;
  color: ${(props) => props.theme['base-text']};
  font-family: 'Roboto', sans-serif;
  display: flex;
  align-items: center;
  gap: 0.75rem;
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
