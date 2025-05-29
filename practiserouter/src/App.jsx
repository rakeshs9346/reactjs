import { useEffect,useState } from "react"
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

function App() {
 const [images,setImages]=useState([])
 const [indexnum,setIndexnum]=useState(0)

  useEffect(() => {
    const fetchimages=async ()=>{
      const response=await fetch('https://picsum.photos/v2/list?limit=10')
      const data=await response.json()
      console.log(data)
      setImages(data) 
      
    }
    fetchimages()
  },[])
 
  function leftarrow(){
    if(indexnum===0){
      setIndexnum(images.length-1)
    }else{
      setIndexnum(indexnum-1)
    }
  }
  function rightarrow(){
    if(indexnum===images.length-1){
      setIndexnum(0)
    }else{
      setIndexnum(indexnum+1)
    }
  }
  console.log(indexnum)
  return (
    <div className="flex  items-center justify-center bg-gray-100 w-screen h-screen">
      <div className="w-96 h-96 relative ">

        <BsArrowLeft 
        className="absolute left-1 text-2xl bg-white rounded-full top-1/2 cursor-pointer z-1"
        onClick={leftarrow}/>
         {images.map((image,index)=>(
         <div key={image.id} className={`absolute w-full h-full transition-all duration-300 ease-in-out ${indexnum===index ? 'opacity-100' : 'opacity-0'}`}>
        {indexnum===index && <img src={image.download_url} alt={image.author} className="w-full h-full object-cover rounded-lg shadow-lg duration-300 transition-all  ease-in-out" />}
          </div>
          ))}
          <BsArrowRight 
          className="absolute right-1 text-2xl bg-white rounded-full top-1/2 cursor-pointer "
          onClick={rightarrow}/>
          <div className="absolute bottom-2 left-1/2 flex items-center justify-center gap-2 -translate-x-1/2">
            {images.map((image,index)=>(
              <span 
              key={image.id}
              className={`h-3 w-3 rounded-full ${indexnum===index ? 'bg-gray-500' : 'bg-white'} cursor-pointer`}
              onClick={() => setIndexnum(index)}
              ></span>
            ))}
            </div>
      </div>
      </div>

  )
}

export default App
