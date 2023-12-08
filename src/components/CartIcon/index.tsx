import { ShoppingCart } from 'phosphor-react'
import { CartIconContainer } from './styles'
import { defaultTheme } from '../../styles/themes/default'

export function CartIcon() {
  return (
    <CartIconContainer>
      <ShoppingCart
        size={22}
        weight="fill"
        color={defaultTheme['yellow-dark']}
      />
    </CartIconContainer>
  )
}
