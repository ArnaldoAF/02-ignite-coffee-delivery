import { NavLink } from 'react-router-dom'
import { Text } from '../../../../styles/Typhography/Text'
import { Title } from '../../../../styles/Typhography/Title'
import { CartCoffeeCard } from '../CartCoffeeCard'
import { CartContainer, SubmitButton } from './styles'
import { useContext } from 'react'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'

export function Cart() {
  const { cartCoffeeList } = useContext(CoffeeContext)

  return (
    <CartContainer>
      <Title size="xs">Cafés selecionados</Title>
      <div>
        {cartCoffeeList.map((cartCoffee, index) => (
          <div key={index}>
            <CartCoffeeCard coffee={cartCoffee.coffee} qtd={cartCoffee.qtd} />
            <hr />
          </div>
        ))}
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
