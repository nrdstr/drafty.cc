import React, { useEffect } from "react"
import { useStateValue } from "../../state"
import firebase from "../../utils/firebase"

const Drafts = () => {
  const [{ user, modify, twit }, dispatch] = useStateValue()

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
              payload: {
                ...user,
                data
              }
            })
            dispatch({
              type: 'toggleLoader',
              payload: false
            })
          } else {
            const userData = {
              ...user
            }
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

  const handleEditDraft = index => {
    const editArr = [true, index]
    dispatch({
      type: 'modify',
      payload: {
        ...modify,
        edit_draft: editArr
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

  const toggleModify = () =>
    dispatch({ type: 'modify', payload: { ...modify, new_draft: true } })

  useEffect(() => {
    getExistingUserData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (user.isAuthenticated) {
    console.log(twit)
    if (user.drafts && user.drafts.length > 0) {
      const drafts = user.drafts

      return (
        <div className='drafts__container animate--fade-in'>
          <div className='drafts'>
            {drafts.map((draft, i) => {
              return <div key={draft.slice(0, 10)} className='draft' onClick={() => handleEditDraft(i)}>
                <p className='draft__text'>{draft}</p>
                <button className='draft__delete' onClick={() => handleDeleteDraft(i)} />
              </div>
            })}
            <p className='text text--medium text--light text--slim'>the end</p>
          </div>
        </div>
      )
    } else {
      return (
        <div className='drafts__container animate--fade-in'>
          <div className='drafts placeholder'>
            <div className='placeholder__art' />

            <button onClick={toggleModify} className='placeholder__button'>
              <span className='btn__inner'>
                <span className='icon fas btn-text-one text--slim'>Create a draft</span>
                <span className='icon fas btn-text-two' />
              </span>
            </button>

            {/* <button onClick={toggleModify}>Add your first entry+</button> */}
          </div>
        </div>
      )
    }
  } else {
    return null
  }
}

export default Drafts
