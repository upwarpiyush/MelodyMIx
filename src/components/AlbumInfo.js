import React from 'react'

const AlbumInfo = ({album}) => {
  const artists = [];
  album?.artists?.forEach((element) => {
    artists.push(element.name);
  });

  return (
    <div className='w-[80%] mt-2'>
      <div>
        <p className='text-lg font-semibold'>{album?.name + " - " + artists?.join(", ")}</p>
      </div>
      <div>
        <p className='text-xs'>{`${album?.name} is an ${album?.album_type} by ${artists?.join(", ")} with ${album?.total_tracks} track(s)`}</p>
      </div>
      <div>
        <p className='text-[10px]'>Release Date: {album?.release_date}</p>
      </div>
    </div>
  )
}

export default AlbumInfo