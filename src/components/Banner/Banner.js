import axios from '../../helpers/axios';
import requests from '../../helpers/requests'
import React, { useEffect, useState } from 'react'
import "./Banner.css"

export const Banner = () => {

    const [movie, setMovie] = useState([]);

    useEffect(() => {

        const getData = async () => {
            const request = await axios.get(requests.fetchNetflixOriginals)

            setMovie(
                request.data.results
                [Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )

            //console.log(request)

            return request;
        }

        getData()

    }, [])

    // console.log(movie);

    const truncate = (string, n) => {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string
    }

    return (
        <header className='Banner'
            style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}" )`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
            }}>
            <div className="banner-contents">
                <h1 className='banner-title'>{movie?.name}</h1>
                <div className="banner-buttons">
                    <button className='play-btn'>Play</button>
                    <button className='list-btn'>My List</button>
                </div>
                <div className="banner-description">
                    {truncate(movie?.overview, 150)}
                </div>

            </div>
            <div className="fade-bottom" />
        </header>
    )
}
