import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  gap: 3.5rem;
  padding-top: 4rem;

  .title-XL {
    margin-bottom: 2rem;
  }

  .text-L {
    margin-bottom: 4rem;
  }

  .icon-box {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    > div {
      flex: 50%;
      margin-bottom: 1.25rem;
    }
  }
`
