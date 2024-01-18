import styled from 'styled-components'

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  > div {
    display: flex;
    flex-direction: column;

    margin-top: 1rem;
    border-radius: 6px 44px 6px 44px;

    padding: 2.5rem;
    background: ${(props) => props.theme['base-card']};
  }

  hr {
    color: ${(props) => props.theme['base-button']};
    border-top: 1px solid ${(props) => props.theme['base-button']};
  }

  footer {
    display: flex;
    flex-direction: column;

    .bold {
      font-weight: bold;
    }

    div {
      display: flex;
      justify-content: space-between;
      margin-top: 0.75rem;
    }

    button {
      margin-top: 1.5rem;
    }
  }
`

export const SubmitButton = styled.button`
  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  font-weight: bold;

  border: 0;
  width: 100%;
  border-radius: 8px;
  padding: 0.75rem;

  align-items: center;
  justify-content: center;

  cursor: pointer;
`
