import React from 'react'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {

    const navigate = useNavigate();

  return (
    <div className='landing'>

        <div className='card'>
                    <h2>Register</h2>
                    <p>If you don't have an Account then you can register here</p>
                    <button onClick={()=>navigate('/register')}>Register</button>
        </div>

        <div className='card'>
                    <h2>Login</h2>
                    <p>If you already have an Account then you can login here</p>
                    <button onClick={()=>navigate('/login')}>Login</button>
        </div>
       

    </div>
  )
}

export default LandingPage