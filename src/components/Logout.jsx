import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/isAuth'

const Logout = () => {
    let {toggleAuth,TOKEN} = useContext(AuthContext)
    

const handlelogout=()=>{
    toggleAuth()
    TOKEN=""
}

  return (
    <div>
        <button onClick={handlelogout}>Logout</button>
    </div>
  )
}

export default Logout