import React, { useState, useEffect } from 'react'
import { useStateValue } from '../../state'
import firebase from "../../utils/firebase"

const Popover = () => {
    const [{ popover, drafts, user }, dispatch] = useStateValue()
    const [animation, setAnimation] = useState('animate--fade-in')

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
        setAnimation('animate--fade-out')
        dispatch({
            type: 'popover',
            payload: {
                toggle: false,
                index: null
            }
        })
        setTimeout(() => {
            setAnimation('animate--fade-in')
        }, 200)
    }

    if (popover.toggle) {
        return (
            <div className={`popover ${animation}`}>
                <div className='popover__inner'>
                    <p className='text text--medium text--bold'>Are you sure?</p>
                    <div className='popover__row'>
                        <button onClick={handleDeleteDraft} className='popover__btn popover__btn--confirm'>Delete</button>
                        <button onClick={closePopover} className='popover__btn'>Cancel</button>
                    </div>
                </div>
            </div>
        )
    } else {
        return null
    }
}

export default Popover