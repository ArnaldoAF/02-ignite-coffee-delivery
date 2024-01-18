import { ReactNode, createContext, useState } from 'react'
import { CartCoffeeElement, CoffeeInterface } from '../@types/CoffeeTypes'

interface CoffeeContextType {
  cartCoffeeList: CartCoffeeElement[]
  setCartCoffeeList: React.Dispatch<React.SetStateAction<CartCoffeeElement[]>>
  addCoffee: (coffee: CoffeeInterface, qtd: number) => void
}

export const CoffeeContext = createContext({} as CoffeeContextType)

interface CoffeeContextProviderProps {
  children: ReactNode
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [cartCoffeeList, setCartCoffeeList] = useState<CartCoffeeElement[]>([])

  function addCoffee(coffee: CoffeeInterface, qtd: number) {
    const coffeeObject = {
      coffee,
      qtd,
    }

    const findCoffeeOnCart = cartCoffeeList.findIndex(
      (coffeeCart) => coffeeCart.coffee.id === coffee.id,
    )

    if (findCoffeeOnCart > 0) {
      setCartCoffeeList([...cartCoffeeList, coffeeObject])
    } else {
      setCartCoffeeList([...cartCoffeeList, coffeeObject])
    }
  }

  return (
    <CoffeeContext.Provider
      value={{ cartCoffeeList, setCartCoffeeList, addCoffee }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
