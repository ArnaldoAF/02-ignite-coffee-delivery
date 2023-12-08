import { CoffeeListContainer } from './styles'

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <header>
        <p className="title-L"> Nossos Cafés</p>
        <div>
          <button>Tradicional</button>
          <button>Especial</button>
          <button>Com Leite</button>
        </div>
      </header>

      <section>Lista de cafés</section>
    </CoffeeListContainer>
  )
}
