import { Text } from '../../styles/Typhography/Text'
import { Title } from '../../styles/Typhography/Title'
import { SuccessPageContainer } from './styles'
import Success from '../../assets/Success.png'
import { IconWIthText } from '../../components/IconWIthText'
import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'
import { defaultTheme } from '../../styles/themes/default'
import { useContext, useEffect } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'
import { useNavigate } from 'react-router-dom'

export function SuccessPage() {
  const { checkoutObject } = useContext(CoffeeContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (checkoutObject === undefined || !checkoutObject) navigate('/')
  }, [checkoutObject, navigate])

  return (
    <SuccessPageContainer>
      <div>
        <Title size="l" className="title">
          Uhu! Pedido confirmado
        </Title>
        <Text size="l">
          Agora é só aguardar que logo o café chegará até você
        </Text>

        <section>
          <IconWIthText
            text1={`Entrega em Rua ${checkoutObject?.rua}, ${checkoutObject?.numero} - ${checkoutObject?.complemento}`}
            text2={`${checkoutObject?.bairro} - ${checkoutObject?.cidade}, ${checkoutObject?.uf}`}
            Icon={MapPin}
            iconColor={defaultTheme.purple}
          />
          <IconWIthText
            text1="Previsão de entrega"
            text2="20 min - 30 min"
            text2IsBold
            Icon={Timer}
            iconColor={defaultTheme.yellow}
          />
          <IconWIthText
            text1="Pagamento na entrega"
            text2={checkoutObject?.pagamento}
            text2IsBold
            Icon={CurrencyDollar}
            iconColor={defaultTheme['yellow-dark']}
          />
        </section>
      </div>
      <div>
        <img src={Success} alt="" />
      </div>
    </SuccessPageContainer>
  )
}
