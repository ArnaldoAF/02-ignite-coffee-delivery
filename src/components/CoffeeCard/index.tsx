import { CoffeeCardContainer } from './styles'
import { ShoppingCart } from 'phosphor-react'
import { defaultTheme } from '../../styles/themes/default'
import { Text } from '../../styles/Typhography/Text'
import { Title } from '../../styles/Typhography/Title'
import { NumberInput } from '../NumberInput'

interface CoffeeInterface {
  name: string
  description: string
  price: number
  photo: string
  tags: number[]
}

interface CoffeeCardProps {
  coffee: CoffeeInterface
}

export function CoffeeCard(props: CoffeeCardProps) {
  const { name, description, price, photo, tags } = props.coffee
  const formattedPrice = price
    .toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
    .substring(3)
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
        <NumberInput />
        <button>
          <ShoppingCart size={22} weight="fill" color={defaultTheme.white} />
        </button>
      </footer>
    </CoffeeCardContainer>
  )
}
