import axios from 'axios';
import React from 'react';
import  { useEffect, useState } from 'react';

import movielines from '../Api';


const Main = ({}) => {
  const [winds, setWinds] = useState([]);
 
  

  const movie = winds[Math.floor(Math.random() * winds.length)];




  useEffect(() => {
    axios.get(movielines.popular).then((response) => {
      setWinds(response.data.results);
    });
  }, []);
 

  return (
    <div className='w-full h-[600px] text-white'>
      <div className='w-full h-full'>
        <div className='absolute w-full h-[600px] bg-gradient-to-b from-transparent to-black '></div>
        <img
          className='w-full h-full object-cover'
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        /> 
        <div className='absolute w-full top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
          
          <p className='text-gray-400 text-sm'>
            Released: {movie?.release_date}
          </p>
          <p className='w-full  text-gray-200'>
            {movie?.overview}
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Main;