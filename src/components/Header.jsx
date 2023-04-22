import React from 'react'

const Header = ({message}) => {
  return (
   <nav style={{backgroundColor:"aliceblue", padding:"16px 32px"}}>
      <h1>{message}</h1>
    </nav>
  )
}

export default Header