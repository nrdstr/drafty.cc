import React from 'react'
import { useStateValue } from '../../state'

const Controls = () => {
    const [{ modify }, dispatch] = useStateValue()

    const toggleModify = operator =>
        dispatch({ type: 'modify', payload: { ...modify, [operator]: true } })

    return <div className='controls'>
        <button className='controls__button' onClick={() => toggleModify('new_draft')}>
            <img src='/add.svg' alt='Create new draft' />
        </button>
        <button
            className="app__header-button"
            onClick={() => dispatch({ type: "toggleModal", payload: true })}
        >
            <div className="app__header--logout" />
        </button>
    </div>
}

export default Controls