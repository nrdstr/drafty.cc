import React, { useEffect, useRef } from "react"
import { useStateValue } from "../../state"
import Div100vh from 'react-div-100vh'

const Loader = () => {
  const [{ isLoading, animations }] = useStateValue()
  const container = useRef(null)

  const endLoad = animations.loader_out

  const handleLoaderAnimation = () => {
    // overlay.current.style.opacity = 1
  }

  useEffect(() => {
    if (animations.loader_out) {
      handleLoaderAnimation()
    }
  }, [animations.loader_out])
  if (isLoading) {
    return (
      <Div100vh ref={container} className="loader__container">
        <div className={`loader__body ${endLoad ? 'animate--fade-out' : ''}`}>
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div className={`loader__logo ${endLoad ? 'animate--fade-out' : ''}`} />
        </div>
        <div className={`longfazers ${endLoad ? 'animate--fade-out' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </Div100vh>
    )
  } else {
    return null
  }
}

export default Loader
