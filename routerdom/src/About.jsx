import React from 'react'
import { useParams } from 'react-router-dom'

const About = () => {
    const {userid}=useParams();
  return (
    <center>
        <h1 className='text-center text-2xl'>ABout page of {userid}</h1>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod molestiae laborum totam ex, amet odit sapiente fugiat aperiam veniam labore tempore, tenetur nulla recusandae inventore. Quos iste quibusdam hic eos.
    </center>
  )
}

export default About
