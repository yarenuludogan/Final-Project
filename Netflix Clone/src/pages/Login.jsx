import React from 'react'
import{Link,useNavigate} from 'react-router-dom';

import {UserAuth} from '../context/AuthContext';
import { useState } from 'react';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const { user, logIn } = UserAuth();
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError('')
      try {
        await logIn(email, password)
        navigate('/')
      } catch (error) {
        console.log(error);
        setError(error.message)
      }
    };


  return (
    <div className='w-full h-screen'>
    <img
      className='hidden sm:block absolute w-full h-full object-cover'
      src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
      alt='/'
    />
    <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
    <div className='fixed w-full px-4 py-24 z-50'>
      <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
        <div className='max-w-[320px] mx-auto py-16'>
          <h1 className='text-3xl font-sans'>Sign In</h1>
          <form  onSubmit={handleSubmit} className='py-5 w-full flex-col flex'> 
            <input  onChange={(e) => setEmail(e.target.value)} className='py-1 px-6 mb-4 rounded bg-gray-700  'type='email adress' placeholder='E-mail'/>
            <input  onChange={(e) => setPassword(e.target.value)}  className='py-1 px-6 mb-4 rounded bg-gray-700'  type='password' placeholder='Password'/>
            <button className='bg-red-700 rounded text-font-sans py-2 px-2 '>
              Sign In</button> 
              <div className='justify-between flex text-gray-600'>
                <p>< input  type='checkbox'/>Remember me</p>
                <p>Need Help?</p>
               
              </div>
              <div>
                <p className='text-gray-600'>New to Netflix?</p>
                <p className='text-gray-300'><Link to='/signup'>Sign up now</Link> </p>
              </div>


          </form>
          
    

  

  </div>
      </div>
    </div>
  </div>
  )
}

export default Login;