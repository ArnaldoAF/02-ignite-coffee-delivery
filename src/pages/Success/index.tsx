import { Text } from '../../styles/Typhography/Text'
import { Title } from '../../styles/Typhography/Title'
import { SuccessPageContainer } from './styles'
import Success from '../../assets/Success.png'
import { IconWIthText } from '../../components/IconWIthText'
import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'
import { defaultTheme } from '../../styles/themes/default'

export function SuccessPage() {
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
            text1="Entrega em Rua João Daniel Martinellu, 102"
            text2="Farrapos - Porto Alegre"
            Icon={MapPin}
            iconColor={defaultTheme.purple}
          />
          <IconWIthText
            text1="Previsão de entrega"
            text2="20 min - 20 min"
            text2IsBold
            Icon={Timer}
            iconColor={defaultTheme.yellow}
          />
          <IconWIthText
            text1="Pagamento na entrega"
            text2="Cartão de Crédito"
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
