import { CartCoffeeElement, CoffeeInterface } from '../../@types/CoffeeTypes'

export enum ActionTypes {
  ADD_NEW_COFFEE = 'ADD_NEW_COFFEE',
  ADD_COFFEE_QTD = 'ADD_COFFEE_QTD',
  SET_COFFEE_QTD = 'SET_COFFEE_QTD',
  DELETE_COFFEE = 'DELETE_COFFEE',
  CLEAN_COFFEE_CART = 'CLEAN_COFFEE_CART',
}

export function addNewCoffeeAction(newCoffee: CartCoffeeElement) {
  return {
    type: ActionTypes.ADD_NEW_COFFEE,
    payload: {
      newCoffee,
    },
  }
}

export function addCoffeeQtdAction(cartCoffee: CartCoffeeElement) {
  return {
    type: ActionTypes.ADD_COFFEE_QTD,
    payload: {
      cartCoffee,
    },
  }
}

export function setCoffeeQtdAction(cartCoffee: CartCoffeeElement) {
  return {
    type: ActionTypes.SET_COFFEE_QTD,
    payload: {
      cartCoffee,
    },
  }
}

export function deleteCoffeeAction(coffee: CoffeeInterface) {
  return {
    type: ActionTypes.DELETE_COFFEE,
    payload: {
      coffee,
    },
  }
}

export function cleanCoffeeCartAction() {
  return {
    type: ActionTypes.CLEAN_COFFEE_CART,
  }
}
