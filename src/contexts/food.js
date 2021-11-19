import React, { createContext, useContext, useReducer } from 'react';
import { food } from 'mocks/food';

const FoodContext = createContext();

const initialState = {
	allFood: food
};


function foodReducer(state, action) {
  switch (action.type) {
    case 'addFood': {
      return { ...state, allFood: [...state.allFood, action.payload]};
    }
    case 'removeFood': {
		  return {...state, allFood: state.allFood.filter(food => food.id !== action.payload)}
	  }
    case 'updateFood': {
      return {...state, allFood: state.allFood.map(food => food.id !== action.payload.id ? food : action.payload)}
    }
  }
}

function FoodProvider({ children }) {
  const [state, dispatch] = useReducer(foodReducer, initialState);
  const value = { state, dispatch };
  return <FoodContext.Provider value={value}>{children}</FoodContext.Provider>;
}

function useFoodContext() {
  const context = useContext(FoodContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return context;
}

export { FoodProvider, useFoodContext };
