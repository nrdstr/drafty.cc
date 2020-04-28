import React from "react"
import moment from "moment"
import { useStateValue } from "../../state"
import Controls from '../controls/Controls'

const Header = () => {
  const [{ user, popover }] = useStateValue()

  if (user.isAuthenticated) {
    return (
      <header className={`header ${popover.toggle ? 'blur' : ''}`}>
        <div className='header__user'>
          <div className='header__avatar'>
            <img alt='Avatar' src={user.avatar} />
          </div>
        </div>
        <div className='header__logo' />
        <Controls />
      </header>
    )
  } else {
    return (
      <header className="header header--login">
        <div className='header__logo header__logo--login' />
        <h1 className='text text--large text--bold text--narrow' style={{ margin: "0 0 3px 0" }}>twotter</h1>
      </header>
    )
  }
}

export default Header
