import React, { useEffect, useState } from 'react'
import SidebarButton from './SidebarButton'
import {MdFavorite, MdSpaceDashboard} from "react-icons/md"
import {IoLibrary} from "react-icons/io5"
import {FaGripfire, FaPlay, FaSignOutAlt} from "react-icons/fa"
import apiClient from '../spotify'

const Sidebar = () => {
  const [image, setImage] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr9vqDiHbd4UBagN7r5ZdY1r6SBvc3ZN9rEQ&usqp=CAU');
  useEffect(()=>{
    apiClient.get("me").then((response) => setImage(response.data.images[0].url))
  }, [])
  return (
    
    <div className='w-[100px] h-screen flex flex-col items-center justify-between py-5'>
        <img src={image} className='w-[50px] h-[50px] rounded-md'/>

        <div className='flex flex-col gap-5'>
            <SidebarButton to="/feed" title="Feed" icon={<MdSpaceDashboard />}/>
            <SidebarButton to="/trending" title="Trending" icon={<FaGripfire />}/>
            <SidebarButton to="/player" title="Player" icon={<FaPlay />}/>
            <SidebarButton to="/favorites" title="Favorites" icon={<MdFavorite />}/>
            <SidebarButton to="/" title="Library" icon={<IoLibrary />}/>
        </div>

        <SidebarButton to="/signout" title="SignOut" icon={<FaSignOutAlt />}/>
    </div>
    
  )
}

export default Sidebar