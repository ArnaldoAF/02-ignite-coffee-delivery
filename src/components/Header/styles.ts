import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background: ${(props) => props.theme.background};

  padding: 2rem 1rem;

  position: sticky;

  top: 0;

  .actionsDiv {
    display: flex;
    gap: 1rem;
  }

  .locationButton {
    padding: 0.5rem;
    height: 2.5rem;
    background: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme['purple-dark']};
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
  }
`
