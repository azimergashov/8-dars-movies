
import './movies.scss'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Card } from '../Card'

export const Movies = ( {setId}) =>{

    // fetch('https://api.themoviedb.org/3/movie/550?api_key=9fa67ee8322b567bb8c91a2102d6a80f')
    // .then(res => res.json())
    // .then(data => console.log(data))
    // .catch(er => console.log(er))

    const [popular, setPopular] = useState([])

    useEffect (() =>{
        axios
        .get('https://api.themoviedb.org/3/movie/popular?api_key=9fa67ee8322b567bb8c91a2102d6a80f')
        .then(res => setPopular(res.data.results))
        .catch(er => console.log(er))
    },[] )

    return (
        <>
        <div className='container'>
            <h1>
                Public Movies</h1>
            <div>
                <ul className='movies__list'>
                    {
                        popular.length &&
                        popular.map((e) =>(
                            <Card key={e.id} title={e.title} time={e.release_date} img={e.poster_path} id={e.id} />)
                        )
                    }


                </ul>
            </div>
        </div>
        </>
    )
}