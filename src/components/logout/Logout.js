import React from 'react'
import Footer from '../footer/Footer'
import { useStateValue } from '../../state'
import { auth } from '../../utils/firebase'

const LogOut = props => {
  const [{ user, isModalActive }, dispatch] = useStateValue()

  const toggleModal = () => dispatch({ type: 'toggleModal', payload: false })

  const handleLogOut = () => {
    auth.signOut()
      .then(() => {
        dispatch({
          type: 'user',
          payload: {
            ...user,
            isAuthenticated: false
          }
        })
        toggleModal()
      })
  }

  const showLogout = isModalActive ? 'logout__container' : 'hidden'
  return (
    <div className={showLogout}>
      <div className='logout__top-bar'>
        <div className='app__header-avatar'>
          <img alt='Avatar' src={user.avatar} />
        </div>
        <button className='overlay__cancel' onClick={toggleModal}>
          <img src='/close.svg' alt='Close this page' />
        </button>
      </div>
      <div className='logout'>
        <p className='text text--medium text--slim'>Are you sure?</p>
        <button className='logout__button'
          onClick={handleLogOut}
          title='Log Out'>
          Log Out
        </button>
      </div>
      <Footer />
    </div>
  )
}

export default LogOut
