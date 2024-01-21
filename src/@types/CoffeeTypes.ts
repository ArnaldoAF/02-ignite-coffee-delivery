import { CoffeeTypes } from '../data/data'

export interface CoffeeInterface {
  id: number
  name: string
  description: string
  price: number
  photo: string
  tags: CoffeeTypes[]
}

export interface CartCoffeeElement {
  coffee: CoffeeInterface
  qtd: number
}
