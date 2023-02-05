import React from 'react'
import "./HomeScreen.css"
import { Nav } from "../../components/Nav/Nav"
import { Banner } from '../../components/Banner/Banner'

export const HomeScreen = () => {
    return (
        <div className='homeScreen'>
            <Nav />
            <Banner />
        </div>
    )
}
