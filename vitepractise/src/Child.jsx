import React, { useEffect,useState} from 'react'

const child = () => {
  const [data,setData]=useState([]);
  const [scrollpercentage,setScrollpercentage]=useState(0);

  useEffect(()=>{
    async function fetchData(){
      const response=await fetch('https://dummyjson.com/products?limit=100')
      const data=await response.json()
      console.log(data)

      if(data && data.products && data.products.length >0){
        setData(data.products)
        console.log(data)
      }
     
    }
    fetchData()
  },[])
 
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      const theight=document.documentElement.scrollTop;
      
      const docheight=document.documentElement.scrollHeight-document.documentElement.clientHeight;
      
      const scrollpercent=Math.floor((theight/docheight)*100);
      console.log('scroll percent :',scrollpercent)
      setScrollpercentage(scrollpercent)
      console.log('scroll percentage :',scrollpercentage)
    })
  },[scrollpercentage])
   
 
  return (
    <div className='w-screen h-screen flex  items-center flex-col '>
      <div className='fixed top-0 left-0 w-screen'>
      <div className='text-5xl text-center  h-14 w-screen bg-gray-800'>scroll bar</div>
      <div className=' h-2 bg-pink-500' 
      style={{width:`${scrollpercentage}%`}}></div>
      </div>
       
       <div className='mt-4 pt-2'>
         {data.map((item)=>(
          <p key={item.id}>{item.title}</p>
         ))}
       </div>
    </div>
  )
}

export default child
