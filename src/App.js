import React from "react"
import { StateProvider, initialState } from "./state"
import { rootReducer } from "./reducers"
import Loader from "./components/loader"
import Login from "./components/login/Login"
import Popover from './components/popover/Popover'
import Div100vh from "react-div-100vh"
import Home from "./components/home/Home"
import "./App.scss"

function App() {
  return (
    <StateProvider initialState={initialState} reducer={rootReducer}>
      <Div100vh className="app">
        <main className="app__wrapper">
          <div className='app__inner'>
            <Loader />
            <Login />
            <Home />
          </div>
          <Popover />
        </main>
      </Div100vh>
    </StateProvider>
  )
}

export default App
