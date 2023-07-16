import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const SidebarButton = ({to, title, icon}) => {
  const location = useLocation();

  const isActive = location.pathname == to;
  return (
    <div className={`text-white w-16 h-12 flex items-center justify-center rounded-lg ${isActive ? "bg-teal-700": ""}`}>
        <Link to={to} className='flex flex-col items-center justify-center'>
            {icon}
            <p className='text-xs mt-1'>{title}</p>
        </Link>
    </div>
  )
}

export default SidebarButton