import styled from 'styled-components'
import BackgroundImage from '../../assets/Background.svg'

export const HomeContainer = styled.div`
  display: flex;
  gap: 5.5rem;
  padding: 6rem 5rem;
  background-image: url(${BackgroundImage});
  margin: 0 -5rem;

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
