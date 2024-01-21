import { ShoppingCart } from 'phosphor-react'
import { CartIconContainer } from './styles'
import { defaultTheme } from '../../styles/themes/default'
import { CoffeeContext } from '../../contexts/CoffeeContext'
import { useContext } from 'react'

export function CartIcon() {
  const { cartCoffeeList } = useContext(CoffeeContext)
  return (
    <CartIconContainer>
      <ShoppingCart
        size={22}
        weight="fill"
        color={defaultTheme['yellow-dark']}
      />
      {cartCoffeeList.length > 0 && <span>{cartCoffeeList.length}</span>}
    </CartIconContainer>
  )
}
