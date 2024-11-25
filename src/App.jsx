import React, { useContext, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Cart from './pages/Cart'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserContext from './context/UserContext'

const App = () => {

let ctx = useContext(UserContext);
 console.log(ctx);

 let loginValue = ctx.user.login
 console.log(loginValue);






  return (
    <>
     <BrowserRouter>
    <div className='mb-[45px]'>
    <Navbar/>
    </div>
     <Routes>
      <Route path='/' element={loginValue===true ? <Home /> : <Navigate to='/login'/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/cart' element={loginValue===true ? <Cart /> : <Navigate to='/login'/> }/>
      <Route path='/login' element={loginValue===false ? <Login/> : <Navigate to='/'/> } />
      <Route path='/signup' element={<Signup/>}/>
      
     </Routes>
     <ToastContainer/>
     </BrowserRouter> 
    </>
  )
}

export default App
