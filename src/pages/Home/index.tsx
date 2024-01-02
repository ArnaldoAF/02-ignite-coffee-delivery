import { defaultTheme } from '../../styles/themes/default'
import { HomeContainer } from './styles'
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import CoffeeBig from '../../assets/CoffeeBig.png'
import { IconWIthText } from '../../components/IconWIthText'
import { CoffeeList } from './components/CoffeeList'

export function Home() {
  return (
    <HomeContainer>
      <main>
        <div>
          <p className="title-XL">
            Encontre o café perfeito para qualquer hora do dia
          </p>
          <p className="text-L">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <div className="icon-box">
            <div>
              <IconWIthText
                Icon={ShoppingCart}
                iconColor={defaultTheme['yellow-dark']}
                text1="Compra simples e segura"
              />
            </div>
            <div>
              <IconWIthText
                Icon={Package}
                iconColor={defaultTheme['base-text']}
                text1="Embalagem mantém o café intacto"
              />
            </div>
            <div>
              <IconWIthText
                Icon={Timer}
                iconColor={defaultTheme.yellow}
                text1="Entrega rápida e rastreada"
              />
            </div>
            <div>
              <IconWIthText
                Icon={Coffee}
                iconColor={defaultTheme.purple}
                text1="O café chega fresquinho até você"
              />
            </div>
          </div>
        </div>
        <div>
          <img src={CoffeeBig} alt="" />
        </div>
      </main>
      <section>
        <CoffeeList />
      </section>
    </HomeContainer>
  )
}
