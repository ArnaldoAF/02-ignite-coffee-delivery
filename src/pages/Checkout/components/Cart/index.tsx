import { NavLink } from 'react-router-dom'
import { CoffeeListData } from '../../../../data/data'
import { Text } from '../../../../styles/Typhography/Text'
import { Title } from '../../../../styles/Typhography/Title'
import { CartCoffeeCard } from '../CartCoffeeCard'
import { CartContainer, SubmitButton } from './styles'

export function Cart() {
  return (
    <CartContainer>
      <Title size="xs">Cafés selecionados</Title>
      <div>
        <CartCoffeeCard coffee={CoffeeListData[0]} />
        <hr />

        <CartCoffeeCard coffee={CoffeeListData[1]} />
        <hr />

        <CartCoffeeCard coffee={CoffeeListData[2]} />
        <hr />
        <footer>
          <div>
            <Text size="s">Total de itens</Text>
            <Text size="m">R$ 29,70</Text>
          </div>
          <div>
            <Text size="s">Entrega</Text>
            <Text size="m">R$ 29,70</Text>
          </div>
          <div>
            <Text size="l" className="bold">
              Total
            </Text>
            <Text size="l" className="bold">
              R$ 29,70
            </Text>
          </div>
          <NavLink to="/success" title="success">
            <SubmitButton>CONFIRMAR PEDIDO</SubmitButton>
          </NavLink>
        </footer>
      </div>
    </CartContainer>
  )
}
