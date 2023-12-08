import { HeaderContainer } from './styles'
import LogoImg from '../../assets/Logo.svg'
import { CartIcon } from '../CartIcon'
import { MapPin } from 'phosphor-react'
import { defaultTheme } from '../../styles/themes/default'

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={LogoImg} alt="" />
      </div>
      <div className="actionsDiv">
        <button className="locationButton">
          <MapPin size={22} weight="fill" color={defaultTheme['purple-dark']} />
          Porto Alegre
        </button>
        <CartIcon />
      </div>
    </HeaderContainer>
  )
}
