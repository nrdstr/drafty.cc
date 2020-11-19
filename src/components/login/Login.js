import React, { useEffect } from "react"
import { useStateValue } from "../../state"
import Div100vh from 'react-div-100vh'
import firebase, { twitter, auth } from "../../utils/firebase"

const Login = ({ isLoading }) => {
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
              username: userInfo.displayName
              // avatar: avatar
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
        }, 1500)
      } catch (e) {
        console.error("Error fetching previous auth: ", e)
      }
    })
  }

  const loginWithTwitter = async () => {
    auth.signInWithPopup(twitter).then(async result => {
      const userData = result.additionalUserInfo.profile
      let avatar = userData.profile_image_url_https
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
      window.localStorage.setItem('isAuthenticated', true)

      firebase.database()
        .ref(`/users/${auth.currentUser.uid}/`)
        .child('avatar')
        .set(avatar)

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
    document.querySelector('body').style.overflowY = 'auto'

    checkForPreviousLogin()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!user.isAuthenticated && !isLoading) {
    return (
      <Div100vh className="login__container animate--fade-in">
        {/* <Header /> */}
        <div className="login__links">
          {/* <img alt='Home page art' src='/writer-beard.svg' /> */}
          <div className='login__hero'>
            <div className='login__logo' />
            <h1 className='text text--bold text--narrow login__logo-text' style={{ margin: "0 0 3px 0" }}>Drafty</h1>
            <p>A place for people to write, format, and save notes, jokes, ideas, and <strong>anything</strong> in between.</p>
          </div>

          <div className='placeholder'>
            <button onClick={loginWithTwitter} className='placeholder__button placeholder__button--landing'>
              <span className='btn__inner'>
                <span className='icon btn-text-one'>Log in with <strong>Twitter</strong></span>
                <span className='btn-text--twitter' />
              </span>
            </button>
          </div>
        </div>
        {/* <Footer /> */}
      </Div100vh>
    )
  } else {
    return null
  }
}

export default Login
