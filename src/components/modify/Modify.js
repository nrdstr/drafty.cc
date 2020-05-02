import React, { useState, useRef, useEffect } from "react"
import { useStateValue } from "../../state"
import firebase from "firebase"
import Div100vh from 'react-div-100vh'
import moment from 'moment'
import ProgressRing from '../shared/progress-ring/ProgressRing'

const Modify = () => {
  const [disabled, setDisabled] = useState(true),
    [error, setError] = useState(false),
    [text, setText] = useState(''),
    [original, setOriginal] = useState(''),
    [copyStatus, setCopyStatus] = useState('Copy'),
    [charCount, setCharCount] = useState(0),
    [charProgress, setCharProgress] = useState(0),
    [{ user, modify, drafts, animations }, dispatch] = useStateValue(),
    inputRef = useRef(null)

  const handleSubmitNewDraft = e => {
    e.preventDefault()
    const d = drafts
    const data = {
      text: text,
      timestamp: moment().unix()
    }
    d.unshift(data)
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
      dispatch({ type: 'show_drafts', payload: true })
      toggleModify("new_draft")
    } catch (e) {
      setError(true)
      setDisabled(true)
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
      dispatch({ type: 'show_drafts', payload: true })
      closeEditModal(false)
    } catch (e) {
      setError(true)
      setDisabled(true)
      console.error(e)
    }
  }

  const handleTextInput = e => {
    const text = e.target.value
    setText(text)
    setCharCount(text.length)
    handleProgressRing(text.length)
    if (text.length > 0) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }

  const handleProgressRing = count =>
    setCharProgress(Math.floor((count / 280) * 100))

  const handleCopyText = e => {
    e.preventDefault()
    inputRef.current.select()
    document.execCommand('copy')
    setCopyStatus(<img className='modify__button--tick' alt='Text Copied' src="/icons/check.svg" />)
    inputRef.current.focus()
    inputRef.current.setSelectionRange(charCount, charCount)

    setTimeout(() => {
      setCopyStatus('Copy')
    }, 1500)
  }

  const handleComposeNewTweet = e => {
    e.preventDefault()
    const encodedText = encodeURI(text)
    const url = `https://twitter.com/intent/tweet?text=${encodedText}`
    window.open(url, '_blank')
    inputRef.current.focus()
    inputRef.current.setSelectionRange(charCount, charCount)
  }

  const handleEditDraftInput = e => {
    const text = e.target.value
    setText(text)
    let d = drafts
    d[modify.edit_draft[1]].text = text
    d[modify.edit_draft[1]].timestamp = moment().unix()
    dispatch({
      type: 'drafts',
      payload: drafts
    })
  }

  const toggleModify = operation => {
    dispatch({ type: 'show_drafts', payload: true })
    dispatch({
      type: 'animations',
      payload: {
        ...animations,
        overlay: 'animate--fade-out'
      }
    })
    setTimeout(() => {
      dispatch({ type: "modify", payload: { ...modify, [operation]: false } })
      setDisabled(true)
    }, 200)
  }

  const closeEditModal = cancel => {
    let d = drafts
    if (cancel) {
      d[modify.edit_draft[1]].text = original
      dispatch({
        type: 'drafts',
        payload: drafts
      })
    }
    dispatch({ type: 'show_drafts', payload: true })
    dispatch({
      type: 'animations',
      payload: {
        ...animations,
        overlay: 'animate--fade-out'
      }
    })
    setDisabled(true)
    setTimeout(() => {
      dispatch({ type: 'modify', payload: { ...modify, edit_draft: [false, null] } })
    }, 200)
  }

  useEffect(() => {
    const body = document.querySelector('body')
    setCharCount(0)
    handleProgressRing(0)
    if (modify.new_draft || modify.edit_draft[0]) {
      body.style.overflow = 'hidden'
      inputRef.current.focus()
      inputRef.current.setSelectionRange(charCount, charCount)
      if (modify.edit_draft[0]) {
        setOriginal(drafts[modify.edit_draft[1]].text)
        setText(drafts[modify.edit_draft[1]].text)
        setDisabled(false)
        setCharCount(drafts[modify.edit_draft[1]].text.length)
        handleProgressRing(drafts[modify.edit_draft[1]].text.length)
      }
    } else {
      body.style.overflow = ''
    }
  }, [modify.edit_draft, original, drafts, modify.new_draft])

  if (modify.new_draft) {
    return (
      <div className={`modify__container modify--open ${animations.overlay}`}>
        <div className="header--overlay">
          <div className='header__avatar'>
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
            maxLength={10000}
            onChange={handleTextInput}
            ref={inputRef}
            style={error ? { border: "2px solid red" } : null}
          />
          <p className={error ? "modify__error" : "hidden"}>
            Something's gone wrong. You may want to try refreshing the page.
          </p>
          <div className='modify__controls-container'>
            <div className='modify__timestamp'>
              <p style={{ opacity: 0 }} className='text text--tiny text--light text--slim'>
                <em>last modified</em>
              </p>
            </div>
            <div className='modify__controls'>
              <div className='modify__char-count'>
                <ProgressRing goal={280} progress={charProgress} count={charCount} />
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
          </div>
        </form>
      </div>
    )
  } else if (modify.edit_draft[0]) {
    const currDraft = drafts[modify.edit_draft[1]]
    const timestamp = moment.unix(currDraft.timestamp).fromNow()
    return (
      <Div100vh className={`modify__container modify--open ${animations.overlay}`}>
        <div className="header--overlay">
          <div className='header__avatar'>
            <img alt='Avatar' src={user.avatar} />
          </div>
          <button className='overlay__cancel' onClick={() => closeEditModal(true)}>
            <img src='/close.svg' alt='Close this page' />
          </button>
        </div>
        <form>
          <textarea
            type="text"
            placeholder="What's your idea?"
            className="modify__input"
            maxLength={10000}
            onChange={handleEditDraftInput}
            value={drafts[modify.edit_draft[1]].text}
            ref={inputRef}
            style={error ? { border: "2px solid red" } : null}
          />
          <p className={error ? "modify__error" : "hidden"}>
            Something's gone wrong. You may want to try refreshing the page.
          </p>
          <div className='modify__controls-container'>

            <div className='modify__controls'>

              <ProgressRing goal={280} progress={charProgress} count={charCount} />
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
            <div className='modify__timestamp'>
              <p className='text text--tiny text--light text--slim'>
                <em>last modified {timestamp}</em>
              </p>
            </div>
          </div>
        </form>
      </Div100vh>
    )
  } else {
    return null
  }
}

export default Modify
