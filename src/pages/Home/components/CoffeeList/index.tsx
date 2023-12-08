import { CoffeeTag } from '../../../../components/CoffeeTag'
import { CoffeeListContainer } from './styles'

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <header>
        <p className="title-L"> Nossos Cafés</p>
        <div>
          <CoffeeTag text="Tradicional" />
          <CoffeeTag text="Especial" />
          <CoffeeTag text="Com Leite" />
        </div>
      </header>

      <section>Lista de cafés</section>
    </CoffeeListContainer>
  )
}
