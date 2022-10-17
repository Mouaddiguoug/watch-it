import React, { useContext, useEffect, useState } from 'react'
import bg from '../images/1134298.jpeg';
import { BsFillStarFill } from 'react-icons/bs';
import { BsStar } from "react-icons/bs";
import { BsFillPlayFill } from 'react-icons/bs';
import Swipper from './swipper';
import MoviesContext from '../Context/MoviesContext';
import {motion} from 'framer-motion';

function Main() {
  const { setType, movies, type, fetchPopular, movie, loading } = useContext(MoviesContext);
  const [id, setId] = useState(0);
  const [selected, setSelected] = useState({});
  
  const findMovie = () => {
    if(movies.length > 0 ){
      for (let index = 0; index < movies.length; index++) {
        if (movies[index].id == id) {
          return movies[index];
        }
      }
    }
  }

  useEffect(() => {
    findMovie();
  }, [id]);

  return !findMovie() ? (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} className='w-full relative h-full bg-black'>
  <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} className='absolute w-full object-cover h-full' />
  <div className='grid tracking-wider relative pt-14 ml-5'>
    <div className='p-14 text-white'>
      <motion.h1 className='sm:text-8xl text-5xl'>{movie.title}</motion.h1>
      <motion.h2 className='mt-4 sm:text-4xl text-3xl'>{movie.original_title}</motion.h2>
      <div className='w-full sm:w-8/12'>
        <motion.p className='mt-4 text-ellipsis text-2xl pr-14 float-left'>{movie.overview}</motion.p>
      </div>
    </div>
    <div className='flex h-14 pl-14 justify-evenely text-[#BADC77] sm:text-4xl text-3xl'>
      {Array(7).fill().map((_, i) => {
        return <BsFillStarFill className='ml-4' />
      })}
    </div>
    <div className='pl-14 mt-10'>
      <button className='flex justify-between items-center text-white border-2 rounded-full border-white text-3xl px-6 py-3'>
        <BsFillPlayFill fontSize={50} className="mr-4"/> Play now
      </button>
    </div>
    <Swipper setId={setId} />
  
  </div>
</motion.div>
  ) : (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} className='w-full relative h-full bg-black'>
      <motion.img src={`https://image.tmdb.org/t/p/w500${findMovie().backdrop_path}`} className='absolute w-full object-cover h-full' />
      <div className='grid tracking-wider relative pt-14 ml-5'>
        <div className='p-14 text-white'>
          <motion.h1 className='sm:text-8xl text-5xl'>{findMovie().title}</motion.h1>
          <motion.h2 className='mt-4 sm:text-4xl text-3xl'>{findMovie().original_title}</motion.h2>
          <div className='w-full sm:w-8/12'>
            <motion.p className='mt-4 text-ellipsis text-2xl pr-14 float-left'>{findMovie().overview}</motion.p>
          </div>
        </div>
        <motion.div className='flex h-14 pl-14 justify-evenely text-[#BADC77] sm:text-4xl text-3xl'>
          {Array(Math.floor(findMovie().vote_average)).fill().map((_, i) => {
            return <BsFillStarFill className='ml-4' />
          })}
        </motion.div>
        <div className='pl-14 mt-10'>
          <motion.button className='flex justify-between items-center text-white border-2 rounded-full border-white text-3xl px-6 py-3'>
            <BsFillPlayFill fontSize={50} className="mr-4"/> Play now
          </motion.button>
          <a href="">Trailer</a>
        </div>
        <Swipper setId={setId} />
      
      </div>
    </motion.div>
  )
}

export default Main