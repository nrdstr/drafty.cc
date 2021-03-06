import React, { createContext, useContext, useReducer } from "react"

export const StateContext = createContext()

export const initialState = {
  user: {
    isAuthenticated: false,
    uid: null,
    username: null,
    avatar: null,
  },
  show_drafts: true,
  drafts: [],
  twit: {},
  modify: {
    new_draft: false,
    edit_draft: [false, null]
  },
  animations: {
    overlay: 'animate--fade-in',
    loader_out: false,
    draft_delete: ''
  },
  popover: {
    toggle: false,
    type: '',
    index: null,
    buttonText: ''
  },
  settings: {
    toggle: false
  },
  toggleLogout: false,
  isLoading: true
}

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext)
