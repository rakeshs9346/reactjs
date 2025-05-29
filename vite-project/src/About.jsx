import React from 'react'
import {useForm} from 'react-hook-form'

function About() {
    const {
        handleSubmit,
        register,
        watch,
        formState :{errors,isSubmitting}
    }=useForm();

   async function onSubmit(data){
       await new Promise((resolve)=>setTimeout(resolve,3000)) 
        
    }

  return (
    <form className='w-screen h-screen text-center  bg-gray-600 flex-col p-5'
    onSubmit={handleSubmit(onSubmit)}>
      
      <label>FirstName:</label>
      <input type="text" {...register('firstName',
      {required:{
        value:true,
        message:'FirstName is required'
      },
        minLength:{
            value:4,
            message:'Min length is 4',
        },
        maxLength:10,   

      })} 
      className='mb-2 border-none outline-none bg-white rounded-md px-2 py-1'/>
       {errors.firstName && <p>{errors.firstName.message}</p>}
        <br />
        <label>LastName:</label>
        <input type="text" {...register('lastName',{required:true})} 
        className='mb-2 border-none outline-none bg-white rounded-md px-2 py-1'/>
        {errors.lastName && <p>LastName is required</p>} 
        <br />
        <input type="submit" 
        className='bg-white px-2 py-1 rounded-md'
        disabled={isSubmitting}
        value={isSubmitting?'submitting':'submit'}/>
    </form>
  )
}

export default About
