import React from 'react'
import { useStateValue } from '../../state'
import Header from '../header/Header'
import Drafts from '../drafts/Drafts'
import Modify from '../modify/Modify'
import Settings from '../settings/Settings'
import LogOut from '../logout/Logout'

const Home = () => {
    const [{ user }] = useStateValue()

    if (user.isAuthenticated) {
        return (
            <>
                <Header />
                <Drafts />
                <Modify />
                <Settings />
                <LogOut />
            </>
        )
    } else {
        return null
    }
}

export default Home