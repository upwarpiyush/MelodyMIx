import React from 'react'
import AlbumImage from './AlbumImage'
import AlbumInfo from './AlbumInfo'

const SongCard = ({album}) => {
  return (
    <div className='w-[100%] h-[62%] bg-[#1c264b] rounded-3xl rounded-br-none flex items-center justify-center flex-col'>
        <AlbumImage url={album?.images[0]?.url}/>
        <AlbumInfo album={album}/>
    </div>
  )
}

export default SongCard