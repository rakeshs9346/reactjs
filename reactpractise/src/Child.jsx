import React from 'react'

function Child({user}) {
  return (
    <div>
      <h2>{user.username}</h2>
      <h2>{user.age}</h2>
    </div>
  )
}

export default Child
