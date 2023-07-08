import React from 'react'

const Queue = ({tracks, setCurrentIndex}) => {
  // console.log(tracks?.track);
  return (
    <div className='flex flex-col items-center justify-center w-[100%] h-[35%] rounded-3xl rounded-tr-none bg-teal-700'>
      <div className='flex flex-col justify-between h-[85%] w-[80%]'>
        <p className='font-semibold text-lg text-white my-1 mx-0'>Up Next</p>
        <div className='h-[80%] w-[100%] overflow-y-auto'>{tracks?.map((track, index)=>(
          <div className='w-[100%] justify-between my-1 text-white text-sm flex cursor-pointer ease-in hover:scale-[0.95]' onClick={()=>setCurrentIndex(index)} key={track?.track?.id}>
            <p className='w-[75%] overflow-ellipsis m-0'>{track?.track?.name}</p>
            <p className='m-0'>0.30</p>
          </div>
        ))}</div>
      </div>
    </div>
  )
}

export default Queue