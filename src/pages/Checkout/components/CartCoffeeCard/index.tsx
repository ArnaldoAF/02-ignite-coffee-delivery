import { CartCoffeeCardContainer, RemoveButton } from './styles'
import { Title } from '../../../../styles/Typhography/Title'
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
  const { name, description, price, photo, tags } = coffee
  const { setCoffeeQtdToCart } = useContext(CoffeeContext)

  const [localQtd, setLocalQtd] = useState(qtd)

  const formattedPrice = price
    .toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
    .substring(3)

  function handleQtdChange(newValue: number) {
    setLocalQtd(newValue)
    setCoffeeQtdToCart(coffee, newValue)
  }

  return (
    <CartCoffeeCardContainer>
      <main>
        <img src={photo} alt="" />
        <div>
          <Text size="m">{name}</Text>
          <div>
            <NumberInput onChange={handleQtdChange} value={localQtd} />
            <RemoveButton>
              <Trash size={16} color={defaultTheme.purple} />
              REMOVER
            </RemoveButton>
          </div>
        </div>
      </main>
      <aside>
        <Text size="m" className="bold">
          R$ {formattedPrice}
        </Text>
      </aside>
    </CartCoffeeCardContainer>
  )
}
