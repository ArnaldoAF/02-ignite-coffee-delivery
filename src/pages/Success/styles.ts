import styled from 'styled-components'

export const SuccessPageContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  gap: 6rem;

  section {
    margin-top: 2.5rem;
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    border-radius: 6px 36px 6px 36px;
    background:
      linear-gradient(
          ${(props) => props.theme.background},
          ${(props) => props.theme.background}
        )
        padding-box,
      linear-gradient(
          to right,
          ${(props) => props.theme['yellow-dark']},
          ${(props) => props.theme.purple}
        )
        border-box;
    border: 1px solid transparent;
  }
`
