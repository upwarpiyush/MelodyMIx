import React from 'react'
import WidgetEntry from './WidgetEntry'

const WidgetCard = ({title, similar, featured, newRelease}) => {
    // console.log(newRelease);
  return (
    <div className='w-1/4 h-3/4'>
        <p className='font-semibold text-lg mb-5'>{title}</p>
        {
            similar ? similar.map(artist=>(
                <WidgetEntry
                title={artist?.name}
                subtitle={artist?.followers?.total + " followers"}
                image={artist?.images[2]?.url}
                key={artist.id}
                />
            ))

            : featured ? featured.map(playlist =>(
                <WidgetEntry
                title={playlist?.name}
                subtitle={playlist?.tracks?.total + " songs"}
                image={playlist?.images[0]?.url}
                key={playlist.id}
                />
            ))
            
            : newRelease ? newRelease.map(album =>(
                <WidgetEntry
                title={album?.name}
                subtitle={album?.artists[0]?.name}
                image={album?.images[2]?.url}
                key={album.id}
                />
            ))
            : null
        }
    </div>
  )
}

export default WidgetCard