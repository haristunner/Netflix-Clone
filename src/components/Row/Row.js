import axios from '../../helpers/axios';
import React, { useEffect, useState } from 'react'
import "./Row.css"

export const Row = ({ title, fetchUrl, isLarge = false }) => {

    const [movies, setMovies] = useState([]);

    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(fetchUrl);

            setMovies(request.data.results)

            //console.log(request);
            return request;
        }

        fetchData();
    })

    return (
        <div className='Row'>
            <h1 className='Row-title'>{title}</h1>
            <div className="row-posters">
                {
                    movies.map((movie) => (
                        <img
                            key={movie.id}
                            className={`row-poster ${isLarge && "row-poster-large"}`}
                            src={`${base_url}${isLarge ? movie.poster_path : movie.backdrop_path
                                }`}
                            alt={movie.name}
                        />
                    ))
                }
            </div>
        </div>
    )
}
