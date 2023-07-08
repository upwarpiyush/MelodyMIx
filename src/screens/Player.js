import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import apiClient from '../spotify';
import SongCard from '../components/SongCard';
import Queue from '../components/Queue';
import AudioPlayer from '../components/AudioPlayer';

const Player = () => {
  const location = useLocation();
  const [tracks, setTraks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  // console.log(currentTrack);

  useEffect(()=>{
    if(location.state){
      apiClient.get(`playlists/${location.state?.id}/tracks`)
      .then((res)=>{
        setTraks(res.data.items);
        setCurrentTrack(res.data.items[0].track);
      })
    }
  }, [location.state])

  useEffect(()=>{
    setCurrentTrack(tracks[currentIndex]?.track);
  }, [currentIndex, tracks]);

  return (
    <div className="w-[calc(100%-100px)] h-screen bg-black rounded-3xl flex flex-row text-white">
      
      <div className='w-[68%] mr-6 h-screen'>
        <AudioPlayer currentTrack={currentTrack} 
        total={tracks}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}/>
      </div>
      <div className='w-[30%] h-screen flex flex-col justify-between'>
        <SongCard album={currentTrack?.album}/>
        <Queue tracks={tracks} setCurrentIndex={setCurrentIndex}/>
      </div>
    </div>
  )
}

export default Player