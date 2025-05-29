import React from 'react'
import Child from './Child'

function Parent() {
  return (
    <div>
      <Child user={{username:'rakesh',age:23}}/>
    </div>
  )
}

export default Parent
