import React from 'react'
import { useStateValue } from '../../state'
import Settings from '../settings/Settings'

const Controls = () => {
    const [{ modify, animations }, dispatch] = useStateValue()

    const toggleModify = operator => {
        dispatch({
            type: 'animations',
            payload: {
                ...animations,
                overlay: 'animate--fade-in'
            }
        })
        dispatch({ type: 'modify', payload: { ...modify, [operator]: true } })
        dispatch({ type: 'show_drafts', payload: false })
    }

    const toggleSettings = () => {
        dispatch({
            type: 'animations',
            payload: {
                ...animations,
                overlay: 'animate--fade-in'
            }
        })
        dispatch({ type: 'settings', payload: { ...Settings, toggle: true } })
        dispatch({ type: 'show_drafts', payload: false })
    }

    return (
        <div className='controls'>
            <button className='controls__button controls__button--add' onClick={() => toggleModify('new_draft')}>
                <img src='/icons/close.svg' alt='Create new draft' />
            </button>

            <button className='controls__button controls__button--settings' onClick={() => toggleSettings()}>
                <img src='/icons/settings.svg' alt='Settings' />
            </button>
        </div>
    )
}

export default Controls