import React, { useState } from 'react'

const useData = () => {
    const [value,setValue]=useState([{
        id:1,
        Question:'What is Your Name?',
        Answer:'My name is Michael Bevan Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid corrupti aliquam suscipit earum, accusamus doloribus soluta hic! Assumenda adipisci aliquid autem necessitatibus vel omnis harum voluptas dolore voluptatem, iste incidunt.',

    },
    {
        id:2,
        Question:'What is Your Favourite Sport?',
        Answer:'My Favourite Sport is Volley ball',
    },
    {
      id:3,
      Question:'How old are you?',
      Answer:'Im 23 years old',
    },
    {
     id:4,
     Question:'Where are you from?',
     Answer:'Im from Texan United States Of America',
    }]);
  return (
    [value]
  )
}

export default useData;
