import { Text } from '../../../../styles/Typhography/Text'
import { Title } from '../../../../styles/Typhography/Title'
import { CartCoffeeCard } from '../CartCoffeeCard'
import { CartContainer, SubmitButton } from './styles'
import { useContext } from 'react'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'

interface CartProps {
  isValid: boolean
}

export function Cart({ isValid }: CartProps) {
  const { cartCoffeeList } = useContext(CoffeeContext)

  const entrega = 3.5
  const formattedEntrega = entrega.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  const totalItens = cartCoffeeList.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.qtd * currentValue.coffee.price,
    0,
  )

  const formattedTotalItens = totalItens.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  const finalTotal = (entrega + totalItens).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

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
            <Text size="m">{formattedTotalItens}</Text>
          </div>
          <div>
            <Text size="s">Entrega</Text>
            <Text size="m">{formattedEntrega} </Text>
          </div>
          <div>
            <Text size="l" className="bold">
              Total
            </Text>
            <Text size="l" className="bold">
              {finalTotal}
            </Text>
          </div>
          <SubmitButton
            type="submit"
            disabled={isValid || cartCoffeeList.length === 0}
          >
            CONFIRMAR PEDIDO
          </SubmitButton>
        </footer>
      </div>
    </CartContainer>
  )
}
