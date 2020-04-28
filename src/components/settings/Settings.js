import React from 'react'
import { useStateValue } from '../../state'

const Settings = () => {
    const [{ user, drafts, animations, settings, popover }, dispatch] = useStateValue()

    const toggleSettings = () => {
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
            <div className={`settings ${animations.overlay} ${popover.toggle ? 'blur' : ''}`}>
                <div className="header--overlay">
                    <div className='header__avatar'>
                        <img alt='Avatar' src={user.avatar} />
                    </div>
                    <button className='overlay__cancel' onClick={toggleSettings}>
                        <img src='/close.svg' alt='Close Settings' />
                    </button>
                </div>
                <h2 className='text text--large text--slim'>Settings</h2>
                <ul className='settings__list'>
                    <li>
                        <p className='text text--medium text--slim'>Drafts(#)</p>
                        <p className='settings__drafts text text--medium text--slim text--bold'>{drafts.length}</p>
                    </li>
                    <li>
                        <p className='text text--medium text--slim'>Log out</p>
                        <button onClick={() => toggleConfirmPopover('log_out', 'Logout')} className='popover__btn'>
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
                        <button onClick={() => toggleConfirmPopover('account_delete', 'Delete')} className='popover__btn'>
                            Delete
                        </button>
                    </li>
                </ul>
            </div>
        )
    } else {
        return null
    }
}

export default Settings