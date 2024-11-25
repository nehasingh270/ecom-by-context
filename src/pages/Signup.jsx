// src/SignupForm.js
import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // This is used for redirection
import { toast } from 'react-toastify';

const Signup= () => {
  
  let nameRef = useRef()
  let emailRef = useRef()
  let passwordRef = useRef()
  let navigate = useNavigate();

  let arr = JSON.parse(localStorage.getItem('EcomHub')) || []
  console.log(arr)

  const handleSubmit = (e)=>{
    e.preventDefault();

    let obj ={
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value
    }
     console.log(obj)

     let existinUser = arr.find((ele)=>ele.email === obj.email);
     if(existinUser){
      toast.error('user already exists',{position:'top-center', theme:'dark'})
    }
    else{
       arr.push(obj)
       localStorage.setItem('EcomHub',JSON.stringify(arr))
       toast.success('user registered successfully',{position:'top-center', theme:'dark'})
       navigate('/login') 
      
 
    }
  }
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  
  // const [error, setError] = useState('');
  // const navigate = useNavigate();

  // const handleSignup = (e) => {
  //   e.preventDefault();
    
  //   if (name|| !email || !password ) {
  //     setError('Please fill out all fields');
  //     return;
  //   }
    
   

    // If validation is successful, redirect to login page
    // setError('');
    // navigate('/login'); // Change '/login' to your actual login path
  

  return (

    <div className="flex items-center justify-center min-h-screen">
      <form  className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold text-center text-gray-900">Sign Up</h2>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder='Your name'
            // value={nameRef}
            ref={nameRef}
            // onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder='Enter email address'
            // value={emailRef}
            ref={emailRef}
            // onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder='********'
            // value={passwordRef}
            ref={passwordRef}
            // onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        
        <button onClick={handleSubmit} type="submit" className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-200">Sign Up</button>
        
        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:text-blue-500 font-semibold">
            login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
