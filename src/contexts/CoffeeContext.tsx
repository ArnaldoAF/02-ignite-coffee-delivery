import {
  ReactNode,
  createContext,
  useState,
  useReducer,
  useEffect,
} from 'react'
import { CoffeeInterface } from '../@types/CoffeeTypes'

interface CoffeeContextType {
  cartCoffeeList: CoffeeInterface[]
  setCartCoffeeList: React.Dispatch<React.SetStateAction<string>>
}

export const CoffeeContext = createContext({} as CoffeeContextType)

interface CoffeeContextProviderProps {
  children: ReactNode
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [cartCoffeeList, setCartCoffeeList] = useState([])

  return (
    <CoffeeContext.Provider value={{ cartCoffeeList }}>
      {children}
    </CoffeeContext.Provider>
  )
}
