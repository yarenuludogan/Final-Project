import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import YouTube from 'react-youtube';

import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import {  doc} from 'firebase/firestore';



export default function Windows({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');
  
  const { user } = UserAuth();

  const movieID = doc(db, 'users', `${user?.email}`);
  const TMDB_API_KEY = '51132f7368615ed40e00d27efa38671f';
  const API_URL = 'https://www.googleapis.com/youtube/v3';

  


  useEffect(() => {
    axios.get(fetchUrl).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchUrl]);

  const handleMovieClick = async (movie) => {
    console.log("Movie clicked:", movie);
  try { 
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${TMDB_API_KEY}&language=en-US`
    );
    const results = response.data.results;
    if (results.length === 0) {
      console.log("No trailers found for movie: ", movie.title);
      return;
    }
    const trailerUrl = `https://www.youtube.com/watch?v=${results[0].key}`;
    const videoId = new URL(trailerUrl).searchParams.get('v');
    setTrailerUrl(videoId);
  } catch (error) {
    console.log(error);
  }
};

  const opts = {
    height: '300',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <>
      <h2 className='text-white font-sans p-5 '>{title}</h2>
      <div className='relative flex items-center'>
        <div id={'slider'} className='w-full h-full relative  whitespace-nowrap overflow-x-scroll smooth scrollbar-hide'>
          {movies.map((movie) => (
            <div key={movie.id} className='w-[250px]  inline-block relative p-2' >
              <img
                className='w-full h-full object-cover transform transition-transform duration-300 hover:scale-105'
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                
                onClick={() => handleMovieClick(movie)}
              />
              <div className='overlay' >
                <div className='play-icon'>
                  <i className='fa fa-play'></i>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </>
  );
}

