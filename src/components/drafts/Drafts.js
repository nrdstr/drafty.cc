import React, { useState, useEffect } from "react"
import { useStateValue } from "../../state"
import firebase from "../../utils/firebase"

const Drafts = () => {
  const [{ user, modify, drafts, animations, popover }, dispatch] = useStateValue()

  // const [drafts, setDrafts] = useState([])

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
            // console.log('detected DB object', data)
            if (data.drafts && data.drafts.length > 0) {
              dispatch({
                type: 'drafts',
                payload: data.drafts
              })
            }
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
      type: 'animations',
      payload: {
        ...animations,
        overlay: 'animate--fade-in'
      }
    })
    dispatch({
      type: 'modify',
      payload: {
        ...modify,
        edit_draft: editArr
      }
    })
  }

  const handleDeleteDraft = index => {
    dispatch({
      type: 'modify',
      payload: {
        ...modify,
        edit_draft: [false, index]
      }
    })
    dispatch({
      type: 'popover',
      payload: {
        toggle: true,
        index: index
      }
    })

  }

  const toggleModify = () => {
    dispatch({ type: 'modify', payload: { ...modify, new_draft: true } })
    dispatch({
      type: 'animations',
      payload: {
        ...animations,
        overlay: 'animate--fade-in'
      }
    })
  }

  useEffect(() => {
    getExistingUserData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const renderDraft = (draft, i) => {
    return <div key={draft.text.slice(0, 10)} onClick={() => handleEditDraft(i)} className='draft'>
      <p className='draft__text'>
        {draft.text}
      </p>
      <button className='draft__delete' onClick={() => handleDeleteDraft(i)}>
        <img src='/trash.svg' alt='Delete this draft' />
      </button>
    </div>
  }

  if (user.isAuthenticated) {
    if (drafts && drafts.length) {
      const d = drafts
      return (
        <div className={`drafts__container animate--fade-in ${popover.toggle && 'blur'}`}>
          <div className='drafts animate--fade-in'>
            {d.map((draft, i) => renderDraft(draft, i))}
            <div style={{ marginTop: 10 }} className='placeholder'>
              <button style={{ marginTop: 20 }} onClick={toggleModify} className='placeholder__button'>
                <span className='btn__inner'>
                  <span className='icon fas btn-text-one text--slim'>Add new draft</span>
                  <span className='icon fas btn-text-two' />
                </span>
              </button>
            </div>

            {/* <p className='text text--medium text--light text--slim'>the end</p> */}
          </div>
          <button className='drafts__add-mobile' onClick={toggleModify}>
            <img src='/add.svg' alt='Create new draft' />
          </button>
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

          </div>
          <button className='drafts__add-mobile' onClick={toggleModify}>
            <img src='/add.svg' alt='Create new draft' />
          </button>
        </div>
      )
    }
  } else {
    return null
  }
}

export default Drafts
