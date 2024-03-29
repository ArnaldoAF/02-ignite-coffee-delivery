import styled from 'styled-components'

export const AddressFormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  .w-100 {
    width: calc(100% - 1rem);
  }

  .w-60 {
    width: calc(60% - 1rem);
  }

  .w-40 {
    width: calc(40% - 1rem);
  }

  .w-20 {
    width: calc(20% - 1rem);
  }

  .flex-1 {
    flex: 1 1 auto;
  }

  .flex-3 {
    flex: 3 1 auto;
  }
`

export const BaseInput = styled.input`
  background: ${(props) => props.theme['base-input']};
  border-radius: 4px;
  padding: 0.75rem;
  border: 1px solid ${(props) => props.theme['base-button']};
  font-size: 1rem;
  color: ${(props) => props.theme['base-text']};
  font-family: 'Roboto', sans-serif;
  line-height: 130%;

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['yellow-dark']};
  }

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`
