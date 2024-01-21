import { CartCoffeeCardContainer, RemoveButton } from './styles'
import { Text } from '../../../../styles/Typhography/Text'
import { NumberInput } from '../../../../components/NumberInput'
import { CoffeeInterface } from '../../../../@types/CoffeeTypes'
import { Trash } from 'phosphor-react'
import { defaultTheme } from '../../../../styles/themes/default'
import { useContext, useState } from 'react'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'

interface CartCoffeeCardProps {
  coffee: CoffeeInterface
  qtd: number
}

export function CartCoffeeCard(props: CartCoffeeCardProps) {
  const { coffee, qtd } = props
  const { name, price, photo } = coffee
  const { setCoffeeQtdToCart, deleteCoffeeFromCart } = useContext(CoffeeContext)

  const [localQtd, setLocalQtd] = useState(qtd)

  const formattedPrice = (price * qtd).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  function handleQtdChange(newValue: number) {
    setLocalQtd(newValue)
    setCoffeeQtdToCart(coffee, newValue)
  }

  function deleteCoffee() {
    deleteCoffeeFromCart(coffee)
  }

  return (
    <CartCoffeeCardContainer>
      <main>
        <img src={photo} alt="" />
        <div>
          <Text size="m">{name}</Text>
          <div>
            <NumberInput onChange={handleQtdChange} value={localQtd} />
            <RemoveButton onClick={deleteCoffee}>
              <Trash size={16} color={defaultTheme.purple} />
              REMOVER
            </RemoveButton>
          </div>
        </div>
      </main>
      <aside>
        <Text size="m" className="bold">
          {formattedPrice}
        </Text>
      </aside>
    </CartCoffeeCardContainer>
  )
}
