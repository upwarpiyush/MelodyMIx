import React from 'react'

const AlbumImage = ({url}) => {
    // console.log(url);
  return (
    <div className='flex w-[70%] items-center justify-center relative z-10'>
      <img src={url} alt='album-art' className='w-[100%] rounded-xl aspect-square'/>
      <div className='w-[90%] absolute -z-10 blur-md top-[30px]'>
        <img src={url} alt='shadow' className='w-[100%] rounded-xl aspect-square'/>
      </div>
    </div>
  )
}

export default AlbumImage