import Americano from '../assets/coffees/Americano.png'
import Arabe from '../assets/coffees/Arabe.png'
import CafeComLeite from '../assets/coffees/Cafe_Com_Leite.png'
import CafeGelado from '../assets/coffees/Cafe_Gelado.png'
import Capuccino from '../assets/coffees/Capuccino.png'
import ChocolateQuente from '../assets/coffees/Chocolate_Quente.png'
import Cubano from '../assets/coffees/Cubano.png'
import ExpressoCremoso from '../assets/coffees/Expresso_Cremoso.png'
import Expresso from '../assets/coffees/Expresso.png'
import Havaiano from '../assets/coffees/Havaiano.png'
import Irlandes from '../assets/coffees/Irlandes.png'
import Latte from '../assets/coffees/Latte.png'
import Macchiato from '../assets/coffees/Macchiato.png'
import Mochaccino from '../assets/coffees/Mochaccino.png'

export enum CoffeeTypes {
  TRADICIONAL = 'TRADICIONAL',
  ESPECIAL = 'ESPECIAL',
  COM_LEITE = 'COM LEITE',
  ALCOOLICO = 'ALCOÓLICO',
  GELADO = 'GELADO',
}

export const CoffeeListData = [
  {
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    photo: Expresso,
    tags: [CoffeeTypes.TRADICIONAL],
  },
  {
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    photo: Americano,
    tags: [CoffeeTypes.TRADICIONAL],
  },
  {
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    photo: ExpressoCremoso,
    tags: [CoffeeTypes.TRADICIONAL],
  },
  {
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    photo: CafeGelado,
    tags: [CoffeeTypes.TRADICIONAL, CoffeeTypes.GELADO],
  },
  {
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    photo: CafeComLeite,
    tags: [CoffeeTypes.TRADICIONAL, CoffeeTypes.COM_LEITE],
  },
  {
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    photo: Latte,
    tags: [CoffeeTypes.TRADICIONAL, CoffeeTypes.COM_LEITE],
  },
  {
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
    photo: Capuccino,
    tags: [CoffeeTypes.TRADICIONAL, CoffeeTypes.COM_LEITE],
  },
  {
    name: 'Macchiato',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    photo: Macchiato,
    tags: [CoffeeTypes.TRADICIONAL, CoffeeTypes.COM_LEITE],
  },
  {
    name: 'Mochaccino',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
    photo: Mochaccino,
    tags: [CoffeeTypes.TRADICIONAL, CoffeeTypes.COM_LEITE],
  },
  {
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    photo: ChocolateQuente,
    tags: [CoffeeTypes.ESPECIAL, CoffeeTypes.COM_LEITE],
  },
  {
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    photo: Cubano,
    tags: [CoffeeTypes.ESPECIAL, CoffeeTypes.ALCOOLICO, CoffeeTypes.GELADO],
  },
  {
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
    photo: Havaiano,
    tags: [CoffeeTypes.ESPECIAL],
  },
  {
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    photo: Arabe,
    tags: [CoffeeTypes.ESPECIAL],
  },
  {
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    photo: Irlandes,
    tags: [CoffeeTypes.ESPECIAL, CoffeeTypes.ALCOOLICO],
  },
]
