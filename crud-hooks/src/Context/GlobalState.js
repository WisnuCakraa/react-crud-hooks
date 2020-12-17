import React, { createContext, useReducer } from 'react'

import AppReducer from './AppReducer'

const initialState = {
  users : []
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const deleteUser = (id) => {
    dispatch({
      type: 'DELETE_USER',
      payload: id
    })
  }

  const addUser = (user) => {
    dispatch({
      type: 'ADD_USER',
      payload: user
    })
  }

  const editUser = (user) => {
    dispatch({
      type: 'EDIT_USER',
      payload : user 
    })
  }

  return(
    <GlobalContext.Provider value={{
      users: state.users,
      deleteUser,
      addUser,
      editUser
    }}>
      {children}
    </GlobalContext.Provider>
  )
}