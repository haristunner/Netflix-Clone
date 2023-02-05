import React from 'react'
import "./SignInScreen.css"

export const SignInScreen = () => {
    return (
        <div className='signInScreen'>
            <form>
                <h1>Sign In</h1>
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password' />
                <button type='submit'>Sign In</button>
                <h4>
                    <span className='signInScreen-gray'>New to Netflix?</span>
                    <span className='signInScreen-link'>Sign Up Now</span>
                </h4>
            </form>
        </div>
    )
}
