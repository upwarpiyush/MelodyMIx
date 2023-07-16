import React from 'react'
import APIKit from '../spotify'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Library = () => {
  const [playlists, setPlaylists] = useState(null);

  useEffect(()=>{
    APIKit.get("me/playlists").then(function(res){
    setPlaylists(res.data.items);
  });
  },[])

  const navigate = useNavigate();

  const playPlaylist = (id) =>{
    navigate("/player", {state: {id:id}});
  }
  return (
    <div className="w-[calc(100%-100px)] h-screen bg-black rounded-3xl">
      <div className='min-w-[90%] min-h-screen flex flex-row flex-wrap gap-10 p-10' >
        {playlists?.map((playlist)=>(
        <div className='w-44 h-64 rounded-2xl bg-gradient-to-r from-teal-300  to-teal-900	flex flex-col items-center gap-3 text-red-800 transition duration-200 ease-in hover:scale-105 cursor-pointer' key={playlist.id} onClick={()=> playPlaylist(playlist.id)}>
          
          <img src={playlist.images[0].url} alt='playlist-img' className='w-[90%] rounded-2xl mt-2'/>
          <div className='font-bold text-lg'>{playlist.name}</div>
          <div className='text-sm'>{playlist.tracks.total} Songs</div>

        </div>
        ))}
      </div>

  </div>
  )
}

export default Library