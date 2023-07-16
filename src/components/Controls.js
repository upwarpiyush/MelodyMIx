import React from 'react'
import { IconContext } from 'react-icons'
import {IoPlay, IoPlaySkipBack, IoPlaySkipForward} from "react-icons/io5"
import {FaPause} from "react-icons/fa";

const Controls = ({isPlaying, setIsPlaying, handelNext, handelPrev}) => {
  return (
    <IconContext.Provider value={{size:"30px", }}>
      <div className='w-[60%] m-0 flex items-center justify-evenly'>
        <div className='w-[50px] h-[50px] rounded-lg flex items-center justify-center cursor-pointer ease-in-out hover:scale-110' onClick={handelPrev}>
          <IoPlaySkipBack className='decoration-white'/>
        </div>

        <div className='w-[60px] h-[60px] bg-gray-700 rounded-full flex items-center justify-center cursor-pointer ease-in-out hover:scale-110' onClick={()=>setIsPlaying(!isPlaying)}>
          { isPlaying ? (<FaPause className='w-[20px] decoration-black'/>) : (<IoPlay className='w-[30px] bg-transparent '/>) }
        </div>

        <div className='w-[50px] h-[50px] rounded-lg flex items-center justify-center cursor-pointer ease-in-out hover:scale-110' onClick={handelNext}>
          <IoPlaySkipForward/>
        </div>
      </div>
    </IconContext.Provider>


  )
}

export default Controls