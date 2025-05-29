import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route,RouterProvider } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import User from './User.jsx'
import Parent from './Parent.jsx'
 
// const router=createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<App/>}>
//     <Route path='' element={<Home/>}/>
//     <Route path='about' element={<About/>}/>
//     <Route path='contact' element={<Contact/>}/>
//     <Route path='user/' element={<User/>}>
//      <Route path=':userid' element={<User/>}/>
//     </Route>
//     </Route>
//   )
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
    {/* <Parent/> */}
    <Home/>
  </StrictMode>,
)
