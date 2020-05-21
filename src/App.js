import React, { useState, useEffect } from "react"
import Loader from "./components/loader"
import Login from "./components/login/Login"
import { useStateValue } from './state'
import Popover from './components/popover/Popover'
import Home from "./components/home/Home"
import "./App.scss"

function App() {
  const [{ popover, modify, settings, drafts, isLoading, user }, dispatch] = useStateValue()
  const [scroll, setScroll] = useState('')

  useEffect(() => {
    const local = localStorage.getItem('isAuthenticated')
    if (popover.toggle || modify.new_draft || modify.edit_draft[0] || settings.toggle || isLoading) {
      setScroll('no-scroll')
    } else {
      setScroll('')
    }

    if (local && local === true) {
      dispatch({
        type: 'user',
        payload: {
          ...user,
          isAuthenticated: true
        }
      })
    } else {
      console.log(local)
    }
  }, [popover.toggle || modify.new_draft || modify.edit_draft[0] || settings.toggle])

  return (
    <div className={`app ${scroll}`}>
      <main className={`app__wrapper ${scroll}`}>
        <div style={drafts.length > 0 ? null : { height: '100%' }} className={`app__inner ${scroll}`}>
          <Loader />
          <Login scroll={scroll} />
          <Home />
        </div>
        <Popover />
      </main>
    </div>
  )
}

export default App
