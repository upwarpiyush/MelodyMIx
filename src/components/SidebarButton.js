import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const SidebarButton = ({to, title, icon}) => {
  const location = useLocation();

  const isActive = location.pathname == to;
  return (
    <div className={`text-white w-[80px] ${isActive ? "bg-teal-700": ""}`}>
        <Link to={to} className='flex flex-col items-center justify-center'>
            {icon}
            <p>{title}</p>
        </Link>
    </div>
  )
}

export default SidebarButton