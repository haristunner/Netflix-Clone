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
            <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" />

            <div className="profileScreen-card">
                <h1>Thanks for visiting my page.</h1>
                <h4>©Hari Prasath-2023</h4>
                <button onClick={signOut}>Sign out</button>
            </div>
        </div>
    )
}
