import { useEffect, useState } from "react";

function Home(){
  
    const [data,setData]=useState({});

    useEffect(()=>{
     async function fetchdata(){
      let response=await fetch('https://randomuser.me/api/')
      let udata=await response.json()
      console.log(udata)
      setData({...udata})
      console.log(data.results[0])
     }
     fetchdata()
    },[])
     return(

        <>
        <center>
        <h3>Home page is displaying....</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas minus in quasi aspernatur dicta odit cumque debitis ipsa molestias. Ad repudiandae alias aliquid tempora, fugit vel quam a consequatur! Cumque?</p>

        <h2 className="text-2xl">{}</h2>
        </center>
         
        </>
     )
}

export default Home;

