import React, { useContext, useEffect } from 'react';
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import MoviesContext from '../Context/MoviesContext';

const Navbar = () => {
  const { setType, movies ,movie ,type, fetchPopular, fetchMovieWithId } = useContext(MoviesContext);
  const [toggleMenu, setToggleMenu] = React.useState(false);

  useEffect(() => {
    fetchPopular();
  }, [type]);

  return (
    <nav className="w-full bg-transparent absolute z-10 flex md:justify-between justify-between items-center p-4">
    
      <ul className="w-9/12 text-lg text-white md:flex hidden list-none flex-row justify-start font-semibold items-center">
        <li className="cursor-pointer mx-8" onClick={() => setType("movie")}>Movies</li>
        <li className="cursor-pointer mx-8" onClick={() => setType("tv")}>Tv SHows</li>
      </ul>

      <ul className="w-3/12 text-lg text-white md:flex hidden justify-evenly items-center list-none flex-initial">
        <li>
          <BsSearch fontSize={21} className='cursor-pointer font-semibold'/>
        </li>
        <li>
          <IoMdNotificationsOutline fontSize={23} className='font-semibold text-white cursor-pointer' />
        </li>
        <li className='font-extralight text-white cursor-pointer'>
          SIgn up
        </li>
        <li className='font-extralight text-white cursor-pointer'>
          Log in
        </li>
    </ul>
    <div className="flex relative">
      {!toggleMenu && (
        <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
      )}
      {toggleMenu && (
        <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
      )}
      {toggleMenu && (
        <ul
          className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
          flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
        >
          <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
          <li className="cursor-pointer text-lg py-2 text-center w-full text-3xl border-b-2 border-[#fff]" onClick={() => setType("movie")}>Movies</li>
          <li className="cursor-pointer text-lg py-2 text-center w-full text-3xl border-b-2 border-[#fff]" onClick={() => setType("tv")}>Tv SHows</li>
          <li className="cursor-pointer text-lg py-2 text-center w-full text-3xl border-b-2 border-[#fff]">Sign up</li>
          <li className="cursor-pointer text-lg py-2 text-center w-full text-3xl border-b-2 border-[#fff]">Log in</li>
        </ul>
      )}
    </div>
  </nav>

  
  
  )
}

export default Navbar