import { CoffeeCardContainer, CartButton } from './styles'
import { ShoppingCart } from 'phosphor-react'
import { defaultTheme } from '../../styles/themes/default'
import { Text } from '../../styles/Typhography/Text'
import { Title } from '../../styles/Typhography/Title'
import { NumberInput } from '../NumberInput'
import { CoffeeInterface } from '../../@types/CoffeeTypes'
import { useContext, useState } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'

interface CoffeeCardProps {
  coffee: CoffeeInterface
}

export function CoffeeCard(props: CoffeeCardProps) {
  const { coffee } = props
  const { name, description, price, photo, tags } = coffee
  const [qtd, setQtd] = useState(0)
  const { addCoffeeToCart } = useContext(CoffeeContext)

  const formattedPrice = price
    .toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
    .substring(3)

  function handleQtdChange(newValue: number) {
    setQtd(newValue)
  }

  function addCurrentCoffeeToCart() {
    addCoffeeToCart(coffee, qtd)
    setQtd(0)
  }

  return (
    <CoffeeCardContainer>
      <img src={photo} alt="" />
      <div className="tagList">
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <Title size="s" className="nameCoffee">
        {name}
      </Title>
      <Text size="s" className="descriptionCoffee">
        {description}
      </Text>
      <footer>
        <span>
          <Text size="s">R$</Text>
          <Title size="m">{formattedPrice}</Title>
        </span>

        <NumberInput value={qtd} onChange={handleQtdChange} />
        <CartButton onClick={addCurrentCoffeeToCart}>
          <ShoppingCart size={22} weight="fill" color={defaultTheme.white} />
        </CartButton>
      </footer>
    </CoffeeCardContainer>
  )
}
