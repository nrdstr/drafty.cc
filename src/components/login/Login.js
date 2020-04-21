import React, { useEffect } from "react"
import { useStateValue } from "../../state"
import Header from "../header/Header"
import Footer from "../footer/Footer"
import { twitter, auth } from "../../utils/firebase"

const Login = () => {
  const [{ user }, dispatch] = useStateValue()

  const checkForPreviousLogin = () => {
    auth.onAuthStateChanged(async account => {
      try {
        if (account) {
          const userInfo = await account
          dispatch({
            type: "user",
            payload: {
              ...user,
              isAuthenticated: true,
              uid: auth.currentUser.uid,
              username: userInfo.displayName,
              avatar: userInfo.photoURL
            }
          })
        }
        dispatch({
          type: "toggleLoader",
          payload: false
        })
      } catch (e) {
        console.error("Error fetching previous auth: ", e)
      }
    })
  }

  const loginWithTwitter = () => {
    auth.signInWithPopup(twitter).then(result => {
      const userData = result.additionalUserInfo.profile

      dispatch({
        type: "user",
        payload: {
          ...user,
          isAuthenticated: true,
          uid: auth.currentUser.uid,
          username: userData.name,
          avatar: userData.profile_image_url
        }
      })

      dispatch({
        type: "toggleLoader",
        payload: false
      })

    }).catch(e => console.error(e))
  }


  useEffect(() => {
    dispatch({
      type: "toggleLoader",
      payload: true
    })

    checkForPreviousLogin()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!user.isAuthenticated) {
    return (
      <div className="login__container">
        <Header />
        <div className="login__links">
          <a
            className="login__link"
            onClick={() => loginWithTwitter()}
            title="Sign in with Twitter"
          >
            <i className="fab fa-twitter" />
          </a>
        </div>
        <Footer />
      </div>
    )
  } else {
    return null
  }
}

export default Login
