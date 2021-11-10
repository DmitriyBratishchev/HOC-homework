import React, { useState } from 'react'
import Login from './login';
import LogOut from './logOut';

const SimpleComponent = () => {
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem("user"))
  const [authName, setAuthName] = useState()
 
  const heandleChange = ({ value }) => {
    setAuthName(value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    localStorage.setItem('user', authName)    
    setIsAuth(true)
  }
  const handleClick = () => {
    // event.preventDefault()
    localStorage.removeItem('user')
    setIsAuth(false)
  }
  return (
    <>
      {isAuth
        ? <LogOut handleClick={handleClick} />
        : <Login heandleChange={heandleChange} handleSubmit={handleSubmit} />}
      </>
   );
}
 
export default SimpleComponent;