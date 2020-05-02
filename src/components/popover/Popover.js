import React, { useState, useEffect } from 'react'
import { useStateValue } from '../../state'
import Div100vh from 'react-div-100vh'
import firebase, { auth } from "../../utils/firebase"

const Popover = props => {
    const [{ popover, drafts, user, animations }, dispatch] = useStateValue()
    const [animation, setAnimation] = useState('animate--fade-in')
    const [confirmText, setConfirmText] = useState('')

    const handleLogOut = () => {
        auth.signOut()
            .then(() => {
                const u = {}
                dispatch({
                    type: 'user',
                    payload: {
                        ...u,
                        isAuthenticated: false
                    }
                })

                dispatch({
                    type: 'drafts',
                    payload: []
                })
                closePopover()
            })
    }

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

    const handleDeleteAllDrafts = () => {

        dispatch({
            type: 'drafts',
            payload: []
        })

        try {
            firebase
                .database()
                .ref(`/users/${user.uid}`)
                .child("drafts")
                .set([])

            closePopover()
        } catch (e) {
            console.error(e)
        }
    }

    const handleDeleteAccount = async () => {
        const user = firebase.auth().currentUser
        console.log(`deleting ${user.uid}`)

        try {
            firebase
                .database()
                .ref(`/users`)
                .child(user.uid)
                .remove()
            await user.delete()
            handleLogOut()
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

    const confirmButtonFunction = () => {
        const { type, index } = popover
        if (type === 'draft_delete') {
            return handleDeleteDraft(index)
        }
        if (type === 'draft_delete_all') {
            return handleDeleteAllDrafts()
        }
        if (type === 'account_delete') {
            return handleDeleteAccount()
        }

        if (type === 'log_out') {
            return handleLogOut()
        }

    }

    useEffect(() => {
        const body = document.querySelector('body')
        if (popover.toggle) {
            body.style.overflow = 'hidden'
            const { type } = popover
            if (type === 'draft_delete') setConfirmText('delete this draft')
            if (type === 'log_out') setConfirmText('log out')
            if (type === 'draft_delete_all') setConfirmText('delete your drafts')
            if (type === 'account_delete') setConfirmText('delete your account')
        } else {
            body.style.overflow = ''
        }
    }, [popover.toggle])

    if (popover.toggle) {
        return (
            <Div100vh className={`popover ${animation}`}>
                <div className='popover__inner'>
                    <p className='text text--medium text--bold text--center'>Are you sure you want to {confirmText}?</p>
                    <div className='popover__row'>
                        <button onClick={closePopover} className='popover__btn popover__btn--confirm'>Cancel</button>
                        <button onClick={confirmButtonFunction} className='popover__btn'>
                            {popover.button_text}
                        </button>
                    </div>
                </div>
            </Div100vh>
        )
    } else {
        return null
    }
}

export default Popover