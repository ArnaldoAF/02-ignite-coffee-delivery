import { CartCoffeeCardContainer, RemoveButton } from './styles'
import { Title } from '../../../../styles/Typhography/Title'
import { Text } from '../../../../styles/Typhography/Text'
import { NumberInput } from '../../../../components/NumberInput'
import { CoffeeInterface } from '../../../../@types/CoffeeTypes'
import { Trash } from 'phosphor-react'
import { defaultTheme } from '../../../../styles/themes/default'

interface CartCoffeeCardProps {
  coffee: CoffeeInterface
}

export function CartCoffeeCard(props: CartCoffeeCardProps) {
  const { name, description, price, photo, tags } = props.coffee
  const formattedPrice = price
    .toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
    .substring(3)

  return (
    <CartCoffeeCardContainer>
      <main>
        <img src={photo} alt="" />
        <div>
          <Text size="m">{name}</Text>
          <div>
            <NumberInput />
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
