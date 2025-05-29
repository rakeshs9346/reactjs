import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
  const {user}=useContext(UserContext);
  if(!user.password || !user.username) return  <div>please Login</div>
  
  return  <div>Welcome {user.username}</div>
}

export default Profile
