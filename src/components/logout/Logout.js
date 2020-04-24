import React from 'react'
import Footer from '../footer/Footer'
import { useStateValue } from '../../state'
import { auth } from '../../utils/firebase'

const LogOut = props => {
  const [{ user, toggleLogout, animations }, dispatch] = useStateValue()

  const toggleModal = () => {
    dispatch({
      type: 'animations',
      payload: {
        ...animations,
        overlay: 'animate--fade-out'
      }
    })
    setTimeout(() => {
      dispatch({ type: 'toggleLogout', payload: false })
    }, 200)
  }

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

  const showLogout = toggleLogout ? `logout__container ${animations.overlay}` : `hidden ${animations.overlay}`
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
