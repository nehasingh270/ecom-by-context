import React, { useState } from 'react'
import UserContext from './UserContext'

const UserState = (props) => {
 let userDetails = JSON.parse(localStorage.getItem('EcomLog'))
   const [user , setUser] = useState({
     
     login:userDetails ? userDetails.login : false,
     email:userDetails ? userDetails.email : '',
     //password: 'password123'
   });
   console.log(user)

   function loginUser(ans){
    console.log(ans)
    localStorage.setItem('EcomLog',JSON.stringify({login:true , email:ans.email})) 
    setUser({login:true, email:ans.email})
   }

   function logout(){
    localStorage.removeItem('EcomLog') 
    setUser({login:false, email:''})
   }

  return (
    <UserContext.Provider  value={{user, setUser, loginUser , logout}}>
       {props.children}
    </UserContext.Provider>
  )
}

export default UserState
