import React, { useState, useEffect } from 'react'
import { useStateValue } from '../../state'
import firebase from "../../utils/firebase"

const Popover = () => {
    const [{ popover, drafts, user }, dispatch] = useStateValue()

    const handleDeleteDraft = () => {
        let d = drafts
        d.splice(popover.index, 1)
        dispatch({
            type: 'drafts',
            payload: d
        })

        try {
            firebase
                .database()
                .ref(`/users/${user.uid}`)
                .child("drafts")
                .set(d)

            closePopover()
        } catch (e) {
            console.error(e)
        }
    }

    const closePopover = () => {
        dispatch({
            type: 'popover',
            payload: {
                toggle: false,
                index: null
            }
        })
    }

    if (popover.toggle) {
        return (
            <div className={`popover animate--fade-in`}>
                <div className='popover__inner'>
                    <p className='text text--medium text--bold'>Are you sure?</p>
                    <div className='popover__row'>
                        <button onClick={closePopover} className='popover__btn'>Cancel</button>
                        <button onClick={handleDeleteDraft} className='popover__btn popover__btn--confirm'>Yes</button>
                    </div>
                </div>
            </div>
        )
    } else {
        return null
    }
}

export default Popover