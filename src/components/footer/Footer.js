import React from "react"

const Footer = ({ auth }) => {
  console.log(auth)
  return (
    <div className="text footer__container">
      <p>&copy; Drafty 2020</p>
      <p className='footer__powered-by'>Powered by &nbsp; <a href='https://nrdstr.com' target='nrdstr.com' target='_blank' rel='nofollow'><span className='footer__nrdstr-logo' /></a></p>
    </div>
  )
}

export default Footer
