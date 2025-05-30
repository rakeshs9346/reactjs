import React, { useEffect, useState } from 'react'

function useLocalStorage(key,defaultValue) {
    const [value,setValue]=useState(()=>{
        let currentvalue;

        try {
            currentvalue=JSON.parse(localStorage.getItem(key) || String(defaultValue))
            
        } catch (error) {
            console.log(error)
            currentvalue=defaultValue;
        }
        return currentvalue
    })
    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value))
       
    },[key,value])
    
  return [value,setValue]
}

export default useLocalStorage
