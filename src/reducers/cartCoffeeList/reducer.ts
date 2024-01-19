import { produce } from 'immer'
import { CartCoffeeElement } from '../../@types/CoffeeTypes'
import { ActionTypes } from './actions'

export function coffeeReducer(state: CartCoffeeElement[], action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_COFFEE:
      return produce(state, (draft) => {
        draft.push(action.payload.newCoffee)
      })
    case ActionTypes.ADD_COFFEE_QTD: {
      const currentCoffeeIndex = state.findIndex(
        (coffeCartElement) =>
          coffeCartElement.coffee.id === action.payload.newCoffee.id,
      )

      if (currentCoffeeIndex < 0) return state

      return produce(state, (draft) => {
        draft[currentCoffeeIndex].qtd += action.payload.newCoffee.qtd
      })
    }
    case ActionTypes.SET_COFFEE_QTD: {
      const currentCoffeeIndex = state.findIndex(
        (coffeCartElement) =>
          coffeCartElement.coffee.id === action.payload.newCoffee.id,
      )

      if (currentCoffeeIndex < 0) return state

      return produce(state, (draft) => {
        draft[currentCoffeeIndex].qtd = action.payload.newCoffee.qtd
      })
    }
    case ActionTypes.DELETE_COFFEE: {
      const currentCoffeeIndex = state.findIndex(
        (coffeCartElement) =>
          coffeCartElement.coffee.id === action.payload.newCoffee.id,
      )

      if (currentCoffeeIndex < 0) return state

      return produce(state, (draft) => {
        draft = draft.filter(
          (cartCoffee) => cartCoffee.coffee.id !== action.payload.newCoffee.id,
        )
      })
    }
    case ActionTypes.CLEAN_COFFEE_CART: {
      return produce(state, (draft) => {
        draft = []
      })
    }
    default:
      return state
  }
}
