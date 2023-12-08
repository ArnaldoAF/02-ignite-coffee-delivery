import { HeaderContainer } from './styles'
import LogoImg from '../../assets/Logo.svg'
import { CartIcon } from '../CartIcon'

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={LogoImg} alt="" />
      </div>
      <div>
        <button>Porto Alegre</button>
        <CartIcon />
      </div>
    </HeaderContainer>
  )
}
