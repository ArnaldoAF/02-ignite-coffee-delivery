import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background: ${(props) => props.theme.background};

  padding: 2rem 0;

  position: sticky;

  top: 0;
`
