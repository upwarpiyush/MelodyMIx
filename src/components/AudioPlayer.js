import React, { useEffect, useRef, useState } from 'react'
import ProgressCircle from './ProgressCircle'
import WaveAnimation from './WaveAnimation';
import Controls from './Controls';

const AudioPlayer = ({ currentTrack, currentIndex, setCurrentIndex, total}) => {
  // console.log(currentTrack.album.images[0].url);

  const [isPlaying, setIsPlaying] = useState(true);
  const [trackProgress, setTrackProgress] = useState(0);
  var audioSrc = total[currentIndex]?.track.preview_url;

  const audioRef = useRef(new Audio(total[0]?.track.preview_url));

  const intervalRef = useRef();

  const isReady = useRef(false);

  const {duration} = audioRef.current;

  const currentPercentage = duration ? (trackProgress/duration) * 100 : 0;

  // console.log(trackProgress);

  const startTimer = ()=>{
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(()=>{
      if(audioRef.current.ended){
        handelNext();
      }
      else{
        setTrackProgress(audioRef.current.currentIndex);
      }
    }, [1000]);
  };

  useEffect(()=>{
    if(isPlaying && audioRef.current){
      audioRef.current = new Audio(audioSrc);
      audioRef.current.play();
      startTimer();
    }
    else{
      clearInterval(intervalRef.current);
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(()=>{
    audioRef.current.pause();
    audioRef.current = new Audio(audioSrc);

    setTrackProgress(audioRef.current.currentTime)

    if(isReady.current)
    {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    }
    else{
      isReady.current = true;
    }
  }, [currentIndex]);


  useEffect(()=>{
    return()=>{
      audioRef.current.pause();
      clearInterval(intervalRef.current)
    }
  },[])


  const handelNext = ()=>{
    if(currentIndex < total.length -1)
    {
      setCurrentIndex(currentIndex + 1);
    }
    else{
      setCurrentIndex(0);
    }
  }

  const handelPrev = ()=>{
    if(currentIndex == 0)
    {
      setCurrentIndex(total.length - 1);
    }
    else{
      setCurrentIndex(currentIndex - 1);
    }
  }

  const artists = [];
  currentTrack?.album?.artists.forEach((artist)=> {
    artists.push(artist.name);
  });

  return (
    <div className='w-[100%] h-[44%] my-[3%] mx-[3%] flex'>
        <div className='text-white w-[37%]'>
            <ProgressCircle percentage={currentPercentage} isPlaying={true} image={currentTrack?.album?.images[0]?.url} size={300} color="#C96850"/>
        </div>
        <div className='w-[63%] flex flex-col justify-evenly items-center'>
          <p className='text-center text-5xl font-bold m-0 text-cyan-500 line-clamp-1'>{currentTrack?.name}</p>
          <p className='text-cyan-700 text-xl font-semibold'>{artists.join(' | ')}</p>
          <div className='flex flex-col items-center w-[100%]'>
            <div className='w-[50%] flex justify-between items-center mb-[20px]'>
              <p className='text-lg font-semibold m-0 text-cyan-200'>0:{Math.round(trackProgress)}</p>
              <WaveAnimation isPlaying={isPlaying}/>
              <p className='text-lg font-semibold m-0 text-cyan-200'>0:30</p>
            </div>
            <Controls 
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying} 
            handleNext={handelNext}
            handlePrev={handelPrev}
            total={total}
            />
          </div>
        </div>
    </div>
  )
}

export default AudioPlayer