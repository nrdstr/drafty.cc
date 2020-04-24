import React, { createContext, useContext, useReducer } from "react"

export const StateContext = createContext()

export const initialState = {
  user: {
    isAuthenticated: false,
    uid: null,
    username: null,
    avatar: null,
    drafts: [],
    screen_name: null
  },
  twit: {},
  modify: {
    new_draft: false,
    edit_draft: [false, null]
  },
  isModalActive: false,
  isLoading: false
}

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext)
