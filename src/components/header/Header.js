import React from "react"
import moment from "moment"
import { useStateValue } from "../../state"

const Header = () => {
  const [{ user }, dispatch] = useStateValue(),
    date = moment().format("dddd, MMMM DD YYYY")
  if (user.isAuthenticated) {
    return (
      <header className="app__header">
        {/* <div className="app__date">{date}</div> */}

        <div className='app__header-avatar'><img alt='Avatar' src={user.avatar} /></div>

        <h2 className='header__username'>{user.username}</h2>

        <button
          className="app__header-button"
          onClick={() => dispatch({ type: "toggleModal", payload: true })}
        >
          <div className="app__header--logout" />
        </button>
      </header>
    )
  } else {
    return (
      <header className="app__header app__header--login">
        <div className='header__logo' />
        <h1 style={{ margin: "0 0 3px 0" }}>twotter</h1>
      </header>
    )
  }
}

export default Header
