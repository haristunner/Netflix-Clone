import React, { useState } from 'react'
import "./SignInScreen.css"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from '../../firebase'
import { useNavigate } from 'react-router-dom'
import { HomeScreen } from '../HomeScreen/HomeScreen'

export const SignInScreen = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [logIn, isLogIn] = useState(false)

    const register = (e) => {
        e.preventDefault()

        createUserWithEmailAndPassword(auth, email, password)
            .then((authUser) => {
                console.log(authUser);
            })
            .catch((err) => {
                alert(err.message)
            })
    }

    const signIn = (e) => {
        e.preventDefault()

        signInWithEmailAndPassword(auth, email, password)
            .then((signInUser) => {
                isLogIn(true)
            })
            .catch((err) => {
                alert(err.message)
            })
    }

    if (logIn) {
        navigate('/home')
        isLogIn(false);
    }

    return (
        <div className='signInScreen'>
            <form>
                <h1>Sign In</h1>
                <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                <button type='submit' onClick={signIn}>Sign In</button>
                <h4>
                    <span className='signInScreen-gray'>New to Netflix?</span>
                    <span className='signInScreen-link' onClick={register}>Sign Up Now</span>
                </h4>
            </form>
        </div>
    )
}
