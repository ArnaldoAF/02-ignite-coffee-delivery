import { CoffeeCardContainer } from './styles'
import { ShoppingCart } from 'phosphor-react'
import { defaultTheme } from '../../styles/themes/default'

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
  return (
    <CoffeeCardContainer>
      <img src={photo} alt="" />
      <div className="tagList">
        {tags.map((tag) => (
          <p key={tag}>{tag}</p>
        ))}
      </div>
      <span className="nameCoffee">{name}</span>
      <span className="descriptionCoffee">{description}</span>
      <footer>
        <p>{price}</p>
        <input type="number" name="" id="" />
        <button>
          <ShoppingCart size={22} weight="fill" color={defaultTheme.white} />
        </button>
      </footer>
    </CoffeeCardContainer>
  )
}
