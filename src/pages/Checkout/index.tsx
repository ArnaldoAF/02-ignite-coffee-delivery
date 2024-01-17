import { CheckoutContainer, BaseInput } from './styles'
import { Title } from '../../styles/Typhography/Title'
import { Text } from '../../styles/Typhography/Text'
import { MapPinLine, CurrencyDollar } from 'phosphor-react'
import { defaultTheme } from '../../styles/themes/default'

export function Checkout() {
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
          </section>
        </article>
      </main>
      <aside>
        <Title size="xs">Cafés selecionados</Title>
        <div></div>
      </aside>
    </CheckoutContainer>
  )
}
