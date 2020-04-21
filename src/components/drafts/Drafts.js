import React, { useEffect } from "react"
import { useStateValue } from "../../state"
import firebase from "../../utils/firebase"

const Drafts = () => {
  const [{ user }, dispatch] = useStateValue()

  const getExistingUserData = () => {
    dispatch({
      type: 'toggleLoader',
      payload: true
    })
    firebase.database()
      .ref('/users/' + user.uid)
      .once('value')
      .then(snapshot => {
        try {
          const data = snapshot.val()
          if (data) {
            console.log('detected DB object', data)
            // console.log(user)
            dispatch({
              type: "user",
              payload: data
            })
            dispatch({
              type: 'toggleLoader',
              payload: false
            })
          } else {
            const userData = {
              ...user
            }
            console.log(userData)
            firebase.database()
              .ref(`/users/${user.uid}/`)
              .set(JSON.parse(JSON.stringify(userData)))
            dispatch({
              type: 'toggleLoader',
              payload: false
            })
          }
        }
        catch (e) {
          console.error(e)
        }
      })
  }

  const handleDeleteDraft = index => {
    let d = user.drafts
    d.splice(index, 1)
    console.log(index, d)
    dispatch({
      type: 'user',
      payload: {
        ...user,
        drafts: d
      }
    })

    try {
      firebase
        .database()
        .ref(`/users/${user.uid}`)
        .child("drafts")
        .set(d)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    getExistingUserData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (user.isAuthenticated) {
    if (user.drafts.length > 0) {
      const drafts = user.drafts

      return (
        <div className='calories__container animate--fade-in'>
          <div className='drafts'>
            {drafts.map((draft, i) => {
              return <div key={draft.slice(0, 10)} className='draft'>
                <p>{draft}</p>
                <button className='draft__delete' onClick={() => handleDeleteDraft(i)} />
              </div>
            })}
          </div>
        </div>
      )
    } else {
      return (
        <div className='calories__container animate--fade-in'>
          <p className='calories__text'>
            This is where drafts will go!
          </p>
          <button>Add your first entry+</button>
        </div>
      )
    }
  } else {
    return null
  }
}

export default Drafts
