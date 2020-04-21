import React, { useState, useRef, useEffect } from "react"
import { useStateValue } from "../../state"
import firebase from "firebase"

const Modify = () => {
  const [disabled, setDisabled] = useState(true),
    [error, setError] = useState(false),
    [text, setText] = useState(''),
    [original, setOriginal] = useState(''),
    [{ user, modify, drafts }, dispatch] = useStateValue(),
    inputRef = useRef(null)

  const modifyCalories = amount => {
    const currentTotalCalories = user.totalCalories
    let updatedTotalCalories

    if (modify.add) {
      updatedTotalCalories = currentTotalCalories + amount
    } else {
      updatedTotalCalories = currentTotalCalories - amount
    }

    dispatch({
      type: "user",
      payload: {
        ...user,
        totalCalories: updatedTotalCalories
      }
    })

    firebase
      .database()
      .ref(`/users/${user.uid}`)
      .child("totalCalories")
      .set(updatedTotalCalories)
  }

  const handleSubmitNewDraft = e => {
    e.preventDefault()
    const d = user.drafts
    d.push(text)
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
        .set(user.drafts)

      closeEditModal(false)
    } catch (e) {
      console.error(e)
    }
  }

  const handleTextInput = e => setText(e.target.value)

  const handleEditDraftInput = e => {
    const text = e.target.value
    let d = user.drafts
    d[modify.edit_draft[1]] = text
    console.log(d)
    // d[modify.edit_drafts[1]] = e.target.value
    dispatch({
      type: 'user',
      payload: {
        ...user,
        drafts: d
      }
    })
  }

  const changeGoal = e => {
    e.preventDefault()
    editGoal(inputRef.current.value)
    dispatch({
      type: "modify",
      payload: {
        ...modify,
        edit: false
      }
    })
  }

  const editGoal = amount => {
    dispatch({
      type: "user",
      payload: {
        ...user,
        dailyGoal: amount
      }
    })
    firebase
      .database()
      .ref(`/users/${user.uid}`)
      .child("dailyGoal")
      .set(amount)
    dispatch({
      type: "modify",
      payload: {
        ...modify,
        edit: false
      }
    })
  }

  const toggleModify = operation =>
    dispatch({ type: "modify", payload: { ...modify, [operation]: false } })

  const closeEditModal = cancel => {
    let d = user.drafts
    if (cancel) {
      d[modify.edit_draft[1]] = original
      dispatch({ type: 'user', payload: { ...user, drafts: d } })
    }
    dispatch({ type: 'modify', payload: { ...modify, edit_draft: [false, null] } })
  }



  useEffect(() => {
    if (modify.edit_draft[0]) {
      setOriginal(user.drafts[modify.edit_draft[1]])
      console.log('set original to ', user.drafts[modify.edit_draft[1]])
    }
  }, [modify.edit_draft, original, user.drafts])

  if (modify.new_draft) {
    return (
      <div className="modify__container modify--open">
        <div className="logout__top-bar">
          <button onClick={() => toggleModify("new_draft")}>
            <i className="fa fa-backspace" />
          </button>
        </div>
        <form>
          <textarea
            type="text"
            placeholder="Have an idea?"
            className="modify__input"
            onChange={handleTextInput}
            ref={inputRef}
            style={error ? { borderBottom: "2px solid red" } : null}
          />
          <button
            className="modify__button-submit"
            onClick={handleSubmitNewDraft}
          // disabled={disabled || error}
          >
            DONE
          </button>
          {/* Error Section */}
          <p className={error ? "modify__error" : "hidden"}>
            {modify.add
              ? "You can't add negative calories, try subtracting instead."
              : "You can't subtract negatives or more calories than you have eaten."}
          </p>
        </form>
      </div>
    )
  } else if (modify.edit_draft[0]) {
    const draftURI = encodeURI(user.drafts[modify.edit_draft[1]])
    return (
      <div className="modify__container modify--open">
        <div className="logout__top-bar">
          <button onClick={() => closeEditModal(true)}>
            <i className="fa fa-backspace" />
          </button>
        </div>
        <form>
          <textarea
            type="text"
            placeholder="Have an idea?"
            className="modify__input"
            onChange={handleEditDraftInput}
            value={user.drafts[modify.edit_draft[1]]}
            ref={inputRef}
            style={error ? { borderBottom: "2px solid red" } : null}
          />
          <button
            className="modify__button-submit"
            onClick={handleSubmitEditDraft}
          // disabled={disabled || error}
          >

            SAVE
          </button>
          <a href={`https://twitter.com/intent/tweet?text=${draftURI}`} target='_blank' className='modify__button-submit'>
            TWEET
            </a>
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
