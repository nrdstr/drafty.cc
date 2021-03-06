import React, { useEffect } from "react"
import { useStateValue } from "../../state"
import firebase from "../../utils/firebase"
import Draft from './Draft'

const Drafts = () => {
  const [
    {
      user,
      modify,
      drafts,
      show_drafts,
      isLoading,
      animations,
      popover
    },
    dispatch] = useStateValue()

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
            if (data.drafts && data.drafts.length > 0) {
              dispatch({
                type: 'drafts',
                payload: data.drafts
              })
            }

            dispatch({
              type: 'user',
              payload: {
                ...user,
                avatar: data.avatar
              }
            })

            dispatch({
              type: 'toggleLoader',
              payload: false
            })

          } else {
            const userData = {
              twitterID: user.twitterID,
              uid: user.uid
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
    dispatch({ type: 'show_drafts', payload: false })
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
        type: 'draft_delete',
        index: index,
        button_text: 'Delete'
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
    dispatch({ type: 'show_drafts', payload: false })
  }

  const detectKeyDown = e => {
    if (e.key === '=') {
      setTimeout(() => {
        toggleModify()
      }, 100)
    }
  }

  useEffect(() => {
    getExistingUserData()
    document.addEventListener('keypress', e => detectKeyDown(e))
    document.querySelector('body').style.background = '#171f2a'
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const renderDraft = (draft, i) =>
    <Draft key={i}
      draft={draft}
      index={i}
      handleEditDraft={handleEditDraft}
      handleDeleteDraft={handleDeleteDraft} />

  if (!isLoading) {
    if (user.isAuthenticated) {
      if (drafts && drafts.length) {
        return (
          <div className={`drafts__container ${show_drafts ? 'animate--fade-in' : 'hide'} ${popover.toggle ? 'blur no-scroll' : ''}`}>
            <div className={`drafts animate--fade-in`}>
              {drafts.map((draft, i) => renderDraft(draft, i))}
              <div style={{ paddingTop: 10, paddingBottom: 10 }} className='placeholder'>
                <button style={{ marginTop: 20, marginBottom: 20 }} onClick={toggleModify} className='placeholder__button button__draft'>
                  <span className='btn__inner'>
                    <span className='icon fas btn-text-one text--slim'>Add new draft</span>
                    <span className='icon fas btn-text-two' />
                  </span>
                </button>
                <div className='placeholder__logo' />
              </div>

            </div>
            <button className='drafts__add-mobile' onClick={toggleModify}>
              <img src='/icons/close.svg' alt='Create new draft' />
            </button>
          </div>
        )
      } else {
        return (
          <div className='drafts__container drafts__container--placeholder animate--fade-in'>
            <div className='drafts placeholder'>
              <div className='placeholder__art' />

              <button onClick={toggleModify} className='placeholder__button'>
                <span className='btn__inner'>
                  <span className='icon fas btn-text-one text--slim'>Create a draft</span>
                  <span className='icon fas btn-text-two' />
                </span>
              </button>

            </div>
            <button style={popover.toggle ? { opacity: 0, borderRadius: 0 } : null} className='drafts__add-mobile' onClick={toggleModify}>
              <img src='/add.svg' alt='Create new draft' />
            </button>
          </div>
        )
      }
    } else {
      return null
    }
  } else {
    return null
  }
}

export default Drafts
