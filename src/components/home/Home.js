import React from 'react'
import { useStateValue } from '../../state'
import Header from '../header/Header'
import Drafts from '../drafts/Drafts'
import GoalBar from '../goal-bar'
import Controls from '../controls/Controls'
import Modify from '../modify/Modify'
import LogOut from '../logout/Logout'

const Home = () => {
    const [{ user }] = useStateValue()

    if (user.isAuthenticated) {
        return (
            <>
                <Header />
                <Drafts />
                <Modify />
                <LogOut />
            </>
        )
    } else {
        return null
    }
}

export default Home


//   detectKeyDown = e => {
//     switch( e.key ) {
//       case ']':
//         this.toggleAddCalories()
//         break
//       case '[':
//         this.toggleSubtractCalories()
//         break
//       case 'Escape':
//         this.setState({
//           toggle_add: false,
//           toggle_subtract: false,
//           toggle_logout: false,
//           toggle_change_goal: false
//         })
//         break
//       case 'g':
//         this.toggleChangeGoal()
//         break
//       default:
//         break
//     }
//   }