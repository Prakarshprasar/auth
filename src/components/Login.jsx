import React, { useContext } from 'react'
import { useState } from 'react'
import { AuthContext } from '../context/isAuth'

const Login = () => {
    let {toggleAuth,TOKEN} = useContext(AuthContext)
    const [email, setemail] = useState() 
    const [pass, setpass] = useState()
   
  
const handledatapost=()=>{
    toggleAuth()
    fetch("https://reqres.in/api/login",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(
          {
              "email": email,
              "password": pass
          }
        )
    }).then((r)=>r.json())
    .then((d)=>{

        TOKEN=d.token
        
    })



}




const handleEmail=(e)=>{
     setemail(e.target.value) 
     
}

const handlepassword=(e)=>{
setpass(e.target.value)

}


  return (
    <div>
        <input type="email" placeholder='Enter your name'  onChange={handleEmail} />
        <input type="password" placeholder='Enter Password' onChange={handlepassword}/>
        <button onClick={()=>handledatapost()}>LogIn</button>
    </div>
  )
}

export default Login