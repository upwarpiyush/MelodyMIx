import React from 'react'

const WidgetEntry = ({title, subtitle, image}) => {
  return (
    <div className='w-full flex items-center mt-2'>
      <img src={image} className='h-12 w-12 rounded-lg mr-2'/>
      <div className='flex flex-col justify-center'>
        <p className=' text-sm mb-1'>{title}</p>
        <p className='font-thin text-xs  m-0'>{subtitle}</p>
      </div>
    </div>
  )
}

export default WidgetEntry