import React from 'react'
import { useStateValue } from '../../state'

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
    }

    const toggleLogout = () => dispatch({ type: "toggleLogout", payload: true })

    return <div className='controls'>
        <button className='controls__button' onClick={() => toggleModify('new_draft')}>
            <img src='/add.svg' alt='Create new draft' />
        </button>
        <button
            className="app__header-button"
            onClick={toggleLogout}
        >
            <div className="app__header--logout" />
        </button>
    </div>
}

export default Controls