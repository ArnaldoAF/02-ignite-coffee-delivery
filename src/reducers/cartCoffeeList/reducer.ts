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
      console.log('ActionTypes.ADD_COFFEE_QTD')
      const currentCoffeeIndex = state.findIndex(
        (coffeCartElement) =>
          coffeCartElement.coffee.id === action.payload.cartCoffee.coffee.id,
      )

      if (currentCoffeeIndex < 0) return state

      return produce(state, (draft) => {
        draft[currentCoffeeIndex].qtd =
          draft[currentCoffeeIndex].qtd + action.payload.cartCoffee.qtd
      })
    }
    case ActionTypes.SET_COFFEE_QTD: {
      const currentCoffeeIndex = state.findIndex(
        (coffeCartElement) =>
          coffeCartElement.coffee.id === action.payload.cartCoffee.coffee.id,
      )

      if (currentCoffeeIndex < 0) return state

      return produce(state, (draft) => {
        draft[currentCoffeeIndex].qtd = action.payload.cartCoffee.qtd
      })
    }
    case ActionTypes.DELETE_COFFEE: {
      const currentCoffeeIndex = state.findIndex(
        (coffeCartElement) =>
          coffeCartElement.coffee.id === action.payload.coffee.id,
      )

      if (currentCoffeeIndex < 0) return state

      return produce(state, (draft) => {
        draft.splice(
          draft.findIndex(
            (cartCoffee) => cartCoffee.coffee.id === action.payload.coffee.id,
          ),
          1,
        )
      })
    }
    case ActionTypes.CLEAN_COFFEE_CART: {
      return produce(state, (draft) => {
        draft.length = 0
      })
    }
    default:
      return state
  }
}
