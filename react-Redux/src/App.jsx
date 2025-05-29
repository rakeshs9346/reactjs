import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment,incrementByAmount,reset } from './features/counter/counterSlice';

function App() {
  const [amount,setAmount]=useState();
  const count=useSelector((state)=>state.counter.value)
  const dispatch=useDispatch();
  function handleIncrement(){
    dispatch(increment())
  }
  function handleDecrement(){
     dispatch(decrement())
  }
  function handleReset(){
    dispatch(reset())
  }
  function handleIncrementByNumber(){
    dispatch(incrementByAmount(amount))
  }

  return (
    <>
      <div>
        <h2>count :{count}</h2>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleDecrement}>Decrement</button><br /><br />
        <input type="Number"
        value={amount}
        placeholder='Enter number'
        onChange={(e)=>setAmount(e.target.value)} />

        <button onClick={handleIncrementByNumber}>incrementByNumber</button>
      </div>
    </>
  )
}

export default App
