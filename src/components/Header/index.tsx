import { HeaderContainer } from './styles'
import LogoImg from '../../assets/Logo.svg'
import { NavLink } from 'react-router-dom'

import { CartIcon } from '../CartIcon'
import { MapPin } from 'phosphor-react'
import { defaultTheme } from '../../styles/themes/default'

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <NavLink to="/" title="Timer">
          <img src={LogoImg} alt="" />
        </NavLink>
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
