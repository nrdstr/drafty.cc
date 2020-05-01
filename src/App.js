import React, { useState, useEffect } from "react"
import Loader from "./components/loader"
import Login from "./components/login/Login"
import { useStateValue } from './state'
import Popover from './components/popover/Popover'
import Home from "./components/home/Home"
import "./App.scss"

function App() {
  const [{ popover, modify, settings }] = useStateValue()
  const [scroll, setScroll] = useState('')

  useEffect(() => {
    if (popover.toggle || modify.new_draft || modify.edit_draft[0] || settings.toggle) {
      setScroll('no-scroll')
    } else {
      setScroll('')
    }
  }, [popover.toggle || modify.new_draft || modify.edit_draft[0] || settings.toggle])

  return (
    <div className={`app ${scroll}`}>
      <main className={`app__wrapper ${scroll}`}>
        <div className={`app__inner ${scroll}`}>
          <Loader />
          <Login />
          <Home />
        </div>
        <Popover />
      </main>
    </div>
  )
}

export default App
