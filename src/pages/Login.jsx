// src/Login.js
import React, { useContext, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import UserContext from '../context/UserContext';

const Login = () => {
   
  let ctx = useContext(UserContext);
    console.log(ctx)


  let emailRef = useRef()
  let passwordRef = useRef()
  let navigate = useNavigate();

  let arr = JSON.parse(localStorage.getItem('EcomHub')) 
  console.log(arr)

  const handleSubmitlog = (e)=>{
    e.preventDefault();

  let obj ={
    email: emailRef.current.value,
    password: passwordRef.current.value
  }
   console.log(obj)

   let existinUser = arr.find((ele)=>ele.email === obj.email);
   console.log(existinUser)

   if(existinUser){
    if(existinUser.password === obj.password){
      toast.success('login successfully',{position:'top-center', theme:'dark'})
      ctx.loginUser({Login:true, email:existinUser.email})
      navigate('/')
    }
    else{
      toast.error('Invalid Password',{position:'top-center', theme:'dark'})
    }
  }
  else{
    toast.error('user not found',{position:'top-center', theme:'dark'})
  }
}



  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center" >
         {/* style={{ backgroundImage: "url('Ecomcharm1.png')" }} */}

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}

      {/* Login 44 Form  */}
      <form className="relative  bg-transparent bg-opacity-50 rounded-lg p-8 shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-900">Login</h2>
        <div className="mt-4">
          <label className="block text-sm  font-bold text-gray-700">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            ref={emailRef}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-bold text-gray-700">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            ref={passwordRef}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <button onClick={handleSubmitlog} className="w-full mt-6 bg-blue-600 hover:bg-blue-700
         text-white font-semibold py-2 rounded-md transition duration-200">
          Login
        </button>
        
        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:text-blue-500 font-semibold">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;