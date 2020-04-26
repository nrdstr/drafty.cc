import React, { useEffect } from "react"
import { useStateValue } from "../../state"
import Header from "../header/Header"
import Footer from "../footer/Footer"
import { twitter, auth } from "../../utils/firebase"

const Login = () => {
  const [{ user }, dispatch] = useStateValue()

  const fetchTwitterUserProfile = async id => {
    const url = `https://api.stellr.digital/twitter?id=${id}`

    try {
      const data = await fetch(url)
      const json = await data.json()
      dispatch({
        type: 'twit',
        payload: {
          screenName: json.screen_name,
          followers: json.followers_count,
          following: json.friends_count,
          tweets: json.statuses_count
        }
      })
    } catch (e) {
      console.error(e)
    }
  }

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

          fetchTwitterUserProfile(userInfo.providerData[0].uid)
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

  const loginWithTwitter = async () => {
    auth.signInWithPopup(twitter).then(async result => {
      const userData = result.additionalUserInfo.profile

      let avatar = userData.profile_image_url
      avatar = avatar.replace("_normal", '')

      await fetchTwitterUserProfile(userData.id)

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

          <div className='placeholder'>
            <div className='placeholder__landing-art' />
            <button onClick={loginWithTwitter} className='placeholder__button'>
              <span className='btn__inner'>
                <span className='icon fas btn-text-one text text--small text--slim'>Login with Twitter</span>
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
