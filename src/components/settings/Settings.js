import React from 'react'
import { useStateValue } from '../../state'

const Settings = () => {
    const [{ user, drafts, animations }, dispatch] = useStateValue()

    return (
        <div className='settings'>
            <h2>Settings</h2>
        </div>
    )
}

export default Settings