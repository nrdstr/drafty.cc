import React, { useEffect } from "react"
import { useStateValue } from "../../state"
import Header from "../header/Header"
import Footer from "../footer/Footer"
import { twitter, auth } from "../../utils/firebase"

const Login = () => {
  const [{ user, animations }, dispatch] = useStateValue()

  const checkForPreviousLogin = () => {
    auth.onAuthStateChanged(async account => {
      try {
        if (account) {
          const userInfo = await account

          let avatar = userInfo.photoURL
          avatar = avatar.replace("_normal", '')
          dispatch({
            type: "user",
            payload: {
              ...user,
              isAuthenticated: true,
              uid: auth.currentUser.uid,
              twitterID: userInfo.providerData[0].uid,
              username: userInfo.displayName,
              avatar: avatar
            }
          })

        }
        setTimeout(() => {
          dispatch({
            type: 'animations',
            payload: {
              ...animations,
              loader_out: true
            }
          })
          setTimeout(() => {
            dispatch({
              type: 'toggleLoader',
              payload: false
            })
          }, 200)
        }, 1000)
      } catch (e) {
        console.error("Error fetching previous auth: ", e)
      }
    })
  }

  const loginWithTwitter = async () => {
    auth.signInWithRedirect(twitter).then(async result => {
      const userData = result.additionalUserInfo.profile

      let avatar = userData.profile_image_url
      avatar = avatar.replace("_normal", '')

      dispatch({
        type: 'user',
        payload: {
          ...user,
          isAuthenticated: true,
          uid: auth.currentUser.uid,
          twitterID: userData.id,
          username: userData.name,
          avatar: avatar
        }
      })

      setTimeout(() => {
        dispatch({
          type: 'animations',
          payload: {
            ...animations,
            loader_out: true
          }
        })
        setTimeout(() => {
          dispatch({
            type: 'toggleLoader',
            payload: false
          })
        }, 200)
      }, 1000)

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
          <img alt='Home page art' src='/writer-beard.svg' />

          <div style={{ marginTop: 30 }} className='placeholder'>
            <button onClick={loginWithTwitter} className='placeholder__button placeholder__button--landing'>
              <span className='btn__inner'>
                <span className='icon btn-text-one text text--medium'>Log in with Twitter</span>
                <span className='btn-text--twitter' />
              </span>
            </button>
          </div>
        </div>
        <Footer />
      </div>
    )
  } else {
    return null
  }
}

export default Login
