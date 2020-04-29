import React from 'react'
import { useStateValue } from '../../state'

const Draft = props => {
    const [{ animations }] = useStateValue()
    const draft = props.draft
    return (
        <div className={`draft ${animations.draft_delete}`}>
            <div onClick={() => props.handleEditDraft(props.index)} className='draft__clickable-wrapper'>
                <p className='draft__text'>
                    {draft.text}
                </p>
            </div>
            <button className='draft__delete' onClick={() => props.handleDeleteDraft(props.index)}>
                <img src='/icons/trash.svg' alt='Delete this draft' />
            </button>
        </div>
    )
}

export default Draft