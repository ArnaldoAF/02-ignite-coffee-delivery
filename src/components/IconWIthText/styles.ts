import styled from 'styled-components'

export const IconWIthTextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  .icon {
    background-color: orange;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bold {
    font-weight: bold;
  }

  div {
    display: flex;
    flex-direction: column;
  }
`
