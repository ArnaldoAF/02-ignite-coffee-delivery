import { ReactNode, createContext, useReducer } from 'react'
import { CartCoffeeElement, CoffeeInterface } from '../@types/CoffeeTypes'
import { coffeeReducer } from '../reducers/cartCoffeeList/reducer'
import {
  addCoffeeQtdAction,
  addNewCoffeeAction,
  setCoffeeQtdAction,
  deleteCoffeeAction,
} from '../reducers/cartCoffeeList/actions'

interface CoffeeContextType {
  cartCoffeeList: CartCoffeeElement[]
  addCoffeeToCart: (coffee: CoffeeInterface, qtd: number) => void
  setCoffeeQtdToCart: (coffee: CoffeeInterface, qtd: number) => void
  deleteCoffeeFromCart: (coffee: CoffeeInterface) => void
}

export const CoffeeContext = createContext({} as CoffeeContextType)

interface CoffeeContextProviderProps {
  children: ReactNode
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [cartCoffeeList, dispatch] = useReducer(coffeeReducer, [])

  function addCoffeeToCart(coffee: CoffeeInterface, qtd: number) {
    const coffeeObject = {
      coffee,
      qtd,
    }

    const findCoffeeOnCart = cartCoffeeList.findIndex(
      (coffeeCart) => coffeeCart.coffee.id === coffee.id,
    )

    console.log('addCoffeeToCart')
    console.log(findCoffeeOnCart)
    console.log(coffee.id)

    if (findCoffeeOnCart > -1) {
      dispatch(addCoffeeQtdAction(coffeeObject))
    } else {
      dispatch(addNewCoffeeAction(coffeeObject))
    }
  }

  function setCoffeeQtdToCart(coffee: CoffeeInterface, qtd: number) {
    const coffeeObject = {
      coffee,
      qtd,
    }

    const findCoffeeOnCart = cartCoffeeList.findIndex(
      (coffeeCart) => coffeeCart.coffee.id === coffee.id,
    )

    if (findCoffeeOnCart > -1) {
      dispatch(setCoffeeQtdAction(coffeeObject))
    }
  }

  function deleteCoffeeFromCart(coffee: CoffeeInterface) {
    const findCoffeeOnCart = cartCoffeeList.findIndex(
      (coffeeCart) => coffeeCart.coffee.id === coffee.id,
    )

    if (findCoffeeOnCart > -1) {
      dispatch(deleteCoffeeAction(coffee))
    }
  }

  return (
    <CoffeeContext.Provider
      value={{
        cartCoffeeList,
        addCoffeeToCart,
        setCoffeeQtdToCart,
        deleteCoffeeFromCart,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
