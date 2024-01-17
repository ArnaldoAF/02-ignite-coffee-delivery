import { CheckoutContainer, BaseInput, PaymentOptionButton } from './styles'
import { Title } from '../../styles/Typhography/Title'
import { Text } from '../../styles/Typhography/Text'
import { MapPinLine, CurrencyDollar, CreditCard } from 'phosphor-react'
import { defaultTheme } from '../../styles/themes/default'
import { useState } from 'react'

export function Checkout() {
  const [currentPaymentMethod, setCurrentPaymentMethod] = useState('credito')
  const PaymentOptions = [
    {
      text: 'CARTÃO DE CRÉDITO',
      value: 'credito',
    },
    {
      text: 'CARTÃO DE DEBITO',
      value: 'debito',
    },
    {
      text: 'DINHEIRO',
      value: 'dinheiro',
    },
  ]

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

            <div>
              <BaseInput className="w-40" placeholder="CEP" />
              <BaseInput className="w-100" placeholder="Rua" />
              <BaseInput className="w-40" placeholder="Número" />
              <BaseInput className="w-60" placeholder="Complemento" />
              <BaseInput className="w-40" placeholder="Bairro" />
              <BaseInput className="w-40" placeholder="Cidade" />
              <BaseInput className="w-20" placeholder="UF" />
            </div>
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
                  <CreditCard size={16} color={defaultTheme.purple} />
                  {option.text}
                </PaymentOptionButton>
              ))}
            </div>
          </section>
        </article>
      </main>
      <aside>
        <Title size="xs">Cafés selecionados</Title>
        <div>Teste</div>
      </aside>
    </CheckoutContainer>
  )
}
