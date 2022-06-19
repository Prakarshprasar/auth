import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/isAuth'
import Login from './Login'
import Logout from './Logout'

const Navbar = () => {
    const {isAuth,TOKEN,setTOKEN} = useContext(AuthContext)
  return (
    <div>
        
        {isAuth ? <Logout/> : <Login/>}
        {TOKEN ? `Login Succesfull Your Token ID - ${TOKEN}` : "Login to proceed" }
        
    </div>
  )
}

export default Navbar