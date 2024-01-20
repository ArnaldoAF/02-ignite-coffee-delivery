import { ReactNode, createContext, useReducer, useState } from 'react'
import { CartCoffeeElement, CoffeeInterface } from '../@types/CoffeeTypes'
import { coffeeReducer } from '../reducers/cartCoffeeList/reducer'
import {
  addCoffeeQtdAction,
  addNewCoffeeAction,
  setCoffeeQtdAction,
  deleteCoffeeAction,
  cleanCoffeeCartAction,
} from '../reducers/cartCoffeeList/actions'

interface checkoutObjectType {
  bairro: string
  cep?: number
  cidade: string
  complemento?: string
  numero: number
  rua: string
  uf: string
  pagamento: string | undefined
}
interface CoffeeContextType {
  cartCoffeeList: CartCoffeeElement[]
  checkoutObject: checkoutObjectType | undefined
  addCoffeeToCart: (coffee: CoffeeInterface, qtd: number) => void
  setCoffeeQtdToCart: (coffee: CoffeeInterface, qtd: number) => void
  deleteCoffeeFromCart: (coffee: CoffeeInterface) => void
  clearCoffeeCart: () => void
  setCheckoutObjectValue: (object: checkoutObjectType) => void
}

export const CoffeeContext = createContext({} as CoffeeContextType)

interface CoffeeContextProviderProps {
  children: ReactNode
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [cartCoffeeList, dispatch] = useReducer(coffeeReducer, [])
  const [checkoutObject, setCheckoutObject] = useState<checkoutObjectType>()

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

  function clearCoffeeCart() {
    dispatch(cleanCoffeeCartAction())
  }

  function setCheckoutObjectValue(object: checkoutObjectType) {
    setCheckoutObject(object)
  }

  return (
    <CoffeeContext.Provider
      value={{
        cartCoffeeList,
        addCoffeeToCart,
        setCoffeeQtdToCart,
        deleteCoffeeFromCart,
        clearCoffeeCart,
        checkoutObject,
        setCheckoutObjectValue,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
