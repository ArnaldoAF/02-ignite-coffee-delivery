import styled from 'styled-components'

const sizeTokens = {
  xs: {
    fontSize: '1.125rem',
    fontWeight: '700',
  },
  s: {
    fontSize: '1.25rem',
    fontWeight: '700',
  },
  m: {
    fontSize: '1.5rem',
    fontWeight: '800',
  },
  l: {
    fontSize: '2rem',
    fontWeight: '800',
  },
  xl: {
    fontSize: '3rem',
    fontWeight: '800',
  },
}

export const Title = styled.p<{ size: 'xs' | 's' | 'm' | 'l' }>`
  font-family: 'Baloo 2', sans-serif;
  line-height: 130%;
  ${(props) => props.size && sizeTokens[props.size]}
  color: ${(props) => props.theme['base-subtitle']};
`
