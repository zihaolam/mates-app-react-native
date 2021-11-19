import React, { createContext, useContext, useReducer } from "react";
import { todos } from "mocks/todo";

const TodoContext = createContext();

const initialState = {
  allTodos: todos,
};

function todoReducer(state, action) {
  switch (action.type) {
    case "addTodo": {
      return { ...state, allTodos: [...state.allTodos, action.payload] };
    }
    case "removeTodo": {
      return {
        ...state,
        allTodos: state.filter((todo) => todo.id !== action.payload),
      };
    }
  }
}

function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const value = { state, dispatch };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

function useTodoContext() {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
}

export { TodoProvider, useTodoContext };
