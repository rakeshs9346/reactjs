import React, { useContext } from 'react'
import {useForm} from 'react-hook-form'

function Navbar() {
 
  const {register,handleSubmit,formState:{errors}}=useForm();
  const onSubmit=(data)=>{
    console.log(data)
  }

  return (
    <>
     <form onSubmit={handleSubmit(onSubmit)}>
      <div className='w-screen h-screen  flex flex-col justify-center'>
        <div>
        <label>FirstName:</label>
        <input {...register('firstname',{required:true,minLength:{value:3,message:'length atleast 3'},maxLength:6})} placeholder='firstname' 
        />
        {errors.firstname && <p>{errors.firstname.message}</p>}
        <br /><br />
        <label >LastName:</label>
        <input {...register('lastname',{required:true,minLength:{value:3,message:'length must be min 3'}})} />
        {errors.lastname && <p>{errors.lastname.message}</p>}
        
        </div>
        <input type="submit" />
      </div>
     </form>
    </>
  )
}

export default Navbar
