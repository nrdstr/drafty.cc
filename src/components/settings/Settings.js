import React from 'react'
import { useStateValue } from '../../state'
import Div100vh from 'react-div-100vh'

const Settings = () => {
    const [{ user, drafts, animations, settings, popover }, dispatch] = useStateValue()

    const toggleSettings = () => {
        dispatch({ type: 'show_drafts', payload: true })
        dispatch({
            type: 'animations',
            payload: {
                ...animations,
                overlay: 'animate--fade-out'
            }
        })
        setTimeout(() => {
            dispatch({ type: 'settings', payload: { ...settings, toggle: false } })
        }, 200)
    }

    const toggleConfirmPopover = (type, text) =>
        dispatch({ type: 'popover', payload: { ...popover, toggle: true, type: type, button_text: text } })

    if (settings.toggle) {
        return (
            <Div100vh className={`settings ${animations.overlay} ${popover.toggle ? 'blur' : ''}`}>
                <div className="header--overlay">
                    <div className='header__avatar'>
                        <img alt='Avatar' src={user.avatar} />
                    </div>
                    <button className='overlay__cancel' onClick={toggleSettings}>
                        <img src='/close.svg' alt='Close Settings' />
                    </button>
                </div>
                {/* <h2 className='text text--large text--slim'>Settings</h2> */}
                <p style={{ margin: 0 }} className='text text--medium text--slim text--light'>{user.username}</p>
                <ul className='settings__list'>
                    <li>
                        <p className='text text--medium text--slim'>Drafts</p>
                        <p className='settings__drafts text text--medium text--slim text--bold'>{drafts.length}</p>
                    </li>
                    <li>
                        <p className='text text--medium text--slim'>Log out</p>
                        <button onClick={() => toggleConfirmPopover('log_out', 'Logout')} className='popover__btn popover__btn--confirm'>
                            Logout
                        </button>
                    </li>
                    <li>
                        <p className='text text--medium text--slim'>Delete all drafts</p>
                        <button onClick={() => toggleConfirmPopover('draft_delete_all', 'Delete')} className='popover__btn'>
                            Delete
                        </button>
                    </li>
                    <li>
                        <p className='text text--medium text--slim'>Delete my account</p>
                        <button style={{ marginRight: 16 }} onClick={() => toggleConfirmPopover('account_delete', 'Delete')} className='text text--medium text--red'>
                            Delete
                        </button>
                    </li>
                </ul>
            </Div100vh>
        )
    } else {
        return null
    }
}

export default Settings