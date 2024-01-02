import { CoffeeTagContainer } from './styles'

interface CoffeeTagProps {
  text: string
}

export function CoffeeTag(props: CoffeeTagProps) {
  const { text } = props
  return <CoffeeTagContainer>{text}</CoffeeTagContainer>
}
