import { CoffeeCard } from '../../../../components/CoffeeCard'
import { CoffeeTag } from '../../../../components/CoffeeTag'
import { CoffeeListData } from '../../../../data/data'
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

      <section>
        {CoffeeListData.map((coffee) => (
          <div key={coffee.name}>
            <CoffeeCard coffee={coffee} />
          </div>
        ))}
      </section>
    </CoffeeListContainer>
  )
}
