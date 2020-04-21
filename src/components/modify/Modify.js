import React, { Component, useState, useRef } from "react"
import { useStateValue } from "../../state"
import firebase from "firebase"

const Modify = () => {
  const [disabled, setDisabled] = useState(true),
    [error, setError] = useState(false),
    [text, setText] = useState(''),
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

  const handleTextInput = e => setText(e.target.value)

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
  } else {
    return null
  }
}

export default Modify
