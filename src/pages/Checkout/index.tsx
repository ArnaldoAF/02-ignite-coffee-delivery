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
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { Cart } from './components/Cart'
import { AddressForm } from './components/AddressForm'

// React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>

const addressFormValidationSchema = zod.object({
  cep: zod.number().min(1, 'Informe o cep'),
  rua: zod.string().min(1, 'Informe a rua'),
  numero: zod.number().min(1, 'Informe o numero'),
  complemento: zod.string().optional(),
  bairro: zod.string().min(1, 'Informe o bairro'),
  cidade: zod.string().min(1, 'Informe a cidade'),
  uf: zod.string().min(2).max(2).min(1, 'Informe a uf'),
})

type AddressFormData = zod.infer<typeof addressFormValidationSchema>

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

  function changeCurretentPaymentMethod(payment: string) {
    setCurrentPaymentMethod(payment)
  }

  const addressFormObject = useForm<AddressFormData>({
    resolver: zodResolver(addressFormValidationSchema),
    defaultValues: {
      cep: undefined,
      rua: '',
      numero: undefined,
      complemento: '',
      bairro: '',
      cidade: '',
      uf: '',
    },
  })

  const { handleSubmit, watch, reset, formState } = addressFormObject

  function handleCheckout(data: AddressFormData) {
    console.log('handleCheckout')
    console.log(formState)

    console.log(data)
    // createNewCycle(data)
    // reset()
  }

  return (
    <CheckoutContainer>
      <form action="" onSubmit={handleSubmit(handleCheckout)}>
        <main>
          <Title size="xs">Complete seu pedido</Title>
          {formState.isSubmitting} -{Object.keys(formState.errors)}
          {formState.isValid}
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

              <FormProvider {...addressFormObject}>
                <AddressForm />
              </FormProvider>
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
        <Cart
          isValid={
            formState.isSubmitting || Object.keys(formState.errors).length > 0
          }
        />
      </form>
    </CheckoutContainer>
  )
}
