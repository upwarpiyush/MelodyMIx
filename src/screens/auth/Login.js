import React from 'react'
import { loginEndpoint } from '../../spotify'

const Login = () => {
  return (
    <div className='flex justify-center items-center w-screen'>
        <a href={loginEndpoint}><div>Login</div></a>
    </div>
  )
}

export default Login