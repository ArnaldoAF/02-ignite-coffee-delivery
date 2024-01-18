import { CoffeeTypes } from '../data/data'

export interface CoffeeInterface {
  name: string
  description: string
  price: number
  photo: string
  tags: CoffeeTypes[]
}
