import React, { useState } from 'react'
import { SignInScreen } from '../SignInScreen/SignInScreen'
import "./LoginScreen.css"

export const LoginScreen = () => {

    const [signIn, setSignIn] = useState(false)

    return (
        <div className='loginScreen'>
            <div className="loginScreen-background">
                <img
                    src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt=""
                    className='loginScreen-logo'
                />
                <button className='loginScreen-btn'>
                    Sign In
                </button>
                <div className="loginScreen-gradient"></div>
            </div>
            <div className="loginScreen-body">
                {
                    signIn ?
                        <SignInScreen />
                        :
                        <>
                            <h1>
                                Unlimited films, TV programmes and more.
                            </h1>
                            <h2>
                                Watch anywhere. Cancel at any time.
                            </h2>
                            <h3>
                                Ready to watch? Enter your email to create or restart your membership
                            </h3>
                            <h4>
                                ©Hari Prasath
                            </h4>

                            <div className="loginScreen-input">
                                <form >
                                    <input type="email" placeholder='Email Address' />
                                    <button
                                        className='loginScreen-getStarted'
                                        onClick={() => { setSignIn(true) }}>
                                        GET STARTED
                                    </button>
                                </form>
                            </div>
                        </>
                }
            </div>
        </div>
    )
}
