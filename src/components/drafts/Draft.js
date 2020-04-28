import React from 'react'

const Draft = props => {
    const draft = props.draft
    return (
        <div className='draft'>
            <div onClick={() => props.handleEditDraft(props.index)} className='draft__clickable-wrapper'>
                <p className='draft__text'>
                    {draft.text}
                </p>
            </div>
            <button className='draft__delete' onClick={() => props.handleDeleteDraft(props.index)}>
                <img src='/trash.svg' alt='Delete this draft' />
            </button>
        </div>
    )
}

export default Draft