import styled from 'styled-components'

const sizeTokens = {
  xs: {
    fontSize: '0.75rem',
    fontWeight: '700',
  },
  s: {
    fontSize: '0.85rem',
    fontWeight: '400',
  },
  m: {
    fontSize: '1rem',
    fontWeight: '400',
  },
  l: {
    fontSize: '1.25rem',
    fontWeight: '400',
  },
}

export const Text = styled.p<{ size: 'xs' | 's' | 'm' | 'l' }>`
  font-family: 'Roboto', sans-serif;
  line-height: 130%;
  ${(props) => props.size && sizeTokens[props.size]}
  color: ${(props) => props.theme['base-text']};
`
