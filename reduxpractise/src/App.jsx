import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment,reset,incrementByAmount} from './features/counter/counterSlice';
import { useState } from 'react';

function App() {
      const [amount,setAmount]=useState(null);
      const count=useSelector((state)=>state.counter.value);
      const dispatch=useDispatch();

      function incrementClick(){
        dispatch(increment());
      }
      function decrementClick(){
        dispatch(decrement())
      }
      function resetClick(){
        dispatch(reset());
      }
      function incByAmountClick(){
        dispatch(incrementByAmount(amount));
      }

  return (
    <>
      <div className='w-screen h-screen flex justify-center items-center flex-col gap-10'>
        <div className='flex gap-3 justify-center'>
          <button className='text-2xl px-2 py-1 bg-gray-300 w-20 rounded-md'
          onClick={incrementClick}>+</button>
          <p className='py-2 text-2xl'>count :{count}</p>
          <button className='text-2xl px-2 py-1 bg-gray-300 w-20 rounded-md'
          onClick={decrementClick}>-</button>
          <button className='text-2xl px-2 py-1 bg-gray-300 w-20 rounded-md'
          onClick={resetClick}>Reset</button>
          
        </div>
          <input type="number" 
          className='px-2 py-1 border-2 rounded-md outline-none'
          onChange={(e)=>setAmount(e.target.value)}/>
          <button onClick={incByAmountClick}
          className='text-2xl px-2 py-1 bg-gray-300  rounded-md'>Inc By Amount</button>
      </div>
    </>
  )
}

export default App
