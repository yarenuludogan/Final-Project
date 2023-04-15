import React from 'react';
import {useNavigate,Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';



const Navbar = () => {
  const{user,logOut}=UserAuth()
  const navigate= useNavigate();
 
  const hLogout = async () => {
    try {
      await logOut();
      navigate('/');//çıkış yapınca anasayfaya yönlendirir//
    } catch (error) {
      console.log(error);
    }
  };


  
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <Link to='/'>
        <img width='200px' height='100px'src ='https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png' alt='Placeholder image'/>
          
    
      </Link>
     
      
      {user?.email ? (
        <div>
          <Link to='/account'>
            <button className='text-white pr-4'>Account</button>
          </Link>
          <button
            onClick={hLogout}
            className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to='/login'>
            <button className='text-white pr-4'>Sign In</button>
          </Link>
          <Link to='/signup'>
            <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
    
  );
};

export default Navbar;