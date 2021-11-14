import React, { createContext, useContext, useReducer } from 'react';
import { users } from 'mocks/user';

const UserContext = createContext();

const initialState = {
  isAuthenticated: false,
  username: '',
  allUsers: users
};


function userReducer(state, action) {
  switch (action.type) {
    case 'login': {
      return { isAuthenticated: true, ...action.payload };
    }
    case 'logout': {
      return initialState;
    }
    case 'addUser': {
      return {...state, allUsers: [...state.allUsers, action.payload]}
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function UserProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const value = { state, dispatch };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

function useUserContext() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return context;
}

export { UserProvider, useUserContext };
