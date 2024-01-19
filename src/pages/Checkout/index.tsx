import { CheckoutContainer, PaymentOptionButton } from './styles'
import { Title } from '../../styles/Typhography/Title'
import { Text } from '../../styles/Typhography/Text'
import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from 'phosphor-react'
import { defaultTheme } from '../../styles/themes/default'
import { useState } from 'react'
import { Cart } from './components/Cart'
import { AddressForm } from './components/AddressForm'

// React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>

export function Checkout() {
  const [currentPaymentMethod, setCurrentPaymentMethod] = useState('credito')
  const PaymentOptions = [
    {
      text: 'CARTÃO DE CRÉDITO',
      value: 'credito',
      Icon: CreditCard,
    },
    {
      text: 'CARTÃO DE DEBITO',
      value: 'debito',
      Icon: Bank,
    },
    {
      text: 'DINHEIRO',
      value: 'dinheiro',
      Icon: Money,
    },
  ]
  const Icons = MapPinLine
  console.log(Icons)

  function changeCurretentPaymentMethod(payment: string) {
    setCurrentPaymentMethod(payment)
  }

  return (
    <CheckoutContainer>
      <main>
        <Title size="xs">Complete seu pedido</Title>
        <article>
          <section>
            <header>
              <MapPinLine size={22} color={defaultTheme['yellow-dark']} />
              <div>
                <Text size="m">Endereço de Entrega</Text>
                <Text size="s">
                  Informe o endereço onde deseja receber seu pedido
                </Text>
              </div>
            </header>

            <AddressForm />
          </section>
          <section>
            <header>
              <CurrencyDollar size={22} color={defaultTheme.purple} />
              <div>
                <Text size="m">Pagamento</Text>
                <Text size="s">
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </Text>
              </div>
            </header>

            <div>
              {PaymentOptions.map((option) => (
                <PaymentOptionButton
                  key={option.value}
                  className={`
                    ${currentPaymentMethod === option.value && 'active'}
                    `}
                  onClick={() => changeCurretentPaymentMethod(option.value)}
                >
                  {option.value === 'credito' && (
                    <CreditCard size={16} color={defaultTheme.purple} />
                  )}
                  {option.value === 'debito' && (
                    <Bank size={16} color={defaultTheme.purple} />
                  )}
                  {option.value === 'dinheiro' && (
                    <Money size={16} color={defaultTheme.purple} />
                  )}

                  {option.text}
                </PaymentOptionButton>
              ))}
            </div>
          </section>
        </article>
      </main>
      <Cart />
    </CheckoutContainer>
  )
}
