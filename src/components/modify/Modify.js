import React, { useState, useRef, useEffect } from "react"
import { useStateValue } from "../../state"
import firebase from "firebase"

const Modify = () => {
  const [disabled, setDisabled] = useState(true),
    [error, setError] = useState(false),
    [text, setText] = useState(''),
    [original, setOriginal] = useState(''),
    [copyStatus, setCopyStatus] = useState('Copy'),
    [charCount, setCharCount] = useState(0),
    [{ user, modify, drafts, animations }, dispatch] = useStateValue(),
    inputRef = useRef(null)

  const handleSubmitNewDraft = e => {
    e.preventDefault()
    const d = drafts
    console.log(d)
    d.push(text)
    dispatch({
      type: 'drafts',
      payload: d
    })

    try {
      firebase
        .database()
        .ref(`/users/${user.uid}`)
        .child("drafts")
        .update(d)

      inputRef.current.value = ''
      toggleModify("new_draft")
    } catch (e) {
      console.error(e)
    }
  }

  const handleSubmitEditDraft = e => {
    e.preventDefault()

    try {
      firebase
        .database()
        .ref(`/users/${user.uid}`)
        .child("drafts")
        .update(drafts)

      closeEditModal(false)
    } catch (e) {
      console.error(e)
    }
  }

  const handleTextInput = e => {
    const text = e.target.value
    setText(text)
    setCharCount(text.length)
    if (text.length > 0) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }

  const handleCopyText = e => {
    e.preventDefault()
    inputRef.current.select()
    document.execCommand('copy')
    setCopyStatus(<img className='modify__button--tick' src="/tick.svg" />)
    e.target.focus()

    setTimeout(() => {
      setCopyStatus('Copy')
    }, 1500)
  }

  const handleComposeNewTweet = e => {
    e.preventDefault()
    const encodedText = encodeURI(text)
    const url = `https://twitter.com/intent/tweet?text=${encodedText}`
    window.open(url, '_blank')
  }

  const handleEditDraftInput = e => {
    const text = e.target.value
    let d = drafts
    d[modify.edit_draft[1]] = text
    dispatch({
      type: 'drafts',
      payload: drafts
    })
  }

  const toggleModify = operation => {
    dispatch({
      type: 'animations',
      payload: {
        ...animations,
        overlay: 'animate--fade-out'
      }
    })
    setTimeout(() => {
      dispatch({ type: "modify", payload: { ...modify, [operation]: false } })
    }, 200)
  }

  const closeEditModal = cancel => {
    let d = drafts
    if (cancel) {
      d[modify.edit_draft[1]] = original
      dispatch({
        type: 'drafts',
        payload: drafts
      })
    }
    dispatch({
      type: 'animations',
      payload: {
        ...animations,
        overlay: 'animate--fade-out'
      }
    })
    setTimeout(() => {
      dispatch({ type: 'modify', payload: { ...modify, edit_draft: [false, null] } })
    }, 200)
  }

  useEffect(() => {
    if (modify.edit_draft[0]) {
      setOriginal(drafts[modify.edit_draft[1]])
      setDisabled(false)
      setCharCount(drafts[modify.edit_draft[1]].length)
    }
  }, [modify.edit_draft, original, drafts])

  if (modify.new_draft) {
    return (
      <div className={`modify__container modify--open ${animations.overlay}`}>
        <div className="logout__top-bar">
          <div className='app__header-avatar'>
            <img alt='Avatar' src={user.avatar} />
          </div>
          <button className='overlay__cancel' onClick={() => toggleModify('new_draft')}>
            <img src='/close.svg' alt='Close this page' />
          </button>
        </div>
        <form>
          <textarea
            type="text"
            placeholder="What's your idea?"
            className="modify__input"
            onChange={handleTextInput}
            ref={inputRef}
            style={error ? { borderBottom: "2px solid red" } : null}
          />
          <div className='modify__controls'>
            <div className='modify__char-count'>
              <p className='text text--small text--light text--slim'>{charCount}</p>
            </div>
            <button
              className="modify__button"
              onClick={handleCopyText}
              disabled={disabled || error}
            >
              {copyStatus}
            </button>
            <button
              className="modify__button"
              onClick={handleComposeNewTweet}
              disabled={disabled || error}
            >
              Tweet
            </button>
            <button
              className="modify__button modify__button--save"
              onClick={handleSubmitNewDraft}
              disabled={disabled || error}
            >
              Save
            </button>
          </div>

          {/* Error Section */}
          <p className={error ? "modify__error" : "hidden"}>
            Something's gone wrong. You may want to try refreshing the page. Copy your text to be safe!
          </p>
        </form>
      </div>
    )
  } else if (modify.edit_draft[0]) {
    return (
      <div className={`modify__container modify--open ${animations.overlay}`}>
        <div className="logout__top-bar">
          <div className='app__header-avatar'>
            <img alt='Avatar' src={user.avatar} />
          </div>
          <button className='overlay__cancel' onClick={() => closeEditModal(true)}>
            <img src='/close.svg' alt='Close this page' />
          </button>
        </div>
        <form>
          <textarea
            type="text"
            placeholder="Have an idea?"
            className="modify__input"
            onChange={handleEditDraftInput}
            value={drafts[modify.edit_draft[1]]}
            ref={inputRef}
            style={error ? { borderBottom: "2px solid red" } : null}
          />
          <div className='modify__controls'>
            <div className='modify__char-count'>
              <p className='text text--small text--light text--slim'>{charCount}</p>
            </div>
            <button
              className="modify__button"
              onClick={handleCopyText}
              disabled={disabled || error}
            >
              {copyStatus}
            </button>
            <button
              className="modify__button"
              onClick={handleComposeNewTweet}
              disabled={disabled || error}
            >
              Tweet
            </button>
            <button
              className="modify__button modify__button--save"
              onClick={handleSubmitEditDraft}
              disabled={disabled || error}
            >
              Save
            </button>
          </div>
          {/* Error Section */}
          <p className={error ? "modify__error" : "hidden"}>
            {modify.add
              ? "You can't add negative calories, try subtracting instead."
              : "You can't subtract negatives or more calories than you have eaten."}
          </p>
        </form>
      </div>
    )
  } else {
    return null
  }
}

export default Modify
