import styled from 'styled-components'

export const NumberInputContainer = styled.div`
  height: 2.3rem;
  width: 4.5rem;
  border-radius: 6px;
  overflow: hidden;
  background: ${(props) => props.theme['base-button']};
  display: flex;

  input[type='number'] {
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;

    background: ${(props) => props.theme['base-button']};
    border: 0;
    max-width: 100%;
    width: 1.5rem;
    text-align: center;
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  button {
    width: 1.5rem;
    background: ${(props) => props.theme['base-button']};
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      filter: brightness(100%);
    }
  }
`
