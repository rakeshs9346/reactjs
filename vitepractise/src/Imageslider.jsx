import React, { useEffect, useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'

const Imageslider = () => {

  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  async function fetchImage() {

    try {
      let response = await fetch(`https://picsum.photos/v2/list?limit=10`);
      let data = await response.json();
      setImages(data)
      console.log(data)
    } catch (error) {
      console.log(error)

    }
  }

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
  }

  useEffect(() => {
    fetchImage()
  }, [setImages])

  return (
    <>
      <div className='w-screen h-screen flex justify-center items-center'>
        <div className='w-2/5 h-72 bg-gray-600  flex relative justify-center items-center ' >
          <BsArrowLeftCircleFill
            className='absolute left-2 w-7 h-7 text-2xl rounded-full bg-black text-white border-none outline-none'
            onClick={handlePrevious} />
          {
            images.map((image, index) => (
              <img
                className={currentSlide === index ? '' : 'hidden'}
                key={image.id} src={image.download_url} alt={image.author} />
            ))
          }
          <BsArrowRightCircleFill
            className='absolute right-2 w-7 h-7 text-2xl rounded-full bg-black text-white border-none outline-none'
            onClick={handleNext} />
          <span className='absolute flex bottom-2 gap-1'>
            {
              images.map((_, index) => (
                <button key={index}
                  className={currentSlide === index ? 'bg-white h-2 w-2 rounded-full border-none outline-none cursor-pointer' : 'bg-gray-500 h-2 w-2 rounded-full border-none outline-none cursor-pointer'}
                  onClick={() => setCurrentSlide(index)}></button>
              ))
            }
          </span>
        </div>
      </div>

    </>
  )
}

export default Imageslider
