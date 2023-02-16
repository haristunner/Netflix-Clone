import React from 'react'
import "./SignOut.css"
import { useNavigate } from 'react-router-dom'

export const SignOut = () => {

    const navigate = useNavigate()

    const signOut = () => {
        navigate("/")
    }

    return (
        <div className='ProfileScreen'>
            <div className="profileScreen-card">
                <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
                <h1>Thanks for visiting my page.</h1>
                <h4>©Hari Prasath</h4>
                <button onClick={signOut}>Sign out</button>
            </div>
        </div>
    )
}
