import React from "react"
import moment from "moment"
import { useStateValue } from "../../state"
import Controls from '../controls/Controls'

const Header = () => {
  const [{ user }, dispatch] = useStateValue(),
    date = moment().format("dddd, MMMM DD YYYY")

  if (user.isAuthenticated) {
    return (
      <header className="app__header">
        <div className='header__user'>
          <div className='app__header-avatar'>
            <img alt='Avatar' src={user.avatar} />
          </div>
          {/* <h2 className='text text--medium text--light text--slim header__username'>{user.username}</h2> */}
        </div>
        <div className='header__logo' />
        <Controls />
      </header>
    )
  } else {
    return (
      <header className="app__header app__header--login">
        <div className='header__logo header__logo--login' />
        <h1 className='text text--large text--bold text--narrow' style={{ margin: "0 0 3px 0" }}>twotter</h1>
      </header>
    )
  }
}

export default Header
